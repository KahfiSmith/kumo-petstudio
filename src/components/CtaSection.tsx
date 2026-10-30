"use client";

import { studioData } from "@/data/petstudio";
import { ShoppingBag, Calendar, Heart, Star, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { KineticHeadline } from "@/components/motion/KineticHeadline";
import { SPRINGS } from "@/lib/motion";

export function CtaSection() {
  const { contact } = studioData;

  return (
    <section className="relative bg-[#FF5C35] text-white py-24 sm:py-32 overflow-hidden border-b-2 border-[#18181B]">
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-[#FFC72C] opacity-30 blur-2xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-52 h-52 rounded-full bg-[#2563EB] opacity-30 blur-2xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 lg:px-10 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#FF5C35] text-xs font-black tracking-wider uppercase mb-6 shadow-md border-2 border-white"
        >
          <Heart className="w-3.5 h-3.5 fill-[#FF5C35]" />
          <span>Surga Kecil Anabul Bahagia</span>
        </motion.div>

        <KineticHeadline
          as="h2"
          className="font-black text-5xl sm:text-6xl lg:text-7xl xl:text-8xl uppercase tracking-tight leading-[0.95] mb-6 text-white"
          lines={[
            { text: "THEY'RE WAITING." },
            { text: "MAKE THEIR DAY", highlight: true, highlightClass: "text-[#FFC72C]" },
            { text: "A LITTLE BETTER." },
          ]}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-xl text-white/95 font-semibold max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Dari camilan peningkat imun hingga spa ozon pereda gatal dan hotel mewah tanpa kandang. Hadirkan kebahagiaan terbaik untuk sahabat setia Anda hari ini.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={SPRINGS.tactile}
            href="#shop-pantry"
            className="group inline-flex h-16 items-center justify-center rounded-2xl bg-white hover:bg-[#FEF9E7] text-[#18181B] px-9 text-sm sm:text-base font-black uppercase tracking-wider transition-colors shadow-xl hover:shadow-2xl"
          >
            <ShoppingBag className="w-5 h-5 mr-2 text-[#FF5C35]" />
            <span>Shop for Them Now</span>
            <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={SPRINGS.tactile}
            href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
              "Halo Kumo Pets! Saya ingin konsultasi / reservasi spa & hotel untuk anabul saya."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-16 items-center justify-center rounded-2xl bg-[#18181B] hover:bg-black text-white px-9 text-sm sm:text-base font-black uppercase tracking-wider transition-colors shadow-xl hover:shadow-2xl border-2 border-white/20"
          >
            <Calendar className="w-5 h-5 mr-2 text-[#FFC72C]" />
            <span>Chat via WhatsApp</span>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs font-bold text-white/90"
        >
          <span className="flex items-center gap-1.5">
            <Star className="w-4 h-4 fill-[#FFC72C] text-[#FFC72C]" />
            320+ Ulasan Bintang Lima
          </span>
          <span>&bull;</span>
          <span>Gratis Pengantaran Surabaya untuk Pesanan Tertentu</span>
          <span>&bull;</span>
          <span>100% Produk Teruji Aman</span>
        </motion.div>
      </div>
    </section>
  );
}
