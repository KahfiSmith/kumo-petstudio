import Link from "next/link";
import { studioData } from "@/data/petstudio";
import { Phone, MessageCircle, Shield, Sparkles } from "lucide-react";

export function Footer() {
  const { contact, operatingLicense, schedule } = studioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1B1917] text-[#9E988E] pt-20 pb-12 border-t border-[#2A2624]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-[#2A2624]">
          <div className="lg:col-span-4 space-y-5">
            <Link href="#" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#E25B36] flex items-center justify-center text-white">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-[#FAF6F0]">
                KUMO <span className="font-mono text-xs text-[#E25B36]">STUDIO</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-[#9E988E] leading-relaxed max-w-sm font-normal">
              {studioData.shortDescription}
            </p>

            <div className="pt-2 text-[11px] text-[#9E988E] flex items-start gap-2.5">
              <Shield className="w-4 h-4 text-[#E25B36] shrink-0 mt-0.5" aria-hidden="true" />
              <span className="leading-snug">{operatingLicense}</span>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <p className="font-extrabold text-xs uppercase tracking-widest text-[#FAF6F0]">
              Shop &amp; Care Menu
            </p>
            <ul className="space-y-2.5 text-xs text-[#9E988E]">
              <li>
                <a href="#shop-pantry" className="hover:text-[#E25B36] transition-colors">
                  Product of the Week (Freeze-Dried)
                </a>
              </li>
              <li>
                <a href="#shop-pantry" className="hover:text-[#E25B36] transition-colors">
                  Organic Venison Bites &amp; Treats
                </a>
              </li>
              <li>
                <a href="#care-services" className="hover:text-[#E25B36] transition-colors">
                  Aroma Herbal &amp; Ozone Spa
                </a>
              </li>
              <li>
                <a href="#care-services" className="hover:text-[#E25B36] transition-colors">
                  Gentle Styling &amp; Scissor Cut
                </a>
              </li>
              <li>
                <a href="#hotel" className="hover:text-[#E25B36] transition-colors">
                  Tatami Executive Suite (Live Cam)
                </a>
              </li>
              <li>
                <a href="#personality" className="hover:text-[#E25B36] transition-colors">
                  Dog &amp; Cat People Collection
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <p className="font-extrabold text-xs uppercase tracking-widest text-[#FAF6F0]">
              Jam Operasional
            </p>
            <div className="space-y-3 text-xs text-[#9E988E]">
              {schedule.map((item, idx) => (
                <div key={idx} className="space-y-0.5">
                  <span className="text-[#FAF6F0] block font-bold">{item.days}</span>
                  <span className="text-[11px] text-[#9E988E] font-mono">{item.time}</span>
                </div>
              ))}
              <p className="text-[11px] text-[#EBB036] pt-1">
                Layanan antar-jemput pet taxi beroperasi pada hari kerja.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <p className="font-extrabold text-xs uppercase tracking-widest text-[#FAF6F0]">
              Akses &amp; Kontak
            </p>
            <address className="not-italic text-xs text-[#9E988E] space-y-2 leading-relaxed">
              <p>{contact.address}</p>
              <p>{contact.city}</p>
              <div className="pt-3 space-y-2">
                <a
                  href={`tel:${contact.emergencyPhone}`}
                  className="flex items-center gap-2 text-[#FAF6F0] hover:text-[#E25B36] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E25B36]" aria-hidden="true" />
                  <span>{contact.formattedEmergencyPhone}</span>
                </a>
                <a
                  href={`https://wa.me/${contact.whatsapp}`}
                  className="flex items-center gap-2 text-[#FAF6F0] hover:text-[#E25B36] transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#E25B36]" aria-hidden="true" />
                  <span>{contact.whatsappFormatted}</span>
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6C665F] gap-4">
          <p>
            &copy; {currentYear} {studioData.name}. All rights reserved.
          </p>
          <p className="text-[#6C665F]">
            Every pet deserves a good day &bull; Surabaya, Jawa Timur.
          </p>
        </div>
      </div>
    </footer>
  );
}
