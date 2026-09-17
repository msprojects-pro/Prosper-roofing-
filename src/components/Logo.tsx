export default function Logo({ className = '' }: { className?: string }) {
  return (
    <a
      href="#hero"
      className={`inline-flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#69ADDE] rounded-sm ${className}`}
      aria-label="Prosper Roofing Home"
    >
      {/* Clean architectural roofline geometric mark */}
      <div className="w-9 h-9 rounded-sm bg-[#69ADDE] flex items-center justify-center text-white shadow-xs group-hover:bg-[#589dce] transition-colors shrink-0">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M3 13.5L12 4.5L21 13.5" />
          <path d="M6 10.5V19.5H18V10.5" />
          <path d="M12 9V14" />
        </svg>
      </div>

      <div className="flex flex-col leading-none">
        <span className="text-[17px] font-extrabold tracking-tight text-zinc-900 group-hover:text-zinc-800 transition-colors uppercase">
          PROSPER
        </span>
        <span className="text-[11px] font-bold tracking-[0.2em] text-[#69ADDE] uppercase">
          ROOFING
        </span>
      </div>
    </a>
  );
}
