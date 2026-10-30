"use client";

import { useState } from "react";
import Image from "next/image";
import { studioData } from "@/data/petstudio";
import { ArrowUpRight, Clock, Check, Heart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { KineticHeadline } from "@/components/motion/KineticHeadline";
import { SPRINGS } from "@/lib/motion";

export function GroomingSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const { contact } = studioData;

  const categories = [
    { id: "all", label: "Semua Menu Care" },
    { id: "signature-spa", label: "Signature Spa" },
    { id: "gentle-grooming", label: "Styling & Cut" },
    { id: "wellness-therapy", label: "Wellness Therapy" },
  ];

  const quickPillars = [
    {
      title: "GROOMING",
      tagline: "Fresh coat. Happy pet.",
      desc: "Potongan rapi presisi sesuai standar ras dengan gunting jepang tanpa suara bising.",
    },
    {
      title: "OZONE BATH",
      tagline: "Clean, comfy, cuddly.",
      desc: "Mikro-bubble ozon hangat meresap ke folikel bulu untuk hilangkan gatal dan jamur.",
    },
    {
      title: "PAW & EAR CARE",
      tagline: "Small detail. Big difference.",
      desc: "Pembersihan telinga higienis dan pemotongan kuku tanpa rasa sakit oleh tenaga bersertifikat.",
    },
  ];

  const filtered =
    activeCategory === "all"
      ? studioData.groomingServices
      : studioData.groomingServices.filter((s) => s.category === activeCategory);

  return (
    <section id="care-services" className="scroll-mt-24 py-24 sm:py-32 bg-[#F0FDF4] text-[#18181B] border-b-2 border-[#EAE5D9]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex flex-col justify-between gap-6 border-b-2 border-[#16A34A]/20 pb-8 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border-2 border-[#16A34A]/30 text-[#15803D] text-xs font-black tracking-wider uppercase mb-3 shadow-2xs">
              <Heart className="w-3.5 h-3.5 fill-[#16A34A] text-[#16A34A]" />
              <span>Pet Care &amp; Hydro Spa Menu</span>
            </div>
            <KineticHeadline
              as="h2"
              className="font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#18181B] uppercase leading-none"
              lines={[
                { text: "A LITTLE FRESHER." },
                { text: "A LOT HAPPIER.", highlight: true, highlightClass: "text-[#16A34A]" },
              ]}
            />
          </div>

          <div className="flex flex-wrap gap-2 text-xs font-black uppercase">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative px-4 py-2 rounded-xl transition-all cursor-pointer border-2 z-10 ${
                    isActive
                      ? "text-white border-[#16A34A] shadow-sm"
                      : "bg-white text-[#52525B] border-[#EAE5D9] hover:border-[#16A34A] hover:text-[#18181B]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-care-pill"
                      className="absolute inset-0 bg-[#16A34A] rounded-lg -z-10"
                      transition={SPRINGS.snappy}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3 mb-16">
          {quickPillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-3xl bg-white border-2 border-[#18181B] shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="font-mono text-[10px] font-black uppercase tracking-widest text-[#16A34A] block mb-1">
                Pilar 0{idx + 1}
              </span>
              <h3 className="font-black text-2xl text-[#18181B] uppercase tracking-tight">
                {pillar.title}
              </h3>
              <p className="font-black text-xs text-[#16A34A] uppercase tracking-wide mt-0.5 mb-2">
                {pillar.tagline}
              </p>
              <p className="text-xs text-[#52525B] font-medium leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Services Cards with layout animation */}
        <motion.div layout className="grid gap-8 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="flex flex-col justify-between rounded-[2.5rem] bg-white border-2 border-[#18181B] overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 group"
              >
                <div>
                  <div className="relative aspect-16/10 w-full overflow-hidden bg-[#FEF9E7] border-b-2 border-[#18181B]">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                    <div className="absolute top-3 left-3 bg-[#18181B] text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
                      {service.tag}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-white/95 px-2.5 py-1 rounded-lg text-[11px] font-black text-[#18181B] flex items-center gap-1 border border-[#18181B]">
                      <Clock className="w-3.5 h-3.5 text-[#16A34A]" />
                      <span>{service.duration}</span>
                    </div>
                  </div>

                  <div className="p-7 space-y-4">
                    <div>
                      <h4 className="font-black text-2xl text-[#18181B] leading-tight uppercase mb-2 group-hover:text-[#16A34A] transition-colors">
                        {service.name}
                      </h4>
                      <p className="text-xs text-[#52525B] leading-relaxed font-semibold">
                        {service.shortDesc}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#F0FDF4] border border-[#16A34A]/30 text-xs text-[#15803D] font-bold flex items-start gap-2">
                      <Heart className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                      <span>Ideal untuk: {service.suitableFor}</span>
                    </div>

                    <div className="space-y-2 pt-2 border-t-2 border-[#EAE5D9]">
                      <span className="text-[10px] font-black uppercase tracking-wider text-[#52525B] block">
                        Sudah Termasuk:
                      </span>
                      <ul className="space-y-1.5 text-xs text-[#18181B] font-semibold">
                        {service.comfortFeatures.slice(0, 3).map((feat, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <div className="pt-4 border-t-2 border-[#EAE5D9] flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-black uppercase text-[#52525B] block">Mulai dari:</span>
                      <span className="font-black text-2xl text-[#16A34A]">
                        {service.priceStart}
                      </span>
                    </div>

                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={SPRINGS.tactile}
                      href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
                        `Halo Kumo Pets! Saya ingin reservasi grooming/spa: ${service.name}. Mohon info slot jadwal yang tersedia.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-12 items-center justify-center rounded-2xl bg-[#16A34A] hover:bg-[#15803D] text-white px-5 text-xs font-black uppercase tracking-wider transition-colors duration-200 shadow-sm gap-1.5"
                    >
                      <span>Book Menu</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
