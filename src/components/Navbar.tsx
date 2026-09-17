import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import Logo from './Logo';
import { BUSINESS_INFO } from '../data/roofingData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Our Work', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md py-2.5 shadow-xs border-zinc-200/80'
          : 'bg-white py-4 border-zinc-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-semibold text-zinc-700 hover:text-[#69ADDE] transition-colors focus:outline-none focus-visible:text-[#69ADDE]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden sm:flex items-center gap-5">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center gap-2 text-sm font-bold text-zinc-900 hover:text-[#69ADDE] transition-colors focus:outline-none"
              title="Call Prosper Roofing"
            >
              <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-[#69ADDE] border border-zinc-200">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-white bg-[#69ADDE] hover:bg-[#589dce] active:bg-[#4b8ec0] rounded-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#69ADDE] focus-visible:ring-offset-2 whitespace-nowrap shadow-xs"
            >
              Get A Free Quote
            </a>
          </div>

          {/* Mobile Menu & Quick Phone */}
          <div className="flex items-center gap-2 sm:hidden">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="p-2 text-zinc-900 hover:text-[#69ADDE] rounded-sm"
              aria-label={`Call ${BUSINESS_INFO.phone}`}
            >
              <Phone className="w-5 h-5 text-[#69ADDE]" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-700 hover:text-zinc-900 focus:outline-none rounded-sm"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-zinc-200 shadow-md animate-in slide-in-from-top-2 duration-150">
          <div className="px-5 pt-3 pb-6 space-y-3">
            <nav className="flex flex-col space-y-2 border-b border-zinc-100 pb-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-3 py-2 text-base font-semibold text-zinc-800 hover:bg-zinc-50 hover:text-[#69ADDE] rounded-sm transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="pt-2 flex flex-col gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2.5 w-full py-2.5 px-4 text-sm font-bold text-zinc-900 bg-zinc-100 hover:bg-zinc-200 rounded-sm border border-zinc-200 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#69ADDE]" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="flex items-center justify-center w-full py-2.5 px-4 text-sm font-bold text-white bg-[#69ADDE] hover:bg-[#589dce] rounded-sm transition-colors text-center shadow-xs"
              >
                Get A Free Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
