"use client"

import React, { useState } from "react"
import { ArrowUpRight, Calendar } from "lucide-react"

import { useTranslation } from "../../hooks/useTranslation";
import { useDrawer } from "../../contexts/DrawerContext";

export function LetsWorkTogether() {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [isButtonHovered, setIsButtonHovered] = useState(false)
  const [isQuoteButtonHovered, setIsQuoteButtonHovered] = useState(false)

  const { t } = useTranslation();
  const { openDrawer } = useDrawer();

  const handleClick = (e) => {
    e.preventDefault()
    setIsClicked(true)

    setTimeout(() => {
      setShowSuccess(true)
    }, 500)
  }

  const handleBookCall = () => {
    window.open("https://cal.com/jatin-yadav05/15min", "_blank")
  }

  const handleGetQuote = () => {
    openDrawer();
  }

  return (
    <section className="flex min-h-screen items-center justify-center px-6">
      <div className="relative flex flex-col items-center gap-12">
        <div
          className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            opacity: showSuccess ? 1 : 0,
            transform: showSuccess ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
            pointerEvents: showSuccess ? "auto" : "none",
          }}
        >
          {/* Elegant heading */}
          <div className="flex flex-col items-center gap-2">
            <span
              className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground transition-all duration-500"
              style={{
                transform: showSuccess ? "translateY(0)" : "translateY(10px)",
                opacity: showSuccess ? 1 : 0,
                transitionDelay: "100ms",
              }}
            >
              {t.letsWork.perfect}
            </span>
            <h3
              className="text-3xl font-light tracking-tight text-foreground transition-all duration-500 sm:text-4xl"
              style={{
                transform: showSuccess ? "translateY(0)" : "translateY(10px)",
                opacity: showSuccess ? 1 : 0,
                transitionDelay: "200ms",
              }}
            >
              {t.letsWork.letsTalk}
            </h3>
          </div>

          {/* Buttons container */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            {/* Book an appointment button */}
            <button
              onClick={handleBookCall}
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
              className="group relative flex items-center gap-3 overflow-hidden rounded-full border px-6 py-3 transition-all duration-500 sm:px-8 sm:py-4 cursor-pointer"
              style={{
                borderColor: isButtonHovered ? "var(--primary-color)" : "var(--border)",
                backgroundColor: isButtonHovered ? "var(--primary-color)" : "transparent",
                boxShadow: isButtonHovered ? "0 0 30px rgba(234, 88, 12, 0.2), 0 10px 40px rgba(234, 88, 12, 0.1)" : "none",
                transform: showSuccess
                  ? isButtonHovered
                    ? "translateY(0) scale(1.02)"
                    : "translateY(0) scale(1)"
                  : "translateY(15px) scale(1)",
                opacity: showSuccess ? 1 : 0,
                transitionDelay: "150ms",
              }}
            >
              <Calendar
                className="size-4 transition-all duration-500 sm:size-5"
                strokeWidth={1.5}
                style={{
                  color: isButtonHovered ? "#ffffff" : "var(--foreground)",
                }}
              />
              <span
                className="text-sm font-medium tracking-wide transition-all duration-500 sm:text-base whitespace-nowrap"
                style={{
                  color: isButtonHovered ? "#ffffff" : "var(--foreground)",
                }}
              >
                {t.letsWork.scheduleInspection}
              </span>
              <ArrowUpRight
                className="size-4 transition-all duration-500 sm:size-5"
                strokeWidth={1.5}
                style={{
                  color: isButtonHovered ? "#ffffff" : "var(--foreground)",
                  transform: isButtonHovered ? "translate(3px, -3px) scale(1.1)" : "translate(0, 0) scale(1)",
                }}
              />
            </button>

            {/* Get a Quote button */}
            <button
              onClick={handleGetQuote}
              onMouseEnter={() => setIsQuoteButtonHovered(true)}
              onMouseLeave={() => setIsQuoteButtonHovered(false)}
              className="group relative flex items-center gap-3 overflow-hidden rounded-full border px-6 py-3 transition-all duration-500 sm:px-8 sm:py-4 cursor-pointer"
              style={{
                borderColor: isQuoteButtonHovered ? "#c2410c" : "var(--primary-color)",
                backgroundColor: isQuoteButtonHovered ? "#c2410c" : "var(--primary-color)",
                boxShadow: isQuoteButtonHovered ? "0 0 30px rgba(234, 88, 12, 0.3), 0 10px 40px rgba(234, 88, 12, 0.1)" : "none",
                transform: showSuccess
                  ? isQuoteButtonHovered
                    ? "translateY(0) scale(1.02)"
                    : "translateY(0) scale(1)"
                  : "translateY(15px) scale(1)",
                opacity: showSuccess ? 1 : 0,
                transitionDelay: "200ms",
              }}
            >
              <span
                className="text-sm font-medium tracking-wide transition-all duration-500 sm:text-base whitespace-nowrap"
                style={{
                  color: "#ffffff",
                }}
              >
                {t.letsWork.getQuote}
              </span>
              <ArrowUpRight
                className="size-4 transition-all duration-500 sm:size-5"
                strokeWidth={1.5}
                style={{
                  color: "#ffffff",
                  transform: isQuoteButtonHovered ? "translate(3px, -3px) scale(1.1)" : "translate(0, 0) scale(1)",
                }}
              />
            </button>
          </div>
        </div>

        <div
          className="flex items-center gap-3 transition-all duration-500"
          style={{
            opacity: isClicked ? 0 : 1,
            transform: isClicked ? "translateY(-20px)" : "translateY(0)",
            pointerEvents: isClicked ? "none" : "auto",
          }}
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-orange-500" />
          </span>
          <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground whitespace-nowrap">
            {t.letsWork.getFreeInspection}
          </span>
        </div>

        <div
          className="group relative cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleClick}
          style={{
            pointerEvents: isClicked ? "none" : "auto",
          }}
        >
          <div className="flex flex-col items-center gap-6">
            <h2
              className="relative text-center text-5xl font-light tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex gap-4"
              style={{
                opacity: isClicked ? 0 : 1,
                transform: isClicked ? "translateY(-40px) scale(0.95)" : "translateY(0) scale(1)",
              }}
            >
              <span className="block">
                <span
                  className="block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    transform: isHovered && !isClicked ? "translateY(-8%)" : "translateY(0)",
                  }}
                >
                  {t.letsWork.scheduleAn}
                </span>
              </span>
              <span className="block">
                <span
                  className="block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-75"
                  style={{
                    transform: isHovered && !isClicked ? "translateY(-8%)" : "translateY(0)",
                  }}
                >
                  <span className="text-[var(--primary-color)]">{t.letsWork.inspection}</span>
                </span>
              </span>
            </h2>

            <div className="relative mt-4 flex size-16 items-center justify-center sm:size-20">
              <div
                className="pointer-events-none absolute inset-0 rounded-full border transition-all ease-out"
                style={{
                  borderColor: isClicked ? "var(--foreground)" : isHovered ? "var(--foreground)" : "var(--border)",
                  backgroundColor: isClicked ? "transparent" : isHovered ? "var(--foreground)" : "transparent",
                  transform: isClicked ? "scale(3)" : isHovered ? "scale(1.1)" : "scale(1)",
                  opacity: isClicked ? 0 : 1,
                  transitionDuration: isClicked ? "700ms" : "500ms",
                }}
              />
              <ArrowUpRight
                className="size-6 transition-all ease-[cubic-bezier(0.16,1,0.3,1)] sm:size-7"
                style={{
                  transform: isClicked
                    ? "translate(100px, -100px) scale(0.5)"
                    : isHovered
                      ? "translate(2px, -2px)"
                      : "translate(0, 0)",
                  opacity: isClicked ? 0 : 1,
                  color: isHovered && !isClicked ? "var(--background)" : "var(--foreground)",
                  transitionDuration: isClicked ? "600ms" : "500ms",
                }}
              />
            </div>
          </div>

          <div className="absolute -left-8 top-1/2 -translate-y-1/2 sm:-left-16">
            <div
              className="h-px w-8 transition-all duration-500 sm:w-12"
              style={{
                backgroundColor: isHovered ? "var(--primary-color)" : "hsl(var(--border))",
                transform: isClicked ? "scaleX(0) translateX(-20px)" : isHovered ? "scaleX(1.5)" : "scaleX(1)",
                opacity: isClicked ? 0 : isHovered ? 1 : 0.5,
              }}
            />
          </div>
          <div className="absolute -right-8 top-1/2 -translate-y-1/2 sm:-right-16">
            <div
              className="h-px w-8 transition-all duration-500 sm:w-12"
              style={{
                backgroundColor: isHovered ? "var(--primary-color)" : "hsl(var(--border))",
                transform: isClicked ? "scaleX(0) translateX(20px)" : isHovered ? "scaleX(1.5)" : "scaleX(1)",
                opacity: isClicked ? 0 : isHovered ? 1 : 0.5,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
