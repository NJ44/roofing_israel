import React, { useState, useEffect, useRef } from 'react'
import { Mic, Phone, X, PhoneOff } from 'lucide-react'
import { RetellWebClient } from 'retell-client-js-sdk'

const VoiceWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isCalling, setIsCalling] = useState(false)
  const [retellClient, setRetellClient] = useState(null)
  const [callDuration, setCallDuration] = useState(0)
  const timerIntervalRef = useRef(null)

  const toggleWidget = () => {
    setIsOpen(!isOpen)
  }

  // Format timer as MM:SS
  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const handleCall = async () => {
    if (isCalling) {
      // End the call
      try {
        if (retellClient && typeof retellClient.stopCall === 'function') {
          console.log('Stopping call...')
          await retellClient.stopCall()
          console.log('Call stopped successfully')
        }
      } catch (error) {
        console.error('Error stopping call:', error)
      } finally {
        // Clear timer
        if (timerIntervalRef.current) {
          clearInterval(timerIntervalRef.current)
          timerIntervalRef.current = null
        }
        setCallDuration(0)
        // Always cleanup state even if stopCall fails
        setRetellClient(null)
        setIsCalling(false)
      }
      return
    }

    try {
      setIsCalling(true)

      // Step 1: Create web call via n8n webhook
      console.log('Calling n8n webhook...')
      const response = await fetch('https://n8n.srv974118.hstgr.cloud/webhook/99a0bbad-e938-41ab-bbca-cf28c1d8c6a9', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      })

      console.log('Response status:', response.status)
      console.log('Response ok:', response.ok)

      if (!response.ok) {
        const errorText = await response.text()
        console.error('Response error:', errorText)
        throw new Error(`Failed to create web call: ${response.status} ${errorText}`)
      }

      const data = await response.json()
      console.log('Response data:', data)

      // Handle different possible response formats
      let call_id, access_token

      // Check if data is an array (n8n sometimes returns arrays)
      if (Array.isArray(data) && data.length > 0) {
        call_id = data[0].call_id || data[0].callId
        access_token = data[0].access_token || data[0].accessToken
      } else if (data.body && typeof data.body === 'object') {
        // If data is wrapped in a body property
        call_id = data.body.call_id || data.body.callId
        access_token = data.body.access_token || data.body.accessToken
      } else {
        // Direct properties
        call_id = data.call_id || data.callId
        access_token = data.access_token || data.accessToken
      }

      console.log('Extracted call_id:', call_id)
      console.log('Extracted access_token:', access_token ? 'present' : 'missing')

      if (!call_id || !access_token) {
        console.error('Missing required fields. Full response:', JSON.stringify(data, null, 2))
        throw new Error('Invalid response from server: missing call_id or access_token')
      }

      // Step 2: Initialize Retell client
      console.log('Initializing Retell client...')
      const client = new RetellWebClient()

      console.log('Client methods:', Object.getOwnPropertyNames(Object.getPrototypeOf(client)))

      await client.startCall({
        accessToken: access_token,
        callId: call_id,
        sampleRate: 24000,
        enableUpdate: false,
      })

      console.log('Retell client started successfully')
      setRetellClient(client)

      // Start timer
      setCallDuration(0)
      timerIntervalRef.current = setInterval(() => {
        setCallDuration((prev) => prev + 1)
      }, 1000)

      // Handle call events
      client.on('conversationStarted', () => {
        console.log('Conversation started')
      })

      client.on('conversationEnded', ({ code, reason }) => {
        console.log('Conversation ended', code, reason)
        // Clear timer
        if (timerIntervalRef.current) {
          clearInterval(timerIntervalRef.current)
          timerIntervalRef.current = null
        }
        setCallDuration(0)
        setIsCalling(false)
        setRetellClient(null)
      })

      client.on('error', (error) => {
        console.error('Call error:', error)
        // Clear timer
        if (timerIntervalRef.current) {
          clearInterval(timerIntervalRef.current)
          timerIntervalRef.current = null
        }
        setCallDuration(0)
        setIsCalling(false)
        setRetellClient(null)
      })
    } catch (error) {
      console.error('Error starting call:', error)
      console.error('Error details:', {
        message: error.message,
        stack: error.stack,
      })
      setIsCalling(false)
      setRetellClient(null)
      alert(`Failed to start call: ${error.message}. Check console for details.`)
    }
  }

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      // Clear timer on unmount
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current)
        timerIntervalRef.current = null
      }
      if (retellClient) {
        try {
          retellClient.stopCall().catch((error) => {
            console.error('Error in cleanup stopCall:', error)
          })
        } catch (error) {
          console.error('Error in cleanup:', error)
        }
      }
    }
  }, [retellClient])

  return (
    <>
      {/* Voice Widget Button */}
      <button
        onClick={toggleWidget}
        className={`fixed bottom-8 right-8 z-[100] flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white shadow-2xl transition-all duration-500 ease-out hover:shadow-gray-500/50 hover:scale-110 active:scale-95 ${isOpen ? 'rotate-90 opacity-0 pointer-events-none' : 'rotate-0 opacity-100'
          }`}
        aria-label="Open voice widget"
        style={{ position: 'fixed', bottom: '2rem', right: '2rem' }}
      >
        <Phone className="w-7 h-7" strokeWidth={2} />
      </button>

      {/* Voice Widget Panel */}
      <div
        className={`fixed bottom-8 right-8 z-[100] transition-all duration-500 ease-out ${isOpen
          ? 'opacity-100 scale-100 translate-y-0'
          : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
          }`}
        style={{ position: 'fixed', bottom: '2rem', right: '2rem' }}
      >
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden min-w-[320px]">
          {/* Header */}
          <div className="bg-primary px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-white font-semibold text-base">Roofing Assistant</h3>
                <p className="text-white/80 text-xs">
                  {isCalling ? 'Call in progress' : 'Tap to speak'}
                </p>
              </div>
            </div>
            <button
              onClick={toggleWidget}
              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              aria-label="Close voice widget"
            >
              <X className="w-4 h-4 text-white" strokeWidth={2.5} />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex flex-col items-center gap-4">
              {/* Roofing Assistant Image */}
              <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center shadow-lg border-4 border-primary/10">
                <img
                  src="/roofing_assistant.png"
                  alt="Roofing Assistant"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Status Text */}
              <div className="text-center">
                <p className="text-gray-700 font-medium text-sm">
                  {isCalling ? formatDuration(callDuration) : 'Speak with our AI Roofing Expert'}
                </p>
              </div>

              {/* Call Button */}
              <button
                onClick={handleCall}
                disabled={isCalling && !retellClient}
                className={`w-full py-3 px-4 rounded-lg font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 ${isCalling
                  ? 'bg-red-500 hover:bg-red-600 text-white'
                  : 'bg-primary hover:bg-orange-700 text-white'
                  }`}
              >
                {isCalling ? (
                  <>
                    <PhoneOff className="w-4 h-4" strokeWidth={2.5} />
                    End Call
                  </>
                ) : (
                  <>
                    <Mic className="w-4 h-4" strokeWidth={2.5} />
                    Start Conversation
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop (when open) - Higher z-index to cover navbar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[55] transition-opacity duration-500"
          onClick={toggleWidget}
          aria-hidden="true"
        />
      )}
    </>
  )
}

export default VoiceWidget
