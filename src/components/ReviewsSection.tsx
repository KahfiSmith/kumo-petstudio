import { studioData } from "@/data/petstudio";
import { Star, CheckCircle } from "lucide-react";

export function ReviewsSection() {
  const { reviews } = studioData;

  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F5] text-[#1E1C1A] border-b border-[#E7E2D9]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 sm:mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#58694B]" />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#58694B]">
                07 / Pengalaman Pet Parent
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1E1C1A] tracking-tight leading-[1.15]">
              Kisah &amp; Kepercayaan Klien.
            </h2>
          </div>

          <div className="bg-[#F3EFEA] p-5 sm:p-6 rounded-2xl border border-[#E7E2D9] flex items-center gap-5 shrink-0">
            <div>
              <div className="flex items-center gap-1.5 text-[#58694B] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#58694B]" aria-hidden="true" />
                ))}
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-serif font-bold text-[#1E1C1A]">4.9</span>
                <span className="text-xs text-[#6C6760]">/ 5.0 Skor Google</span>
              </div>
            </div>
            <div className="w-[1px] h-10 bg-[#E7E2D9]" />
            <div className="text-xs text-[#6C6760] max-w-[160px] leading-relaxed">
              Berdasarkan 320+ ulasan terverifikasi di Google Maps Surabaya
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <article
              key={rev.id}
              className="p-8 sm:p-9 rounded-3xl bg-white border border-[#E7E2D9] flex flex-col justify-between transition-all duration-300 hover:border-[#58694B]/40 hover:shadow-xs"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex text-[#58694B]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#58694B]" aria-hidden="true" />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold tracking-wider text-[#58694B] bg-[#EEF2EC] px-2.5 py-1 rounded-full uppercase">
                    {rev.service}
                  </span>
                </div>

                <blockquote className="font-serif text-lg sm:text-xl text-[#1E1C1A] leading-relaxed italic">
                  &ldquo;{rev.comment}&rdquo;
                </blockquote>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F3EFEA] flex items-center justify-between">
                <div>
                  <p className="font-semibold text-sm text-[#1E1C1A]">{rev.author}</p>
                  <p className="text-[11px] text-[#6C6760]">{rev.petInfo}</p>
                  <p className="text-[10px] text-[#9E988E] mt-0.5">{rev.date}</p>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-[#58694B]">
                  <CheckCircle className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Google Maps</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
