import { business, fullAddress } from "@/lib/business";

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${business.siteUrl}/#restaurant`,
    name: business.name,
    image: [`${business.siteUrl}/images/taco-plate.jpg`],
    url: business.siteUrl,
    telephone: business.phone,
    priceRange: business.priceRange,
    servesCuisine: ["Mexican", "Tex-Mex", "Tacos", "Birria"],
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.lat,
      longitude: business.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        closes: "21:00",
      },
    ],
    sameAs: [business.instagram],
    description: `Family-run taqueria in ${business.address.neighborhood}, Oak Cliff (${fullAddress}). Street tacos, quesatacos, birria, and quesadillas. Taco Tuesday $1.99.`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
