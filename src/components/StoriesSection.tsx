"use client";

import Image from "next/image";
import { studioData } from "@/data/petstudio";
import { Clock, CheckCircle2, ArrowUpRight, Heart } from "lucide-react";
import { motion } from "motion/react";
import { KineticHeadline } from "@/components/motion/KineticHeadline";
import { SPRINGS } from "@/lib/motion";

export function StoriesSection() {
  const { transformationStories, contact } = studioData;

  return (
    <section id="kisah" className="scroll-mt-24 py-24 sm:py-32 bg-[#FEF9E7] text-[#18181B] border-b-2 border-[#EAE5D9]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#FF5C35] text-xs font-black tracking-wider uppercase mb-3 border-2 border-[#FF5C35]/30 shadow-2xs">
            <Heart className="w-3.5 h-3.5 fill-[#FF5C35] text-[#FF5C35]" />
            <span>Kisah Nyata Sahabat Kumo</span>
          </div>

          <KineticHeadline
            as="h2"
            className="font-black text-4xl sm:text-5xl lg:text-6xl text-[#18181B] uppercase tracking-tight leading-none mb-4"
            lines={[
              { text: "KENYAMANAN NYATA." },
              { text: "KILAU SEHAT ALAMI.", highlight: true, highlightClass: "text-[#FF5C35]" },
            ]}
          />

          <p className="text-sm sm:text-base text-[#52525B] leading-relaxed font-semibold max-w-2xl">
            Setiap anabul punya sensitivitas unik. Kami mendokumentasikan hasil nyata perawatan spa dan penataan bulu dengan pendekatan sabar tanpa paksaan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {transformationStories.map((story, index) => (
            <motion.article
              key={story.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-[2.5rem] p-6 sm:p-8 border-2 border-[#18181B] flex flex-col justify-between group transition-shadow duration-300 hover:shadow-2xl shadow-md"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b-2 border-[#EAE5D9] mb-5">
                  <span className="text-xs font-black tracking-wider text-[#FF5C35] uppercase">
                    Kisah 0{index + 1} : {story.petName}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#EFF6FF] text-xs font-black text-[#2563EB] border border-[#2563EB]/30">
                    {story.service}
                  </span>
                </div>

                <div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl bg-[#FEF9E7] mb-6 border-2 border-[#18181B]">
                  <Image
                    src={story.image}
                    alt={`${story.petName} - ${story.breed}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-xs text-[11px] font-bold">
                      <Clock className="w-3 h-3 text-white" />
                      <span>{story.treatmentDuration}</span>
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-xs text-[11px] font-bold">
                      {story.breed}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-black text-2xl text-[#18181B] leading-snug uppercase group-hover:text-[#FF5C35] transition-colors">
                    Transformasi {story.petName} ({story.breed})
                  </h3>

                  <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed font-semibold italic">
                    &ldquo;{story.story}&rdquo;
                  </p>

                  <div className="p-3.5 rounded-2xl bg-[#F0FDF4] border border-[#16A34A]/30 text-xs text-[#15803D] flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                    <span className="leading-relaxed font-bold">{story.resultHighlight}</span>
                  </div>

                  <p className="text-xs text-[#52525B] font-semibold">
                    Pet Parent: <span className="text-[#18181B] font-black">{story.ownerName}</span>
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t-2 border-[#EAE5D9]">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={SPRINGS.tactile}
                  href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
                    `Halo Kumo Pets, saya membaca kisah transformasi ${story.petName} (${story.service}). Saya ingin konsultasi apakah anabul saya bisa mendapatkan hasil serupa?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full py-3.5 px-5 rounded-2xl bg-[#FEF9E7] hover:bg-[#FF5C35] text-[#18181B] hover:text-white border-2 border-[#18181B] text-xs font-black uppercase tracking-wider transition-colors duration-200 group/btn shadow-xs"
                >
                  <span>Konsultasi Kasus Serupa via WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4 text-[#18181B] group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
