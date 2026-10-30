"use client";

import { studioData } from "@/data/petstudio";
import { ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { KineticHeadline } from "@/components/motion/KineticHeadline";

export function CareStandards() {
  const { careStandards } = studioData;

  return (
    <section id="standar" className="scroll-mt-24 py-24 sm:py-32 bg-[#FFFDF9] text-[#18181B] border-b-2 border-[#EAE5D9]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex flex-col justify-between gap-6 border-b-2 border-[#EAE5D9] pb-8 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFF6FF] text-[#2563EB] text-xs font-black tracking-wider uppercase mb-3 border-2 border-[#2563EB]/20 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Fear-Free Standards</span>
            </div>
            <KineticHeadline
              as="h2"
              className="font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#18181B] uppercase leading-none"
              lines={[
                { text: "STANDAR AMAN." },
                { text: "BEBAS RASA CEMAS.", highlight: true, highlightClass: "text-[#FF5C35]" },
              ]}
            />
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#52525B] font-semibold leading-relaxed">
            Menghapus ketakutan tradisional anabul saat ke salon dengan ruang tenang, desinfeksi medis, dan penanganan tanpa paksaan.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {careStandards.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="p-7 rounded-3xl bg-[#FEF9E7] border-2 border-[#18181B] flex flex-col justify-between shadow-md hover:shadow-2xl transition-all duration-300 group cursor-default"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-black text-4xl sm:text-5xl text-[#FF5C35] group-hover:scale-110 inline-block transition-transform duration-300">
                    {item.number}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white border border-[#18181B] text-[10px] font-black uppercase text-[#18181B] shadow-2xs">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-black text-xl text-[#18181B] uppercase tracking-tight leading-snug mb-3 group-hover:text-[#FF5C35] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-[#52525B] font-semibold leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#18181B]/20 flex items-center gap-1.5 text-[11px] font-black uppercase text-[#18181B]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FF5C35]" />
                <span>100% Terverifikasi</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
