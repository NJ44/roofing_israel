import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { config } from "../config";
import { useTranslation } from "../hooks/useTranslation";
import { scrollToElement } from "../hooks/useLenis";
import { Menu as MenuIcon, X, Phone, Mail, ChevronDown } from "lucide-react";
import { useDrawer } from "../contexts/DrawerContext";

const NavBar = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openDrawer } = useDrawer();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus when location changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActive(null);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      // Disable scroll
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      
      return () => {
        // Re-enable scroll
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        // Restore scroll position
        window.scrollTo(0, scrollY);
      };
    }
  }, [isMobileMenuOpen]);

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setActive(null);
  };

  const scrollToSection = (id) => {
    scrollToElement(id, { offset: -80 });
    closeMenus();
  };

  return (
    <>
      <Menu
        setActive={setActive}
        className={cn(
          "fixed inset-x-4 md:inset-x-0 z-[100] transition-all duration-500 mx-auto",
          isScrolled
            ? "top-2 md:top-4 scale-95 md:scale-100 bg-white/90 backdrop-blur-md border-gray-200/50 shadow-2xl"
            : "top-2 md:top-12 bg-white border-transparent shadow-lg"
        )}
      >
        <Link
          to="/"
          className="flex items-center flex-shrink-0 md:ml-0 order-first md:order-none"
          onClick={(e) => {
            if (window.location.pathname === "/") {
              e.preventDefault();
              scrollToSection("#home");
            }
            closeMenus();
          }}
        >
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

        {/* Mobile Burger Menu Button - positioned on the right */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-gray-800 hover:bg-gray-200 transition-colors order-last ml-auto md:ml-0 md:order-none"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>

        {/* Desktop Menu items - centered */}
        <div className="hidden md:flex items-center gap-x-5 flex-1 justify-center mx-auto">
          <MenuItem setActive={setActive} active={active} item={t.nav.services}>
            <div className="flex flex-col space-y-4 text-sm p-4">
              <ProductItem
                title={`${t.services.repair.titlePrefix} ${t.services.repair.titleSuffix}`}
                href="/services/roof-repair"
                src="/service-repair.png"
                description={t.services.repair.description}
                onClick={closeMenus}
              />
              <ProductItem
                title={`${t.services.replacement.titlePrefix} ${t.services.replacement.titleSuffix}`}
                href="/services/roof-replacement"
                src="/service-replacement.png"
                description={t.services.replacement.description}
                onClick={closeMenus}
              />
              <ProductItem
                title={`${t.services.restoration.titlePrefix} ${t.services.restoration.titleSuffix}`}
                href="/services/storm-restoration"
                src="/service-storm.png"
                description={t.services.restoration.description}
                onClick={closeMenus}
              />
            </div>
          </MenuItem>

          <Link
            to="/about"
            onClick={closeMenus}
            className="cursor-pointer text-black hover:text-primary font-medium text-sm transition-colors duration-200 whitespace-nowrap"
          >
            {t.nav.aboutUs}
          </Link>

          <Link
            to="/blog"
            onClick={closeMenus}
            className="cursor-pointer text-black hover:text-primary font-medium text-sm transition-colors duration-200 whitespace-nowrap"
          >
            {t.nav.blog}
          </Link>

          <Link
            to="/reviews"
            onClick={closeMenus}
            className="cursor-pointer text-black hover:text-primary font-medium text-sm transition-colors duration-200 whitespace-nowrap"
          >
            {t.nav.items.clientReviews}
          </Link>

          <Link
            to="/contact"
            onClick={closeMenus}
            className="cursor-pointer text-black hover:text-primary font-medium text-sm transition-colors duration-200 whitespace-nowrap"
          >
            {t.nav.contact}
          </Link>
        </div>

        {/* Desktop Book Now Button */}
        <div className="hidden md:flex items-center ml-1 gap-3">
          <button
            onClick={openDrawer}
            className="bg-primary text-white px-4 py-1.5 rounded-lg font-semibold hover:bg-opacity-90 transition-colors whitespace-nowrap text-sm"
          >
            {t.nav.bookNow}
          </button>
        </div>


      </Menu>

      {/* Mobile Menu Content */}
      {isMobileMenuOpen && (
        <div
          className={cn(
            "md:hidden fixed inset-x-0 z-40 bg-white border-b border-gray-100 shadow-xl overflow-y-auto max-h-[80vh] transition-all duration-500 ease-in-out py-6 px-4 animate-in slide-in-from-top-4",
            isScrolled ? "top-[58px]" : "top-[58px] md:top-[100px]"
          )}
        >
          {/* Mobile Close Button */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 end-4 p-2 text-gray-500 hover:text-black transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex flex-col space-y-6">
            <div className="space-y-4">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest px-2">
                {t.nav.services}
              </p>
              <div className="grid grid-cols-1 gap-2">
                <Link
                  to="/services/roof-repair"
                  onClick={closeMenus}
                  className="flex items-center p-3 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 me-3 flex-shrink-0" />
                  <span className="text-sm font-semibold text-gray-800">
                    {`${t.services.repair.titlePrefix} ${t.services.repair.titleSuffix}`}
                  </span>
                </Link>
                <Link
                  to="/services/roof-replacement"
                  onClick={closeMenus}
                  className="flex items-center p-3 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 me-3 flex-shrink-0" />
                  <span className="text-sm font-semibold text-gray-800">
                    {`${t.services.replacement.titlePrefix} ${t.services.replacement.titleSuffix}`}
                  </span>
                </Link>
                <Link
                  to="/services/storm-restoration"
                  onClick={closeMenus}
                  className="flex items-center p-3 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 me-3 flex-shrink-0" />
                  <span className="text-sm font-semibold text-gray-800">
                    {`${t.services.restoration.titlePrefix} ${t.services.restoration.titleSuffix}`}
                  </span>
                </Link>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <div className="grid grid-cols-1 gap-1">
                <Link
                  to="/blog"
                  onClick={closeMenus}
                  className="p-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 rounded-lg"
                >
                  {t.nav.blog}
                </Link>
                <Link
                  to="/reviews"
                  onClick={closeMenus}
                  className="p-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 rounded-lg"
                >
                  {t.nav.items.clientReviews}
                </Link>
                <Link
                  to="/contact"
                  onClick={closeMenus}
                  className="p-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 rounded-lg"
                >
                  {t.nav.contact}
                </Link>
              </div>
            </div>

            {/* Mobile Book Now Button */}
            <div className="pt-4">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openDrawer();
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
    </>
  );
};

export default NavBar;
