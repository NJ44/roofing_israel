"use client"

import React, { useCallback, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export function RainComponent() {
    return (
        <div className="h-[650px] w-full">
            <RainBackground
                intensity={500}
                speed={0.5}
                angle={10}
                color={"rgba(174, 194, 224, 0.6)"}
                dropSize={{ min: 1, max: 2 }}
                lightningEnabled={true}
                lightningFrequency={8}
                thunderEnabled={true}
                thunderVolume={1}
                thunderDelay={2}
                className="bg-background relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-xl border bg-gradient-to-b from-zinc-950 via-zinc-800 to-zinc-950"
            >
                <div className="p-6">
                    <p className="z-10 text-white text-center text-3xl font-semibold tracking-tighter whitespace-pre-wrap md:text-7xl">
                        Reliable Protection <br /> Against the Storm
                    </p>
                </div>
            </RainBackground>
        </div>
    )
}

function RainBackground({
    intensity = 100,
    speed = 1,
    color = "rgba(174, 194, 224, 0.6)",
    angle = 0,
    dropSize = { min: 1, max: 3 },
    lightningEnabled = false,
    lightningFrequency = 8,
    thunderEnabled = false,
    thunderVolume = 0.5,
    thunderDelay = 2,
    className,
    children,
}) {
    const [raindrops, setRaindrops] = useState([])
    const [lightning, setLightning] = useState(null)
    const [, setIsFlashing] = useState(false)
    const thunderAudioRef = useRef(null)
    const lightningTimeoutRef = useRef(null)

    // Initialize thunder audio
    useEffect(() => {
        if (thunderEnabled && typeof window !== "undefined") {
            thunderAudioRef.current = new Audio()
            thunderAudioRef.current.volume = thunderVolume
            // Using a data URL for a simple thunder sound simulation
            thunderAudioRef.current.src =
                "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT"
        }
    }, [thunderEnabled, thunderVolume])

    // Generate raindrops
    useEffect(() => {
        const drops = []

        for (let i = 0; i < intensity; i++) {
            drops.push({
                id: i,
                left: Math.random() * 100,
                animationDuration: (Math.random() * 1 + 0.5) / speed,
                opacity: Math.random() * 0.6 + 0.2,
                size: Math.random() * (dropSize.max - dropSize.min) + dropSize.min,
                delay: Math.random() * 2,
            })
        }

        setRaindrops(drops)
    }, [intensity, speed, dropSize])

    // Lightning effect
    const triggerLightning = useCallback(() => {
        if (!lightningEnabled) return

        const lightningTypes = ["flash", "flash", "bolt"] // More flashes than bolts
        const type = lightningTypes[Math.floor(Math.random() * lightningTypes.length)]
        const intensity = Math.random() * 0.8 + 0.2 // 0.2 to 1.0
        const duration = type === "flash" ? 150 + Math.random() * 100 : 300 + Math.random() * 200

        const newLightning = {
            id: Date.now(),
            type,
            intensity,
            duration,
        }

        setLightning(newLightning)
        setIsFlashing(true)

        // End lightning effect
        setTimeout(() => {
            setIsFlashing(false)
            setLightning(null)
        }, duration)

        // Play thunder after delay
        if (thunderEnabled && thunderAudioRef.current) {
            setTimeout(() => {
                if (thunderAudioRef.current) {
                    thunderAudioRef.current.currentTime = 0
                    thunderAudioRef.current.play().catch(() => {
                        // Handle autoplay restrictions
                        console.log("Thunder audio blocked by browser autoplay policy")
                    })
                }
            }, thunderDelay * 1000)
        }

        // Schedule next lightning
        const nextLightning = (lightningFrequency + Math.random() * lightningFrequency) * 1000
        lightningTimeoutRef.current = setTimeout(triggerLightning, nextLightning)
    }, [lightningEnabled, lightningFrequency, thunderEnabled, thunderDelay])

    // Start lightning cycle
    useEffect(() => {
        if (lightningEnabled) {
            const initialDelay = Math.random() * lightningFrequency * 1000
            lightningTimeoutRef.current = setTimeout(triggerLightning, initialDelay)
        }

        return () => {
            if (lightningTimeoutRef.current) {
                clearTimeout(lightningTimeoutRef.current)
            }
        }
    }, [lightningEnabled, triggerLightning])

    // Generate lightning bolt path
    const generateBoltPath = () => {
        const startX = Math.random() * 100
        const segments = 8 + Math.random() * 4
        let path = `M ${startX} 0`
        let currentX = startX
        let currentY = 0

        for (let i = 1; i <= segments; i++) {
            const segmentHeight = 100 / segments
            currentY = i * segmentHeight
            currentX += (Math.random() - 0.5) * 20 // Random horizontal deviation
            currentX = Math.max(0, Math.min(100, currentX)) // Keep within bounds
            path += ` L ${currentX} ${currentY}`
        }

        return path
    }

    return (
        <div className={cn("relative overflow-hidden", className)}>
            {/* Lightning Effects */}
            {lightning && (
                <>
                    {/* Screen Flash */}
                    {lightning.type === "flash" && (
                        <div
                            className="animate-lightning-flash pointer-events-none absolute inset-0 z-20"
                            style={{
                                background: `radial-gradient(circle, rgba(255, 255, 255, ${lightning.intensity}) 0%, rgba(135, 206, 235, ${lightning.intensity * 0.3}) 50%, transparent 100%)`,
                                animationDuration: `${lightning.duration}ms`,
                            }}
                        />
                    )}

                    {/* Lightning Bolt */}
                    {lightning.type === "bolt" && (
                        <div className="pointer-events-none absolute inset-0 z-20">
                            <svg
                                className="animate-lightning-bolt h-full w-full"
                                style={{ animationDuration: `${lightning.duration}ms` }}
                            >
                                <defs>
                                    <filter id="glow">
                                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                                        <feMerge>
                                            <feMergeNode in="coloredBlur" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                </defs>
                                <path
                                    d={generateBoltPath()}
                                    stroke={`rgba(255, 255, 255, ${lightning.intensity})`}
                                    strokeWidth="2"
                                    fill="none"
                                    filter="url(#glow)"
                                />
                                <path
                                    d={generateBoltPath()}
                                    stroke={`rgba(135, 206, 235, ${lightning.intensity * 0.8})`}
                                    strokeWidth="1"
                                    fill="none"
                                />
                            </svg>
                        </div>
                    )}
                </>
            )}

            {/* Rain container */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    transform: `rotate(${angle}deg)`,
                    transformOrigin: "center center",
                }}
            >
                {raindrops.map((drop) => (
                    <div
                        key={drop.id}
                        className="animate-rain-fall absolute"
                        style={{
                            left: `${drop.left}%`,
                            width: `${drop.size}px`,
                            height: `${drop.size * 10}px`,
                            background: `linear-gradient(to bottom, transparent, ${color})`,
                            borderRadius: `${drop.size}px`,
                            animationDuration: `${drop.animationDuration}s`,
                            animationDelay: `${drop.delay}s`,
                            opacity: drop.opacity,
                            top: "-20px",
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10">{children}</div>
        </div>
    )
}
