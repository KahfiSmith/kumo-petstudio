import Image from "next/image";
import { studioData } from "@/data/petstudio";
import { LiveStudioStatus } from "@/components/LiveStudioStatus";
import { MapPin, Clock, MessageCircle, ArrowUpRight } from "lucide-react";

export function LocationHours() {
  const { contact, schedule } = studioData;

  return (
    <section id="lokasi" className="scroll-mt-24 py-24 sm:py-32 bg-[#FFFDF9] text-[#18181B] border-b-2 border-[#EAE5D9]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FEF9E7] text-[#18181B] text-xs font-black tracking-wider uppercase mb-3 border-2 border-[#FFC72C]/40">
            <MapPin className="w-3.5 h-3.5 text-[#FF5C35]" />
            <span>Storefront Experience</span>
          </div>

          <h2 className="font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#18181B] uppercase leading-none mb-4">
            COME <span className="text-[#FF5C35]">SAY HI.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#52525B] leading-relaxed font-semibold max-w-2xl">
            Kunjungi store fisik kami di Surabaya Timur. Ajak anabul Anda mencicipi camilan organik tester di pantry bar atau sekadar melihat area spa ozon yang menyenangkan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 bg-white p-7 sm:p-9 rounded-[2.5rem] border-2 border-[#18181B] flex flex-col justify-between space-y-6 shadow-xl">
            <div className="space-y-6">
              <div className="relative aspect-16/10 w-full rounded-2xl overflow-hidden border-2 border-[#18181B] bg-[#FEF9E7]">
                <Image
                  src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=800&auto=format&fit=crop"
                  alt="Kumo Pets Storefront Surabaya"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#FF5C35] text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-xs">
                  Pet Friendly Store
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#FF5C35]">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                  <span className="text-xs font-black uppercase tracking-wider">
                    Alamat Lengkap Store
                  </span>
                </div>
                <address className="not-italic text-sm sm:text-base text-[#18181B] font-extrabold leading-snug">
                  {contact.fullAddress}
                </address>
                <p className="text-xs text-[#52525B] font-semibold">
                  Patokan: Kawasan residensial Dharmahusada Indah, seberang taman, parkir privat luas dan aman untuk anabul.
                </p>
              </div>

              <div className="space-y-3 pt-5 border-t-2 border-[#EAE5D9]">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-[#2563EB]">
                    <Clock className="w-4 h-4" aria-hidden="true" />
                    <span className="text-xs font-black uppercase tracking-wider">
                      Jam Buka
                    </span>
                  </div>
                  <LiveStudioStatus variant="pill" />
                </div>

                <div className="space-y-2">
                  {schedule.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between text-xs font-bold py-1.5 border-b border-[#EAE5D9]/60 last:border-none"
                    >
                      <span className="text-[#52525B]">{item.days}</span>
                      <span className="font-black text-[#18181B]">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t-2 border-[#EAE5D9] flex flex-col gap-3">
              <a
                href={contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#FF5C35] hover:bg-[#E84A23] text-xs font-black uppercase tracking-wider text-white shadow-sm transition-all hover:shadow-md"
              >
                <span>Buka Rute Google Maps</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
                  "Halo Kumo Pets! Saya sedang dalam perjalanan menuju store dan ingin tanya lokasi drop-off / parkir."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#FEF9E7] hover:bg-[#EAE5D9] text-xs font-black uppercase tracking-wider text-[#18181B] border-2 border-[#18181B] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#FF5C35]" />
                <span>Chat Concierge WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col min-h-[420px] rounded-[2.5rem] overflow-hidden border-2 border-[#18181B] bg-white shadow-xl relative">
            <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl border-2 border-[#18181B] shadow-sm">
              <p className="text-xs font-black text-[#18181B] uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#FF5C35]" />
                <span>Surabaya Timur Sanctuary</span>
              </p>
            </div>

            <iframe
              src={contact.openStreetMapUrl}
              title="Peta Lokasi Kumo Pets Surabaya"
              className="w-full h-full min-h-[400px] border-0 flex-grow"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
