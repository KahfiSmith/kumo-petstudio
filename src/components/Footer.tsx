import Link from "next/link";
import { studioData } from "@/data/petstudio";
import { Phone, MessageCircle, Shield } from "lucide-react";

export function Footer() {
  const { contact, operatingLicense, schedule } = studioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1E1C1A] text-[#9E988E] pt-20 pb-12 border-t border-[#2F2C28]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-[#2F2C28]">
          <div className="lg:col-span-4 space-y-5">
            <Link href="#" className="inline-block">
              <span className="font-serif text-2xl font-bold tracking-wider text-[#FAF8F5]">
                KUMO ATELIER
              </span>
              <span className="block text-[10px] tracking-[0.25em] text-[#58694B] uppercase font-sans mt-0.5">
                Pet Sanctuary &bull; Wellness &bull; Hotel
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-[#9E988E] leading-relaxed max-w-sm font-light">
              {studioData.shortDescription}
            </p>

            <div className="pt-2 text-[11px] text-[#9E988E] flex items-start gap-2.5">
              <Shield className="w-4 h-4 text-[#58694B] shrink-0 mt-0.5" aria-hidden="true" />
              <span className="leading-snug">{operatingLicense}</span>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <p className="font-semibold text-xs uppercase tracking-widest text-[#FAF8F5]">
              Layanan Utama
            </p>
            <ul className="space-y-2.5 text-xs text-[#9E988E]">
              <li>
                <a href="#grooming" className="hover:text-[#FAF8F5] transition-colors">
                  Aroma Herbal &amp; Ozone Spa
                </a>
              </li>
              <li>
                <a href="#grooming" className="hover:text-[#FAF8F5] transition-colors">
                  Gentle Styling &amp; Scissor Cut
                </a>
              </li>
              <li>
                <a href="#grooming" className="hover:text-[#FAF8F5] transition-colors">
                  Deep Mud Spa &amp; Coat Revitalizer
                </a>
              </li>
              <li>
                <a href="#hotel" className="hover:text-[#FAF8F5] transition-colors">
                  Garden Minimalist Suite
                </a>
              </li>
              <li>
                <a href="#hotel" className="hover:text-[#FAF8F5] transition-colors">
                  Tatami Executive Suite (Live Cam)
                </a>
              </li>
              <li>
                <a href="#pantry" className="hover:text-[#FAF8F5] transition-colors">
                  Curated Pet Pantry &amp; Treats
                </a>
              </li>
              <li>
                <a href="#tim" className="hover:text-[#FAF8F5] transition-colors">
                  Profil Tim Perawat &amp; Dokter
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <p className="font-semibold text-xs uppercase tracking-widest text-[#FAF8F5]">
              Jadwal Operasional
            </p>
            <div className="space-y-3 text-xs text-[#9E988E]">
              {schedule.map((item, idx) => (
                <div key={idx} className="space-y-0.5">
                  <span className="text-[#FAF8F5] block font-medium">{item.days}</span>
                  <span className="text-[11px] text-[#9E988E]">{item.time}</span>
                </div>
              ))}
              <p className="text-[11px] text-[#58694B] pt-1">
                Layanan antar-jemput pet taxi beroperasi pada hari kerja.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <p className="font-semibold text-xs uppercase tracking-widest text-[#FAF8F5]">
              Akses &amp; Kontak
            </p>
            <address className="not-italic text-xs text-[#9E988E] space-y-2 leading-relaxed">
              <p>{contact.address}</p>
              <p>{contact.city}</p>
              <div className="pt-3 space-y-2">
                <a
                  href={`tel:${contact.emergencyPhone}`}
                  className="flex items-center gap-2 text-[#FAF8F5] hover:text-[#58694B] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#58694B]" aria-hidden="true" />
                  <span>{contact.formattedEmergencyPhone}</span>
                </a>
                <a
                  href={`https://wa.me/${contact.whatsapp}`}
                  className="flex items-center gap-2 text-[#FAF8F5] hover:text-[#58694B] transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#58694B]" aria-hidden="true" />
                  <span>{contact.whatsappFormatted}</span>
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6C6760] gap-4">
          <p>
            &copy; {currentYear} {studioData.name}. Seluruh hak cipta dilindungi.
          </p>
          <p className="text-[#6C6760]">
            Sanctuary perawatan ramah batin untuk anabul kesayangan di Surabaya.
          </p>
        </div>
      </div>
    </footer>
  );
}
