import { studioData } from "@/data/petstudio";

export function CareStandards() {
  const { careStandards } = studioData;

  return (
    <section id="standar" className="scroll-mt-24 py-24 sm:py-32 bg-[#F3EFEA] text-[#1E1C1A] border-b border-[#E7E2D9]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col justify-between gap-6 border-b border-[#E7E2D9] pb-8 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#58694B]" />
              <span className="text-[11px] font-semibold tracking-[0.25em] text-[#58694B] uppercase">
                04 / Filosofi &amp; Keamanan Klinis
              </span>
            </div>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-[#1E1C1A] sm:text-4xl lg:text-5xl uppercase">
              Standar Perawatan Tanpa Kompromi
            </h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-[#6C6760] font-light">
            Kami menghapus kecemasan tradisional salon hewan dengan menciptakan ruang tenang berstandar medis dermatologis.
          </p>
        </div>

        <div className="mt-16 divide-y divide-[#E7E2D9] border-y border-[#E7E2D9]">
          {careStandards.map((item) => (
            <div
              key={item.number}
              className="grid items-baseline gap-6 py-12 lg:grid-cols-12 lg:gap-12"
            >
              <div className="lg:col-span-2">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-[#D7D0C5]">
                  {item.number}
                </span>
                <span className="mt-2 block font-mono text-[10px] tracking-[0.2em] text-[#58694B] uppercase font-semibold">
                  {item.badge}
                </span>
              </div>

              <div className="lg:col-span-4">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1E1C1A] uppercase tracking-tight">
                  {item.title}
                </h3>
              </div>

              <div className="lg:col-span-6">
                <p className="text-xs sm:text-sm text-[#6C6760] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
