import Image from "next/image";
import { studioData } from "@/data/petstudio";
import { ArrowUpRight, Award } from "lucide-react";

export function TeamSection() {
  const { careTeam } = studioData;

  return (
    <section id="tim" className="scroll-mt-24 py-24 sm:py-32 bg-[#F3EFEA] text-[#1E1C1A] border-b border-[#E7E2D9]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col justify-between gap-6 border-b border-[#E7E2D9] pb-8 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#58694B]" />
              <span className="text-[11px] font-semibold tracking-[0.25em] text-[#58694B] uppercase">
                06 / Tenaga Ahli &amp; Dokter Konsultan
              </span>
            </div>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-[#1E1C1A] sm:text-4xl lg:text-5xl uppercase">
              Meet Your Caregivers
            </h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-[#6C6760] font-light">
            Seluruh staf perawat dan dokter konsultan memegang lisensi profesional serta terlatih dalam metode penanganan Fear-Free bersertifikasi.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {careTeam.map((member, idx) => (
            <div
              key={member.id}
              className="flex flex-col justify-between border border-[#E7E2D9] bg-[#FAF8F5] rounded-3xl overflow-hidden group transition-all duration-300 hover:border-[#58694B]"
            >
              <div>
                <div className="relative aspect-3/4 w-full overflow-hidden bg-[#E7E2D9]">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-104"
                  />
                  <div className="absolute top-4 left-4 border border-[#E7E2D9] bg-[#FAF8F5]/90 px-3 py-1 font-mono text-[9px] tracking-wider text-[#58694B] uppercase backdrop-blur-md">
                    Spesialis 0{idx + 1}
                  </div>
                </div>

                <div className="p-8 space-y-3">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#1E1C1A] leading-snug">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#58694B] mt-1 font-mono">
                      {member.title}
                    </p>
                  </div>

                  <div className="flex items-start gap-2 text-[11px] text-[#6C6760] font-mono border-t border-[#E7E2D9] pt-3">
                    <Award className="w-3.5 h-3.5 text-[#58694B] shrink-0 mt-0.5" />
                    <span>{member.certifications}</span>
                  </div>

                  <p className="text-xs text-[#6C6760] font-light leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="border-t border-[#E7E2D9] pt-3 text-[11px] font-mono text-[#6C6760] flex items-center justify-between">
                    <span className="text-[10px] uppercase text-[#58694B] font-bold">Fokus:</span>
                    <span>{member.specialization}</span>
                  </div>
                </div>
              </div>

              <div className="p-8 pt-0">
                <a
                  href="#booking"
                  className="flex h-11 w-full items-center justify-center gap-1.5 rounded-xl border border-[#E7E2D9] bg-[#F3EFEA] text-xs font-semibold tracking-wider text-[#1E1C1A] uppercase transition-all duration-300 hover:border-[#58694B] hover:bg-[#58694B] hover:text-[#FAF8F5]"
                >
                  <span>Pilih Jadwal Konsultasi</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
