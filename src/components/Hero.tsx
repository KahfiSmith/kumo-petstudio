"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, Heart, Star, ShoppingBag, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";
import { SPRINGS } from "@/lib/motion";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const imageFrameRef = useRef<HTMLDivElement>(null);
  const yellowCardRef = useRef<HTMLDivElement>(null);
  const blueCardRef = useRef<HTMLDivElement>(null);
  const floatCardRef = useRef<HTMLDivElement>(null);
  const stampRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const { gsap } = getGsap();

    const ctx = gsap.context(() => {
      // 1. Headline line reveals
      const words = headlineRef.current?.querySelectorAll(".hero-word");
      if (words && words.length > 0) {
        gsap.fromTo(
          words,
          { yPercent: 120, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.04,
            ease: "power3.out",
            delay: 0.1,
          }
        );
      }

      // 2. Coordinated Hero Image Reveal
      if (imageFrameRef.current) {
        gsap.fromTo(
          imageFrameRef.current,
          { clipPath: "inset(12% 0% 12% 0% round 2.5rem)", opacity: 0, scale: 0.94 },
          {
            clipPath: "inset(0% 0% 0% 0% round 2.5rem)",
            opacity: 1,
            scale: 1,
            duration: 1.1,
            ease: "power3.out",
            delay: 0.25,
          }
        );
      }

      // 3. Layered background rotation cards
      if (yellowCardRef.current && blueCardRef.current) {
        gsap.fromTo(
          yellowCardRef.current,
          { rotate: -8, scale: 0.85, opacity: 0 },
          { rotate: 2, scale: 1, opacity: 0.9, duration: 1, ease: "back.out(1.4)", delay: 0.4 }
        );
        gsap.fromTo(
          blueCardRef.current,
          { rotate: 8, scale: 0.85, opacity: 0 },
          { rotate: -2, scale: 1, opacity: 0.3, duration: 1, ease: "back.out(1.4)", delay: 0.45 }
        );
      }

      // 4. Floating Best-Seller Badge & 100% YUM Stamp
      if (floatCardRef.current) {
        gsap.fromTo(
          floatCardRef.current,
          { y: 30, opacity: 0, rotate: -8 },
          { y: 0, opacity: 1, rotate: -2, duration: 0.9, ease: "back.out(1.5)", delay: 0.6 }
        );
      }

      if (stampRef.current) {
        gsap.fromTo(
          stampRef.current,
          { scale: 0, rotate: -40, opacity: 0 },
          { scale: 1, rotate: 12, opacity: 1, duration: 0.8, ease: "back.out(1.8)", delay: 0.7 }
        );
      }

      // 5. Scroll-driven subtle parallax between visual layers
      if (imageFrameRef.current && containerRef.current) {
        gsap.to(imageFrameRef.current, {
          y: -25,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });

        if (floatCardRef.current) {
          gsap.to(floatCardRef.current, {
            y: -45,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1.2,
            },
          });
        }
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#FFFDF9] pt-28 pb-16 sm:pt-36 sm:pb-24 border-b-2 border-[#EAE5D9] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-12 -left-20 w-72 h-72 rounded-full bg-[#FEF9E7] -z-10 blur-2xl opacity-70 animate-pulse pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-[#FFF1EE] -z-10 blur-3xl opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="flex flex-col justify-center lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEF9E7] border-2 border-[#FFC72C] text-[#18181B] text-xs font-black tracking-wider uppercase w-fit shadow-xs"
            >
              <Heart className="w-3.5 h-3.5 fill-[#FF5C35] text-[#FF5C35]" />
              <span>Hey, Pet Parents! Dunia Ceria Anabul</span>
            </motion.div>

            <h1
              ref={headlineRef}
              className="font-black text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-[#18181B] leading-[0.95] uppercase"
              aria-label="GOOD FOOD. HAPPY TAILS. BIG SMILES."
            >
              <span className="block overflow-hidden py-0.5">
                <span className="hero-word inline-block mr-[0.25em]">GOOD</span>
                <span className="hero-word inline-block">FOOD.</span>
              </span>
              <span className="block overflow-hidden py-0.5 text-[#FF5C35]">
                <span className="hero-word inline-block mr-[0.25em]">HAPPY</span>
                <span className="hero-word inline-block">TAILS.</span>
              </span>
              <span className="block overflow-hidden py-0.5">
                <span className="hero-word inline-block mr-[0.25em]">BIG</span>
                <span className="hero-word inline-block">SMILES.</span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-[#52525B] font-semibold leading-relaxed max-w-xl"
            >
              Semua yang dibutuhkan sahabat berbulu Anda dalam satu tempat ceria. Mulai dari pakan bernutrisi murni, camilan pembersih plak, hingga spa relaksasi bebas trauma dan hotel privat ber-AC.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={SPRINGS.tactile}
                href="#shop-pantry"
                className="group inline-flex h-14 items-center justify-center rounded-2xl bg-[#FF5C35] hover:bg-[#E84A23] px-8 text-xs sm:text-sm font-black tracking-wider text-white uppercase shadow-md hover:shadow-lg"
              >
                <ShoppingBag className="w-4 h-4 mr-2" />
                <span>Shop Favorites</span>
                <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={SPRINGS.tactile}
                href="#care-services"
                className="group inline-flex h-14 items-center justify-center rounded-2xl bg-[#2563EB] hover:bg-[#1D4ED8] px-8 text-xs sm:text-sm font-black tracking-wider text-white uppercase shadow-md hover:shadow-lg"
              >
                <span>Explore Pet Care</span>
                <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="pt-4 flex flex-wrap items-center gap-3"
            >
              <motion.span
                whileHover={{ scale: 1.04, y: -1 }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#F0FDF4] border border-[#16A34A]/30 text-[11px] font-bold text-[#15803D] cursor-default"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                100% Fear-Free Certified
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.04, y: -1 }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#FFFBEB] border border-[#FFC72C]/40 text-[11px] font-bold text-[#B45309] cursor-default"
              >
                <Star className="w-3.5 h-3.5 fill-[#FFC72C] text-[#FFC72C]" />
                Single Protein Treats
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.04, y: -1 }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#EFF6FF] border border-[#2563EB]/30 text-[11px] font-bold text-[#2563EB] cursor-default"
              >
                <Heart className="w-3.5 h-3.5 fill-[#2563EB] text-[#2563EB]" />
                Same-Day Surabaya Delivery
              </motion.span>
            </motion.div>
          </div>

          <div className="relative lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <div
                ref={yellowCardRef}
                className="absolute -inset-4 bg-[#FFC72C] rounded-[3rem] rotate-2 -z-10 shadow-sm opacity-90"
              />
              <div
                ref={blueCardRef}
                className="absolute -inset-2 bg-[#2563EB] rounded-[3rem] -rotate-2 -z-10 opacity-30"
              />

              <div
                ref={imageFrameRef}
                className="relative aspect-4/5 w-full rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl bg-[#FEF9E7] group"
              >
                <Image
                  src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?q=85&w=1000&auto=format&fit=crop"
                  alt="Anjing dan Kucing Ceria Kumo Pets"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>

              <div
                ref={floatCardRef}
                className="absolute -bottom-6 -left-6 max-w-[240px] bg-white rounded-2xl border-2 border-[#18181B] p-3.5 shadow-xl -rotate-2 hover:rotate-0 transition-transform duration-300 group cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-2 py-0.5 rounded-full bg-[#FF5C35] text-[10px] font-black text-white uppercase tracking-wider">
                    BEST SELLER
                  </span>
                  <span className="text-[10px] font-bold text-[#16A34A]">Stok Terbatas</span>
                </div>
                <p className="font-extrabold text-xs text-[#18181B] leading-tight mb-1 group-hover:text-[#FF5C35] transition-colors">
                  Wild Salmon Cold-Pressed Bites
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-black text-sm text-[#FF5C35]">Rp 145.000</span>
                  <span className="text-[10px] font-bold text-[#52525B]">85% Salmon</span>
                </div>
              </div>

              <div
                ref={stampRef}
                className="absolute -top-5 -right-5 w-24 h-24 rounded-full bg-[#FF5C35] text-white flex flex-col items-center justify-center p-2 text-center rotate-12 shadow-lg border-2 border-white hover:scale-110 transition-transform duration-300 cursor-pointer"
              >
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
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4, borderColor: "#FF5C35" }}
                className="p-5 rounded-2xl bg-white border-2 border-[#EAE5D9] transition-all duration-300 shadow-xs group cursor-default"
              >
                <span className="font-black text-3xl sm:text-4xl text-[#FF5C35] group-hover:scale-105 inline-block transition-transform duration-300">
                  {item.number}
                </span>
                <span className="block font-black text-xs sm:text-sm text-[#18181B] uppercase tracking-wide mt-1">
                  {item.label}
                </span>
                <span className="block text-[11px] font-medium text-[#52525B] mt-0.5">
                  {item.sub}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
