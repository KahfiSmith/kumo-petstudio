import Image from "next/image";
import { studioData } from "@/data/petstudio";
import { ArrowUpRight, Award } from "lucide-react";

export function TeamSection() {
  const { careTeam } = studioData;

  return (
    <section id="tim" className="scroll-mt-24 py-24 sm:py-32 bg-[#FFFDF9] text-[#18181B] border-b-2 border-[#EAE5D9]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex flex-col justify-between gap-6 border-b-2 border-[#EAE5D9] pb-8 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFBEB] text-[#B45309] text-xs font-black tracking-wider uppercase mb-3 border-2 border-[#FFC72C]/40">
              <Award className="w-3.5 h-3.5" />
              <span>Dedicated Caregivers</span>
            </div>
            <h2 className="font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#18181B] uppercase leading-none">
              MEET YOUR <br />
              <span className="text-[#FF5C35]">ANABUL CAREGIVERS.</span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#52525B] font-semibold leading-relaxed">
            Seluruh staf perawat dan dokter hewan konsultan memegang lisensi profesional serta terlatih dalam metode penanganan Fear-Free bersertifikasi.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {careTeam.map((member, idx) => (
            <div
              key={member.id}
              className="flex flex-col justify-between border-2 border-[#18181B] bg-white rounded-[2.5rem] overflow-hidden group transition-all duration-300 hover:shadow-xl shadow-md"
            >
              <div>
                <div className="relative aspect-3/4 w-full overflow-hidden bg-[#FEF9E7] border-b-2 border-[#18181B]">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-106"
                  />
                  <div className="absolute top-4 left-4 border-2 border-[#18181B] bg-white/95 px-3 py-1 text-[10px] font-black tracking-wider text-[#18181B] uppercase rounded-full shadow-xs">
                    Spesialis 0{idx + 1}
                  </div>
                </div>

                <div className="p-7 space-y-4">
                  <div>
                    <h3 className="font-black text-2xl text-[#18181B] leading-tight uppercase">
                      {member.name}
                    </h3>
                    <p className="text-xs font-black text-[#FF5C35] mt-1 uppercase tracking-wide">
                      {member.title}
                    </p>
                  </div>

                  <div className="flex items-start gap-2 text-xs text-[#52525B] font-bold border-t-2 border-[#EAE5D9] pt-3">
                    <Award className="w-4 h-4 text-[#FF5C35] shrink-0 mt-0.5" />
                    <span>{member.certifications}</span>
                  </div>

                  <p className="text-xs text-[#52525B] font-semibold leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="border-t-2 border-[#EAE5D9] pt-3 text-xs font-bold text-[#52525B] flex items-center justify-between">
                    <span className="text-[10px] uppercase text-[#18181B] font-black">Fokus:</span>
                    <span>{member.specialization}</span>
                  </div>
                </div>
              </div>

              <div className="p-7 pt-0">
                <a
                  href="#booking"
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl border-2 border-[#18181B] bg-[#FEF9E7] text-xs font-black tracking-wider text-[#18181B] uppercase transition-all duration-300 hover:bg-[#FF5C35] hover:text-white shadow-xs"
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
