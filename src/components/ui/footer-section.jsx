import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from 'lucide-react';
import { config } from '../../config';

import { useTranslation } from '../../hooks/useTranslation';

const useFooterLinks = () => {
  const { t } = useTranslation();

  return [
    {
      label: t.footer.servicesSection,
      links: [
        { title: t.nav.items.roofRepair, href: '/contact' },
        { title: t.nav.items.roofReplacement, href: '/contact' },
      ],
    },
    {
      label: t.footer.companySection,
      links: [
        { title: t.nav.items.faq, href: '#faq' },
        { title: t.nav.aboutUs, href: '#home' },
        { title: t.footer.privacyPolicy, href: '#privacy' },
        { title: t.footer.termsOfService, href: '#terms' },
      ],
    },
    {
      label: t.footer.resourcesSection,
      links: [
        { title: t.nav.items.clientReviews, href: '#reviews' },
        { title: 'השאר ביקורת', href: '/leave-review' },
        { title: t.nav.items.location, href: '#contact' },
        { title: t.footer.contactUs, href: '#contact' },
        { title: t.footer.scheduleConsultation, href: '#contact' },
        { title: t.nav.blog, href: '/blog' },
      ],
    },
    {
      label: t.footer.socialSection,
      links: [
        { title: 'Facebook', href: '#', icon: FacebookIcon },
        { title: 'Instagram', href: '#', icon: InstagramIcon },
        { title: 'Youtube', href: '#', icon: YoutubeIcon },
        { title: 'LinkedIn', href: '#', icon: LinkedinIcon },
      ],
    },
  ];
};

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
  const footerLinks = useFooterLinks();
  const { t } = useTranslation();

  return (
    <footer
      id="contact"
      className="relative w-full flex flex-col items-center justify-center border-t bg-black bg-[radial-gradient(35%_128px_at_50%_0%,rgba(255,255,255,0.08),transparent)] py-8 lg:py-10"
    >
      <div className="bg-white/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

      <div className="container mx-auto max-w-7xl px-6 w-full">
        <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
          <AnimatedContainer className="space-y-4">
            <p className="text-gray-400 mt-8 text-sm md:mt-0">
              © {new Date().getFullYear()} {config.BUSINESS_NAME}. {t.footer.rights}
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
      </div>
    </footer>
  );
}

