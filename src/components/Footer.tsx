import { Phone, MapPin, ArrowUp } from 'lucide-react';
import Logo from './Logo';
import { BUSINESS_INFO } from '../data/roofingData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Our Work', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-zinc-950 text-white border-t border-zinc-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-800">
          
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="mb-4">
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTop();
                }}
                className="inline-flex items-center gap-2.5 group"
              >
                <div className="w-8 h-8 rounded-sm bg-[#69ADDE] flex items-center justify-center text-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <path d="M3 13.5L12 4.5L21 13.5" />
                    <path d="M6 10.5V19.5H18V10.5" />
                    <path d="M12 9V14" />
                  </svg>
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-[17px] font-extrabold tracking-tight text-white uppercase">
                    PROSPER
                  </span>
                  <span className="text-[11px] font-bold tracking-[0.2em] text-[#69ADDE] uppercase">
                    ROOFING
                  </span>
                </div>
              </a>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm mb-4">
              Fast, reliable roof repair services for homeowners across Central Texas. Focused on practical solutions and dependable craftsmanship.
            </p>

            <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
              Owner: <span className="text-zinc-300">{BUSINESS_INFO.owner}</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#69ADDE] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#69ADDE] mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center gap-2.5 text-lg font-bold text-white hover:text-[#69ADDE] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#69ADDE]" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>

              <div className="flex items-center gap-2.5 text-sm text-zinc-400">
                <MapPin className="w-4 h-4 text-[#69ADDE] shrink-0" />
                <span>{BUSINESS_INFO.taglines.coverage}</span>
              </div>

              <p className="text-xs text-zinc-500 uppercase tracking-wider pt-2">
                “{BUSINESS_INFO.taglines.trustPill}”
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved. Central Texas.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-zinc-400 hover:text-[#69ADDE] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
