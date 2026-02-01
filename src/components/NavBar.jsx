import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu as MenuIcon, X } from "lucide-react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { scrollToElement } from "../hooks/useLenis";
import { cn } from "../lib/utils";
import { config } from "../config";
import InspectionDrawer from "./InspectionDrawer";

import { useTranslation } from "../hooks/useTranslation";

function NavBar({ className }) {
  const [active, setActive] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

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
                    src={location.image}
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
                title={t.nav.items.roofRepair}
                href="#"
                src="/roof-repair.png"
                description={t.nav.items.repairDesc}
                onClick={() => handleLinkClick("/contact")} // Direct to contact for now
              />
              <ProductItem
                title={t.nav.items.roofReplacement}
                href="#"
                src="/roof-replacement.png"
                description={t.nav.items.replaceDesc}
                onClick={() => handleLinkClick("/contact")}
              />
              <ProductItem
                title={t.nav.items.commercialRoofing}
                href="#"
                src="/commercial-roofing.png"
                description={t.nav.items.commercialDesc}
                onClick={() => handleLinkClick("/contact")}
                className="hidden" // Hiding commercial for now based on user request
              />
              <ProductItem
                title={t.nav.items.stormRestoration}
                href="#"
                src="/storm-damage.png"
                description={t.nav.items.stormDesc}
                onClick={() => handleLinkClick("/contact")}
              />
              <ProductItem
                title={t.nav.items.gutterInstallation}
                href="#"
                src="https://images.unsplash.com/photo-1621251786576-9d628d067468?w=200&h=120&fit=crop"
                description={t.nav.items.gutterDesc}
                onClick={() => handleLinkClick("/contact")}
              />
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item={t.nav.aboutUs}>
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title={t.nav.items.ourCompany}
                href="#home"
                src="/hero-bg.png"
                description={t.nav.items.companyDesc}
                onClick={() => scrollToSection("#home")}
              />
              <ProductItem
                title={t.nav.items.clientReviews}
                href="/reviews"
                src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?w=280&h=140&fit=crop"
                description={t.nav.items.reviewsDesc}
                onClick={() => handleLinkClick("/reviews")}
              />
              <ProductItem
                title={t.nav.items.location}
                href="#map"
                src="https://images.unsplash.com/photo-1591955506264-3f51322ab8af?w=280&h=140&fit=crop"
                description={t.nav.items.locationDesc}
                onClick={() => scrollToSection("#map")}
              />
              <ProductItem
                title={t.nav.items.faq}
                href="#faq"
                src="https://images.unsplash.com/photo-1632759145351-1d592919f522?w=280&h=140&fit=crop"
                description={t.nav.items.faqDesc}
                onClick={() => scrollToSection("#faq")}
              />
            </div>
          </MenuItem>

          <a
            href="/blog"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("/contact"); // Redirecting to contact for now as blog page might not exist
            }}
            className="cursor-pointer text-black hover:text-primary font-medium text-sm transition-colors duration-200"
          >
            {t.nav.blog}
          </a>

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

        {/* Desktop Book Now Button */}
        <div className="hidden md:flex items-center ml-auto gap-3">
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="bg-primary text-white px-4 py-1.5 rounded-lg font-semibold hover:bg-opacity-90 transition-colors whitespace-nowrap text-sm"
          >
            {t.nav.bookNow}
          </button>
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
                  {t.nav.items.roofRepair}
                </a>
                <a
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileLinkClick(() => handleLinkClick("/contact"));
                  }}
                  className="block py-2 text-black hover:text-primary transition-colors"
                >
                  {t.nav.items.roofReplacement}
                </a>
                <a
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileLinkClick(() => handleLinkClick("/contact"));
                  }}
                  className="block py-2 text-black hover:text-primary transition-colors"
                >
                  {t.nav.items.stormRestoration}
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
                  {t.nav.items.ourCompany}
                </a>
                <a
                  href="/reviews"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileLinkClick(() => handleLinkClick("/reviews"));
                  }}
                  className="block py-2 text-black hover:text-primary transition-colors"
                >
                  {t.nav.items.clientReviews}
                </a>
                <a
                  href="#map"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileLinkClick(() => scrollToSection("#map"));
                  }}
                  className="block py-2 text-black hover:text-primary transition-colors"
                >
                  {t.nav.items.location}
                </a>
                <a
                  href="#faq"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileLinkClick(() => scrollToSection("#faq"));
                  }}
                  className="block py-2 text-black hover:text-primary transition-colors"
                >
                  {t.nav.items.faq}
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

            {/* Articles Section */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">{t.nav.blog}</h3>
              <div className="space-y-2">
                <a
                  href="/blog"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileLinkClick(() => handleLinkClick("/contact"));
                  }}
                  className="block py-2 text-black hover:text-primary transition-colors"
                >
                  {t.nav.blog}
                </a>
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

            {/* Mobile Book Now Button */}
            <div className="pt-4">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsDrawerOpen(true);
                }}
                className="block w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-opacity-90 transition-colors"
              >
                {t.nav.bookNow}
              </button>
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

      <InspectionDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  );
}

export default NavBar;
