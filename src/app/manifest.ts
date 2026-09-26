import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kumo Pet Atelier & Sanctuary",
    short_name: "Kumo Pet",
    description: "Playful pet lifestyle brand, gentle grooming bebas trauma, dan boutique hotel anabul di Surabaya.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF6F0",
    theme_color: "#E25B36",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
