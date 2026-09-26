import Image from "next/image";
import { studioData } from "@/data/petstudio";
import { Video, ShieldCheck, Footprints, Wind, ArrowUpRight, Check } from "lucide-react";

export function HotelSection() {
  const { hotelSuites, contact } = studioData;

  const keyPillars = [
    {
      icon: Video,
      title: "Live Cam 24 Jam",
      desc: "Pantau kenyamanan tidur dan aktivitas bermain anabul secara langsung kapan saja melalui smartphone Anda.",
    },
    {
      icon: Footprints,
      title: "Sesi Main Privat",
      desc: "Aktivitas fisik teratur di taman rumput sintetis higienis tanpa kontak hewan asing.",
    },
    {
      icon: Wind,
      title: "Filter Udara HEPA",
      desc: "Pertukaran udara konstan dengan filter medis grade H14 untuk memastikan kamar sejuk dan bebas alergen.",
    },
    {
      icon: ShieldCheck,
      title: "Perawat Siaga 24/7",
      desc: "Caregiver bersertifikat memantau nafsu makan, hidrasi, dan kestabilan mood anabul sepanjang hari.",
    },
  ];

  return (
    <section id="hotel" className="scroll-mt-24 py-24 sm:py-32 bg-[#FEF9E7] text-[#18181B] border-b-2 border-[#EAE5D9]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex flex-col justify-between gap-6 border-b-2 border-[#EAE5D9] pb-8 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border-2 border-[#2563EB]/20 text-[#2563EB] text-xs font-black tracking-wider uppercase mb-3">
              <Footprints className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>Boutique Pet Hotel</span>
            </div>
            <h2 className="font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#18181B] uppercase leading-none">
              SLEEPOVER FUN. <br />
              <span className="text-[#2563EB]">ZERO CAGES.</span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#52525B] font-semibold leading-relaxed">
            Tempat liburan anabul yang aman dengan AC dingin, tempat tidur ortopedik, dan laporan video harian saat Anda bepergian.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 pb-14 border-b-2 border-[#EAE5D9]">
          {keyPillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-3xl bg-white border-2 border-[#18181B] space-y-3 shadow-xs hover:-translate-y-1 transition-transform"
              >
                <div className="w-10 h-10 rounded-2xl bg-[#EFF6FF] border border-[#2563EB]/30 flex items-center justify-center text-[#2563EB]">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-black text-base text-[#18181B] uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-[#52525B] font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {hotelSuites.map((suite) => (
            <div
              key={suite.id}
              className="flex flex-col justify-between rounded-[2.5rem] bg-white border-2 border-[#18181B] overflow-hidden shadow-md group hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="relative aspect-16/10 w-full overflow-hidden bg-[#FEF9E7] border-b-2 border-[#18181B]">
                  <Image
                    src={suite.image}
                    alt={suite.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-106"
                  />
                  <div className="absolute top-4 left-4 bg-[#2563EB] text-white px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-sm">
                    {suite.tag}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/95 px-3 py-1 rounded-xl text-xs font-black text-[#18181B] border border-[#18181B]">
                    {suite.dimensions}
                  </div>
                </div>

                <div className="p-8 space-y-5">
                  <div>
                    <h3 className="font-black text-2xl sm:text-3xl text-[#18181B] uppercase tracking-tight mb-2">
                      {suite.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed font-semibold">
                      {suite.description}
                    </p>
                  </div>

                  <div className="space-y-2 pt-3 border-t-2 border-[#EAE5D9]">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#52525B] block">
                      Fasilitas Kamar:
                    </span>
                    <ul className="space-y-2 text-xs text-[#18181B] font-semibold">
                      {suite.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2.5">
                          <Check className="w-4 h-4 text-[#2563EB] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-8 pt-0">
                <div className="pt-4 border-t-2 border-[#EAE5D9] flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-black uppercase text-[#52525B] block">Tarif Menginap:</span>
                    <span className="font-black text-3xl text-[#2563EB]">
                      {suite.nightlyRate}
                    </span>
                    <span className="text-xs font-bold text-[#52525B]"> / malam</span>
                  </div>

                  <a
                    href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
                      `Halo Kumo Pets! Saya ingin reservasi kamar hotel: ${suite.name} (${suite.nightlyRate}/malam). Mohon cek ketersediaan kamar.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center justify-center rounded-2xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-6 text-xs font-black uppercase tracking-wider transition-all duration-200 shadow-sm gap-2"
                  >
                    <span>Pesan Kamar Hotel</span>
                    <ArrowUpRight className="w-4 h-4" />
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
