export type ProjectCategory =
  | "Wedding"
  | "Portrait"
  | "Event"
  | "Commercial";

export type ProjectStat = {
  value: string;
  label: string;
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  location: string;
  year: string;
  cover: string;
  hero: string;
  description: string;
  brief: string;
  approach: string;
  result: string;
  stats: ProjectStat[];
  gallery: string[];
};

export const projectCategories = [
  "All",
  "Wedding",
  "Portrait",
  "Event",
  "Commercial",
] as const;

export type ProjectFilter =
  (typeof projectCategories)[number];

export const projects: Project[] = [
  {
    slug: "story-in-red",
    title: "A Story in Red",
    subtitle:
      "An intimate wedding story shaped around movement, colour and real emotion.",
    category: "Wedding",
    location: "Bristol",
    year: "2026",
    cover:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=3840&q=92",
    hero:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=3840&q=95",
    description:
      "A cinematic wedding collection built from unscripted moments, quiet portraits and the energy shared between family and friends.",
    brief:
      "The couple wanted their wedding to feel natural and emotionally honest. They did not want a collection dominated by stiff poses or repeated wedding photography formulas.",
    approach:
      "We used documentary coverage for the ceremony and celebrations, then introduced light editorial direction for the portraits. Warm colour, layered composition and movement connected every part of the story.",
    result:
      "The final gallery feels consistent without losing the unpredictability of the day. The collection moves from intimate moments to high energy celebration while preserving one clear visual identity.",
    stats: [
      {
        value: "10h",
        label: "Coverage",
      },
      {
        value: "640",
        label: "Final frames",
      },
      {
        value: "24h",
        label: "Preview delivery",
      },
      {
        value: "01",
        label: "Complete story",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=3840&q=92",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=3840&q=92",
      "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=3840&q=92",
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=3840&q=92",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=3840&q=92",
    ],
  },
  {
    slug: "quiet-beauty",
    title: "Quiet Beauty",
    subtitle:
      "A minimal portrait study built around expression, shape and controlled light.",
    category: "Portrait",
    location: "London",
    year: "2026",
    cover:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=3840&q=92",
    hero:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=3840&q=95",
    description:
      "An editorial portrait collection that removes visual noise and keeps attention on personality, expression and form.",
    brief:
      "The session needed to feel premium without looking distant or overproduced. The images had to work for a personal portfolio, editorial features and social platforms.",
    approach:
      "We used a limited environment, soft directional light and deliberate negative space. Movement was subtle, while posing remained clear enough to create strong shapes.",
    result:
      "The final portraits feel polished but human. Every frame works independently while the full set maintains one controlled editorial language.",
    stats: [
      {
        value: "03h",
        label: "Studio session",
      },
      {
        value: "48",
        label: "Final portraits",
      },
      {
        value: "03",
        label: "Visual setups",
      },
      {
        value: "4K",
        label: "Delivery quality",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=3840&q=92",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=3840&q=92",
      "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=3840&q=92",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=3840&q=92",
    ],
  },
  {
    slug: "after-midnight",
    title: "After Midnight",
    subtitle:
      "A fast moving event story focused on atmosphere, people and cultural energy.",
    category: "Event",
    location: "Manchester",
    year: "2025",
    cover:
      "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=3840&q=92",
    hero:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=3840&q=95",
    description:
      "An event collection designed to capture scale, human connection and the unpredictable energy of a live environment.",
    brief:
      "The client needed complete event coverage without interrupting the guest experience. The photography had to communicate atmosphere while still delivering clear images of speakers, guests and key moments.",
    approach:
      "We combined wide environmental frames, layered crowd photography and close human moments. Flash was used selectively to preserve the natural atmosphere.",
    result:
      "The collection gave the client a complete visual archive with enough variety for press, social media and future campaigns.",
    stats: [
      {
        value: "08h",
        label: "Live coverage",
      },
      {
        value: "520",
        label: "Final images",
      },
      {
        value: "60",
        label: "Press previews",
      },
      {
        value: "01",
        label: "Event archive",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=3840&q=92",
      "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=3840&q=92",
      "https://images.unsplash.com/photo-1496337589254-7e19d01cec44?auto=format&fit=crop&w=3840&q=92",
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=3840&q=92",
    ],
  },
  {
    slug: "modern-rituals",
    title: "Modern Rituals",
    subtitle:
      "A fashion led commercial campaign designed for digital first brand communication.",
    category: "Commercial",
    location: "Birmingham",
    year: "2025",
    cover:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=3840&q=92",
    hero:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=3840&q=95",
    description:
      "A commercial image system combining product visibility, human movement and a consistent editorial tone.",
    brief:
      "The brand needed campaign photographs that could work across the website, social media, advertising and launch materials without feeling repetitive.",
    approach:
      "We created a modular shot plan with editorial portraits, product details and movement based lifestyle frames. Lighting and colour remained consistent across every setup.",
    result:
      "The brand received one campaign library that could be adapted across multiple layouts, aspect ratios and marketing channels.",
    stats: [
      {
        value: "02",
        label: "Production days",
      },
      {
        value: "180",
        label: "Final assets",
      },
      {
        value: "06",
        label: "Creative setups",
      },
      {
        value: "04",
        label: "Delivery formats",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=3840&q=92",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=3840&q=92",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=3840&q=92",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=3840&q=92",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}




