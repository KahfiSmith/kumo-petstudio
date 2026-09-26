import { studioData } from "@/data/petstudio";
import { LiveStudioStatus } from "@/components/LiveStudioStatus";
import { MapPin, Clock, Phone, MessageCircle, ArrowUpRight } from "lucide-react";

export function LocationHours() {
  const { contact, schedule } = studioData;

  return (
    <section id="lokasi" className="scroll-mt-24 py-24 sm:py-32 bg-[#FAF8F5] text-[#1E1C1A] border-b border-[#E7E2D9]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#58694B]" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#58694B]">
              09 / Akses Studio &amp; Lokasi
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1E1C1A] tracking-tight leading-[1.15] mb-5">
            Kunjungi Sanctuary Kami.
          </h2>

          <p className="text-base sm:text-lg text-[#6C6760] leading-relaxed font-normal max-w-2xl">
            Berada di kawasan asri Surabaya Timur dengan area parkir dan drop-off anabul yang terlindung dari keramaian jalan raya.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 bg-white p-8 sm:p-10 rounded-3xl border border-[#E7E2D9] flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[#58694B]">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                  <span className="text-[11px] font-semibold uppercase tracking-wider">
                    Alamat Studio
                  </span>
                </div>
                <address className="not-italic text-sm sm:text-base text-[#1E1C1A] font-serif leading-relaxed">
                  {contact.fullAddress}
                </address>
                <p className="text-xs text-[#6C6760]">
                  Patokan: Kawasan residensial Dharmahusada Indah, seberang taman hijau, tersedia area parkir privat.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-[#F3EFEA]">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-[#58694B]">
                    <Clock className="w-4 h-4" aria-hidden="true" />
                    <span className="text-[11px] font-semibold uppercase tracking-wider">
                      Jadwal Operasional
                    </span>
                  </div>
                  <LiveStudioStatus variant="pill" />
                </div>

                <div className="space-y-2.5">
                  {schedule.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between text-xs sm:text-sm py-2 border-b border-[#F3EFEA] last:border-none"
                    >
                      <span className="text-[#6C6760]">{item.days}</span>
                      <span className="font-semibold text-[#1E1C1A]">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-6 border-t border-[#F3EFEA]">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#58694B] block">
                  Kontak Langsung
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={`tel:${contact.emergencyPhone}`}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F3EFEA] hover:bg-[#E7E2D9] border border-[#E7E2D9] text-xs font-medium text-[#1E1C1A] transition-colors min-h-[44px]"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#58694B]" aria-hidden="true" />
                    <span>{contact.formattedEmergencyPhone}</span>
                  </a>

                  <a
                    href={`https://wa.me/${contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F3EFEA] hover:bg-[#E7E2D9] border border-[#E7E2D9] text-xs font-medium text-[#1E1C1A] transition-colors min-h-[44px]"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#58694B]" aria-hidden="true" />
                    <span>Chat WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#F3EFEA]">
              <a
                href={contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-between px-6 py-4 rounded-xl bg-[#1E1C1A] hover:bg-black text-[#FAF8F5] text-xs font-medium tracking-wide transition-colors group"
              >
                <span>Buka Petunjuk Arah di Google Maps</span>
                <ArrowUpRight className="w-4 h-4 text-[#58694B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#F3EFEA] rounded-3xl border border-[#E7E2D9] overflow-hidden flex flex-col justify-between min-h-[420px]">
            <div className="p-4 px-6 bg-white border-b border-[#E7E2D9] flex items-center justify-between text-xs text-[#6C6760]">
              <span className="font-semibold text-[#1E1C1A]">Peta Lokasi Studio</span>
              <span>Mulyorejo, Surabaya Timur</span>
            </div>
            <div className="relative w-full flex-grow min-h-[380px]">
              <iframe
                src={contact.openStreetMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "380px" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta Lokasi Kumo Pet Atelier Surabaya"
                className="w-full h-full flex-grow filter saturate-80 contrast-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
