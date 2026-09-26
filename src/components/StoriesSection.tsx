import Image from "next/image";
import { studioData } from "@/data/petstudio";
import { Clock, CheckCircle2, ArrowUpRight } from "lucide-react";

export function StoriesSection() {
  const { transformationStories, contact } = studioData;

  return (
    <section id="kisah" className="scroll-mt-24 py-24 sm:py-32 bg-[#FAF8F5] text-[#1E1C1A] border-b border-[#E7E2D9]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#58694B]" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#58694B]">
              05 / Kisah &amp; Transformasi Anabul
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1E1C1A] tracking-tight leading-[1.15] mb-5">
            Kenyamanan Nyata &amp; Kilau Alami.
          </h2>

          <p className="text-base sm:text-lg text-[#6C6760] leading-relaxed font-normal max-w-2xl">
            Setiap anabul memiliki kepribadian dan sensivitas unik. Kami mendokumentasikan hasil nyata perawatan spa dan penataan bulu dengan pendekatan bebas trauma.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {transformationStories.map((story, index) => (
            <article
              key={story.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E7E2D9] flex flex-col justify-between group transition-all duration-300 hover:border-[#58694B]/40 hover:shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#F3EFEA] mb-5">
                  <span className="text-[11px] font-mono tracking-widest text-[#58694B] uppercase">
                    Kisah 0{index + 1} &bull; {story.petName}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#EEF2EC] text-[11px] font-medium text-[#58694B] border border-[#58694B]/20">
                    {story.service}
                  </span>
                </div>

                <div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl bg-[#F3EFEA] mb-6">
                  <Image
                    src={story.image}
                    alt={`${story.petName} - ${story.breed}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-xs text-[11px]">
                      <Clock className="w-3 h-3 text-[#FAF8F5]" aria-hidden="true" />
                      <span>{story.treatmentDuration}</span>
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-xs text-[11px]">
                      {story.breed}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#1E1C1A] leading-snug">
                    Transformasi {story.petName} ({story.breed})
                  </h3>

                  <p className="text-sm text-[#6C6760] leading-relaxed italic">
                    &ldquo;{story.story}&rdquo;
                  </p>

                  <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E7E2D9] text-xs text-[#1E1C1A] flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#58694B] shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="leading-relaxed font-medium">{story.resultHighlight}</span>
                  </div>

                  <p className="text-[11px] text-[#9E988E]">
                    Pet Parent: <span className="text-[#1E1C1A] font-medium">{story.ownerName}</span>
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F3EFEA]">
                <a
                  href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
                    `Halo Kumo Pet Atelier, saya membaca kisah perawatan ${story.petName} (${story.service}). Saya ingin konsultasi apakah anabul saya bisa dirawat dengan prosedur serupa?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full py-3 px-4 rounded-xl bg-[#F3EFEA] hover:bg-[#1E1C1A] text-[#1E1C1A] hover:text-[#FAF8F5] text-xs font-semibold tracking-wide transition-all group/btn"
                >
                  <span>Konsultasi Kasus Ini via WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4 text-[#58694B] group-hover/btn:text-[#FAF8F5] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
