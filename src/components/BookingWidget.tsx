"use client";

import { useState } from "react";
import { studioData } from "@/data/petstudio";
import { Calendar, Heart, Phone, Sparkles, Check, ArrowRight } from "lucide-react";

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

    const msg = `Halo Concierge Kumo Pet Studio, saya ingin membuat hari anabul saya menyenangkan:
• Nama Pemilik: ${ownerStr}
• Nama & Ras Anabul: ${petStr} (${petType})
• Layanan / Paket: ${serviceType} - ${selectedPackage}
• Rencana Tanggal: ${dateStr}

Mohon informasi ketersediaan slot waktu dan konfirmasi jadwal. Terima kasih!`;

    return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(msg)}`;
  };

  const packageOptions =
    serviceType === "Boutique Hotel"
      ? hotelSuites.map((s) => s.name)
      : groomingServices.map((g) => g.name);

  return (
    <section id="booking" className="scroll-mt-24 py-24 sm:py-32 bg-[#FAF6F0] text-[#1B1917] border-b border-[#E8E2D7]">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDF1ED] text-[#E25B36] text-xs font-mono tracking-widest uppercase mb-4 border border-[#E25B36]/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready for Tail Wags</span>
          </div>

          <h2 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#1B1917] uppercase leading-[0.98] mb-4">
            LET&apos;S MAKE <br />
            <span className="font-serif italic font-normal text-[#E25B36]">THEIR DAY.</span>
          </h2>

          <p className="text-base text-[#6C665F] leading-relaxed">
            Pilih sesi spa ozon atau kamar hotel yang Anda kehendaki. Tim perawat kami akan menyambut anabul Anda dengan sukacita dan pelukan hangat.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border-2 border-[#E8E2D7] shadow-sm space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1B1917] block mb-3 flex items-center gap-2 font-mono">
              <Sparkles className="w-3.5 h-3.5 text-[#E25B36]" aria-hidden="true" />
              <span>01. Pilih Jenis Layanan</span>
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {["Spa & Grooming", "Boutique Hotel"].map((service) => {
                const isSelected = serviceType === service;
                return (
                  <button
                    key={service}
                    type="button"
                    onClick={() => {
                      setServiceType(service);
                      if (service === "Boutique Hotel") {
                        setSelectedPackage(hotelSuites[0].name);
                      } else {
                        setSelectedPackage(groomingServices[0].name);
                      }
                    }}
                    className={`p-4 text-xs sm:text-sm rounded-2xl border-2 text-left transition-all min-h-[52px] cursor-pointer flex items-center justify-between gap-2 ${
                      isSelected
                        ? "bg-[#1B1917] border-[#1B1917] text-white font-bold shadow-xs"
                        : "bg-[#FAF6F0] text-[#6C665F] border-[#E8E2D7] hover:border-[#E25B36] hover:text-[#1B1917]"
                    }`}
                    aria-pressed={isSelected}
                  >
                    <span>{service}</span>
                    {isSelected && <Check className="w-4 h-4 text-[#EBB036] shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="select-package"
                className="text-xs font-bold uppercase tracking-wider text-[#1B1917] block mb-2 font-mono"
              >
                02. Pilihan Paket / Suite
              </label>
              <select
                id="select-package"
                value={selectedPackage}
                onChange={(e) => setSelectedPackage(e.target.value)}
                className="w-full bg-[#FAF6F0] border-2 border-[#E8E2D7] rounded-2xl px-4 py-3 text-[#1B1917] text-xs sm:text-sm focus-visible:outline-2 focus-visible:outline-[#E25B36] min-h-[48px]"
              >
                {packageOptions.map((pkg) => (
                  <option key={pkg} value={pkg}>
                    {pkg}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="pet-type"
                className="text-xs font-bold uppercase tracking-wider text-[#1B1917] block mb-2 font-mono"
              >
                03. Ras &amp; Karakter Anabul
              </label>
              <select
                id="pet-type"
                value={petType}
                onChange={(e) => setPetType(e.target.value)}
                className="w-full bg-[#FAF6F0] border-2 border-[#E8E2D7] rounded-2xl px-4 py-3 text-[#1B1917] text-xs sm:text-sm focus-visible:outline-2 focus-visible:outline-[#E25B36] min-h-[48px]"
              >
                <option value="Anjing Ras Kecil (Poodle/Bichon/Pomeranian)">
                  Anjing Ras Kecil (Poodle, Bichon, Pomeranian, dsb)
                </option>
                <option value="Anjing Ras Sedang &amp; Besar (Golden/Samoyed/Husky)">
                  Anjing Ras Sedang &amp; Besar (Golden, Samoyed, Husky, dsb)
                </option>
                <option value="Kucing Ras Bulu Pendek (BSH/Domestic/Siamese)">
                  Kucing Ras Bulu Pendek (BSH, Domestik, Siamese, dsb)
                </option>
                <option value="Kucing Ras Bulu Panjang (Persian/Ragdoll/Maine Coon)">
                  Kucing Ras Bulu Panjang (Persian, Ragdoll, Maine Coon, dsb)
                </option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div>
              <label
                htmlFor="pet-name"
                className="text-xs font-bold uppercase tracking-wider text-[#1B1917] block mb-2 flex items-center gap-1.5 font-mono"
              >
                <Heart className="w-3.5 h-3.5 text-[#E25B36]" />
                <span>04. Nama Anabul</span>
              </label>
              <input
                id="pet-name"
                type="text"
                placeholder="Contoh: Mochi"
                value={petName}
                onChange={(e) => setPetName(e.target.value)}
                className="w-full bg-[#FAF6F0] border-2 border-[#E8E2D7] rounded-2xl px-4 py-3 text-[#1B1917] placeholder-[#9E988E] text-xs sm:text-sm focus-visible:outline-2 focus-visible:outline-[#E25B36] min-h-[48px]"
              />
            </div>

            <div>
              <label
                htmlFor="owner-name"
                className="text-xs font-bold uppercase tracking-wider text-[#1B1917] block mb-2 font-mono"
              >
                05. Nama Pemilik
              </label>
              <input
                id="owner-name"
                type="text"
                placeholder="Contoh: Amanda Setiawan"
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
                className="w-full bg-[#FAF6F0] border-2 border-[#E8E2D7] rounded-2xl px-4 py-3 text-[#1B1917] placeholder-[#9E988E] text-xs sm:text-sm focus-visible:outline-2 focus-visible:outline-[#E25B36] min-h-[48px]"
              />
            </div>

            <div>
              <label
                htmlFor="booking-date"
                className="text-xs font-bold uppercase tracking-wider text-[#1B1917] block mb-2 flex items-center gap-1.5 font-mono"
              >
                <Calendar className="w-3.5 h-3.5 text-[#E25B36]" />
                <span>06. Rencana Tanggal</span>
              </label>
              <input
                id="booking-date"
                type="date"
                value={bookingDate}
                onChange={(e) => setBookingDate(e.target.value)}
                className="w-full bg-[#FAF6F0] border-2 border-[#E8E2D7] rounded-2xl px-4 py-3 text-[#1B1917] text-xs sm:text-sm focus-visible:outline-2 focus-visible:outline-[#E25B36] min-h-[48px]"
              />
            </div>
          </div>

          <div className="pt-2">
            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 px-6 py-4.5 rounded-2xl bg-[#E25B36] hover:bg-[#CC4E2C] text-white font-extrabold text-sm uppercase tracking-wider transition-all shadow-md hover:shadow-lg group cursor-pointer"
            >
              <span>Book Pet Care via WhatsApp</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1.5 transition-transform" />
            </a>
            <p className="text-center text-xs text-[#6C665F] mt-3">
              Tim concierge Kumo Pet Studio akan mengonfirmasi slot waktu dan kesiapan fasilitas dalam beberapa menit.
            </p>
          </div>
        </div>

        <div className="text-center mt-8 text-xs text-[#6C665F]">
          Butuh penanganan darurat atau konsultasi dokter hewan langsung?{" "}
          <a
            href={`tel:${contact.emergencyPhone}`}
            className="text-[#1B1917] font-bold hover:text-[#E25B36] transition-colors inline-flex items-center gap-1.5 underline underline-offset-4"
          >
            <Phone className="w-3.5 h-3.5 text-[#E25B36]" />
            <span>Telepon Studio: {contact.formattedEmergencyPhone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
