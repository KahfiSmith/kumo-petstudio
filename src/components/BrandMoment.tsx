"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Heart, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";
import { KineticHeadline } from "@/components/motion/KineticHeadline";
import { SPRINGS } from "@/lib/motion";

export function BrandMoment() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const { gsap } = getGsap();

    const ctx = gsap.context(() => {
      if (imageContainerRef.current && sectionRef.current) {
        gsap.to(imageContainerRef.current, {
          y: -30,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-[#18181B] text-white overflow-hidden border-b-2 border-[#18181B]"
    >
      <div className="absolute top-10 -right-20 w-80 h-80 rounded-full bg-[#FF5C35] opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-[#2563EB] opacity-20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 lg:px-10 relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#FFC72C] text-xs font-black tracking-wider uppercase border border-white/20"
            >
              <Heart className="w-3.5 h-3.5 fill-[#FFC72C] text-[#FFC72C]" />
              <span>A Love Letter to Companions</span>
            </motion.div>

            <KineticHeadline
              as="h2"
              className="font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[0.98] uppercase text-white"
              lines={[
                { text: "FOR THE ONES" },
                { text: "WHO WAIT AT", highlight: true, highlightClass: "text-[#FF5C35]" },
                { text: "THE DOOR." },
              ]}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-4 rounded-2xl bg-white/5 border border-white/15"
            >
              <p className="font-extrabold text-xl sm:text-2xl text-[#FFC72C] leading-snug">
                &ldquo;Because they are not just pets. They are family.&rdquo;
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm sm:text-base text-zinc-300 font-medium leading-relaxed max-w-lg"
            >
              Menyambut di pintu dengan kibasan ekor penuh gairah, mendengkur hangat di pangkuan setelah hari yang lelah, dan memberikan kesetiaan tanpa syarat. Segala yang kami hadirkan di Kumo dirancang untuk membalas cinta tulus tersebut.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-2 flex items-center gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={SPRINGS.tactile}
                href="#shop-pantry"
                className="group inline-flex h-13 items-center justify-center rounded-2xl bg-[#FF5C35] hover:bg-[#E84A23] px-8 text-xs sm:text-sm font-black tracking-wider text-white uppercase transition-colors shadow-md hover:shadow-lg"
              >
                <span>Shop for Them</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>
            </motion.div>
          </div>

          <div className="lg:col-span-6">
            <div
              ref={imageContainerRef}
              className="relative aspect-4/3 sm:aspect-16/11 w-full rounded-[2.5rem] overflow-hidden border-4 border-white/20 shadow-2xl group"
            >
              <Image
                src="https://images.unsplash.com/photo-1534361960057-19889db9621e?q=85&w=1200&auto=format&fit=crop"
                alt="Kedekatan hangat antara pet parent dan anabul"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-black/70 backdrop-blur-md border border-white/20 text-white"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Heart className="w-3.5 h-3.5 fill-[#FFC72C] text-[#FFC72C]" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFC72C] font-black">
                    Kumo Promise
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-bold text-white leading-relaxed">
                  Kenyamanan emosional, kesehatan pencernaan, dan kebahagiaan mereka adalah prioritas utama kami.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
