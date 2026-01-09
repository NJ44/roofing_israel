import React, { useState } from 'react'
import { scrollToElement } from '../hooks/useLenis'
import { config } from '../config'
import { useTranslation } from '../hooks/useTranslation'

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
      style={{
        backgroundImage: 'url(/hero-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay - darker for white text visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl">
          {/* Text Content */}
          <div className="text-white space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-md">
              Protecting Your Home With Quality Roofing
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-200 font-normal max-w-2xl drop-shadow-sm">
              New Jersey's most trusted experts for residential and commercial roofing solutions.
            </h2>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <a
                href="#contact"
                className="bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 transition-all text-center shadow-lg transform hover:-translate-y-1"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToElement('#contact', { offset: -100 });
                }}
              >
                Get A Free Quote
              </a>
              <a
                href="#services"
                className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all text-center shadow-md"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToElement('#services', { offset: -100 });
                }}
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

