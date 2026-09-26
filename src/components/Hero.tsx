"use client";

import Image from "next/image";
import { studioData } from "@/data/petstudio";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  const { contact } = studioData;

  const quickPillars = [
    {
      number: "01",
      title: "Ozone Hydrotherapy Spa",
      desc: "Rendam gelembung ozon hangat membersihkan bakteri dan meredakan radang kulit tanpa zat kimiawi.",
      badge: "Mulai Rp 220rb",
      href: "#grooming",
    },
    {
      number: "02",
      title: "Asian Fusion Scissor Styling",
      desc: "Penataan bentuk bulu presisi estetika Jepang dengan gunting halus tanpa menarik akar bulu sensitif.",
      badge: "Stylist Bersertifikat",
      href: "#grooming",
    },
    {
      number: "03",
      title: "Cage-Free Boutique Hotel",
      desc: "Suite kamar privat ber-AC dengan lantai kayu hangat dan kamera streaming 24 jam untuk pemilik.",
      badge: "Kamera Live 24/7",
      href: "#hotel",
    },
    {
      number: "04",
      title: "Curated Pantry & Apothecary",
      desc: "Pakan freeze-dried murni, camilan organik pasture-raised, dan minyak herbal sendi kualitas ekspor.",
      badge: "100% Human-Grade",
      href: "#pantry",
    },
  ];

  return (
    <section className="relative bg-[#FAF8F5] pt-24 pb-20 sm:pt-32 sm:pb-28 border-b border-[#E7E2D9]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E7E2D9] pb-6 text-[11px] font-mono tracking-[0.25em] text-[#6C6760] uppercase">
          <span>Surabaya Timur &bull; Dharmahusada Indah</span>
          <span className="hidden sm:inline">Izin Praktik: 503/089/VET-SBY/2023</span>
          <span>Sanctuary Perawatan Hewan Modern</span>
        </div>

        <div className="mt-12 lg:mt-16">
          <span className="text-xs font-semibold tracking-[0.3em] text-[#58694B] uppercase">
            Modern Pet Atelier &amp; Wellness Sanctuary
          </span>

          <h1 className="mt-4 font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-normal tracking-tight text-[#1E1C1A] leading-[1.02]">
            GENTLE CARE, <br />
            <span className="italic font-light text-[#58694B]">FOR YOUR COMPANIONS.</span>
          </h1>
        </div>

        <div className="mt-12 lg:mt-16 grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <p className="text-base sm:text-lg text-[#6C6760] font-light leading-relaxed">
                Perawatan holistik yang mengutamakan ketenangan batin anabul, spa air ozon bebas trauma,
                dan kamar hotel ber-AC tanpa kandang sempit yang dirancang untuk kenyamanan keluarga berbulu Anda.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-5">
                <a
                  href="#booking"
                  className="inline-flex h-12 items-center justify-center border border-[#58694B] bg-[#58694B] px-7 text-xs font-bold tracking-[0.2em] text-[#FAF8F5] uppercase transition-all duration-300 hover:bg-transparent hover:text-[#58694B]"
                >
                  Pilih Jadwal Perawatan &rarr;
                </a>

                <a
                  href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
                    "Halo Kumo Pet Atelier, saya ingin konsultasi mengenai jadwal grooming dan ketersediaan hotel suite anabul."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#1E1C1A] uppercase transition-colors hover:text-[#58694B]"
                >
                  <span>Konsultasi WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4 text-[#58694B]" />
                </a>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-6 border-t border-[#E7E2D9] pt-8 font-mono">
              <div>
                <span className="block font-serif text-2xl font-bold text-[#1E1C1A] sm:text-3xl">
                  8+ THN
                </span>
                <span className="mt-1 block text-[10px] tracking-[0.2em] text-[#6C6760] uppercase">
                  Pengalaman
                </span>
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold text-[#58694B] sm:text-3xl">
                  4.200+
                </span>
                <span className="mt-1 block text-[10px] tracking-[0.2em] text-[#6C6760] uppercase">
                  Sesi Terlayani
                </span>
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold text-[#1E1C1A] sm:text-3xl">
                  4.9 / 5.0
                </span>
                <span className="mt-1 block text-[10px] tracking-[0.2em] text-[#6C6760] uppercase">
                  Ulasan Google
                </span>
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-7">
            <div className="relative aspect-16/10 w-full overflow-hidden border border-[#E7E2D9] bg-[#F3EFEA]">
              <Image
                src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?q=85&w=1400&auto=format&fit=crop"
                alt="Ruang perawatan tenang Kumo Pet Atelier Surabaya"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1C1A]/60 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 border border-white/40 bg-[#FAF8F5]/90 p-5 backdrop-blur-md">
                <div className="flex items-center justify-between text-[10px] font-mono tracking-[0.2em] text-[#6C6760] uppercase">
                  <span>Sanctuary Suite 01</span>
                  <span className="text-[#58694B] font-bold">100% Bebas Kandang</span>
                </div>
                <p className="mt-2 font-serif text-sm font-semibold tracking-wider text-[#1E1C1A] uppercase">
                  Kenyamanan Holistik &bull; Air Hangat Ozon
                </p>
                <p className="mt-1 text-xs text-[#6C6760]">
                  Dilengkapi pembersih bulu kebisingan rendah, aromaterapi herbal alami, dan lantai berpemanas lembut.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="pilar" className="mt-28 border-t border-[#E7E2D9] pt-16">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-semibold tracking-[0.3em] text-[#58694B] uppercase">
                Pilar Layanan
              </span>
              <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-[#1E1C1A] sm:text-4xl uppercase">
                Standar Perawatan Terpadu
              </h2>
            </div>
            <p className="max-w-md text-xs leading-relaxed text-[#6C6760] font-light">
              Setiap prosedur dirancang berdasarkan pemahaman mendalam perilaku psikologis anjing dan kucing untuk menghilangkan trauma salon hewan konvensional.
            </p>
          </div>

          <div className="mt-12 grid divide-y divide-[#E7E2D9] border-y border-[#E7E2D9]">
            {quickPillars.map((item) => (
              <a
                key={item.number}
                href={item.href}
                className="group grid items-center gap-6 py-8 transition-colors duration-300 hover:bg-[#F3EFEA] lg:grid-cols-12 lg:gap-8 px-4 sm:px-6"
              >
                <div className="flex items-center gap-4 lg:col-span-4">
                  <span className="font-mono text-sm font-bold text-[#58694B]">
                    {item.number}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#1E1C1A] uppercase group-hover:text-[#58694B] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs leading-relaxed text-[#6C6760] lg:col-span-5 font-light">
                  {item.desc}
                </p>

                <div className="flex items-center justify-between gap-4 lg:col-span-3 lg:justify-end font-mono">
                  <span className="text-xs font-semibold text-[#58694B]">
                    {item.badge}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center border border-[#E7E2D9] text-[#6C6760] transition-all duration-300 group-hover:border-[#58694B] group-hover:text-[#58694B] group-hover:translate-x-1">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
