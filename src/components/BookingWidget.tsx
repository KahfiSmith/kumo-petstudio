"use client";

import { useState } from "react";
import { studioData } from "@/data/petstudio";
import { Calendar, Check, ArrowRight, Heart } from "lucide-react";

export function BookingWidget() {
  const { contact, groomingServices, hotelSuites } = studioData;

  const [serviceType, setServiceType] = useState<string>("Spa & Grooming");
  const [petType, setPetType] = useState<string>("Anjing Ras Kecil (Poodle/Bichon/Pomeranian)");
  const [selectedPackage, setSelectedPackage] = useState<string>(
    "Aroma Herbal & Ozone Hydrotherapy"
  );
  const [bookingDate, setBookingDate] = useState<string>("");
  const [petName, setPetName] = useState<string>("");
  const [ownerName, setOwnerName] = useState<string>("");

  const generateWhatsAppUrl = () => {
    const petStr = petName.trim() ? petName.trim() : "Anabul Tersayang";
    const ownerStr = ownerName.trim() ? ownerName.trim() : "Pet Parent";
    const dateStr = bookingDate ? bookingDate : "Hari Ini / Terdekat";

    const msg = `Halo Concierge Kumo Pets, saya ingin reservasi untuk anabul saya:
* Nama Pemilik: ${ownerStr}
* Nama & Ras Anabul: ${petStr} (${petType})
* Layanan / Paket: ${serviceType} : ${selectedPackage}
* Rencana Tanggal: ${dateStr}

Mohon informasi ketersediaan slot waktu dan konfirmasi jadwal. Terima kasih!`;

    return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(msg)}`;
  };

  const packageOptions =
    serviceType === "Boutique Hotel"
      ? hotelSuites.map((s) => s.name)
      : groomingServices.map((g) => g.name);

  return (
    <section id="booking" className="scroll-mt-24 py-24 sm:py-32 bg-[#FEF9E7] text-[#18181B] border-b-2 border-[#EAE5D9]">
      <div className="max-w-4xl mx-auto px-5 lg:px-10">
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#FF5C35] text-xs font-black tracking-wider uppercase mb-4 border-2 border-[#FF5C35]/30 shadow-xs">
            <Heart className="w-3.5 h-3.5 fill-[#FF5C35] text-[#FF5C35]" />
            <span>Ready for Tail Wags</span>
          </div>

          <h2 className="font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#18181B] uppercase leading-none mb-4">
            LET&apos;S MAKE <br />
            <span className="text-[#FF5C35]">THEIR DAY.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#52525B] font-semibold leading-relaxed">
            Pilih sesi spa ozon atau kamar hotel kesayangan Anda. Tim kami akan menyambut anabul Anda dengan penuh sukacita dan perlakuan bebas rasa takut.
          </p>
        </div>

        <div className="bg-white rounded-[2.5rem] p-6 sm:p-10 lg:p-12 border-2 border-[#18181B] shadow-2xl space-y-8">
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-[#18181B] mb-3">
              1. Pilih Kategori Layanan
            </label>
            <div className="grid grid-cols-2 gap-3">
              {["Spa & Grooming", "Boutique Hotel"].map((srv) => (
                <button
                  key={srv}
                  type="button"
                  onClick={() => {
                    setServiceType(srv);
                    if (srv === "Boutique Hotel") {
                      setSelectedPackage(hotelSuites[0].name);
                    } else {
                      setSelectedPackage(groomingServices[0].name);
                    }
                  }}
                  className={`p-4 rounded-2xl border-2 text-xs sm:text-sm font-black uppercase tracking-wider transition-all cursor-pointer flex items-center justify-between ${
                    serviceType === srv
                      ? "bg-[#FF5C35] text-white border-[#FF5C35] shadow-sm"
                      : "bg-[#FFFDF9] text-[#52525B] border-[#EAE5D9] hover:border-[#FF5C35] hover:text-[#18181B]"
                  }`}
                >
                  <span>{srv}</span>
                  {serviceType === srv && <Check className="w-4 h-4 text-white" />}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-[#18181B] mb-3">
              2. Karakter / Jenis Hewan Peliharaan
            </label>
            <select
              value={petType}
              onChange={(e) => setPetType(e.target.value)}
              className="w-full p-4 rounded-2xl border-2 border-[#18181B] bg-white text-xs sm:text-sm font-bold text-[#18181B] focus:outline-hidden focus:border-[#FF5C35] shadow-xs cursor-pointer"
            >
              <option value="Anjing Ras Kecil (Poodle/Bichon/Pomeranian/Shih Tzu)">
                Anjing Ras Kecil (Poodle, Bichon, Pomeranian, Shih Tzu)
              </option>
              <option value="Anjing Ras Sedang (Corgi/Beagle/French Bulldog)">
                Anjing Ras Sedang (Corgi, Beagle, French Bulldog)
              </option>
              <option value="Anjing Ras Besar (Golden/Labrador/Samoyed/Husky)">
                Anjing Ras Besar (Golden, Labrador, Samoyed, Husky)
              </option>
              <option value="Kucing Bulu Pendek (British Shorthair/Domestic/Bengal)">
                Kucing Bulu Pendek (British Shorthair, Domestik, Bengal)
              </option>
              <option value="Kucing Bulu Panjang (Persia/Maine Coon/Ragdoll)">
                Kucing Bulu Panjang (Persia, Maine Coon, Ragdoll)
              </option>
              <option value="Hewan Lain / Perawatan Khusus Kulit Sensitif">
                Hewan Lain / Khusus Penanganan Sensitif
              </option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-[#18181B] mb-3">
              3. Paket Pilihan Spesifik
            </label>
            <select
              value={selectedPackage}
              onChange={(e) => setSelectedPackage(e.target.value)}
              className="w-full p-4 rounded-2xl border-2 border-[#18181B] bg-white text-xs sm:text-sm font-bold text-[#18181B] focus:outline-hidden focus:border-[#FF5C35] shadow-xs cursor-pointer"
            >
              {packageOptions.map((pkg) => (
                <option key={pkg} value={pkg}>
                  {pkg}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-[#18181B] mb-2">
                Nama Anda (Pet Parent)
              </label>
              <input
                type="text"
                placeholder="Contoh: Amanda"
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
                className="w-full p-3.5 rounded-2xl border-2 border-[#EAE5D9] bg-white text-xs sm:text-sm font-bold text-[#18181B] focus:outline-hidden focus:border-[#FF5C35]"
              />
            </div>
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-[#18181B] mb-2">
                Nama Anabul
              </label>
              <input
                type="text"
                placeholder="Contoh: Mochi"
                value={petName}
                onChange={(e) => setPetName(e.target.value)}
                className="w-full p-3.5 rounded-2xl border-2 border-[#EAE5D9] bg-white text-xs sm:text-sm font-bold text-[#18181B] focus:outline-hidden focus:border-[#FF5C35]"
              />
            </div>
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-[#18181B] mb-2">
                Prakiraan Tanggal
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                  className="w-full p-3.5 rounded-2xl border-2 border-[#EAE5D9] bg-white text-xs sm:text-sm font-bold text-[#18181B] focus:outline-hidden focus:border-[#FF5C35]"
                />
                <Calendar className="w-4 h-4 text-[#52525B] absolute right-3.5 top-4 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="pt-4 border-t-2 border-[#EAE5D9] space-y-4">
            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-[#FF5C35] hover:bg-[#E84A23] text-xs sm:text-sm font-black tracking-wider text-white uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:scale-102 active:scale-98"
            >
              <span>Kirim Reservasi via WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#52525B] font-semibold pt-1">
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#16A34A]" />
                Tanpa Biaya Pembatalan Mendadak
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#16A34A]" />
                Konfirmasi Cepat Tim Concierge
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-[#52525B] font-semibold">
            Butuh jadwal darurat atau konsultasi kondisi kulit khusus? Hubungi tim kami di{" "}
            <a
              href={`tel:${contact.emergencyPhone}`}
              className="text-[#FF5C35] font-black underline hover:text-[#E84A23]"
            >
              {contact.formattedEmergencyPhone}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
