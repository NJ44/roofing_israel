import React from 'react'
import { RainBackground } from './ui/rain'
import { useTranslation } from '../hooks/useTranslation'
import { scrollToElement } from '../hooks/useLenis'

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col pt-20"
      style={{
        backgroundImage: 'url(/hero-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <RainBackground
        intensity={300}
        speed={1}
        color="rgba(255, 255, 255, 0.4)"
        className="absolute inset-0 w-full h-full z-0"
        lightningEnabled={true}
        lightningFrequency={15}
        thunderEnabled={false}
        contentClassName="h-full w-full"
      >
        {/* Overlay - darker for white text visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent pointer-events-none z-0"></div>

        <div className="container mx-auto px-4 py-16 relative z-10 h-full flex items-center">
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
              <div className="flex flex-col sm:flex-row gap-4 pt-8 pointer-events-auto">
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
      </RainBackground>
    </section>
  )
}

export default Hero

