import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Services from './components/Services'
import MapEmbed from './components/MapEmbed'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import SEO from './components/SEO'
import GeneralDentistry from './pages/GeneralDentistry'
import CosmeticWhitening from './pages/CosmeticWhitening'
import SpecializedCare from './pages/SpecializedCare'
import Blog from './pages/Blog'
import OurPractice from './pages/OurPractice'
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

  return (
    <>
      <SEO />
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/general-dentistry" element={<GeneralDentistry />} />
          <Route path="/cosmetic-whitening" element={<CosmeticWhitening />} />
          <Route path="/specialized-care" element={<SpecializedCare />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/our-practice" element={<OurPractice />} />
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
