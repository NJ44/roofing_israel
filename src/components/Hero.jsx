import React from 'react'
import { RainBackground } from './ui/rain'
import { useTranslation } from '../hooks/useTranslation'
import { scrollToElement } from '../hooks/useLenis'
import { config } from '../config'
import { useDrawer } from '../contexts/DrawerContext'
import { Phone } from 'lucide-react'

const HeroContent = ({ t, openDrawer }) => (
  <>
    {/* Overlay - darker for white text visibility */}
    <div className="absolute inset-0 bg-slate-900/70 md:bg-transparent md:bg-gradient-to-r md:from-slate-900/90 md:via-slate-900/70 md:to-transparent pointer-events-none z-0"></div>

    <div className="container mx-auto px-4 pb-24 md:pb-32 relative z-10 h-full flex items-end">
      <div className="max-w-3xl">
        {/* Text Content */}
        <div className="text-white space-y-4 animate-fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white drop-shadow-md">
            {t.hero.title}
          </h1>
          <h2 className="text-lg md:text-xl text-gray-200 font-normal max-w-2xl drop-shadow-sm">
            {t.hero.subtitle}
          </h2>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 pointer-events-auto">
            <button
              onClick={openDrawer}
              className="bg-primary text-white px-6 py-3 rounded-full font-semibold text-base hover:bg-orange-600 transition-all text-center shadow-lg transform hover:-translate-y-1"
            >
              {t.hero.cta}
            </button>
            <a
              href={`tel:${config.PHONE}`}
              className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-6 py-3 rounded-full font-semibold text-base hover:bg-white/20 transition-all text-center shadow-md flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              <span>{config.PHONE}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </>
)

const Hero = () => {
  const { t } = useTranslation();
  const { openDrawer } = useDrawer();

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col pt-24 md:pt-32"
      style={{
        backgroundImage: 'url(/hero-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {config.SHOW_RAIN_EFFECT ? (
        <RainBackground
          intensity={500}
          speed={0.5}
          color="rgba(255, 255, 255, 0.4)"
          className="absolute inset-0 w-full h-full z-0"
          lightningEnabled={false}
          lightningFrequency={15}
          thunderEnabled={false}
          contentClassName="h-full w-full"
        >
          <HeroContent t={t} openDrawer={openDrawer} />
        </RainBackground>
      ) : (
        <div className="relative h-full w-full flex-1 flex flex-col">
          <HeroContent t={t} openDrawer={openDrawer} />
        </div>
      )}
    </section>
  )
}

export default Hero
