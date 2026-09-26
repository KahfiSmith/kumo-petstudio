import Image from "next/image";
import { studioData } from "@/data/petstudio";
import { ArrowUpRight, Award } from "lucide-react";

export function TeamSection() {
  const { careTeam } = studioData;

  return (
    <section id="tim" className="scroll-mt-24 py-24 sm:py-32 bg-[#F4EFE6] text-[#1B1917] border-b border-[#E8E2D7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col justify-between gap-6 border-b border-[#E8E2D7] pb-8 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF3F0] text-[#2A4736] text-xs font-mono tracking-widest uppercase mb-3 border border-[#2A4736]/20">
              <Award className="w-3.5 h-3.5" />
              <span>Tenaga Ahli &amp; Dokter Konsultan</span>
            </div>
            <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#1B1917] uppercase leading-[1.05]">
              Meet Your <br />
              <span className="font-serif italic font-normal text-[#E25B36]">Dedicated Caregivers.</span>
            </h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-[#6C665F] font-normal">
            Seluruh staf perawat dan dokter konsultan memegang lisensi profesional serta terlatih dalam metode penanganan Fear-Free bersertifikasi.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {careTeam.map((member, idx) => (
            <div
              key={member.id}
              className="flex flex-col justify-between border-2 border-[#E8E2D7] bg-white rounded-3xl overflow-hidden group transition-all duration-300 hover:border-[#E25B36] shadow-xs"
            >
              <div>
                <div className="relative aspect-3/4 w-full overflow-hidden bg-[#E8E2D7]">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-104"
                  />
                  <div className="absolute top-4 left-4 border border-[#E8E2D7] bg-white/95 px-3 py-1 font-mono text-[10px] font-bold tracking-wider text-[#2A4736] uppercase backdrop-blur-md rounded-full shadow-xs">
                    Spesialis 0{idx + 1}
                  </div>
                </div>

                <div className="p-8 space-y-3">
                  <div>
                    <h3 className="font-extrabold text-xl text-[#1B1917] leading-snug">
                      {member.name}
                    </h3>
                    <p className="text-xs font-bold text-[#E25B36] mt-1 font-mono uppercase tracking-wider">
                      {member.title}
                    </p>
                  </div>

                  <div className="flex items-start gap-2 text-[11px] text-[#6C665F] font-mono border-t border-[#E8E2D7] pt-3">
                    <Award className="w-3.5 h-3.5 text-[#2A4736] shrink-0 mt-0.5" />
                    <span>{member.certifications}</span>
                  </div>

                  <p className="text-xs text-[#6C665F] font-normal leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="border-t border-[#E8E2D7] pt-3 text-[11px] font-mono text-[#6C665F] flex items-center justify-between">
                    <span className="text-[10px] uppercase text-[#E25B36] font-extrabold">Fokus:</span>
                    <span>{member.specialization}</span>
                  </div>
                </div>
              </div>

              <div className="p-8 pt-0">
                <a
                  href="#booking"
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl border-2 border-[#E8E2D7] bg-[#FAF6F0] text-xs font-bold tracking-wider text-[#1B1917] uppercase transition-all duration-300 hover:border-[#E25B36] hover:bg-[#E25B36] hover:text-white"
                >
                  <span>Pilih Jadwal Konsultasi</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
