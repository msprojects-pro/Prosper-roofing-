import { Phone, ArrowRight, MapPin, CheckCircle2, ShieldAlert } from 'lucide-react';
import { BUSINESS_INFO } from '../data/roofingData';

export default function Hero() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-24 md:pt-28 pb-16 md:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Copy, CTAs, Trust Elements */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 border border-zinc-200 rounded-xs mb-5">
              <span className="w-2 h-2 rounded-full bg-[#69ADDE]"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-800">
                {BUSINESS_INFO.taglines.heroEyebrow}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-950 tracking-tight leading-[1.08] mb-5">
              Roof Repairs <br className="hidden sm:inline" />
              <span className="text-[#69ADDE]">Done Right.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-zinc-700 leading-relaxed max-w-2xl mb-8 font-normal">
              {BUSINESS_INFO.taglines.heroSubtext}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-8">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-bold text-white bg-[#69ADDE] hover:bg-[#589dce] active:bg-[#4b8ec0] rounded-sm transition-colors shadow-xs"
              >
                <Phone className="w-5 h-5" />
                <span>Call For A Roof Repair</span>
              </a>

              <a
                href="#contact"
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-bold text-zinc-900 bg-white hover:bg-zinc-50 rounded-sm border border-zinc-300 transition-colors"
              >
                <span>Get A Free Quote</span>
                <ArrowRight className="w-4 h-4 text-[#69ADDE]" />
              </a>
            </div>

            {/* Prominent Direct Phone & Coverage Box */}
            <div className="w-full max-w-xl p-4 sm:p-5 bg-zinc-50 border border-zinc-200 rounded-sm mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold text-zinc-700 uppercase tracking-wider block mb-1">
                    Direct Roof Repair Line
                  </span>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="text-2xl sm:text-3xl font-extrabold text-zinc-950 hover:text-[#69ADDE] transition-colors tracking-tight block"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>

                <div className="sm:border-l sm:border-zinc-200 sm:pl-5 flex flex-col justify-center">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-800">
                    <MapPin className="w-4 h-4 text-[#69ADDE] shrink-0" />
                    <span>{BUSINESS_INFO.taglines.coverage}</span>
                  </div>
                  <span className="text-xs text-zinc-600 mt-0.5">
                    Austin • Round Rock • Georgetown & surrounds
                  </span>
                </div>
              </div>
            </div>

            {/* Trust statement */}
            <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-zinc-700">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#69ADDE]" />
                <span>{BUSINESS_INFO.taglines.trustPill}</span>
              </div>
              <span className="text-zinc-300 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-[#69ADDE]" />
                <span>Dedicated Roof Repair Focus</span>
              </div>
            </div>

          </div>

          {/* Right Column: Realistic Roof Repair Work Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-sm overflow-hidden border border-zinc-200 shadow-sm bg-zinc-100">
              <img
                src="https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=1200&q=85"
                alt="Professional roofer repairing shingles on residential roof in Central Texas"
                className="w-full h-[400px] sm:h-[480px] lg:h-[530px] object-cover object-center"
                loading="eager"
                referrerPolicy="no-referrer"
              />

              {/* Clean bottom information badge (no gradient overlay) */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-4 rounded-xs border border-zinc-200/90 shadow-xs">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#69ADDE] block">
                      Residential Service
                    </span>
                    <p className="text-sm font-bold text-zinc-900 leading-snug">
                      Practical, dependable repairs for Texas homes
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-[#69ADDE] shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
