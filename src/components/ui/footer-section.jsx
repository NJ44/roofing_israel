import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon, Heart } from 'lucide-react';
import { config } from '../../config';

const footerLinks = [
  {
    label: 'Services',
    links: [
      { title: 'General Dentistry', href: '#services' },
      { title: 'Cosmetic & Whitening', href: '#services' },
      { title: 'Dental Implants', href: '#services' },
      { title: 'Emergency Care', href: '#services' },
    ],
  },
  {
    label: 'Company',
    links: [
      { title: 'FAQs', href: '#faq' },
      { title: 'About Us', href: '#home' },
      { title: 'Privacy Policy', href: '#privacy' },
      { title: 'Terms of Services', href: '#terms' },
    ],
  },
  {
    label: 'Resources',
    links: [
      { title: 'Patient Reviews', href: '#reviews' },
      { title: 'Location', href: '#contact' },
      { title: 'Contact Us', href: '#contact' },
      { title: 'Book Appointment', href: '#contact' },
      { title: 'Blog', href: '/blog' },
    ],
  },
  {
    label: 'Social Links',
    links: [
      { title: 'Facebook', href: '#', icon: FacebookIcon },
      { title: 'Instagram', href: '#', icon: InstagramIcon },
      { title: 'Youtube', href: '#', icon: YoutubeIcon },
      { title: 'LinkedIn', href: '#', icon: LinkedinIcon },
    ],
  },
];

function AnimatedContainer({ className, delay = 0.1, children }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FooterSection() {
  return (
    <footer
      id="contact"
      className="md:rounded-t-6xl relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center rounded-t-4xl border-t bg-gray-900 bg-[radial-gradient(35%_128px_at_50%_0%,rgba(255,255,255,0.08),transparent)] px-6 py-12 lg:py-16"
    >
      <div className="bg-white/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

      <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
        <AnimatedContainer className="space-y-4">
          <Heart className="size-8 text-white" />
          <p className="text-gray-400 mt-8 text-sm md:mt-0">
            © {new Date().getFullYear()} {config.BUSINESS_NAME}. All rights reserved.
          </p>
        </AnimatedContainer>

        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
              <div className="mb-10 md:mb-0">
                <h3 className="text-xs text-white font-semibold">{section.label}</h3>
                <ul className="text-gray-400 mt-4 space-y-2 text-sm">
                  {section.links.map((link) => {
                    const Icon = link.icon;
                    const isExternal = link.href.startsWith('#') || link.href.startsWith('http');
                    const LinkComponent = isExternal ? 'a' : Link;
                    const linkProps = isExternal 
                      ? { href: link.href }
                      : { to: link.href };
                    
                    return (
                      <li key={link.title}>
                        <LinkComponent
                          {...linkProps}
                          className="hover:text-white inline-flex items-center transition-all duration-300"
                        >
                          {Icon && <Icon className="me-1 size-4" />}
                          {link.title}
                        </LinkComponent>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </footer>
  );
}

