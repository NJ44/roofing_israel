import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { config } from '../config'
import { scrollToElement } from '../hooks/useLenis'

import { useTranslation } from '../hooks/useTranslation'

const Contact = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'sealing',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('https://n8n.srv974118.hstgr.cloud/webhook/5711621b-2604-427b-8210-f71537a85dc3', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          serviceType: 'sealing',
          message: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const mapSrc = config.GOOGLE_MAP_EMBED_SRC && !config.GOOGLE_MAP_EMBED_SRC.startsWith('{{')
    ? config.GOOGLE_MAP_EMBED_SRC
    : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184132576894!2d-73.98811768459398!3d40.75889597932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzMyLjAiTiA3M8KwNTknMTQuMiJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus'

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${config.ADDRESS_LINE}, ${config.CITY}`
  )}`

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
            {t.nav.contact}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            צור קשר איתנו. אנחנו כאן לכל דרישות הקירוי שלך.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">{t.form.getFreeQuote}</h2>

              {submitStatus === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t.form.successTitle}</h3>
                  <p className="text-gray-600">{t.form.successMessage}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1">
                      {t.form.fullName}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="ישראל ישראלי"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">
                      {t.form.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="israel@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-gray-700 mb-1">
                      {t.form.phone}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-right"
                      placeholder="050-1234567"
                    />
                  </div>

                  <div>
                    <label htmlFor="serviceType" className="block text-xs font-medium text-gray-700 mb-1">
                      {t.form.subject}
                    </label>
                    <div className="relative">
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-white"
                      >
                        <option value="sealing">{t.form.serviceTypes.sealing}</option>
                        <option value="roofEdge">{t.form.serviceTypes.roofEdge}</option>
                        <option value="tileRepair">{t.form.serviceTypes.tileRepair}</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    />
                  </div>

                  {submitStatus === 'error' && (
                    <div className="text-red-600 text-xs">
                      {t.form.error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white py-3 rounded-lg font-semibold text-sm hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? t.form.submitting : t.form.submit}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Information & Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Contact Info */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{t.footer.contactUs}</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{t.footer.items.location}</h3>
                    <p className="text-gray-600">
                      {config.ADDRESS_LINE && !config.ADDRESS_LINE.startsWith('{{') ? config.ADDRESS_LINE : '123 Main Street'}<br />
                      {config.CITY}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{t.form.phone}</h3>
                    <a href={`tel:${config.PHONE}`} className="text-primary hover:underline">
                      {config.PHONE}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{t.form.email}</h3>
                    {config.EMAIL && !config.EMAIL.startsWith('{{') ? (
                      <a href={`mailto:${config.EMAIL}`} className="text-primary hover:underline">
                        {config.EMAIL}
                      </a>
                    ) : (
                      <p className="text-gray-600">info@apexroofing.com</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative w-full h-96">
                <iframe
                  src={mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Location of ${config.BUSINESS_NAME} in ${config.CITY}`}
                  aria-label={`Interactive map showing the location of ${config.BUSINESS_NAME}`}
                />
              </div>
              <div className="p-6 text-center">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:underline font-medium"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  פתח בגוגל מפות
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact

