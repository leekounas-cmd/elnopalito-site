export const business = {
  name: "El Nopalito Taqueria",
  shortName: "El Nopalito",
  tagline: "Real-deal tacos in Oak Cliff",
  phone: "(469) 394-1130",
  phoneHref: "tel:+14693941130",
  address: {
    street: "2436 W Kiest Blvd",
    city: "Dallas",
    state: "TX",
    zip: "75233",
    neighborhood: "Kiestwood Village",
  },
  hours: "Open daily, closes 9 PM",
  geo: { lat: 32.7195, lng: -96.8597 },
  instagram: "https://www.instagram.com/elnopalitotaqueriia/",
  instagramHandle: "@elnopalitotaqueriia",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=El+Nopalito+Taqueria+2436+W+Kiest+Blvd+Dallas+TX+75233",
  mapEmbedUrl:
    "https://www.google.com/maps/embed/v1/place?key=&q=El+Nopalito+Taqueria+2436+W+Kiest+Blvd+Dallas+TX+75233",
  siteUrl: "https://elnopalitotaqueria.com",
  priceRange: "$",
};

export const fullAddress = `${business.address.street}, ${business.address.city}, ${business.address.state} ${business.address.zip}`;
