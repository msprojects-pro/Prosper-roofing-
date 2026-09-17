import { Phone, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO, PRINCIPLES, ROOFING_IMAGES } from '../data/roofingData';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Side 1: Large high-quality roofing photograph */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-sm overflow-hidden border border-zinc-200 shadow-sm bg-zinc-100">
              <img
                src={ROOFING_IMAGES.about}
                alt="Roofer inspecting and executing repair work on residential shingles"
                className="w-full h-[400px] sm:h-[480px] lg:h-[540px] object-cover"
                loading="lazy"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== window.location.origin + '/images/about-inspection.jpg') {
                    target.src = '/images/about-inspection.jpg';
                  }
                }}
              />

              <div className="p-5 bg-zinc-50 border-t border-zinc-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#69ADDE]">
                      Business Owner
                    </span>
                    <p className="text-base font-extrabold text-zinc-900">
                      {BUSINESS_INFO.owner}
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-zinc-600">
                    Central Texas Roof Repairs
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Side 2: Copy & Principles */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start">
            
            {/* Label */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2.5 h-0.5 bg-[#69ADDE]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#69ADDE]">
                ABOUT PROSPER ROOFING
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight mb-5">
              Fast. Reliable. Done Right.
            </h2>

            {/* Body Copy */}
            <p className="text-base sm:text-lg text-zinc-700 leading-relaxed mb-8">
              Prosper Roofing provides roof repair services for homeowners across Central Texas. The business focuses on practical roofing repairs and dependable service, helping customers address roof problems before they become bigger issues.
            </p>

            {/* Three Simple Principles */}
            <div className="w-full space-y-4 mb-8">
              {PRINCIPLES.map((principle) => (
                <div
                  key={principle.number}
                  className="flex items-start gap-4 p-4 bg-zinc-50 border border-zinc-200 rounded-sm"
                >
                  <span className="text-sm font-extrabold text-[#69ADDE] tracking-widest shrink-0 pt-0.5">
                    {principle.number}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-zinc-900 tracking-tight mb-1">
                      {principle.title}
                    </h3>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Highlighted CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 text-base font-bold text-white bg-[#69ADDE] hover:bg-[#589dce] active:bg-[#4b8ec0] rounded-sm transition-colors shadow-xs"
              >
                <Phone className="w-5 h-5" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-sm font-bold text-zinc-800 hover:text-[#69ADDE] transition-colors"
              >
                <span>Request Service</span>
                <ArrowRight className="w-4 h-4 text-[#69ADDE]" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
