import {
  Droplets,
  Layers,
  Flame,
  Sun,
  Wrench,
  Wind,
  CloudLightning,
  Hammer,
} from 'lucide-react';
import { SERVICES } from '../data/roofingData';

// Map icon names cleanly to Lucide components
const iconMap: Record<string, React.ElementType> = {
  Droplets,
  Layers,
  Flame,
  Sun,
  Pipette: Wrench,
  Wind,
  CloudLightning,
  Hammer,
};

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-zinc-50 border-y border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2.5 h-0.5 bg-[#69ADDE]"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#69ADDE]">
              ROOF REPAIR SERVICES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight mb-4">
            Roof Problems? We’ve Got You Covered.
          </h2>

          <p className="text-base sm:text-lg text-zinc-700 leading-relaxed">
            From leaks and missing shingles to storm damage and roof ventilation, Prosper Roofing handles the repairs your roof needs.
          </p>
        </div>

        {/* Clean 4-column or 2-column list/grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.iconName] || Hammer;

            return (
              <div
                key={service.id}
                className="group bg-white p-6 sm:p-7 border border-zinc-200 rounded-sm hover:border-[#69ADDE] transition-all duration-150 flex flex-col justify-between"
              >
                <div>
                  {/* Top bar with number and icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-extrabold text-[#69ADDE] tracking-widest">
                      {service.number}
                    </span>
                    <div className="w-9 h-9 rounded-xs bg-zinc-50 border border-zinc-200 flex items-center justify-center text-[#69ADDE] group-hover:bg-[#69ADDE] group-hover:text-white group-hover:border-[#69ADDE] transition-colors">
                      <IconComponent className="w-4 h-4 transition-colors" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-zinc-900 tracking-tight mb-2.5 group-hover:text-[#69ADDE] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Subtle bottom accent line on hover */}
                <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider group-hover:text-zinc-800 transition-colors">
                    Roof Repair
                  </span>
                  <div className="w-5 h-0.5 bg-transparent group-hover:bg-[#69ADDE] transition-colors"></div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
