import Image from "next/image";
import { studioData } from "@/data/petstudio";
import { ArrowUpRight, Heart } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function CommunitySocialSection() {
  const { socialPosts, contact } = studioData;

  return (
    <section className="py-24 sm:py-32 bg-[#EFF6FF] text-[#18181B] border-b-2 border-[#EAE5D9]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 border-b-2 border-[#2563EB]/20 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#2563EB] text-xs font-black tracking-wider uppercase mb-3 border-2 border-[#2563EB]/20">
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>Instagram Community</span>
            </div>
            <h2 className="font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#18181B] uppercase leading-none">
              JOIN THE PACK. <br />
              <span className="text-[#2563EB]">{contact.instagramHandle}</span>
            </h2>
          </div>

          <a
            href={contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-13 items-center justify-center rounded-2xl bg-[#2563EB] hover:bg-[#1D4ED8] px-7 text-xs font-black tracking-wider text-white uppercase transition-all shadow-md hover:shadow-lg hover:scale-104 gap-2"
          >
            <span>Follow on Instagram</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {socialPosts.map((post, idx) => (
            <div
              key={post.id}
              className={`group relative aspect-square rounded-[2rem] overflow-hidden border-2 border-[#18181B] bg-white shadow-md transition-all duration-300 hover:shadow-xl ${
                idx % 2 === 0 ? "hover:-rotate-1" : "hover:rotate-1"
              }`}
            >
              <Image
                src={post.image}
                alt={post.caption}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-between text-white">
                <span className="text-[10px] font-black uppercase tracking-wider bg-white/25 backdrop-blur-md px-3 py-1 rounded-full w-fit border border-white/30">
                  {post.tag}
                </span>
                <div>
                  <div className="flex items-center gap-1.5 text-[#FFC72C] mb-1">
                    <Heart className="w-3.5 h-3.5 fill-[#FFC72C]" />
                    <span className="text-xs font-black uppercase">{post.petName}</span>
                  </div>
                  <p className="text-xs font-semibold leading-snug line-clamp-3 text-white/90">
                    {post.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
