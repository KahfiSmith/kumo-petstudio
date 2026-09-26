"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { studioData } from "@/data/petstudio";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "#grooming", label: "Spa & Grooming" },
    { href: "#hotel", label: "Boutique Hotel" },
    { href: "#pantry", label: "Pet Pantry" },
    { href: "#standar", label: "Standar Keamanan" },
    { href: "#kisah", label: "Kisah Anabul" },
    { href: "#tim", label: "Tim Perawat" },
    { href: "#booking", label: "Reservasi" },
    { href: "#lokasi", label: "Lokasi & Jam" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E7E2D9] shadow-xs py-3"
          : "bg-[#FAF8F5]/85 backdrop-blur-xs border-b border-[#E7E2D9]/60 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          <Link href="#" className="flex flex-col group">
            <span className="font-serif text-2xl font-bold tracking-[0.08em] text-[#1E1C1A] uppercase">
              KUMO <span className="font-sans text-xs font-semibold tracking-[0.2em] text-[#58694B]">ATELIER</span>
            </span>
            <span className="text-[10px] font-medium tracking-[0.25em] text-[#6C6760] uppercase">
              Pet Sanctuary &bull; Surabaya Timur
            </span>
          </Link>

          <nav className="hidden xl:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-semibold tracking-[0.12em] text-[#6C6760] uppercase transition-colors hover:text-[#1E1C1A]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden sm:flex items-center gap-5">
            <a
              href={`tel:${studioData.contact.emergencyPhone}`}
              className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#6C6760] hover:text-[#1E1C1A] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#58694B]" />
              <span>{studioData.contact.formattedEmergencyPhone}</span>
            </a>

            <a
              href="#booking"
              className="inline-flex h-10 items-center justify-center border border-[#58694B] bg-[#58694B] px-5 text-xs font-bold tracking-[0.15em] text-[#FAF8F5] uppercase transition-all duration-300 hover:bg-transparent hover:text-[#58694B]"
            >
              <span>Booking Spa</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg border border-[#E7E2D9] text-[#1E1C1A] hover:bg-[#F3EFEA] xl:hidden"
            aria-expanded={isMobileMenuOpen}
            aria-label="Buka menu navigasi"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-b border-[#E7E2D9] bg-[#FAF8F5] px-6 pt-4 pb-8 xl:hidden">
          <div className="flex flex-col gap-3.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xs font-semibold tracking-[0.15em] text-[#6C6760] uppercase hover:text-[#1E1C1A] py-1 border-b border-[#E7E2D9]/40"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-3 border-t border-[#E7E2D9] pt-4">
              <a
                href={`tel:${studioData.contact.emergencyPhone}`}
                className="text-xs font-mono text-[#6C6760] flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#58694B]" />
                <span>{studioData.contact.formattedEmergencyPhone}</span>
              </a>
              <a
                href="#booking"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex h-11 items-center justify-center border border-[#58694B] bg-[#58694B] text-xs font-bold tracking-[0.2em] text-[#FAF8F5] uppercase hover:bg-transparent hover:text-[#58694B]"
              >
                Booking Spa &amp; Hotel &rarr;
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
