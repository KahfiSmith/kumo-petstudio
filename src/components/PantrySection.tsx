import Image from "next/image";
import { studioData } from "@/data/petstudio";
import { Sparkles, MessageCircle, MapPin } from "lucide-react";

export function PantrySection() {
  const { pantryItems, contact } = studioData;

  return (
    <section id="pantry" className="scroll-mt-24 py-24 sm:py-32 bg-[#FAF8F5] text-[#1E1C1A] border-b border-[#E7E2D9]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col justify-between gap-6 border-b border-[#E7E2D9] pb-8 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#58694B]" />
              <span className="text-[11px] font-semibold tracking-[0.25em] text-[#58694B] uppercase">
                03 / Curated Pantry &amp; Apothecary
              </span>
            </div>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-[#1E1C1A] sm:text-4xl lg:text-5xl uppercase">
              Nutrisi Murni &amp; Gaya Hidup
            </h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-[#6C6760] font-light">
            Seluruh produk pakan dan suplemen herbal diuji laboratorium, bersertifikat human-grade, dan bebas pewarna sintetis.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pantryItems.map((item, idx) => (
            <article
              key={item.id}
              className="bg-white border border-[#E7E2D9] rounded-3xl overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:border-[#58694B]/50 hover:shadow-xs"
            >
              <div>
                <div className="relative aspect-square w-full overflow-hidden bg-[#F3EFEA]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 border border-[#E7E2D9] bg-[#FAF8F5]/90 px-2.5 py-1 font-mono text-[9px] tracking-wider text-[#58694B] uppercase backdrop-blur-md flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5 text-[#58694B]" />
                    <span>{item.tag}</span>
                  </div>
                  <div className="absolute bottom-3 left-3 bg-[#1E1C1A]/80 text-[#FAF8F5] px-2.5 py-1 rounded-md font-mono text-[9px] backdrop-blur-xs flex items-center gap-1">
                    <MapPin className="w-2.5 h-2.5 text-[#58694B]" />
                    <span>{item.origin}</span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#6C6760] pb-2 border-b border-[#E7E2D9]">
                    <span>PRODUK 0{idx + 1}</span>
                    <span className="text-[#58694B] font-semibold">{item.price}</span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#1E1C1A] leading-snug">
                    {item.name}
                  </h3>

                  <p className="text-xs text-[#6C6760] font-light leading-relaxed">
                    {item.description}
                  </p>

                  <div className="p-3 rounded-xl bg-[#EEF2EC] text-[11px] text-[#58694B] font-medium leading-relaxed">
                    {item.nutritionHighlight}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
                    `Halo Kumo Pet Atelier, saya tertarik untuk memesan atau menanyakan ketersediaan produk pantry: ${item.name} (${item.price}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-full items-center justify-center gap-2 rounded-xl border border-[#E7E2D9] bg-[#F3EFEA] text-xs font-semibold tracking-wider text-[#1E1C1A] uppercase transition-all duration-300 hover:border-[#58694B] hover:bg-[#58694B] hover:text-[#FAF8F5]"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#58694B]" />
                  <span>Pesan via WhatsApp</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
