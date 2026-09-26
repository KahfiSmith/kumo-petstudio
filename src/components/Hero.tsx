"use client";

import Image from "next/image";
import { ArrowUpRight, Heart, Star, ShoppingBag, ShieldCheck } from "lucide-react";

export function Hero() {
  const trustMetrics = [
    {
      number: "500+",
      label: "Happy Tails",
      sub: "Bebas cemas & santai",
    },
    {
      number: "5+",
      label: "Tahun Berbagi Ceria",
      sub: "Didedikasikan untuk anabul",
    },
    {
      number: "4.9",
      label: "Rating Kepuasan",
      sub: "320+ Ulasan Google Maps",
    },
    {
      number: "100%",
      label: "Safe Goodies",
      sub: "Alami & teruji dokter hewan",
    },
  ];

  return (
    <section className="relative bg-[#FFFDF9] pt-28 pb-16 sm:pt-36 sm:pb-24 border-b-2 border-[#EAE5D9] overflow-hidden">
      <div className="absolute top-12 -left-20 w-72 h-72 rounded-full bg-[#FEF9E7] -z-10 blur-2xl opacity-70" />
      <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-[#FFF1EE] -z-10 blur-3xl opacity-70" />

      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="flex flex-col justify-center lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEF9E7] border-2 border-[#FFC72C] text-[#18181B] text-xs font-black tracking-wider uppercase w-fit shadow-xs">
              <Heart className="w-3.5 h-3.5 fill-[#FF5C35] text-[#FF5C35]" />
              <span>Hey, Pet Parents! Dunia Ceria Anabul</span>
            </div>

            <h1 className="font-black text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-[#18181B] leading-[0.95] uppercase">
              GOOD FOOD. <br />
              <span className="text-[#FF5C35]">HAPPY TAILS.</span> <br />
              BIG SMILES.
            </h1>

            <p className="text-base sm:text-lg text-[#52525B] font-semibold leading-relaxed max-w-xl">
              Semua yang dibutuhkan sahabat berbulu Anda dalam satu tempat ceria. Mulai dari pakan bernutrisi murni, camilan pembersih plak, hingga spa relaksasi bebas trauma dan hotel privat ber-AC.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#shop-pantry"
                className="inline-flex h-14 items-center justify-center rounded-2xl bg-[#FF5C35] hover:bg-[#E84A23] px-8 text-xs sm:text-sm font-black tracking-wider text-white uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 active:translate-y-0"
              >
                <ShoppingBag className="w-4 h-4 mr-2" />
                <span>Shop Favorites</span>
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </a>

              <a
                href="#care-services"
                className="inline-flex h-14 items-center justify-center rounded-2xl bg-[#2563EB] hover:bg-[#1D4ED8] px-8 text-xs sm:text-sm font-black tracking-wider text-white uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 active:translate-y-0"
              >
                <span>Explore Pet Care</span>
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </a>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#F0FDF4] border border-[#16A34A]/30 text-[11px] font-bold text-[#15803D]">
                <ShieldCheck className="w-3.5 h-3.5" />
                100% Fear-Free Certified
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#FFFBEB] border border-[#FFC72C]/40 text-[11px] font-bold text-[#B45309]">
                <Star className="w-3.5 h-3.5 fill-[#FFC72C] text-[#FFC72C]" />
                Single Protein Treats
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#EFF6FF] border border-[#2563EB]/30 text-[11px] font-bold text-[#2563EB]">
                <Heart className="w-3.5 h-3.5 fill-[#2563EB] text-[#2563EB]" />
                Same-Day Surabaya Delivery
              </span>
            </div>
          </div>

          <div className="relative lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 bg-[#FFC72C] rounded-[3rem] rotate-2 -z-10 shadow-sm opacity-90" />
              <div className="absolute -inset-2 bg-[#2563EB] rounded-[3rem] -rotate-2 -z-10 opacity-30" />

              <div className="relative aspect-4/5 w-full rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl bg-[#FEF9E7]">
                <Image
                  src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?q=85&w=1000&auto=format&fit=crop"
                  alt="Anjing dan Kucing Ceria Kumo Pets"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover hover:scale-104 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
              </div>

              <div className="absolute -bottom-6 -left-6 max-w-[240px] bg-white rounded-2xl border-2 border-[#18181B] p-3.5 shadow-xl -rotate-2 hover:rotate-0 transition-transform">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-2 py-0.5 rounded-full bg-[#FF5C35] text-[10px] font-black text-white uppercase tracking-wider">
                    BEST SELLER
                  </span>
                  <span className="text-[10px] font-bold text-[#16A34A]">Stok Terbatas</span>
                </div>
                <p className="font-extrabold text-xs text-[#18181B] leading-tight mb-1">
                  Wild Salmon Cold-Pressed Bites
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-black text-sm text-[#FF5C35]">Rp 145.000</span>
                  <span className="text-[10px] font-bold text-[#52525B]">85% Salmon</span>
                </div>
              </div>

              <div className="absolute -top-5 -right-5 w-24 h-24 rounded-full bg-[#FF5C35] text-white flex flex-col items-center justify-center p-2 text-center rotate-12 shadow-lg border-2 border-white hover:scale-110 transition-transform cursor-pointer">
                <Star className="w-4 h-4 fill-white text-white mb-0.5" />
                <span className="text-[10px] font-black tracking-tight leading-none uppercase">
                  100% YUM!
                </span>
                <span className="text-[8px] font-bold tracking-wider uppercase mt-0.5 opacity-90">
                  Pet Fav
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t-2 border-[#EAE5D9]">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
            {trustMetrics.map((item, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl bg-white border-2 border-[#EAE5D9] hover:border-[#FF5C35] transition-colors shadow-xs group"
              >
                <span className="font-black text-3xl sm:text-4xl text-[#FF5C35] group-hover:scale-105 inline-block transition-transform">
                  {item.number}
                </span>
                <span className="block font-black text-xs sm:text-sm text-[#18181B] uppercase tracking-wide mt-1">
                  {item.label}
                </span>
                <span className="block text-[11px] font-medium text-[#52525B] mt-0.5">
                  {item.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
