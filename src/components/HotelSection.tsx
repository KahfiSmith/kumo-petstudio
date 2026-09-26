import Image from "next/image";
import { studioData } from "@/data/petstudio";
import { Video, ShieldCheck, Footprints, Wind, ArrowUpRight } from "lucide-react";

export function HotelSection() {
  const { hotelSuites } = studioData;

  const keyPillars = [
    {
      icon: Video,
      title: "Kamera Streaming 24 Jam",
      desc: "Pantau kenyamanan tidur dan aktivitas bermain anabul secara langsung kapan saja melalui aplikasi smartphone Anda.",
    },
    {
      icon: Footprints,
      title: "Sesi Main Luar Ruang",
      desc: "Aktivitas fisik teratur di taman rumput sintetis privat yang disterilisasi rutin tanpa kontak hewan asing.",
    },
    {
      icon: Wind,
      title: "Sirkulasi Udara HEPA",
      desc: "Pertukaran udara konstan dengan filter medis grade H14 untuk memastikan ruang kamar sejuk dan bebas alergen.",
    },
    {
      icon: ShieldCheck,
      title: "Pengawasan Perawat 24/7",
      desc: "Staf behavioral caregiver bersertifikat siaga memantau nafsu makan, hidrasi, dan kestabilan mood anabul.",
    },
  ];

  return (
    <section id="hotel" className="scroll-mt-24 py-24 sm:py-32 bg-[#F3EFEA] text-[#1E1C1A] border-b border-[#E7E2D9]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col justify-between gap-6 border-b border-[#E7E2D9] pb-8 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#58694B]" />
              <span className="text-[11px] font-semibold tracking-[0.25em] text-[#58694B] uppercase">
                02 / Boutique Pet Hotel &amp; Suites
              </span>
            </div>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-[#1E1C1A] sm:text-4xl lg:text-5xl uppercase">
              Kamar Privat Tanpa Kandang Sempit
            </h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-[#6C6760] font-light">
            Tempat peristirahatan tenang ber-AC dengan rasio perawat personal dan laporan aktivitas berkala dua kali sehari.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 pb-16 border-b border-[#E7E2D9]">
          {keyPillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E7E2D9] space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EEF2EC] flex items-center justify-center text-[#58694B]">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#1E1C1A] leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#6C6760] font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {hotelSuites.map((suite, index) => (
            <div
              key={suite.id}
              className="bg-[#FAF8F5] border border-[#E7E2D9] rounded-3xl overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:border-[#58694B]/50 hover:shadow-xs"
            >
              <div>
                <div className="relative aspect-4/3 w-full overflow-hidden bg-[#E7E2D9]">
                  <Image
                    src={suite.image}
                    alt={suite.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-104"
                  />
                  <div className="absolute top-4 left-4 border border-[#E7E2D9] bg-[#FAF8F5]/90 px-3 py-1 font-mono text-[10px] tracking-[0.2em] text-[#58694B] uppercase backdrop-blur-md">
                    {suite.tag}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-[#1E1C1A]/80 text-[#FAF8F5] px-3 py-1 rounded-md font-mono text-[10px] backdrop-blur-xs flex items-center gap-1.5">
                    <Video className="w-3 h-3 text-[#58694B]" />
                    <span>Live Cam 24/7</span>
                  </div>
                </div>

                <div className="p-8 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E7E2D9]">
                    <span className="font-mono text-xs font-bold text-[#58694B]">
                      SUITE 0{index + 1}
                    </span>
                    <span className="font-mono text-[11px] text-[#6C6760]">
                      {suite.dimensions}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#1E1C1A]">
                    {suite.name}
                  </h3>

                  <p className="text-xs text-[#6C6760] font-light leading-relaxed">
                    {suite.description}
                  </p>

                  <div className="pt-2 space-y-2 text-xs text-[#6C6760] border-t border-[#E7E2D9]/60">
                    <span className="block text-[10px] font-mono tracking-[0.15em] text-[#58694B] uppercase font-bold">
                      Fasilitas Termasuk:
                    </span>
                    <ul className="space-y-1.5">
                      {suite.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <span className="text-[#58694B] font-mono">&bull;</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 rounded-xl bg-[#F3EFEA] text-[11px] text-[#1E1C1A] font-mono">
                    <span className="text-[#58694B] font-bold block mb-0.5">Sesi Aktivitas:</span>
                    <span>{suite.outdoorPlaySessions}</span>
                  </div>
                </div>
              </div>

              <div className="p-8 pt-0">
                <div className="flex items-center justify-between pt-4 border-t border-[#E7E2D9]">
                  <div>
                    <span className="block text-[10px] font-mono tracking-[0.2em] text-[#6C6760] uppercase">
                      Tarif Inap
                    </span>
                    <span className="font-serif text-lg font-bold text-[#1E1C1A]">
                      {suite.nightlyRate}
                    </span>
                  </div>

                  <a
                    href="#booking"
                    className="inline-flex items-center gap-1.5 border border-[#58694B] px-4 py-2 text-xs font-semibold tracking-[0.15em] text-[#58694B] uppercase transition-all duration-300 hover:bg-[#58694B] hover:text-[#FAF8F5]"
                  >
                    <span>Pesan Kamar</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
