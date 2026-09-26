import { studioData } from "@/data/petstudio";
import { ShieldCheck } from "lucide-react";

export function CareStandards() {
  const { careStandards } = studioData;

  return (
    <section id="standar" className="scroll-mt-24 py-24 sm:py-32 bg-[#F4EFE6] text-[#1B1917] border-b border-[#E8E2D7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col justify-between gap-6 border-b border-[#E8E2D7] pb-8 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF3F0] text-[#2A4736] text-xs font-mono tracking-widest uppercase mb-3 border border-[#2A4736]/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Keamanan Klinis &amp; Kenyamanan</span>
            </div>
            <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#1B1917] uppercase leading-[1.05]">
              Standar Perawatan <br />
              <span className="font-serif italic font-normal text-[#E25B36]">Bebas Rasa Takut.</span>
            </h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-[#6C665F] font-normal">
            Kami menghapus kecemasan tradisional salon hewan dengan menciptakan ruang tenang berstandar dermatologis medis dan penanganan Fear-Free bersertifikat.
          </p>
        </div>

        <div className="mt-16 divide-y divide-[#E8E2D7] border-y border-[#E8E2D7]">
          {careStandards.map((item) => (
            <div
              key={item.number}
              className="grid items-baseline gap-6 py-12 lg:grid-cols-12 lg:gap-12 group"
            >
              <div className="lg:col-span-2">
                <span className="font-extrabold text-4xl sm:text-5xl text-[#D8D1C4] group-hover:text-[#E25B36] transition-colors">
                  {item.number}
                </span>
                <span className="mt-2 block font-mono text-[10px] tracking-[0.2em] text-[#2A4736] uppercase font-bold">
                  {item.badge}
                </span>
              </div>

              <div className="lg:col-span-4">
                <h3 className="font-extrabold text-xl sm:text-2xl text-[#1B1917] uppercase tracking-tight">
                  {item.title}
                </h3>
              </div>

              <div className="lg:col-span-6">
                <p className="text-xs sm:text-sm text-[#6C665F] font-normal leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
