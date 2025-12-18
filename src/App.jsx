import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import NavBar from './components/NavBar'
import TopBanner from './components/TopBanner'
import Hero from './components/Hero'
import Services from './components/Services'
import MapEmbed from './components/MapEmbed'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import SEO from './components/SEO'
import { LetsWorkTogether } from '@/components/ui/lets-work-section'
import GeneralDentistry from './pages/GeneralDentistry'
import CosmeticWhitening from './pages/CosmeticWhitening'
import SpecializedCare from './pages/SpecializedCare'
import Blog from './pages/Blog'
import OurPractice from './pages/OurPractice'
import Reviews from './pages/Reviews'
import Contact from './pages/Contact'
import Location from './pages/Location'
import RoutineCleaningsExams from './pages/services/RoutineCleaningsExams'
import FillingsRestorations from './pages/services/FillingsRestorations'
import RootCanalTherapy from './pages/services/RootCanalTherapy'
import GumDiseaseTreatment from './pages/services/GumDiseaseTreatment'
import TeethWhitening from './pages/services/TeethWhitening'
import DentalVeneers from './pages/services/DentalVeneers'
import DentalBonding from './pages/services/DentalBonding'
import SmileMakeover from './pages/services/SmileMakeover'
import DentalImplants from './pages/services/DentalImplants'
import EmergencyCare from './pages/services/EmergencyCare'
import Orthodontics from './pages/services/Orthodontics'
import PeriodontalTreatment from './pages/services/PeriodontalTreatment'
import { useLenis } from './hooks/useLenis'
import { scrollToTop } from './hooks/useLenis'
import { config } from './config'

function HomePage() {
  // Add smooth-scroll class to body for CSS support
  useEffect(() => {
    document.body.classList.add('smooth-scroll')
    return () => {
      document.body.classList.remove('smooth-scroll')
    }
  }, [])

  return (
    <>
      <Hero />
      <Services />
      <MapEmbed />
      <Testimonials />
      <FAQ />
      <LetsWorkTogether />
    </>
  )
}

function App() {
  const location = useLocation()

  useEffect(() => {
    // Set CSS custom properties from config
    if (config.PRIMARY_COLOR && !config.PRIMARY_COLOR.startsWith('{{')) {
      document.documentElement.style.setProperty('--primary-color', config.PRIMARY_COLOR)
    }
    if (config.ACCENT_COLOR && !config.ACCENT_COLOR.startsWith('{{')) {
      document.documentElement.style.setProperty('--accent-color', config.ACCENT_COLOR)
    }
  }, [])

  // Resize Retell AI widget to make it smaller
  useEffect(() => {
    const resizeRetellWidget = () => {
      // Find the widget container
      const widgetContainer = document.getElementById('retell-widget-container') || 
                              document.querySelector('[data-retell-widget]')
      
      if (widgetContainer) {
        // Find iframe inside widget
        const iframe = widgetContainer.querySelector('iframe[src*="retellai.com"]') ||
                       widgetContainer.querySelector('iframe')
        
        if (iframe) {
          // Make the iframe MUCH smaller with shorter height
          iframe.style.width = '120px'
          iframe.style.height = '100px'
          iframe.style.maxWidth = '120px'
          iframe.style.maxHeight = '100px'
          iframe.style.minWidth = '120px'
          iframe.style.minHeight = '100px'
        }
        
        // Also resize the container itself
        widgetContainer.style.maxWidth = '120px'
        widgetContainer.style.width = '120px'
        widgetContainer.style.maxHeight = '100px'
        widgetContainer.style.height = '100px'
        
        // Apply aggressive scale transform to make everything much smaller
        widgetContainer.style.transform = 'scale(0.5)'
        widgetContainer.style.transformOrigin = 'bottom right'
        
        // Find and resize any direct children
        Array.from(widgetContainer.children).forEach(child => {
          if (child.tagName === 'IFRAME') {
            child.style.width = '120px'
            child.style.height = '100px'
            child.style.maxWidth = '120px'
            child.style.maxHeight = '100px'
            child.style.minWidth = '120px'
            child.style.minHeight = '100px'
          }
        })
      }
    }

    // Try to resize immediately
    resizeRetellWidget()

    // Use MutationObserver to watch for widget creation and when chat opens
    const observer = new MutationObserver(() => {
      resizeRetellWidget()
    })

    // Observe the entire document for changes
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'class']
    })

    // Continuous interval to resize (keeps checking as widget might open/close)
    const interval = setInterval(() => {
      resizeRetellWidget()
    }, 100) // Check every 100ms to catch when chat opens

    // Also listen for clicks on the widget button to resize immediately
    document.addEventListener('click', (e) => {
      const target = e.target
      if (target.closest('#retell-widget-container') || 
          target.closest('[data-retell-widget]') ||
          target.closest('button[data-retell-widget]')) {
        // Wait a bit for the iframe to appear, then resize
        setTimeout(() => {
          resizeRetellWidget()
        }, 50)
        setTimeout(() => {
          resizeRetellWidget()
        }, 200)
        setTimeout(() => {
          resizeRetellWidget()
        }, 500)
      }
    })

    return () => {
      observer.disconnect()
      clearInterval(interval)
    }
  }, [])

  // Initialize Lenis smooth scrolling for all pages
  useLenis()

  // Scroll to top on route change
  useEffect(() => {
    // Small delay to ensure page has rendered
    const timer = setTimeout(() => {
      scrollToTop(true) // Instant scroll on route change
      // Backup: Also use native scrollTo for immediate effect
      window.scrollTo(0, 0)
    }, 0)

    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <>
      <SEO />
      <TopBanner />
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/general-dentistry" element={<GeneralDentistry />} />
          <Route path="/cosmetic-whitening" element={<CosmeticWhitening />} />
          <Route path="/specialized-care" element={<SpecializedCare />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/our-practice" element={<OurPractice />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/locations/:slug" element={<Location />} />
          {/* General Dentistry Services */}
          <Route path="/general-dentistry/routine-cleanings-exams" element={<RoutineCleaningsExams />} />
          <Route path="/general-dentistry/fillings-restorations" element={<FillingsRestorations />} />
          <Route path="/general-dentistry/root-canal-therapy" element={<RootCanalTherapy />} />
          <Route path="/general-dentistry/gum-disease-treatment" element={<GumDiseaseTreatment />} />
          {/* Cosmetic & Whitening Services */}
          <Route path="/cosmetic-whitening/teeth-whitening" element={<TeethWhitening />} />
          <Route path="/cosmetic-whitening/dental-veneers" element={<DentalVeneers />} />
          <Route path="/cosmetic-whitening/dental-bonding" element={<DentalBonding />} />
          <Route path="/cosmetic-whitening/smile-makeover" element={<SmileMakeover />} />
          {/* Specialized Care Services */}
          <Route path="/specialized-care/dental-implants" element={<DentalImplants />} />
          <Route path="/specialized-care/emergency-care" element={<EmergencyCare />} />
          <Route path="/specialized-care/orthodontics" element={<Orthodontics />} />
          <Route path="/specialized-care/periodontal-treatment" element={<PeriodontalTreatment />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
