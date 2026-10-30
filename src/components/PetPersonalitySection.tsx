"use client";

import Image from "next/image";
import { studioData } from "@/data/petstudio";
import { ArrowUpRight, Heart } from "lucide-react";
import { motion } from "motion/react";
import { KineticHeadline } from "@/components/motion/KineticHeadline";

export function PetPersonalitySection() {
  const { personalities } = studioData;

  return (
    <section id="personality" className="scroll-mt-24 py-24 sm:py-32 bg-[#FFFDF9] text-[#18181B] border-b-2 border-[#EAE5D9]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex flex-col justify-between gap-6 border-b-2 border-[#EAE5D9] pb-8 md:flex-row md:items-end mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFF6FF] text-[#2563EB] text-xs font-black tracking-wider uppercase mb-3 border-2 border-[#2563EB]/20">
              <Heart className="w-3.5 h-3.5 fill-[#2563EB] text-[#2563EB]" />
              <span>Tailored Lifestyle</span>
            </div>
            <KineticHeadline
              as="h2"
              className="font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#18181B] uppercase leading-none"
              lines={[
                { text: "WHAT'S" },
                { text: "THEIR VIBE?", highlight: true, highlightClass: "text-[#2563EB]" },
              ]}
            />
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#52525B] font-semibold leading-relaxed">
            Setiap anabul punya karakter unik. Temukan koleksi perlengkapan dan perawatan yang dirancang khusus untuk gaya hidup mereka.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {personalities.map((item, idx) => (
            <motion.a
              key={item.id}
              href={item.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.98 }}
              className="group relative rounded-3xl overflow-hidden border-2 border-[#18181B] bg-white flex flex-col justify-between shadow-md hover:shadow-2xl cursor-pointer transition-shadow duration-300"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden bg-[#FEF9E7]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black text-[#18181B] uppercase tracking-wider border border-[#18181B] shadow-2xs">
                  {item.badge}
                </div>
              </div>

              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-black text-xl text-[#18181B] uppercase tracking-tight group-hover:text-[#2563EB] transition-colors">
                      {item.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-[#FEF9E7] border border-[#18181B] group-hover:bg-[#2563EB] text-[#18181B] group-hover:text-white flex items-center justify-center transition-colors">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  <p className="text-xs text-[#52525B] leading-relaxed font-semibold">
                    {item.subtitle}
                  </p>
                </div>

                <div className="pt-3 border-t-2 border-[#EAE5D9] flex items-center justify-between">
                  <span className="text-[11px] font-black uppercase text-[#2563EB]">
                    {item.targetCategory}
                  </span>
                  <span className="text-xs font-black text-[#18181B] group-hover:translate-x-1.5 transition-transform duration-200">
                    &rarr;
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
