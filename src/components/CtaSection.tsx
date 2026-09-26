import { studioData } from "@/data/petstudio";
import { ShoppingBag, Calendar, Heart, Star, ArrowRight } from "lucide-react";

export function CtaSection() {
  const { contact } = studioData;

  return (
    <section className="relative bg-[#FF5C35] text-white py-24 sm:py-32 overflow-hidden border-b-2 border-[#18181B]">
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-[#FFC72C] opacity-30 blur-2xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-52 h-52 rounded-full bg-[#2563EB] opacity-30 blur-2xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 lg:px-10 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#FF5C35] text-xs font-black tracking-wider uppercase mb-6 shadow-md border-2 border-white">
          <Heart className="w-3.5 h-3.5 fill-[#FF5C35]" />
          <span>Surga Kecil Anabul Bahagia</span>
        </div>

        <h2 className="font-black text-5xl sm:text-6xl lg:text-7xl xl:text-8xl uppercase tracking-tight leading-[0.95] mb-6">
          THEY&apos;RE WAITING. <br />
          <span className="text-[#FFC72C]">MAKE THEIR DAY</span> <br />
          A LITTLE BETTER.
        </h2>

        <p className="text-base sm:text-xl text-white/95 font-semibold max-w-2xl mx-auto leading-relaxed mb-10">
          Dari camilan peningkat imun hingga spa ozon pereda gatal dan hotel mewah tanpa kandang. Hadirkan kebahagiaan terbaik untuk sahabat setia Anda hari ini.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#shop-pantry"
            className="inline-flex h-16 items-center justify-center rounded-2xl bg-white hover:bg-[#FEF9E7] text-[#18181B] px-9 text-sm sm:text-base font-black uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-104 active:scale-98"
          >
            <ShoppingBag className="w-5 h-5 mr-2 text-[#FF5C35]" />
            <span>Shop for Them Now</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>

          <a
            href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
              "Halo Kumo Pets! Saya ingin konsultasi / reservasi spa & hotel untuk anabul saya."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-16 items-center justify-center rounded-2xl bg-[#18181B] hover:bg-black text-white px-9 text-sm sm:text-base font-black uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-104 active:scale-98 border-2 border-white/20"
          >
            <Calendar className="w-5 h-5 mr-2 text-[#FFC72C]" />
            <span>Chat via WhatsApp</span>
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs font-bold text-white/90">
          <span className="flex items-center gap-1.5">
            <Star className="w-4 h-4 fill-[#FFC72C] text-[#FFC72C]" />
            320+ Ulasan Bintang Lima
          </span>
          <span>&bull;</span>
          <span>Gratis Pengantaran Surabaya untuk Pesanan Tertentu</span>
          <span>&bull;</span>
          <span>100% Produk Teruji Aman</span>
        </div>
      </div>
    </section>
  );
}
