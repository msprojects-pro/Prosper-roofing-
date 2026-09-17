import { ArrowRight, Wrench } from 'lucide-react';
import { PROJECT_GALLERY } from '../data/roofingData';

export default function OurWork() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="work" className="py-20 md:py-28 bg-zinc-50 border-y border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2.5 h-0.5 bg-[#69ADDE]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#69ADDE]">
                OUR WORK
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight">
              Roof Repairs. Real Results.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-zinc-600 max-w-md">
            Visual overview of common repair challenges we solve for homeowners across Central Texas.
          </p>
        </div>

        {/* Modern Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 mb-12">
          {PROJECT_GALLERY.map((item) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-sm border border-zinc-200 bg-zinc-900 ${item.aspectClass}`}
            >
              <img
                src={item.imageUrl}
                alt={item.alt}
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-300 opacity-95 group-hover:opacity-100"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Clean label overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-white/95 backdrop-blur-xs border-t border-zinc-200 flex items-center justify-between transition-colors">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#69ADDE] block mb-0.5">
                    {item.category}
                  </span>
                  <h3 className="text-sm sm:text-base font-extrabold text-zinc-900 tracking-tight">
                    {item.title}
                  </h3>
                </div>

                <div className="w-7 h-7 rounded-xs bg-zinc-100 flex items-center justify-center text-[#69ADDE] border border-zinc-200 group-hover:bg-[#69ADDE] group-hover:text-white transition-colors">
                  <Wrench className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Small CTA Underneath */}
        <div className="p-6 sm:p-8 bg-white border border-zinc-200 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div>
            <h3 className="text-lg sm:text-xl font-extrabold text-zinc-950 tracking-tight mb-1">
              Need help with your roof?
            </h3>
            <p className="text-sm text-zinc-600">
              Reach out today to discuss your repair requirements with Prosper Roofing.
            </p>
          </div>

          <a
            href="#contact"
            onClick={scrollToContact}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white bg-[#69ADDE] hover:bg-[#589dce] active:bg-[#4b8ec0] rounded-sm transition-colors shadow-xs whitespace-nowrap"
          >
            <span>Get A Free Quote</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
