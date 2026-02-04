import { useEffect } from 'react'
import Lenis from 'lenis'

// Global Lenis instance to access from anywhere
let lenisInstance = null

export function useLenis() {
  useEffect(() => {
    // Initialize Lenis with smooth scroll settings
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lerp: 0.15,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.2,
      infinite: false,
    })

    // Store instance globally
    lenisInstance = lenis

    // Animation loop using requestAnimationFrame
    let rafId
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      lenisInstance = null
    }
  }, [])
}

// Helper function to scroll to element using Lenis
export function scrollToElement(selector, options = {}) {
  if (lenisInstance) {
    const element = typeof selector === 'string'
      ? document.querySelector(selector)
      : selector

    if (element) {
      lenisInstance.scrollTo(element, {
        duration: options.duration || 1.5,
        offset: options.offset || 0,
        ...options
      })
    }
  } else {
    // Fallback to native scrollIntoView if Lenis not initialized
    const element = typeof selector === 'string'
      ? document.querySelector(selector)
      : selector

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: options.block || 'start'
      })
    }
  }
}

// Helper function to scroll to top using Lenis
export function scrollToTop(immediate = true) {
  if (lenisInstance) {
    if (immediate) {
      // Instant scroll to top for route changes
      lenisInstance.scrollTo(0, { immediate: true })
    } else {
      // Smooth scroll to top
      lenisInstance.scrollTo(0, {
        duration: 1.5,
        immediate: false
      })
    }
  } else {
    // Fallback to native scroll if Lenis not initialized
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: immediate ? 'auto' : 'smooth'
    })
  }
}

