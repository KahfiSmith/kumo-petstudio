import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kumo Pet Atelier & Sanctuary",
    short_name: "Kumo Pet",
    description: "Sanctuary perawatan hewan peliharaan modern, gentle grooming bebas trauma, dan boutique hotel anabul di Surabaya.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF8F5",
    theme_color: "#58694B",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
