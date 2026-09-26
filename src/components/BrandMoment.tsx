import Image from "next/image";
import { Heart } from "lucide-react";

export function BrandMoment() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#1B1917] text-[#FAF6F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#EBB036] text-xs font-mono tracking-widest uppercase border border-white/15">
              <Heart className="w-3.5 h-3.5 fill-[#EBB036] text-[#EBB036]" />
              <span>A Love Letter to Companions</span>
            </div>

            <h2 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-[#FAF6F0]">
              FOR THE ONES <br />
              <span className="font-serif italic font-normal text-[#EBB036]">WHO WAIT AT</span> <br />
              THE DOOR.
            </h2>

            <p className="font-serif text-xl sm:text-2xl text-[#E8E2D7] italic font-light leading-relaxed">
              &ldquo;Because they are not just pets. They are family.&rdquo;
            </p>

            <p className="text-sm sm:text-base text-[#9E988E] font-normal leading-relaxed max-w-lg">
              Hadir menyambut di ambang pintu dengan kibasan ekor penuh kerinduan, mendengkur hangat di pangkuan setelah hari yang panjang, dan memberikan kesetiaan tanpa syarat. Segala yang kami rancang di Kumo adalah bentuk penghormatan atas cinta tulus tersebut.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <a
                href="#care-services"
                className="inline-flex h-12 items-center justify-center rounded-2xl bg-[#E25B36] hover:bg-[#CC4E2C] px-7 text-xs font-bold tracking-[0.12em] text-white uppercase transition-all shadow-sm"
              >
                Jelajahi Perawatan Kami &rarr;
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-4/3 sm:aspect-16/11 w-full rounded-3xl overflow-hidden border border-white/15 shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1534361960057-19889db9621e?q=85&w=1200&auto=format&fit=crop"
                alt="Kedekatan hangat antara pet parent dan anabul"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-black/60 backdrop-blur-md border border-white/20 text-white">
                <p className="text-xs font-mono uppercase tracking-wider text-[#EBB036] font-bold">
                  Kumo Philosophy
                </p>
                <p className="text-sm sm:text-base font-serif italic text-[#FAF6F0] mt-1">
                  Kenyamanan emosional dan fisik mereka adalah prioritas utama setiap perawat kami.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
