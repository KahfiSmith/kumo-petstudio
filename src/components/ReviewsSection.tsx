import { studioData } from "@/data/petstudio";
import { Star, CheckCircle, Quote } from "lucide-react";

export function ReviewsSection() {
  const { reviews } = studioData;

  return (
    <section className="py-24 sm:py-32 bg-[#FFFDF9] text-[#18181B] border-b-2 border-[#EAE5D9]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFBEB] text-[#B45309] text-xs font-black tracking-wider uppercase mb-3 border-2 border-[#FFC72C]/40">
              <Star className="w-3.5 h-3.5 fill-[#FFC72C] text-[#FFC72C]" />
              <span>Happy Customers</span>
            </div>
            <h2 className="font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#18181B] uppercase leading-none">
              LOVE FROM <br />
              <span className="text-[#FF5C35]">OUR EXTENDED PACK.</span>
            </h2>
          </div>

          <div className="bg-[#FEF9E7] p-6 rounded-3xl border-2 border-[#18181B] flex items-center gap-6 shrink-0 shadow-md">
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
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <article
              key={rev.id}
              className="p-8 rounded-[2.5rem] bg-white border-2 border-[#18181B] flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 relative group shadow-md"
            >
              <div>
                <Quote className="w-10 h-10 text-[#FF5C35] mb-4 opacity-80" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex text-[#FFC72C]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#FFC72C]" />
                      ))}
                    </div>
                    <span className="text-[10px] font-black tracking-wider text-[#2563EB] bg-[#EFF6FF] px-2.5 py-1 rounded-full uppercase border border-[#2563EB]/20">
                      {rev.service}
                    </span>
                  </div>

                  <blockquote className="font-extrabold text-base sm:text-lg text-[#18181B] leading-relaxed">
                    &ldquo;{rev.comment}&rdquo;
                  </blockquote>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t-2 border-[#EAE5D9] flex items-center justify-between">
                <div>
                  <p className="font-black text-sm text-[#18181B]">
                    {rev.author} <span className="text-xs font-semibold text-[#52525B]">(Human of {rev.petName})</span>
                  </p>
                  <p className="text-[11px] font-bold text-[#FF5C35] mt-0.5">{rev.petInfo}</p>
                  <p className="text-[10px] text-[#52525B] mt-0.5">{rev.date}</p>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-[#16A34A] font-black">
                  <CheckCircle className="w-3.5 h-3.5 text-[#16A34A]" />
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
