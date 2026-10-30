"use client";

import { studioData } from "@/data/petstudio";
import { Star, Quote } from "lucide-react";
import { motion } from "motion/react";
import { KineticHeadline } from "@/components/motion/KineticHeadline";

export function ReviewsSection() {
  const { reviews } = studioData;

  return (
    <section className="py-24 sm:py-32 bg-[#FFFDF9] text-[#18181B] border-b-2 border-[#EAE5D9]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFBEB] text-[#B45309] text-xs font-black tracking-wider uppercase mb-3 border-2 border-[#FFC72C]/40 shadow-2xs">
              <Star className="w-3.5 h-3.5 fill-[#FFC72C] text-[#FFC72C]" />
              <span>Happy Customers</span>
            </div>
            <KineticHeadline
              as="h2"
              className="font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#18181B] uppercase leading-none"
              lines={[
                { text: "LOVE FROM" },
                { text: "OUR EXTENDED PACK.", highlight: true, highlightClass: "text-[#FF5C35]" },
              ]}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#FEF9E7] p-6 rounded-3xl border-2 border-[#18181B] flex items-center gap-6 shrink-0 shadow-md"
          >
            <div>
              <div className="flex items-center gap-1 text-[#FFC72C] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FFC72C]" />
                ))}
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-[#18181B]">4.9</span>
                <span className="text-xs font-bold text-[#52525B]">/ 5.0 Google Rating</span>
              </div>
            </div>
            <div className="w-[2px] h-12 bg-[#18181B]/20" />
            <div className="text-xs text-[#52525B] font-semibold max-w-[170px] leading-relaxed">
              Berdasarkan 320+ pengalaman pet parent terverifikasi di Surabaya
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <motion.article
              key={rev.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{ y: -8 }}
              className="p-8 rounded-[2.5rem] bg-white border-2 border-[#18181B] flex flex-col justify-between transition-shadow duration-300 hover:shadow-2xl relative group shadow-md"
            >
              <div>
                <Quote className="w-10 h-10 text-[#FF5C35] mb-4 opacity-80 group-hover:scale-110 transition-transform duration-300" />

                <div className="space-y-4">
                  <div className="flex items-center text-[#FFC72C]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FFC72C]" />
                    ))}
                  </div>

                  <blockquote className="font-extrabold text-base sm:text-lg text-[#18181B] leading-relaxed">
                    &ldquo;{rev.comment}&rdquo;
                  </blockquote>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t-2 border-[#EAE5D9]">
                <p className="font-black text-sm text-[#18181B]">
                  {rev.author} <span className="text-xs font-semibold text-[#52525B]">(Human of {rev.petName})</span>
                </p>
                <p className="text-[11px] font-bold text-[#FF5C35] mt-0.5">{rev.petInfo}</p>
                <p className="text-[10px] text-[#52525B] mt-0.5">{rev.date}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
