import Image from "next/image";
import { studioData } from "@/data/petstudio";
import { ArrowUpRight } from "lucide-react";

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
    <section className="py-24 sm:py-32 bg-[#F4EFE6] text-[#1B1917] border-b border-[#E8E2D7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 border-b border-[#E8E2D7] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF6F0] text-[#E25B36] text-xs font-mono tracking-widest uppercase mb-3 border border-[#E8E2D7]">
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>Instagram Community</span>
            </div>
            <h2 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#1B1917] uppercase leading-none">
              FOLLOW THE PACK.
            </h2>
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif italic text-2xl sm:text-3xl text-[#E25B36] hover:underline mt-2 inline-block font-normal"
            >
              {contact.instagramHandle}
            </a>
          </div>

          <a
            href={contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-2xl bg-white border-2 border-[#E8E2D7] hover:border-[#E25B36] px-6 text-xs font-bold tracking-wider text-[#1B1917] hover:text-[#E25B36] uppercase transition-all shadow-xs"
          >
            <span>Follow on Instagram</span>
            <ArrowUpRight className="w-4 h-4 ml-2 text-[#E25B36]" />
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {socialPosts.map((post) => (
            <div
              key={post.id}
              className="group relative aspect-square rounded-3xl overflow-hidden border-2 border-[#E8E2D7] bg-white shadow-xs"
            >
              <Image
                src={post.image}
                alt={post.caption}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-106"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-between text-white">
                <span className="text-[10px] font-mono tracking-wider bg-white/20 backdrop-blur-xs px-2.5 py-1 rounded-full w-fit">
                  {post.tag}
                </span>
                <div>
                  <p className="text-xs font-bold text-[#EBB036] mb-1">{post.petName}</p>
                  <p className="text-xs leading-snug line-clamp-3 text-white/90">
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
