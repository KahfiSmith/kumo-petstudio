import Image from "next/image";
import { studioData } from "@/data/petstudio";
import { Video, ShieldCheck, Footprints, Wind, ArrowUpRight } from "lucide-react";

export function HotelSection() {
  const { hotelSuites } = studioData;

  const keyPillars = [
    {
      icon: Video,
      title: "Live Cam 24 Jam",
      desc: "Pantau kenyamanan tidur dan aktivitas bermain anabul secara langsung kapan saja melalui smartphone Anda.",
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
    <section id="hotel" className="scroll-mt-24 py-24 sm:py-32 bg-[#FAF6F0] text-[#1B1917] border-b border-[#E8E2D7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col justify-between gap-6 border-b border-[#E8E2D7] pb-8 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#E25B36] uppercase block mb-2">
              Boutique Pet Hotel Suites
            </span>
            <h2 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#1B1917] uppercase leading-[0.98]">
              Kamar Privat Ber-AC. <br />
              <span className="font-serif italic font-normal text-[#E25B36]">Tanpa Kandang Sempit.</span>
            </h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-[#6C665F] font-normal">
            Tempat peristirahatan tenang dengan lantai berpemanas, rasio perawat personal, dan update video harian untuk ketenangan hati Anda selama bepergian.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 pb-16 border-b border-[#E8E2D7]">
          {keyPillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border-2 border-[#E8E2D7] space-y-3 shadow-xs hover:border-[#E25B36] transition-colors"
              >
                <div className="w-11 h-11 rounded-2xl bg-[#FDF1ED] flex items-center justify-center text-[#E25B36]">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-base text-[#1B1917] leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#6C665F] leading-relaxed">
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
              className="bg-white border-2 border-[#E8E2D7] rounded-3xl overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:border-[#E25B36] hover:shadow-lg hover:-translate-y-1"
            >
              <div>
                <div className="relative aspect-4/3 w-full overflow-hidden bg-[#F4EFE6]">
                  <Image
                    src={suite.image}
                    alt={suite.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-104"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 rounded-full font-mono text-[10px] tracking-wider text-[#E25B36] font-bold uppercase shadow-xs">
                    {suite.tag}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-[#1B1917]/80 text-white px-3 py-1 rounded-full font-mono text-[10px] backdrop-blur-xs flex items-center gap-1.5 font-bold">
                    <Video className="w-3 h-3 text-[#EBB036]" />
                    <span>Live Cam 24/7</span>
                  </div>
                </div>

                <div className="p-8 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E8E2D7]">
                    <span className="font-mono text-xs font-extrabold text-[#E25B36]">
                      SUITE 0{index + 1}
                    </span>
                    <span className="font-mono text-xs text-[#6C665F]">
                      {suite.dimensions}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-2xl text-[#1B1917]">
                    {suite.name}
                  </h3>

                  <p className="text-xs text-[#6C665F] leading-relaxed">
                    {suite.description}
                  </p>

                  <div className="pt-2 space-y-2 text-xs text-[#6C665F] border-t border-[#E8E2D7]/60">
                    <span className="block text-[10px] font-mono tracking-wider text-[#1B1917] uppercase font-bold">
                      Fasilitas Kamar:
                    </span>
                    <ul className="space-y-1.5">
                      {suite.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <span className="text-[#E25B36] font-bold">&bull;</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 rounded-2xl bg-[#FAF6F0] text-[11px] text-[#1B1917] font-mono border border-[#E8E2D7]">
                    <span className="text-[#E25B36] font-bold block mb-0.5">Sesi Aktivitas:</span>
                    <span>{suite.outdoorPlaySessions}</span>
                  </div>
                </div>
              </div>

              <div className="p-8 pt-0">
                <div className="flex items-center justify-between pt-4 border-t border-[#E8E2D7]">
                  <div>
                    <span className="block text-[10px] font-mono tracking-wider text-[#6C665F] uppercase">
                      Tarif Inap
                    </span>
                    <span className="font-serif text-2xl font-bold text-[#1B1917]">
                      {suite.nightlyRate}
                    </span>
                  </div>

                  <a
                    href="#booking"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-[#E25B36] hover:bg-[#CC4E2C] px-5 py-2.5 text-xs font-bold tracking-wider text-white uppercase transition-all shadow-xs"
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
