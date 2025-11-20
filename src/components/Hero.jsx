import React, { useState } from 'react'
import LeadForm from './LeadForm'
import { scrollToElement } from '../hooks/useLenis'
import { config } from '../config'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-white pt-20"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay - lighter for black text visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-white/60"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-black space-y-4 animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-black">
              Gentle dental care in {config.CITY}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-black">
              Same-week appointments. Modern tech. Friendly team.
            </p>

            {/* Contact Info */}
            <ul className="space-y-2 text-base md:text-lg text-black">
              <li className="flex items-center text-black">
                <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {config.ADDRESS_LINE && !config.ADDRESS_LINE.startsWith('{{') ? config.ADDRESS_LINE : 'Location'}, {config.CITY}
              </li>
              <li className="flex items-center text-black">
                <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {config.PHONE}
              </li>
              <li className="flex items-center text-black">
                <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {config.EMAIL && !config.EMAIL.startsWith('{{') ? config.EMAIL : 'Email'}
              </li>
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="#contact"
                className="bg-primary text-white px-6 py-3 rounded-full font-semibold text-base hover:bg-opacity-90 transition-colors text-center"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToElement('#contact', { offset: -100 });
                }}
              >
                Request appointment
              </a>
              <a
                href="#services"
                className="bg-white text-primary px-6 py-3 rounded-full font-semibold text-base hover:bg-opacity-90 transition-colors text-center"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToElement('#services', { offset: -100 });
                }}
              >
                Our Services
              </a>
            </div>
          </div>

          {/* Right Column - Lead Form */}
          <div className="animate-fade-in-delay">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

