import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Newsreader } from "next/font/google";
import { studioData } from "@/data/petstudio";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(studioData.seo.siteUrl),
  title: {
    default: studioData.seo.title,
    template: `%s | ${studioData.name}`,
  },
  description: studioData.seo.description,
  keywords: studioData.seo.keywords,
  authors: [{ name: studioData.name }],
  creator: studioData.name,
  publisher: studioData.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: studioData.seo.title,
    description: studioData.seo.description,
    url: studioData.seo.siteUrl,
    siteName: studioData.name,
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?q=85&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: `${studioData.name} Surabaya`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: studioData.seo.title,
    description: studioData.seo.description,
    images: ["https://images.unsplash.com/photo-1548767797-d8c844163c4c?q=85&w=1200&auto=format&fit=crop"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#58694B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${jakarta.variable} ${newsreader.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#FAF8F5] text-[#1E1C1A] antialiased font-sans selection:bg-[#58694B] selection:text-[#FAF8F5]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-[#58694B] focus:text-white focus:rounded-lg focus:shadow-xl text-sm font-bold"
        >
          Lewati ke konten utama
        </a>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
