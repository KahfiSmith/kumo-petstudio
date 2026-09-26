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

    const msg = `Halo Concierge Kumo Pet Atelier, saya ingin melakukan reservasi perawatan:
• Nama Pemilik: ${ownerStr}
• Nama & Jenis Anabul: ${petStr} (${petType})
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
    <section id="booking" className="scroll-mt-24 py-24 sm:py-32 bg-[#F3EFEA] text-[#1E1C1A] border-b border-[#E7E2D9]">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#58694B]" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#58694B]">
              08 / Reservasi Concierge
            </span>
            <span className="w-8 h-[1px] bg-[#58694B]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1E1C1A] tracking-tight leading-[1.15] mb-4">
            Pesan Sesi Kunjungan Anabul.
          </h2>

          <p className="text-base text-[#6C6760] leading-relaxed">
            Pilih layanan spa atau kamar hotel yang Anda kehendaki. Concierge kami akan mengonfirmasi slot waktu dan kesiapan fasilitas via WhatsApp.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#E7E2D9] shadow-xs space-y-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1E1C1A] block mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#58694B]" aria-hidden="true" />
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
                    className={`p-4 text-xs sm:text-sm rounded-xl border text-left transition-all min-h-[50px] cursor-pointer flex items-center justify-between gap-2 ${
                      isSelected
                        ? "bg-[#1E1C1A] border-[#1E1C1A] text-[#FAF8F5] font-medium shadow-xs"
                        : "bg-[#FAF8F5] text-[#6C6760] border-[#E7E2D9] hover:border-[#1E1C1A]/30 hover:text-[#1E1C1A]"
                    }`}
                    aria-pressed={isSelected}
                  >
                    <span>{service}</span>
                    {isSelected && <Check className="w-4 h-4 text-[#58694B] shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="select-package"
                className="text-xs font-semibold uppercase tracking-wider text-[#1E1C1A] block mb-2"
              >
                02. Pilihan Paket / Suite
              </label>
              <select
                id="select-package"
                value={selectedPackage}
                onChange={(e) => setSelectedPackage(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-[#E7E2D9] rounded-xl px-4 py-3 text-[#1E1C1A] text-xs sm:text-sm focus-visible:outline-2 focus-visible:outline-[#58694B] min-h-[46px]"
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
                className="text-xs font-semibold uppercase tracking-wider text-[#1E1C1A] block mb-2"
              >
                03. Jenis &amp; Kategori Anabul
              </label>
              <select
                id="pet-type"
                value={petType}
                onChange={(e) => setPetType(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-[#E7E2D9] rounded-xl px-4 py-3 text-[#1E1C1A] text-xs sm:text-sm focus-visible:outline-2 focus-visible:outline-[#58694B] min-h-[46px]"
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
                className="text-xs font-semibold uppercase tracking-wider text-[#1E1C1A] block mb-2 flex items-center gap-1.5"
              >
                <Heart className="w-3.5 h-3.5 text-[#58694B]" />
                <span>04. Nama Anabul</span>
              </label>
              <input
                id="pet-name"
                type="text"
                placeholder="Contoh: Mochi"
                value={petName}
                onChange={(e) => setPetName(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-[#E7E2D9] rounded-xl px-4 py-3 text-[#1E1C1A] placeholder-[#9E988E] text-xs sm:text-sm focus-visible:outline-2 focus-visible:outline-[#58694B] min-h-[46px]"
              />
            </div>

            <div>
              <label
                htmlFor="owner-name"
                className="text-xs font-semibold uppercase tracking-wider text-[#1E1C1A] block mb-2"
              >
                05. Nama Pemilik
              </label>
              <input
                id="owner-name"
                type="text"
                placeholder="Contoh: Amanda Setiawan"
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-[#E7E2D9] rounded-xl px-4 py-3 text-[#1E1C1A] placeholder-[#9E988E] text-xs sm:text-sm focus-visible:outline-2 focus-visible:outline-[#58694B] min-h-[46px]"
              />
            </div>

            <div>
              <label
                htmlFor="booking-date"
                className="text-xs font-semibold uppercase tracking-wider text-[#1E1C1A] block mb-2 flex items-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5 text-[#58694B]" />
                <span>06. Rencana Tanggal</span>
              </label>
              <input
                id="booking-date"
                type="date"
                value={bookingDate}
                onChange={(e) => setBookingDate(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-[#E7E2D9] rounded-xl px-4 py-3 text-[#1E1C1A] text-xs sm:text-sm focus-visible:outline-2 focus-visible:outline-[#58694B] min-h-[46px]"
              />
            </div>
          </div>

          <div className="pt-2">
            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[#1E1C1A] hover:bg-black text-[#FAF8F5] font-medium text-sm transition-all shadow-sm group"
            >
              <span>Konfirmasi Reservasi Jadwal via WhatsApp</span>
              <ArrowRight className="w-4 h-4 text-[#58694B] group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-center text-xs text-[#9E988E] mt-3">
              Tim concierge Kumo Pet Atelier akan membalas dan mengonfirmasi slot waktu dalam hitungan menit setiap hari kerja.
            </p>
          </div>
        </div>

        <div className="text-center mt-8 text-xs text-[#6C6760]">
          Butuh penanganan darurat atau konsultasi dokter hewan langsung?{" "}
          <a
            href={`tel:${contact.emergencyPhone}`}
            className="text-[#1E1C1A] font-semibold hover:text-[#58694B] transition-colors inline-flex items-center gap-1.5 underline underline-offset-4"
          >
            <Phone className="w-3.5 h-3.5 text-[#58694B]" />
            <span>Telepon Studio: {contact.formattedEmergencyPhone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
