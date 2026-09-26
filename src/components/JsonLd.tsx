import { studioData } from "@/data/petstudio";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["PetStore", "LocalBusiness"],
    "name": studioData.name,
    "url": studioData.seo.siteUrl,
    "telephone": studioData.contact.emergencyPhone,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": studioData.contact.address,
      "addressLocality": studioData.contact.city,
      "addressRegion": "Jawa Timur",
      "postalCode": "60115",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": studioData.seo.coordinates.latitude,
      "longitude": studioData.seo.coordinates.longitude
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:30",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Ozone Spa & Hydrotherapy",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Cage-Free Hotel Suites",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Cat & Dog Separated Rooms",
        "value": true
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
