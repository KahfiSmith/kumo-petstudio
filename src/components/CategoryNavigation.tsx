"use client";

import Image from "next/image";
import { studioData } from "@/data/petstudio";
import { ArrowUpRight, ShoppingBag } from "lucide-react";
import { motion } from "motion/react";
import { KineticHeadline } from "@/components/motion/KineticHeadline";
import { SPRINGS } from "@/lib/motion";

export function CategoryNavigation() {
  const { quickCategories } = studioData;

  return (
    <section id="categories" className="py-20 sm:py-24 bg-[#FEF9E7] border-b-2 border-[#EAE5D9]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border-2 border-[#EAE5D9] text-[#18181B] text-xs font-black tracking-wider uppercase mb-3 shadow-xs">
              <ShoppingBag className="w-3.5 h-3.5 text-[#FF5C35]" />
              <span>Explore By Category</span>
            </div>
            <KineticHeadline
              as="h2"
              className="font-black text-3xl sm:text-4xl lg:text-5xl text-[#18181B] uppercase tracking-tight leading-none"
              lines={[
                { text: "BELANJA SESUAI" },
                { text: "KEBUTUHAN ANABUL", highlight: true, highlightClass: "text-[#FF5C35]" },
              ]}
            />
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#52525B] font-semibold leading-relaxed">
            Pilih kategori favorit untuk menemukan nutrisi murni, mainan interaktif tahan banting, atau spa perawatan menenangkan.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {quickCategories.map((cat, idx) => (
            <motion.a
              key={cat.id}
              href={cat.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex flex-col justify-between rounded-3xl p-5 border-2 border-[#18181B] shadow-md hover:shadow-2xl overflow-hidden cursor-pointer transition-shadow duration-300"
              style={{ backgroundColor: cat.bgHex }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] font-black uppercase tracking-widest text-[#18181B]/70 group-hover:text-[#18181B] transition-colors">
                  0{idx + 1}
                </span>
                <motion.div
                  transition={SPRINGS.tactile}
                  className="w-8 h-8 rounded-full bg-white border-2 border-[#18181B] flex items-center justify-center text-[#18181B] group-hover:bg-[#18181B] group-hover:text-white transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </motion.div>
              </div>

              <div className="relative aspect-square w-full rounded-2xl overflow-hidden border-2 border-[#18181B] bg-white mb-4 shadow-inner">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />
              </div>

              <div>
                <h3 className="font-black text-lg sm:text-xl text-[#18181B] uppercase tracking-tight leading-none mb-1">
                  {cat.name} &rarr;
                </h3>
                <p className="text-[11px] font-bold text-[#18181B]/80 leading-snug">
                  {cat.shortDesc}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
