export type MenuItem = {
  name: string;
  description: string;
  price?: string;
  badge?: string;
};

export type MenuSection = {
  title: string;
  items: MenuItem[];
};

export const menu: MenuSection[] = [
  {
    title: "Tacos",
    items: [
      {
        name: "Street Tacos",
        description:
          "Hand-pressed corn tortillas, your choice of meat, onion, cilantro, salsa.",
        badge: "$1.99 every Tuesday",
      },
      {
        name: "Quesatacos",
        description:
          "Crispy cheese-griddled tortilla folded around tender meat. The one everyone posts.",
      },
      {
        name: "Birria Tacos",
        description:
          "Slow-braised birria, cheese, dipped in consomé. Served with a cup for dunking.",
      },
    ],
  },
  {
    title: "Off the Plancha",
    items: [
      {
        name: "Quesadillas",
        description:
          "Big flour tortilla, melted cheese, your meat. Add guac if you know.",
      },
    ],
  },
];

export const tacoTuesday = {
  headline: "Taco Tuesday",
  price: "$1.99",
  subhead: "Street tacos, every Tuesday. No catch.",
};
