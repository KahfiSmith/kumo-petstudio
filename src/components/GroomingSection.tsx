"use client";

import { useState } from "react";
import Image from "next/image";
import { studioData } from "@/data/petstudio";
import { ArrowUpRight, Sparkles, Clock, Check, Heart } from "lucide-react";

export function GroomingSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "Semua Perawatan" },
    { id: "signature-spa", label: "Signature Spa" },
    { id: "gentle-grooming", label: "Gentle Styling" },
    { id: "wellness-therapy", label: "Wellness Therapy" },
  ];

  const filtered =
    activeCategory === "all"
      ? studioData.groomingServices
      : studioData.groomingServices.filter((s) => s.category === activeCategory);

  return (
    <section id="care-services" className="scroll-mt-24 py-24 sm:py-32 bg-[#FAF6F0] text-[#1B1917] border-b border-[#E8E2D7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col justify-between gap-6 border-b border-[#E8E2D7] pb-8 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF1ED] text-[#E25B36] text-xs font-mono tracking-widest uppercase mb-3 border border-[#E25B36]/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Pet Care &amp; Hydro Spa</span>
            </div>
            <h2 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#1B1917] uppercase leading-[0.98]">
              A LITTLE FRESHER. <br />
              <span className="font-serif italic font-normal text-[#E25B36]">A LOT HAPPIER.</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-3 text-xs font-bold uppercase">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-[#E25B36] text-white shadow-xs"
                    : "bg-[#F4EFE6] text-[#6C665F] hover:text-[#1B1917] hover:bg-[#E8E2D7]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-3xl border-2 border-[#E8E2D7] bg-[#F4EFE6] p-8 sm:p-12 mb-20 overflow-hidden">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl border border-[#E8E2D7] bg-[#E8E2D7] lg:col-span-7">
              <Image
                src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=1200&auto=format&fit=crop"
                alt="Ozone Spa Hydrotherapy Kumo Pet Atelier"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div className="absolute top-4 left-4 bg-white/95 px-3 py-1.5 rounded-full font-mono text-[10px] tracking-wider text-[#E25B36] font-bold uppercase backdrop-blur-md flex items-center gap-1.5 shadow-xs">
                <Heart className="w-3 h-3 fill-[#E25B36]" />
                <span>Zero Trauma Guarantee</span>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-5">
              <span className="font-mono text-xs font-bold tracking-widest text-[#E25B36] uppercase">
                Featured Ritual
              </span>
              <h3 className="font-extrabold text-2xl sm:text-3xl text-[#1B1917] uppercase leading-tight">
                Aroma Herbal &amp; Ozone Hydrotherapy
              </h3>
              <p className="text-xs sm:text-sm text-[#6C665F] font-normal leading-relaxed">
                Kami menggabungkan gelembung mikro ozon aktif dengan air hangat bersuhu konstan 37.5°C untuk mengangkat bakteri kulit, melembutkan bulu kusam, dan meredakan rasa cemas anabul secara alami tanpa kabinet pengering bising.
              </p>
              <div className="pt-2 text-xs text-[#1B1917] space-y-2 font-medium">
                <p className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#E25B36]" />
                  <span>Suhu air diatur presisi 37.5 derajat Celsius</span>
                </p>
                <p className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#E25B36]" />
                  <span>100% Pengeringan hand-blow manual tanpa kandang</span>
                </p>
                <p className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#E25B36]" />
                  <span>Sampo vegan alami bebas sulfat &amp; paraben</span>
                </p>
              </div>
              <div className="pt-4">
                <a
                  href="#booking"
                  className="inline-flex h-12 items-center justify-center rounded-2xl bg-[#E25B36] hover:bg-[#CC4E2C] px-7 text-xs font-bold tracking-[0.1em] text-white uppercase transition-all shadow-sm"
                >
                  Book Grooming &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-16">
          {filtered.map((service, index) => (
            <article
              key={service.id}
              className="grid items-center gap-8 lg:grid-cols-12 lg:gap-16 border-b border-[#E8E2D7] pb-16 last:border-b-0"
            >
              <div
                className={`relative aspect-16/10 w-full overflow-hidden rounded-3xl border-2 border-[#E8E2D7] bg-[#F4EFE6] lg:col-span-6 group ${
                  index % 2 === 1 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-104"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 rounded-full font-mono text-[10px] tracking-wider text-[#E25B36] font-bold uppercase shadow-xs">
                  {service.tag}
                </div>
              </div>

              <div
                className={`flex flex-col justify-between lg:col-span-6 ${
                  index % 2 === 1 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#E8E2D7] pb-3">
                    <span className="font-mono text-xs font-extrabold text-[#E25B36]">
                      RITUAL 0{index + 1}
                    </span>
                    <span className="font-mono text-xs text-[#6C665F] flex items-center gap-1.5 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#E25B36]" />
                      <span>{service.duration}</span>
                    </span>
                  </div>

                  <h3 className="mt-4 font-extrabold text-2xl sm:text-3xl tracking-tight text-[#1B1917] uppercase">
                    {service.name}
                  </h3>

                  <p className="mt-3 text-xs leading-relaxed text-[#6C665F] sm:text-sm font-normal">
                    {service.shortDesc}
                  </p>

                  <div className="mt-6 border-t border-[#E8E2D7] pt-5">
                    <p className="text-xs text-[#1B1917] font-bold mb-2">
                      Cocok untuk: <span className="text-[#6C665F] font-normal">{service.suitableFor}</span>
                    </p>
                    <ul className="space-y-1.5 text-xs text-[#6C665F]">
                      {service.comfortFeatures.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <span className="text-[#E25B36] font-bold">&bull;</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-[#E8E2D7] pt-6">
                  <div>
                    <span className="block text-[10px] font-mono tracking-wider text-[#6C665F] uppercase">
                      Estimasi Biaya
                    </span>
                    <span className="font-serif text-2xl font-bold text-[#1B1917]">
                      {service.priceStart}
                    </span>
                  </div>

                  <a
                    href="#booking"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#1B1917] hover:bg-[#E25B36] px-5 py-2.5 text-xs font-bold tracking-wider text-white uppercase transition-all duration-300 shadow-xs"
                  >
                    <span>Pilih Sesi</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
