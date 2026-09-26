import Image from "next/image";
import { studioData } from "@/data/petstudio";
import { Sparkles, MessageCircle, MapPin, Flame, ShoppingBag, ArrowUpRight, Star } from "lucide-react";

export function PantrySection() {
  const { pantryItems, contact } = studioData;

  const featuredProduct = pantryItems.find((p) => p.isProductOfTheWeek) || pantryItems[0];
  const regularItems = pantryItems.filter((p) => p.id !== featuredProduct.id);

  return (
    <section id="shop-pantry" className="scroll-mt-24 py-24 sm:py-32 bg-[#FFFDF9] text-[#18181B] border-b-2 border-[#EAE5D9]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex flex-col justify-between gap-6 border-b-2 border-[#EAE5D9] pb-8 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF1EE] text-[#FF5C35] text-xs font-black tracking-wider uppercase mb-3 border-2 border-[#FF5C35]/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Pet Pantry &amp; Treats</span>
            </div>
            <h2 className="font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#18181B] uppercase leading-none">
              FAVORITES &amp; <span className="text-[#FF5C35]">BEST SELLERS</span>
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-[#52525B] font-semibold leading-relaxed">
            Nutrisi human-grade tanpa bahan pengawet kimia. Setiap produk dipilih cermat untuk kebaikan pencernaan dan kilau bulu anabul kesayangan.
          </p>
        </div>

        <div className="mt-14 mb-16 rounded-[2.5rem] bg-[#FEF9E7] border-2 border-[#18181B] p-7 sm:p-12 overflow-hidden shadow-lg">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="relative aspect-square sm:aspect-16/11 w-full rounded-3xl overflow-hidden bg-white border-2 border-[#18181B] lg:col-span-6 group shadow-md">
              <Image
                src={featuredProduct.image}
                alt={featuredProduct.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-106"
              />
              <div className="absolute top-4 left-4 bg-[#FF5C35] text-white px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-md border-2 border-white">
                <Flame className="w-3.5 h-3.5 fill-white" />
                <span>PRODUCT OF THE WEEK</span>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-white border border-[#EAE5D9] text-xs font-black text-[#FF5C35] uppercase">
                <MapPin className="w-3.5 h-3.5" />
                <span>Asal Bahan: {featuredProduct.origin}</span>
              </div>

              <h3 className="font-black text-3xl sm:text-4xl text-[#18181B] tracking-tight leading-tight uppercase">
                {featuredProduct.name}
              </h3>

              <p className="text-sm sm:text-base text-[#52525B] leading-relaxed font-semibold">
                {featuredProduct.description}
              </p>

              <div className="p-4 rounded-2xl bg-white border-2 border-[#EAE5D9] text-xs font-bold text-[#18181B] flex items-center gap-2.5">
                <Star className="w-4 h-4 text-[#FFC72C] fill-[#FFC72C] shrink-0" />
                <span>{featuredProduct.nutritionHighlight}</span>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-[#EAE5D9]">
                <div>
                  <span className="text-[11px] font-extrabold uppercase text-[#52525B] block">Harga Terbaik:</span>
                  <span className="font-black text-3xl sm:text-4xl text-[#FF5C35] tracking-tight">
                    {featuredProduct.price}
                  </span>
                </div>

                <a
                  href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
                    `Halo Kumo Pets! Saya ingin memesan Product of the Week: ${featuredProduct.name} (${featuredProduct.price}). Mohon info ketersediaan stok & pengiriman.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-13 items-center justify-center rounded-2xl bg-[#FF5C35] hover:bg-[#E84A23] px-7 text-xs font-black tracking-wider text-white uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:scale-103"
                >
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  <span>Order via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {regularItems.map((item, idx) => (
            <div
              key={item.id}
              className={`flex flex-col justify-between rounded-3xl bg-white border-2 border-[#18181B] p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 group ${
                idx % 2 === 0 ? "hover:-rotate-1" : "hover:rotate-1"
              }`}
            >
              <div>
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#FEF9E7] border-2 border-[#EAE5D9] mb-5">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  {item.badge && (
                    <div className="absolute top-3 left-3 bg-[#2563EB] text-white px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-xs border border-white">
                      {item.badge}
                    </div>
                  )}
                </div>

                <div className="space-y-2 mb-4">
                  <span className="text-[10px] font-black font-mono uppercase tracking-wider text-[#FF5C35]">
                    {item.tag}
                  </span>
                  <h4 className="font-black text-xl text-[#18181B] leading-tight group-hover:text-[#FF5C35] transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#52525B] font-medium leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t-2 border-[#EAE5D9] flex items-center justify-between gap-3">
                <span className="font-black text-xl text-[#18181B]">
                  {item.price}
                </span>

                <a
                  href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
                    `Halo Kumo Pets! Saya ingin memesan: ${item.name} (${item.price}). Apakah ada stok?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center justify-center rounded-xl bg-[#FEF9E7] hover:bg-[#FF5C35] hover:text-white text-[#18181B] border-2 border-[#18181B] px-4 text-xs font-black uppercase tracking-wider transition-all duration-200"
                >
                  <span>Beli</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
