import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import FeatureDemo from './pages/FeatureDemo'
import NavBar from './components/NavBar'
import TopBanner from './components/TopBanner'
import Hero from './components/Hero'
import Services from './components/Services'
import MapEmbed from './components/MapEmbed'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import SEO from './components/SEO'
import VoiceWidget from './components/VoiceWidget'
import { LetsWorkTogether } from '@/components/ui/lets-work-section'
import TeamSection from '@/components/ui/team-section'
import Blog from './pages/Blog'
import Reviews from './pages/Reviews'
import Contact from './pages/Contact'
import Location from './pages/Location'
import Service from './pages/Service'
import BlogPost from './pages/BlogPost'
import ReviewForm from './pages/ReviewForm'
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
      <TeamSection />
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
          <Route path="/feature-demo" element={<FeatureDemo />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/locations/:slug" element={<Location />} />
          <Route path="/services/:slug" element={<Service />} />
          <Route path="/leave-review" element={<ReviewForm />} />
        </Routes>
      </main>
      <Footer />
      <VoiceWidget />
    </>
  )
}

export default App
