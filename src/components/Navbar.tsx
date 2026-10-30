"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { studioData } from "@/data/petstudio";
import { Menu, X, ArrowUpRight, Heart, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { TRANSITIONS, SPRINGS } from "@/lib/motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

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
    { href: "#categories", label: "Categories" },
    { href: "#shop-pantry", label: "Shop Goods" },
    { href: "#care-services", label: "Care & Grooming" },
    { href: "#hotel", label: "Pet Hotel" },
    { href: "#personality", label: "Vibes" },
    { href: "#lokasi", label: "Visit Store" },
  ];

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: TRANSITIONS.luxury }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-[#FFFDF9]/95 backdrop-blur-md border-b-2 border-[#EAE5D9] shadow-xs py-2.5"
          : "bg-[#FFFDF9]/85 backdrop-blur-xs border-b border-[#EAE5D9]/80 py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2.5 group">
            <motion.div
              whileHover={{ scale: 1.12, rotate: -8 }}
              whileTap={{ scale: 0.95 }}
              transition={SPRINGS.tactile}
              className="w-10 h-10 rounded-2xl bg-[#FF5C35] flex items-center justify-center text-white shadow-xs"
            >
              <Heart className="w-5 h-5 fill-white text-white" />
            </motion.div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-black text-2xl tracking-tight text-[#18181B] leading-none">
                  KUMO<span className="text-[#FF5C35]">PETS!</span>
                </span>
              </div>
              <span className="text-[10px] font-bold tracking-wider text-[#52525B] uppercase mt-0.5">
                Good Food, Happy Tails
              </span>
            </div>
          </Link>

          <nav
            className="hidden lg:flex items-center gap-1 relative"
            onMouseLeave={() => setHoveredLink(null)}
          >
            {navLinks.map((link) => {
              const isHovered = hoveredLink === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  className="relative px-3.5 py-2 text-xs font-extrabold tracking-wider text-[#52525B] uppercase transition-colors hover:text-[#FF5C35] rounded-xl"
                >
                  <span className="relative z-10">{link.label}</span>
                  {isHovered && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-[#FEF9E7] rounded-xl border border-[#FFC72C]/50 z-0"
                      transition={SPRINGS.snappy}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              transition={SPRINGS.tactile}
              href={`https://wa.me/${studioData.contact.whatsapp}?text=${encodeURIComponent(
                "Halo Kumo Pets! Saya ingin menanyakan katalog pakan / booking perawatan untuk anabul saya."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-2xl bg-[#FF5C35] hover:bg-[#E84A23] px-5 text-xs font-black tracking-wider text-white uppercase shadow-sm hover:shadow-md"
            >
              <ShoppingBag className="w-3.5 h-3.5 mr-1.5" />
              <span>WhatsApp Shop</span>
            </motion.a>
          </div>

          <motion.button
            whileTap={{ scale: 0.92 }}
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2.5 rounded-2xl border-2 border-[#EAE5D9] text-[#18181B] hover:bg-[#FEF9E7] lg:hidden cursor-pointer"
            aria-expanded={isMobileMenuOpen}
            aria-label="Buka menu navigasi"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: TRANSITIONS.snappy }}
            className="border-b-2 border-[#EAE5D9] bg-[#FFFDF9] px-6 pt-4 pb-8 lg:hidden overflow-hidden"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.05, delayChildren: 0.05 },
                },
              }}
              className="flex flex-col gap-2"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, x: -16 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xs font-extrabold tracking-wider text-[#52525B] uppercase hover:text-[#FF5C35] py-2.5 border-b border-[#EAE5D9]/60 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#D8D1C2]" />
                </motion.a>
              ))}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="mt-3 flex flex-col gap-3 border-t border-[#EAE5D9] pt-4"
              >
                <a
                  href={`https://wa.me/${studioData.contact.whatsapp}?text=${encodeURIComponent(
                    "Halo Kumo Pets! Saya ingin menanyakan katalog produk / reservasi salon."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex h-12 items-center justify-center rounded-2xl bg-[#FF5C35] text-xs font-black tracking-wider text-white uppercase hover:bg-[#E84A23] shadow-sm gap-2 active:scale-98"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Chat &amp; Order via WhatsApp</span>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
