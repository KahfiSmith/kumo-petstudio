import Link from "next/link";
import { studioData } from "@/data/petstudio";
import { Shield, Heart } from "lucide-react";

export function Footer() {
  const { contact, operatingLicense, schedule } = studioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#18181B] text-zinc-400 pt-20 pb-12 border-t-2 border-[#18181B]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-zinc-800">
          <div className="lg:col-span-4 space-y-5">
            <Link href="#" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-2xl bg-[#FF5C35] flex items-center justify-center text-white transition-transform group-hover:rotate-6">
                <Heart className="w-5 h-5 fill-white text-white" />
              </div>
              <span className="font-black text-2xl tracking-tight text-white">
                KUMO<span className="text-[#FF5C35]">PETS!</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm font-semibold">
              {studioData.shortDescription}
            </p>

            <div className="pt-2 text-[11px] text-zinc-400 flex items-start gap-2.5">
              <Shield className="w-4 h-4 text-[#FF5C35] shrink-0 mt-0.5" aria-hidden="true" />
              <span className="leading-snug">{operatingLicense}</span>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <p className="font-black text-xs uppercase tracking-wider text-white">
              Shop &amp; Care Menu
            </p>
            <ul className="space-y-2.5 text-xs text-zinc-400 font-semibold">
              <li>
                <a href="#shop-pantry" className="hover:text-[#FF5C35] transition-colors">
                  Product of the Week (Wild Salmon)
                </a>
              </li>
              <li>
                <a href="#shop-pantry" className="hover:text-[#FF5C35] transition-colors">
                  Organic Beef Tendon Dental Chews
                </a>
              </li>
              <li>
                <a href="#care-services" className="hover:text-[#FF5C35] transition-colors">
                  Aroma Herbal &amp; Ozone Hydro Spa
                </a>
              </li>
              <li>
                <a href="#care-services" className="hover:text-[#FF5C35] transition-colors">
                  Gentle Breed Styling &amp; Haircut
                </a>
              </li>
              <li>
                <a href="#hotel" className="hover:text-[#FF5C35] transition-colors">
                  Canine Garden &amp; Feline Skyview Suites
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <p className="font-black text-xs uppercase tracking-wider text-white">
              Quick Links
            </p>
            <ul className="space-y-2.5 text-xs text-zinc-400 font-semibold">
              <li>
                <a href="#categories" className="hover:text-[#FF5C35] transition-colors">
                  Categories
                </a>
              </li>
              <li>
                <a href="#personality" className="hover:text-[#FF5C35] transition-colors">
                  Pet Vibes
                </a>
              </li>
              <li>
                <a href="#standar" className="hover:text-[#FF5C35] transition-colors">
                  Fear-Free Standards
                </a>
              </li>
              <li>
                <a href="#tim" className="hover:text-[#FF5C35] transition-colors">
                  Caregivers
                </a>
              </li>
              <li>
                <a href="#lokasi" className="hover:text-[#FF5C35] transition-colors">
                  Visit Store
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <p className="font-black text-xs uppercase tracking-wider text-white">
              Store &amp; Concierge
            </p>
            <div className="space-y-2 text-xs text-zinc-400 font-semibold">
              <p className="text-white font-extrabold">{contact.address}</p>
              <p>{contact.city}, Jawa Timur 60115</p>
              <p className="text-[#FF5C35] font-black">{contact.formattedEmergencyPhone}</p>
              <p className="pt-2 text-zinc-400">
                {schedule[0].days}: {schedule[0].time}
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-zinc-400">
          <p>
            &copy; {currentYear} {studioData.name}. Hak Cipta Dilindungi.
          </p>
          <div className="flex items-center gap-1.5 text-zinc-400">
            <span>Dibuat dengan</span>
            <Heart className="w-3.5 h-3.5 text-[#FF5C35] fill-[#FF5C35]" />
            <span>untuk para pecinta anabul di Surabaya</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
