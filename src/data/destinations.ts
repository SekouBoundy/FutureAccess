export type Destination = {
  slug: string;
  flag: string;
  country: string;
  region: string;
  text: string;
  image: string;
  /** Pastille optionnelle affichée sur la carte (page Destinations) */
  badge?: { label: string; tone: "blue" | "gold" };
  /** true si une page détaillée /destinations/[slug] existe */
  detailed?: boolean;
};

export const DESTINATIONS: Destination[] = [
  {
    slug: "malaisie",
    flag: "🇲🇾",
    country: "Malaisie",
    region: "Asie",
    text: "Universités reconnues, enseignement en anglais, frais abordables et environnement multiculturel.",
    image: "/images/destinations/malaysia.jpg",
    badge: { label: "Populaire", tone: "blue" },
    detailed: true,
  },
  {
    slug: "turquie",
    flag: "🇹🇷",
    country: "Turquie",
    region: "Asie / Europe",
    text: "Universités de qualité, coût de vie accessible et de nombreuses opportunités académiques.",
    image: "/images/destinations/turkey.jpg",
    detailed: true,
  },
  {
    slug: "chine",
    flag: "🇨🇳",
    country: "Chine",
    region: "Asie",
    text: "Établissements réputés, programmes variés et possibilités de bourses selon les universités.",
    image: "/images/destinations/china.jpg",
    badge: { label: "Nouveau", tone: "gold" },
    detailed: true,
  },
];
