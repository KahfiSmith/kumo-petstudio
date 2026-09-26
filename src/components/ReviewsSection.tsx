import { studioData } from "@/data/petstudio";
import { Star, CheckCircle, Quote } from "lucide-react";

export function ReviewsSection() {
  const { reviews } = studioData;

  return (
    <section className="py-24 sm:py-32 bg-[#FAF6F0] text-[#1B1917] border-b border-[#E8E2D7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 sm:mb-20">
          <div>
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#E25B36] uppercase block mb-2">
              Tales from Our Pack
            </span>
            <h2 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#1B1917] uppercase leading-[0.98]">
              Cinta Tulus. <br />
              <span className="font-serif italic font-normal text-[#E25B36]">Ulasan Nyata.</span>
            </h2>
          </div>

          <div className="bg-white p-6 rounded-3xl border-2 border-[#E8E2D7] flex items-center gap-6 shrink-0 shadow-xs">
            <div>
              <div className="flex items-center gap-1 text-[#EBB036] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#EBB036]" />
                ))}
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-[#1B1917]">4.9</span>
                <span className="text-xs font-bold text-[#6C665F]">/ 5.0 Google Rating</span>
              </div>
            </div>
            <div className="w-[1px] h-12 bg-[#E8E2D7]" />
            <div className="text-xs text-[#6C665F] max-w-[170px] leading-relaxed">
              Berdasarkan 320+ pengalaman pet parent terverifikasi di Surabaya
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <article
              key={rev.id}
              className="p-8 sm:p-9 rounded-3xl bg-white border-2 border-[#E8E2D7] flex flex-col justify-between transition-all duration-300 hover:border-[#E25B36] hover:shadow-lg relative group"
            >
              <Quote className="w-10 h-10 text-[#E8E2D7] group-hover:text-[#E25B36]/30 transition-colors mb-4" />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-[#EBB036]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#EBB036]" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold tracking-wider text-[#E25B36] bg-[#FDF1ED] px-2.5 py-1 rounded-full uppercase border border-[#E25B36]/20">
                    {rev.service}
                  </span>
                </div>

                <blockquote className="font-serif text-lg sm:text-xl text-[#1B1917] leading-relaxed italic">
                  &ldquo;{rev.comment}&rdquo;
                </blockquote>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E8E2D7] flex items-center justify-between">
                <div>
                  <p className="font-extrabold text-sm text-[#1B1917]">{rev.author}</p>
                  <p className="text-xs font-semibold text-[#E25B36] mt-0.5">{rev.petName}</p>
                  <p className="text-[10px] text-[#9E988E] mt-0.5">{rev.date}</p>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-[#2A4736] font-bold">
                  <CheckCircle className="w-3.5 h-3.5 text-[#2A4736]" />
                  <span>Verified</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
