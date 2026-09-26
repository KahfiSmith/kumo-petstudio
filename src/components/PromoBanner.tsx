import { studioData } from "@/data/petstudio";
import { ArrowRight, Tag } from "lucide-react";

export function PromoBanner() {
  const { promo, contact } = studioData;

  return (
    <section className="relative bg-[#FF5C35] text-white py-16 sm:py-20 overflow-hidden border-b-2 border-[#18181B]">
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-60 h-60 rounded-full bg-[#FFC72C] opacity-30 blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-60 h-60 rounded-full bg-[#2563EB] opacity-30 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 lg:px-10 relative z-10">
        <div className="rounded-[2.5rem] bg-[#18181B] text-white p-8 sm:p-14 border-4 border-white shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFC72C] text-[#18181B] text-xs font-black tracking-wider uppercase shadow-xs">
                <Tag className="w-3.5 h-3.5 text-[#18181B]" />
                <span>{promo.badge}</span>
              </div>

              <h2 className="font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight leading-[1.02]">
                {promo.headline}
              </h2>

              <p className="text-sm sm:text-base text-zinc-300 font-medium leading-relaxed">
                {promo.subheadline}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-4 shrink-0">
              <div className="px-4 py-2 rounded-2xl bg-white/10 border-2 border-dashed border-white/40 flex items-center gap-2.5">
                <Tag className="w-4 h-4 text-[#FFC72C]" />
                <span className="font-mono text-xs font-extrabold uppercase tracking-wider text-zinc-300">
                  Kode Kupon:
                </span>
                <span className="font-mono text-sm font-black text-[#FFC72C] tracking-widest bg-white/10 px-2 py-0.5 rounded-md">
                  {promo.code}
                </span>
              </div>

              <a
                href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(promo.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center justify-center rounded-2xl bg-[#FFC72C] hover:bg-[#E5B01F] px-8 text-xs sm:text-sm font-black tracking-wider text-[#18181B] uppercase transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-104 active:scale-98"
              >
                <span>{promo.ctaText}</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
