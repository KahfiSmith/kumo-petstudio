import Image from "next/image";
import { studioData } from "@/data/petstudio";
import { Clock, CheckCircle2, ArrowUpRight, Sparkles } from "lucide-react";

export function StoriesSection() {
  const { transformationStories, contact } = studioData;

  return (
    <section id="kisah" className="scroll-mt-24 py-24 sm:py-32 bg-[#FAF6F0] text-[#1B1917] border-b border-[#E8E2D7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF1ED] text-[#E25B36] text-xs font-mono tracking-widest uppercase mb-3 border border-[#E25B36]/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kisah &amp; Transformasi Nyata</span>
          </div>

          <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1B1917] uppercase tracking-tight leading-[1.05] mb-5">
            Kenyamanan Nyata. <br />
            <span className="font-serif italic font-normal text-[#E25B36]">Kilau Sehat Alami.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#6C665F] leading-relaxed font-normal max-w-2xl">
            Setiap anabul memiliki kepribadian dan sensivitas unik. Kami mendokumentasikan hasil nyata perawatan spa dan penataan bulu dengan pendekatan bebas trauma.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {transformationStories.map((story, index) => (
            <article
              key={story.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#E8E2D7] flex flex-col justify-between group transition-all duration-300 hover:border-[#E25B36] shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#F4EFE6] mb-5">
                  <span className="text-[11px] font-mono font-bold tracking-widest text-[#E25B36] uppercase">
                    Kisah 0{index + 1} : {story.petName}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#EEF3F0] text-[11px] font-bold text-[#2A4736] border border-[#2A4736]/20">
                    {story.service}
                  </span>
                </div>

                <div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl bg-[#F4EFE6] mb-6 border border-[#E8E2D7]">
                  <Image
                    src={story.image}
                    alt={`${story.petName} - ${story.breed}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/65 backdrop-blur-xs text-[11px] font-medium">
                      <Clock className="w-3 h-3 text-[#FAF6F0]" aria-hidden="true" />
                      <span>{story.treatmentDuration}</span>
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-black/65 backdrop-blur-xs text-[11px] font-medium">
                      {story.breed}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-extrabold text-xl sm:text-2xl text-[#1B1917] leading-snug">
                    Transformasi {story.petName} ({story.breed})
                  </h3>

                  <p className="text-sm text-[#6C665F] leading-relaxed italic">
                    &ldquo;{story.story}&rdquo;
                  </p>

                  <div className="p-3.5 rounded-2xl bg-[#F4EFE6] border border-[#E8E2D7] text-xs text-[#1B1917] flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2A4736] shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="leading-relaxed font-semibold">{story.resultHighlight}</span>
                  </div>

                  <p className="text-[11px] text-[#6C665F]">
                    Pet Parent: <span className="text-[#1B1917] font-bold">{story.ownerName}</span>
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F4EFE6]">
                <a
                  href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
                    `Halo Kumo Pet Studio, saya membaca kisah perawatan ${story.petName} (${story.service}). Saya ingin konsultasi apakah anabul saya bisa dirawat dengan prosedur serupa?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full py-3.5 px-5 rounded-2xl bg-[#F4EFE6] hover:bg-[#E25B36] text-[#1B1917] hover:text-white text-xs font-bold uppercase tracking-wider transition-all group/btn"
                >
                  <span>Konsultasi Kasus Ini via WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4 text-[#E25B36] group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
