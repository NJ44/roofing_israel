import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu as MenuIcon, X } from "lucide-react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { scrollToElement } from "../hooks/useLenis";
import { cn } from "../lib/utils";
import { config } from "../config";

function NavBar({ className }) {
  const [active, setActive] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        "fixed top-4 inset-x-0 z-50 px-4",
        className
      )}
    >
      <Menu setActive={setActive} className="w-full">
        {/* Logo - positioned on the left */}
        <Link to="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
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

        {/* Desktop Menu items - hidden on mobile */}
        <div className="hidden md:flex items-center space-x-6">
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="text-sm grid grid-cols-2 gap-6 p-4">
              <ProductItem
                title="General Dentistry"
                href="/general-dentistry"
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=200&h=120&fit=crop"
                description="Comprehensive dental care for the whole family"
                onClick={() => handleLinkClick("/general-dentistry")}
              />
              <ProductItem
                title="Cosmetic & Whitening"
                href="/cosmetic-whitening"
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=200&h=120&fit=crop"
                description="Transform your smile with professional treatments"
                onClick={() => handleLinkClick("/cosmetic-whitening")}
              />
              <ProductItem
                title="Specialized Care"
                href="/specialized-care"
                src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=200&h=120&fit=crop"
                description="Advanced treatments and specialized services"
                onClick={() => handleLinkClick("/specialized-care")}
              />
              <ProductItem
                title="Dental Implants"
                href="/specialized-care"
                src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=200&h=120&fit=crop"
                description="Permanent solution for missing teeth"
                onClick={() => handleLinkClick("/specialized-care")}
              />
              <ProductItem
                title="Emergency Care"
                href="/specialized-care"
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=200&h=120&fit=crop"
                description="Same-day emergency appointments available"
                onClick={() => handleLinkClick("/specialized-care")}
              />
              <ProductItem
                title="Orthodontics"
                href="/specialized-care"
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=200&h=120&fit=crop"
                description="Straighten teeth with modern options"
                onClick={() => handleLinkClick("/specialized-care")}
              />
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="About">
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Our Practice"
                href="#home"
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=280&h=140&fit=crop"
                description="Modern dental care with a friendly, professional team"
                onClick={() => scrollToSection("#home")}
              />
              <ProductItem
                title="Patient Reviews"
                href="#reviews"
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=280&h=140&fit=crop"
                description="See what our patients say about their experience"
                onClick={() => scrollToSection("#reviews")}
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

          <MenuItem setActive={setActive} active={active} item="Contact">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink
                href="#contact"
                onClick={() => scrollToSection("#contact")}
              >
                Book Appointment
              </HoveredLink>
              <HoveredLink
                href={`tel:${config.PHONE}`}
              >
                Call Us: {config.PHONE}
              </HoveredLink>
              <HoveredLink
                href={`mailto:${config.EMAIL}`}
              >
                Email: {config.EMAIL}
              </HoveredLink>
              <HoveredLink
                href="#contact"
                onClick={() => scrollToSection("#contact")}
              >
                Visit Our Office
              </HoveredLink>
            </div>
          </MenuItem>

          <Link
            to="/blog"
            className="text-black hover:text-primary font-medium text-sm transition-colors duration-200"
            onClick={() => {
              setActive(null);
              handleLinkClick("/blog");
            }}
          >
            Blog
          </Link>
        </div>

        {/* Desktop Book Now Button - hidden on mobile */}
        <div className="hidden md:flex items-center ml-auto" style={{ transform: 'translateX(20px)' }}>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#contact");
            }}
            className="bg-primary text-white px-4 py-1.5 rounded-lg font-semibold hover:bg-opacity-90 transition-colors whitespace-nowrap text-sm"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Burger Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-gray-800 hover:bg-gray-200 transition-colors"
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
        <div className="md:hidden fixed inset-0 top-20 bg-white z-40 overflow-y-auto">
          <div className="px-4 py-6 space-y-4">
            {/* Services Section */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Services</h3>
              <div className="space-y-2">
                <a
                  href="/general-dentistry"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileLinkClick(() => handleLinkClick("/general-dentistry"));
                  }}
                  className="block py-2 text-black hover:text-primary transition-colors"
                >
                  General Dentistry
                </a>
                <a
                  href="/cosmetic-whitening"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileLinkClick(() => handleLinkClick("/cosmetic-whitening"));
                  }}
                  className="block py-2 text-black hover:text-primary transition-colors"
                >
                  Cosmetic & Whitening
                </a>
                <a
                  href="/specialized-care"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileLinkClick(() => handleLinkClick("/specialized-care"));
                  }}
                  className="block py-2 text-black hover:text-primary transition-colors"
                >
                  Specialized Care
                </a>
              </div>
            </div>

            {/* About Section */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">About</h3>
              <div className="space-y-2">
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileLinkClick(() => scrollToSection("#home"));
                  }}
                  className="block py-2 text-black hover:text-primary transition-colors"
                >
                  Our Practice
                </a>
                <a
                  href="#reviews"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileLinkClick(() => scrollToSection("#reviews"));
                  }}
                  className="block py-2 text-black hover:text-primary transition-colors"
                >
                  Patient Reviews
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

            {/* Contact Section */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Contact</h3>
              <div className="space-y-2">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileLinkClick(() => scrollToSection("#contact"));
                  }}
                  className="block py-2 text-black hover:text-primary transition-colors"
                >
                  Book Appointment
                </a>
                <a
                  href={`tel:${config.PHONE}`}
                  className="block py-2 text-black hover:text-primary transition-colors"
                >
                  Call Us: {config.PHONE}
                </a>
                <a
                  href={`mailto:${config.EMAIL}`}
                  className="block py-2 text-black hover:text-primary transition-colors"
                >
                  Email: {config.EMAIL}
                </a>
              </div>
            </div>

            {/* Blog Section */}
            <div>
              <a
                href="/blog"
                onClick={(e) => {
                  e.preventDefault();
                  handleMobileLinkClick(() => handleLinkClick("/blog"));
                }}
                className="block py-2 text-lg font-semibold text-black hover:text-primary transition-colors"
              >
                Blog
              </a>
            </div>

            {/* Mobile Book Now Button */}
            <div className="pt-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleMobileLinkClick(() => scrollToSection("#contact"));
                }}
                className="block w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-opacity-90 transition-colors"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30 top-20"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}

export default NavBar;
