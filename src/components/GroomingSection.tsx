"use client";

import { useState } from "react";
import Image from "next/image";
import { studioData } from "@/data/petstudio";
import { ArrowUpRight, Sparkles, Clock, Check } from "lucide-react";

export function GroomingSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "Semua Layanan" },
    { id: "signature-spa", label: "Signature Spa" },
    { id: "gentle-grooming", label: "Gentle Styling" },
    { id: "wellness-therapy", label: "Wellness Therapy" },
  ];

  const filtered =
    activeCategory === "all"
      ? studioData.groomingServices
      : studioData.groomingServices.filter((s) => s.category === activeCategory);

  return (
    <section id="grooming" className="scroll-mt-24 py-24 sm:py-32 bg-[#FAF8F5] text-[#1E1C1A] border-b border-[#E7E2D9]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col justify-between gap-6 border-b border-[#E7E2D9] pb-8 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#58694B]" />
              <span className="text-[11px] font-semibold tracking-[0.25em] text-[#58694B] uppercase">
                01 / Spa &amp; Gentle Grooming
              </span>
            </div>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-[#1E1C1A] sm:text-4xl lg:text-5xl uppercase">
              Ritual Pembersihan &amp; Relaksasi
            </h2>
          </div>

          <div className="flex flex-wrap gap-5 text-xs font-mono tracking-[0.15em] uppercase">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`pb-2 transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "border-b-2 border-[#58694B] text-[#1E1C1A] font-bold"
                    : "text-[#6C6760] hover:text-[#1E1C1A]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-16 border border-[#E7E2D9] bg-[#F3EFEA] p-8 sm:p-12 mb-20">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="relative aspect-16/10 w-full overflow-hidden border border-[#E7E2D9] bg-[#E7E2D9] lg:col-span-7">
              <Image
                src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=1200&auto=format&fit=crop"
                alt="Ozone Spa Hydrotherapy Kumo Pet Atelier"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div className="absolute top-4 left-4 border border-[#E7E2D9] bg-[#FAF8F5]/90 px-3 py-1 font-mono text-[10px] tracking-[0.2em] text-[#58694B] uppercase backdrop-blur-md flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#58694B]" />
                <span>Signature Sanctuary Care</span>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-5">
              <span className="font-mono text-xs font-semibold tracking-[0.25em] text-[#58694B] uppercase">
                Prosedur Unggulan
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E1C1A] uppercase leading-tight">
                Aroma Herbal &amp; Ozone Hydrotherapy
              </h3>
              <p className="text-xs sm:text-sm text-[#6C6760] font-light leading-relaxed">
                Kami menggabungkan generator ozon medis dengan rendaman air hangat konstan untuk mengangkat mikroorganisme jamur, meredakan ketombe, dan melepaskan bulu mati tanpa menyiksa anabul dengan garukan kasar.
              </p>
              <div className="pt-2 font-mono text-xs text-[#58694B] space-y-2">
                <p className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5" />
                  <span>Suhu air diatur presisi 37.5 derajat Celsius</span>
                </p>
                <p className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5" />
                  <span>Bebas sangkar pengeringan (100% hand blow manual)</span>
                </p>
                <p className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5" />
                  <span>Aman tertelan bagi anjing dan kucing sensitif</span>
                </p>
              </div>
              <div className="pt-4">
                <a
                  href="#booking"
                  className="inline-flex h-11 items-center justify-center border border-[#58694B] bg-[#58694B] px-6 text-xs font-bold tracking-[0.15em] text-[#FAF8F5] uppercase transition-all duration-300 hover:bg-transparent hover:text-[#58694B]"
                >
                  Konsultasi Jadwal Spa &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-20">
          {filtered.map((service, index) => (
            <article
              key={service.id}
              className="grid items-center gap-8 lg:grid-cols-12 lg:gap-16 border-b border-[#E7E2D9] pb-16 last:border-b-0"
            >
              <div
                className={`relative aspect-16/10 w-full overflow-hidden border border-[#E7E2D9] bg-[#E7E2D9] lg:col-span-6 group ${
                  index % 2 === 1 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 border border-[#E7E2D9] bg-[#FAF8F5]/90 px-3 py-1 font-mono text-[10px] tracking-[0.2em] text-[#58694B] uppercase backdrop-blur-md">
                  {service.tag}
                </div>
              </div>

              <div
                className={`flex flex-col justify-between lg:col-span-6 ${
                  index % 2 === 1 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#E7E2D9] pb-3">
                    <span className="font-mono text-sm font-bold text-[#58694B]">
                      LAYANAN 0{index + 1}
                    </span>
                    <span className="font-mono text-xs text-[#6C6760] flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{service.duration}</span>
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-2xl font-bold tracking-tight text-[#1E1C1A] uppercase sm:text-3xl">
                    {service.name}
                  </h3>

                  <p className="mt-3 text-xs leading-relaxed text-[#6C6760] sm:text-sm font-light">
                    {service.shortDesc}
                  </p>

                  <div className="mt-6 border-t border-[#E7E2D9] pt-5">
                    <span className="block text-[10px] font-mono tracking-[0.2em] text-[#6C6760] uppercase mb-2">
                      Rekomendasi &amp; Standar Kenyamanan
                    </span>
                    <p className="text-xs text-[#1E1C1A] font-medium mb-3">
                      Cocok untuk: <span className="text-[#6C6760] font-normal">{service.suitableFor}</span>
                    </p>
                    <ul className="space-y-1.5 text-xs text-[#6C6760]">
                      {service.comfortFeatures.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <span className="text-[#58694B] font-mono">&bull;</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-[#E7E2D9] pt-6">
                  <div>
                    <span className="block text-[10px] font-mono tracking-[0.2em] text-[#6C6760] uppercase">
                      Estimasi Biaya
                    </span>
                    <span className="font-mono text-lg font-bold text-[#1E1C1A]">
                      {service.priceStart}
                    </span>
                  </div>

                  <a
                    href="#booking"
                    className="inline-flex items-center gap-2 border border-[#58694B] px-4 py-2 text-xs font-semibold tracking-[0.15em] text-[#58694B] uppercase transition-all duration-300 hover:bg-[#58694B] hover:text-[#FAF8F5]"
                  >
                    <span>Reservasi Sesi</span>
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
