import Image from "next/image";
import { studioData } from "@/data/petstudio";
import { ArrowUpRight } from "lucide-react";

export function PetPersonalitySection() {
  const { personalities } = studioData;

  return (
    <section id="personality" className="scroll-mt-24 py-24 sm:py-32 bg-[#FAF6F0] text-[#1B1917] border-b border-[#E8E2D7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col justify-between gap-6 border-b border-[#E8E2D7] pb-8 md:flex-row md:items-end mb-16">
          <div>
            <span className="text-xs font-bold tracking-[0.25em] text-[#E25B36] uppercase block mb-2 font-mono">
              Pet Personality Navigation
            </span>
            <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#1B1917] uppercase">
              Dirancang untuk Setiap Jiwa.
            </h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-[#6C665F] font-normal">
            Kebutuhan anjing yang ceria, kucing yang cermat, dan anabul senior yang membutuhkan ketenangan, semuanya memiliki ruang perlakuan tersendiri.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {personalities.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="group relative rounded-3xl overflow-hidden border-2 border-[#E8E2D7] bg-white flex flex-col justify-between transition-all duration-500 hover:border-[#E25B36] hover:shadow-lg hover:-translate-y-1"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden bg-[#F4EFE6]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-[#E25B36] uppercase tracking-wider border border-[#E8E2D7]">
                  {item.badge}
                </div>
              </div>

              <div className="p-7 space-y-3 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-extrabold text-2xl text-[#1B1917] tracking-tight group-hover:text-[#E25B36] transition-colors">
                      {item.title}
                    </h3>
                    <div className="w-9 h-9 rounded-full bg-[#FAF6F0] group-hover:bg-[#E25B36] text-[#1B1917] group-hover:text-white flex items-center justify-center transition-all">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  <p className="text-xs text-[#6C665F] leading-relaxed mt-2 font-normal">
                    {item.subtitle}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8E2D7]/60 text-xs font-bold text-[#E25B36] uppercase tracking-wider flex items-center gap-1">
                  <span>Jelajahi Koleksi</span>
                  <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
