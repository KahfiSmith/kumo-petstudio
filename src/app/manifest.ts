import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kumo Pets: Playful Pet Store & Care",
    short_name: "Kumo Pets",
    description: "Playful pet storefront, pakan bergizi murni, gentle grooming bebas trauma, dan boutique hotel anabul di Surabaya.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFDF9",
    theme_color: "#FF5C35",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
