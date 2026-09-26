import { studioData } from "@/data/petstudio";
import { LiveStudioStatus } from "@/components/LiveStudioStatus";
import { MapPin, Clock, Phone, MessageCircle, ArrowUpRight, Sparkles } from "lucide-react";

export function LocationHours() {
  const { contact, schedule } = studioData;

  return (
    <section id="lokasi" className="scroll-mt-24 py-24 sm:py-32 bg-[#F4EFE6] text-[#1B1917] border-b border-[#E8E2D7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#E25B36] text-xs font-mono tracking-widest uppercase mb-4 border border-[#E8E2D7]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Store Experience</span>
          </div>

          <h2 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#1B1917] uppercase leading-none mb-5">
            COME SAY HI.
          </h2>

          <p className="text-base sm:text-lg text-[#6C665F] leading-relaxed font-normal max-w-2xl">
            Kunjungi sanctuary kami di Surabaya Timur. Ajak anabul Anda mencicipi camilan organik tester di pantry bar atau sekadar melihat area spa ozon yang tenang.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 bg-white p-8 sm:p-10 rounded-3xl border-2 border-[#E8E2D7] flex flex-col justify-between space-y-8 shadow-xs">
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[#E25B36]">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                  <span className="text-[11px] font-bold uppercase tracking-wider font-mono">
                    Alamat Studio &amp; Store
                  </span>
                </div>
                <address className="not-italic text-sm sm:text-base text-[#1B1917] font-serif leading-relaxed">
                  {contact.fullAddress}
                </address>
                <p className="text-xs text-[#6C665F]">
                  Patokan: Kawasan residensial Dharmahusada Indah, seberang taman hijau, tersedia area drop-off mobil dan parkir privat aman.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-[#F4EFE6]">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-[#E25B36]">
                    <Clock className="w-4 h-4" aria-hidden="true" />
                    <span className="text-[11px] font-bold uppercase tracking-wider font-mono">
                      Jam Kunjungan
                    </span>
                  </div>
                  <LiveStudioStatus variant="pill" />
                </div>

                <div className="space-y-2.5">
                  {schedule.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between text-xs sm:text-sm py-2 border-b border-[#FAF6F0] last:border-none"
                    >
                      <span className="text-[#6C665F] font-medium">{item.days}</span>
                      <span className="font-extrabold text-[#1B1917]">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-6 border-t border-[#F4EFE6]">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#E25B36] block font-mono">
                  Kontak Cepat
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={`tel:${contact.emergencyPhone}`}
                    className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#FAF6F0] hover:bg-[#E8E2D7] border border-[#E8E2D7] text-xs font-bold text-[#1B1917] transition-colors min-h-[46px]"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#E25B36]" aria-hidden="true" />
                    <span>{contact.formattedEmergencyPhone}</span>
                  </a>

                  <a
                    href={`https://wa.me/${contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#FAF6F0] hover:bg-[#E8E2D7] border border-[#E8E2D7] text-xs font-bold text-[#1B1917] transition-colors min-h-[46px]"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#E25B36]" aria-hidden="true" />
                    <span>Chat WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#F4EFE6]">
              <a
                href={contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-between px-6 py-4 rounded-2xl bg-[#1B1917] hover:bg-[#E25B36] text-white text-xs font-bold tracking-wider uppercase transition-colors group shadow-xs"
              >
                <span>Get Directions di Google Maps</span>
                <ArrowUpRight className="w-4 h-4 text-[#EBB036] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#FAF6F0] rounded-3xl border-2 border-[#E8E2D7] overflow-hidden flex flex-col justify-between min-h-[420px]">
            <div className="p-4 px-6 bg-white border-b border-[#E8E2D7] flex items-center justify-between text-xs text-[#6C665F]">
              <span className="font-extrabold text-[#1B1917]">Peta Studio &amp; Store</span>
              <span className="font-mono">Surabaya Timur &bull; Mulyorejo</span>
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
                className="w-full h-full flex-grow filter saturate-90 contrast-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
