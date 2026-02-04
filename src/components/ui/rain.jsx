"use client"

import React, { useCallback, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export function RainComponent() {
    return (
        <div className="h-[650px] w-full">
            <RainBackground
                intensity={200}
                speed={1.5}
                angle={10}
                color={"rgba(174, 194, 224, 0.6)"}
                dropSize={{ min: 1, max: 2 }}
                lightningEnabled={true}
                lightningFrequency={8}
                thunderEnabled={true}
                thunderVolume={1}
                thunderDelay={2}
                className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-xl border"
            >
                <div className="p-6">
                    <p className="z-10 text-gray-900 text-center text-3xl font-semibold tracking-tighter whitespace-pre-wrap md:text-7xl shadow-sm">
                        Reliable Protection <br /> Against the Storm
                    </p>
                </div>
            </RainBackground>
        </div>
    )
}

export function RainBackground({
    intensity = 100,
    speed = 1,
    color = "rgba(174, 194, 224, 0.6)",
    angle = 10,
    dropSize = { min: 1, max: 3 },
    lightningEnabled = false,
    lightningFrequency = 8,
    thunderEnabled = false,
    thunderVolume = 0.5,
    thunderDelay = 2,
    className,
    contentClassName,
    children,
}) {
    const canvasRef = useRef(null)
    const containerRef = useRef(null)
    const [lightning, setLightning] = useState(null)
    const thunderAudioRef = useRef(null)
    const lightningTimeoutRef = useRef(null)
    const animationFrameRef = useRef(null)

    // Canvas state
    const raindropsRef = useRef([])

    // Initialize thunder audio
    useEffect(() => {
        let audio = null
        if (thunderEnabled && typeof window !== "undefined") {
            audio = new Audio()
            audio.volume = thunderVolume
            audio.src = "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT"
            thunderAudioRef.current = audio
        }
        return () => {
            if (audio) {
                audio.pause()
                audio.src = ""
            }
            thunderAudioRef.current = null
        }
    }, [thunderEnabled, thunderVolume])

    const triggerLightning = useCallback(() => {
        if (!lightningEnabled) return

        const lightningTypes = ["flash", "bolt"]
        const type = lightningTypes[Math.floor(Math.random() * lightningTypes.length)]
        const localIntensity = Math.random() * 0.8 + 0.2
        const duration = type === "flash" ? 150 + Math.random() * 100 : 300 + Math.random() * 200

        setLightning({ type, intensity: localIntensity, duration })

        setTimeout(() => {
            setLightning(null)
        }, duration)

        if (thunderEnabled && thunderAudioRef.current) {
            setTimeout(() => {
                if (thunderAudioRef.current) {
                    thunderAudioRef.current.currentTime = 0
                    thunderAudioRef.current.play().catch(() => { })
                }
            }, thunderDelay * 1000)
        }

        const nextLightning = (lightningFrequency + Math.random() * lightningFrequency) * 1000
        lightningTimeoutRef.current = setTimeout(triggerLightning, nextLightning)
    }, [lightningEnabled, lightningFrequency, thunderEnabled, thunderDelay])

    useEffect(() => {
        if (lightningEnabled) {
            const initialDelay = Math.random() * lightningFrequency * 1000
            lightningTimeoutRef.current = setTimeout(triggerLightning, initialDelay)
        }
        return () => {
            if (lightningTimeoutRef.current) clearTimeout(lightningTimeoutRef.current)
        }
    }, [lightningEnabled, triggerLightning])

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d")

        const handleResize = () => {
            if (containerRef.current) {
                const { width, height } = containerRef.current.getBoundingClientRect()
                canvas.width = width
                canvas.height = height
                initRain(width, height)
            }
        }

        const initRain = (width, height) => {
            const drops = []
            for (let i = 0; i < intensity; i++) {
                drops.push({
                    x: Math.random() * width * 1.5 - (width * 0.25), // Extra width for angled rain
                    y: Math.random() * height,
                    length: Math.random() * (dropSize.max - dropSize.min) + dropSize.min * 10,
                    width: Math.random() * (dropSize.max - dropSize.min) + dropSize.min,
                    speed: (Math.random() * 15 + 10) * speed,
                    opacity: Math.random() * 0.4 + 0.1
                })
            }
            raindropsRef.current = drops
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.strokeStyle = color
            ctx.lineCap = "round"

            const radianAngle = (angle * Math.PI) / 180
            const cos = Math.cos(radianAngle)
            const sin = Math.sin(radianAngle)

            raindropsRef.current.forEach(drop => {
                ctx.beginPath()
                ctx.globalAlpha = drop.opacity
                ctx.lineWidth = drop.width
                ctx.moveTo(drop.x, drop.y)
                ctx.lineTo(drop.x + drop.length * sin, drop.y + drop.length * cos)
                ctx.stroke()

                drop.y += drop.speed * cos
                drop.x += drop.speed * sin

                if (drop.y > canvas.height) {
                    drop.y = -drop.length
                    drop.x = Math.random() * canvas.width * 1.5 - (canvas.width * 0.25)
                }
            })

            animationFrameRef.current = requestAnimationFrame(animate)
        }

        window.addEventListener("resize", handleResize)
        handleResize()
        animate()

        return () => {
            window.removeEventListener("resize", handleResize)
            if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
        }
    }, [intensity, speed, color, angle, dropSize])

    return (
        <div ref={containerRef} className={cn("relative overflow-hidden", className)}>
            <canvas
                ref={canvasRef}
                className="absolute inset-0 pointer-events-none z-0"
            />

            {/* Lightning Flash Overlay */}
            {lightning && lightning.type === "flash" && (
                <div
                    className="pointer-events-none absolute inset-0 z-20"
                    style={{
                        backgroundColor: `rgba(255, 255, 255, ${lightning.intensity * 0.4})`,
                        transition: `opacity ${lightning.duration}ms ease-out`
                    }}
                />
            )}

            {/* Lightning Bolt SVG Overlay */}
            {lightning && lightning.type === "bolt" && (
                <div className="pointer-events-none absolute inset-0 z-20">
                    <svg className="h-full w-full opacity-70">
                        <path
                            d={generateBoltPath()}
                            stroke="white"
                            strokeWidth="2"
                            fill="none"
                            className="animate-pulse"
                        />
                    </svg>
                </div>
            )}

            <div className={cn("relative z-10", contentClassName)}>{children}</div>
        </div>
    )
}

function generateBoltPath() {
    if (typeof window === "undefined") return ""
    const startX = Math.random() * 100
    const segments = 10
    let path = `M ${startX}% 0%`
    let currentX = startX
    for (let i = 1; i <= segments; i++) {
        currentX += (Math.random() - 0.5) * 15
        path += ` L ${currentX}% ${i * (100 / segments)}%`
    }
    return path
}
