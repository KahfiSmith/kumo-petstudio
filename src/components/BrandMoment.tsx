import Image from "next/image";
import { Heart, ArrowRight } from "lucide-react";

export function BrandMoment() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#18181B] text-white overflow-hidden border-b-2 border-[#18181B]">
      <div className="absolute top-10 -right-20 w-80 h-80 rounded-full bg-[#FF5C35] opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-[#2563EB] opacity-20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 lg:px-10 relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#FFC72C] text-xs font-black tracking-wider uppercase border border-white/20">
              <Heart className="w-3.5 h-3.5 fill-[#FFC72C] text-[#FFC72C]" />
              <span>A Love Letter to Companions</span>
            </div>

            <h2 className="font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[0.98] uppercase">
              FOR THE ONES <br />
              <span className="text-[#FF5C35]">WHO WAIT AT</span> <br />
              THE DOOR.
            </h2>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/15">
              <p className="font-extrabold text-xl sm:text-2xl text-[#FFC72C] leading-snug">
                &ldquo;Because they are not just pets. They are family.&rdquo;
              </p>
            </div>

            <p className="text-sm sm:text-base text-zinc-300 font-medium leading-relaxed max-w-lg">
              Menyambut di pintu dengan kibasan ekor penuh gairah, mendengkur hangat di pangkuan setelah hari yang lelah, dan memberikan kesetiaan tanpa syarat. Segala yang kami hadirkan di Kumo dirancang untuk membalas cinta tulus tersebut.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <a
                href="#shop-pantry"
                className="inline-flex h-13 items-center justify-center rounded-2xl bg-[#FF5C35] hover:bg-[#E84A23] px-8 text-xs sm:text-sm font-black tracking-wider text-white uppercase transition-all shadow-md hover:shadow-lg hover:scale-104"
              >
                <span>Shop for Them</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-4/3 sm:aspect-16/11 w-full rounded-[2.5rem] overflow-hidden border-4 border-white/20 shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1534361960057-19889db9621e?q=85&w=1200&auto=format&fit=crop"
                alt="Kedekatan hangat antara pet parent dan anabul"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-black/70 backdrop-blur-md border border-white/20 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <Heart className="w-3.5 h-3.5 fill-[#FFC72C] text-[#FFC72C]" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFC72C] font-black">
                    Kumo Promise
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-bold text-white leading-relaxed">
                  Kenyamanan emosional, kesehatan pencernaan, dan kebahagiaan mereka adalah prioritas utama kami.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
