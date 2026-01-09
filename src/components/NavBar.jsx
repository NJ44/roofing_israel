import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu as MenuIcon, X, Languages, ChevronDown } from "lucide-react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { scrollToElement } from "../hooks/useLenis";
import { cn } from "../lib/utils";
import { config } from "../config";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslation } from "../hooks/useTranslation";

function NavBar({ className }) {
  const [active, setActive] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();
  const languageDropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target)) {
        setIsLanguageDropdownOpen(false);
      }
    };

    if (isLanguageDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLanguageDropdownOpen]);

  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      scrollToElement(href, { offset: -100 });
      setActive(null);
    }
  };

  const handleLinkClick = (path) => {
    navigate(path);
    setActive(null);
    setIsMobileMenuOpen(false);
    // Scroll to top when navigating to a new page
    window.scrollTo(0, 0);
  };

  const handleMobileLinkClick = (action) => {
    action();
    setIsMobileMenuOpen(false);
  };

  return (
    <div
      className={cn(
        "fixed inset-x-0 z-50 px-4 transition-all duration-500 ease-in-out",
        isScrolled ? "top-[15px]" : "top-[52px]",
        className
      )}
    >
      <Menu setActive={setActive} className="w-full justify-between">
        {/* Logo - positioned on the left */}
        <Link to="/" className="flex items-center flex-shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
          {config.LOGO_URL && !config.LOGO_URL.startsWith("{{") ? (
            <img
              src={config.LOGO_URL}
              alt={`${config.BUSINESS_NAME} logo`}
              className="h-8 w-auto"
            />
          ) : (
            <span className="text-base font-bold text-black">
              {config.BUSINESS_NAME}
            </span>
          )}
        </Link>

        {/* Desktop Menu items - centered */}
        <div className="hidden md:flex items-center space-x-6 flex-1 justify-center mx-auto">
          <MenuItem setActive={setActive} active={active} item={t.nav.locations}>
            <div className="text-sm grid grid-cols-2 gap-6 p-4">
              {config.LOCATIONS && config.LOCATIONS.length > 0 ? (
                config.LOCATIONS.map((location, index) => (
                  <ProductItem
                    key={index}
                    title={location.name}
                    href={`/locations/${location.slug}`}
                    src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=200&h=120&fit=crop"
                    description={`${location.address}, ${location.city}`}
                    onClick={() => handleLinkClick(`/locations/${location.slug}`)}
                  />
                ))
              ) : (
                <div className="text-sm text-gray-600">No locations available</div>
              )}
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item={t.nav.services}>
            <div className="text-sm grid grid-cols-2 gap-6 p-4">
              <ProductItem
                title="Roof Repair"
                href="#"
                src="/roof-repair.png"
                description="Fast and reliable leak repairs"
                onClick={() => handleLinkClick("/contact")} // Direct to contact for now
              />
              <ProductItem
                title="Roof Replacement"
                href="#"
                src="/roof-replacement.png"
                description="Complete roof replacement services"
                onClick={() => handleLinkClick("/contact")}
              />
              <ProductItem
                title="Commercial Roofing"
                href="#"
                src="/commercial-roofing.png"
                description="Business and industrial roofing"
                onClick={() => handleLinkClick("/contact")}
              />
              <ProductItem
                title="Gutter Installation"
                href="#"
                src="https://images.unsplash.com/photo-1621251786576-9d628d067468?w=200&h=120&fit=crop"
                description="Seamless gutter systems"
                onClick={() => handleLinkClick("/contact")}
              />
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item={t.nav.aboutUs}>
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Our Firm"
                href="#home"
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=280&h=140&fit=crop"
                description="Experienced legal representation with a dedicated team"
                onClick={() => scrollToSection("#home")}
              />
              <ProductItem
                title="Client Reviews"
                href="/reviews"
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=280&h=140&fit=crop"
                description="See what our clients say about their experience"
                onClick={() => handleLinkClick("/reviews")}
              />
              <ProductItem
                title="Location"
                href="#map"
                src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=280&h=140&fit=crop"
                description="Visit us at our convenient location in the city"
                onClick={() => scrollToSection("#map")}
              />
              <ProductItem
                title="FAQ"
                href="#faq"
                src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=280&h=140&fit=crop"
                description="Common questions about our services and policies"
                onClick={() => scrollToSection("#faq")}
              />
            </div>
          </MenuItem>

          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("/contact");
            }}
            className="cursor-pointer text-black hover:text-primary font-medium text-sm transition-colors duration-200"
          >
            {t.nav.contact}
          </a>
        </div>

        {/* Desktop Language Switcher and Book Now Button - hidden on mobile */}
        <div className="hidden md:flex items-center ml-auto gap-3" style={{ transform: 'translateX(20px)' }}>
          <div
            ref={languageDropdownRef}
            className="relative"
            onMouseEnter={() => setIsLanguageDropdownOpen(true)}
            onMouseLeave={() => setIsLanguageDropdownOpen(false)}
          >
            <button
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg font-medium text-sm text-black hover:bg-gray-100 transition-colors"
              aria-label="Language selector"
            >
              <span>{language === 'en' ? 'EN' : 'ES'}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {isLanguageDropdownOpen && (
              <div
                className="absolute top-full right-0 pt-1 bg-transparent"
                onMouseEnter={() => setIsLanguageDropdownOpen(true)}
                onMouseLeave={() => setIsLanguageDropdownOpen(false)}
              >
                <div className="bg-white rounded-lg shadow-lg border border-gray-200 min-w-[120px] z-50">
                  <button
                    onClick={() => {
                      setLanguage('en');
                      setIsLanguageDropdownOpen(false);
                    }}
                    className={cn(
                      "w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors first:rounded-t-lg last:rounded-b-lg",
                      language === 'en' && "bg-gray-50 font-semibold"
                    )}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('es');
                      setIsLanguageDropdownOpen(false);
                    }}
                    className={cn(
                      "w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors first:rounded-t-lg last:rounded-b-lg",
                      language === 'es' && "bg-gray-50 font-semibold"
                    )}
                  >
                    ES
                  </button>
                </div>
              </div>
            )}
          </div>
          <a
            href="#appointment-form"
            onClick={(e) => {
              e.preventDefault();
              if (window.location.pathname === '/') {
                scrollToSection("#appointment-form");
              } else {
                window.location.href = '/#appointment-form';
              }
            }}
            className="bg-primary text-white px-4 py-1.5 rounded-lg font-semibold hover:bg-opacity-90 transition-colors whitespace-nowrap text-sm"
          >
            {t.nav.bookNow}
          </a>
        </div>

        {/* Mobile Burger Menu Button - positioned on the right */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-gray-800 hover:bg-gray-200 transition-colors ml-auto"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>
      </Menu>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className={cn(
          "md:hidden fixed inset-0 bg-white z-40 overflow-y-auto transition-all duration-500 ease-in-out",
          isScrolled ? "top-[63px]" : "top-[100px]"
        )}>
          <div className="px-4 py-6 space-y-4">
            {/* Services Section */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">{t.nav.services}</h3>
              <div className="space-y-2">
                <a
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileLinkClick(() => handleLinkClick("/contact"));
                  }}
                  className="block py-2 text-black hover:text-primary transition-colors"
                >
                  Roof Repair
                </a>
                <a
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileLinkClick(() => handleLinkClick("/contact"));
                  }}
                  className="block py-2 text-black hover:text-primary transition-colors"
                >
                  Roof Replacement
                </a>
                <a
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileLinkClick(() => handleLinkClick("/contact"));
                  }}
                  className="block py-2 text-black hover:text-primary transition-colors"
                >
                  Commercial Roofing
                </a>
              </div>
            </div>

            {/* About Section */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">{t.nav.aboutUs}</h3>
              <div className="space-y-2">
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileLinkClick(() => scrollToSection("#home"));
                  }}
                  className="block py-2 text-black hover:text-primary transition-colors"
                >
                  Our Firm
                </a>
                <a
                  href="/reviews"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileLinkClick(() => handleLinkClick("/reviews"));
                  }}
                  className="block py-2 text-black hover:text-primary transition-colors"
                >
                  Client Reviews
                </a>
                <a
                  href="#map"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileLinkClick(() => scrollToSection("#map"));
                  }}
                  className="block py-2 text-black hover:text-primary transition-colors"
                >
                  Location
                </a>
                <a
                  href="#faq"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileLinkClick(() => scrollToSection("#faq"));
                  }}
                  className="block py-2 text-black hover:text-primary transition-colors"
                >
                  FAQ
                </a>
              </div>
            </div>

            {/* Locations Section */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">{t.nav.locations}</h3>
              <div className="space-y-2">
                {config.LOCATIONS && config.LOCATIONS.length > 0 ? (
                  config.LOCATIONS.map((location, index) => (
                    <a
                      key={index}
                      href={`/locations/${location.slug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleMobileLinkClick(() => handleLinkClick(`/locations/${location.slug}`));
                      }}
                      className="block py-2 text-black hover:text-primary transition-colors"
                    >
                      {location.name}
                    </a>
                  ))
                ) : (
                  <div className="text-sm text-gray-600">No locations available</div>
                )}
              </div>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">{t.nav.contact}</h3>
              <div className="space-y-2">
                <a
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileLinkClick(() => handleLinkClick("/contact"));
                  }}
                  className="block py-2 text-black hover:text-primary transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>

            {/* Mobile Language Switcher */}
            <div className="pt-2">
              <div className="space-y-2">
                <button
                  onClick={() => {
                    setLanguage('en');
                    setIsMobileMenuOpen(false);
                  }}
                  className={cn(
                    "flex items-center gap-2 w-full px-4 py-3 rounded-lg font-medium text-black hover:bg-gray-100 transition-colors border",
                    language === 'en' ? "border-primary bg-primary/5" : "border-gray-200"
                  )}
                >
                  <span>EN</span>
                </button>
                <button
                  onClick={() => {
                    setLanguage('es');
                    setIsMobileMenuOpen(false);
                  }}
                  className={cn(
                    "flex items-center gap-2 w-full px-4 py-3 rounded-lg font-medium text-black hover:bg-gray-100 transition-colors border",
                    language === 'es' ? "border-primary bg-primary/5" : "border-gray-200"
                  )}
                >
                  <span>ES</span>
                </button>
              </div>
            </div>

            {/* Mobile Book Now Button */}
            <div className="pt-4">
              <a
                href="#appointment-form"
                onClick={(e) => {
                  e.preventDefault();
                  handleMobileLinkClick(() => {
                    if (window.location.pathname === '/') {
                      scrollToSection("#appointment-form");
                    } else {
                      window.location.href = '/#appointment-form';
                    }
                  });
                }}
                className="block w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-opacity-90 transition-colors"
              >
                {t.nav.bookNow}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className={cn(
            "md:hidden fixed inset-0 bg-black bg-opacity-50 z-30 transition-all duration-500 ease-in-out",
            isScrolled ? "top-[63px]" : "top-[100px]"
          )}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}

export default NavBar;
