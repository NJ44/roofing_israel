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
import About from './pages/About'
import { useLenis } from './hooks/useLenis'
import { scrollToTop } from './hooks/useLenis'
import { config } from './config'
import { useDrawer } from './contexts/DrawerContext'
import InspectionDrawer from './components/InspectionDrawer'

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Testimonials />
      <TeamSection />
      <FAQ />
      <LetsWorkTogether />
    </>
  )
}

function App() {
  const location = useLocation()
  const { isDrawerOpen, closeDrawer } = useDrawer()

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
    scrollToTop(true)
  }, [location.pathname])

  return (
    <>
      <SEO />
      <TopBanner />
      <NavBar />
      <main>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/feature-demo" element={<FeatureDemo />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/locations/:slug" element={<Location />} />
          <Route path="/services/:slug" element={<Service />} />
          <Route path="/leave-review" element={<ReviewForm />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
      <VoiceWidget />
      <InspectionDrawer
        isOpen={isDrawerOpen}
        onClose={closeDrawer}
      />
    </>
  )
}

export default App
