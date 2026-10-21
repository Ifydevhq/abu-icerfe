export type NewsItem = {
  slug: string;
  title: string;
  category: "Enterprise" | "Training" | "Facilities";
  date: string;
  excerpt: string;
  /** Featured image, shown beneath the standfirst on the item's own page. */
  image?: string;
  imageAlt?: string;
  /**
   * The full article. The Centre has not supplied body copy for these items
   * yet, so every entry currently runs on its standfirst alone — the item page
   * handles that and shows a short note instead of inventing text.
   */
  body?: string[];
};

/**
 * Items carried over from the Centre's existing records. Dates reflect what the
 * Centre published; several entries share a posting date in the original record.
 */
export const news: NewsItem[] = [
  {
    slug: "bakery-commissioning",
    title: "Commissioning of the ICERFE Bakery",
    category: "Facilities",
    date: "2019-12-25",
    excerpt:
      "The Centre’s bakery on the ABU Main Campus, Samaru, was formally commissioned, putting the Improved Rocket Baker’s Oven into production.",
  },
  {
    slug: "entrepreneurship-lab-shoe-polish",
    title: "Inspection of PUP Shoe Polish at the Entrepreneurship Laboratory",
    category: "Enterprise",
    date: "2019-12-25",
    excerpt:
      "A visit to the Entrepreneurship Laboratory to review production of the Centre’s PUP shoe polish line.",
  },
  {
    slug: "icerfe-special-bread",
    title: "ICERFE ABU Special Bread",
    category: "Enterprise",
    date: "2019-12-25",
    excerpt:
      "The bakery’s flagship product, produced and sold on campus by the Centre.",
  },
  {
    slug: "chocolate-and-buttered-breads",
    title: "ICERFE ABU Chocolate & Buttered Breads",
    category: "Enterprise",
    date: "2019-12-25",
    excerpt:
      "An expansion of the bakery range into chocolate and buttered varieties.",
  },
  {
    slug: "family-care-jelly",
    title: "ICERFE Family Care Jelly",
    category: "Enterprise",
    date: "2019-12-25",
    excerpt: "Petroleum jelly produced under the Centre’s Family Care line.",
  },
  {
    slug: "family-care-products",
    title: "ICERFE Special Family Care Products",
    category: "Enterprise",
    date: "2019-12-25",
    excerpt:
      "Liquid soap, jelly and hand sanitiser make up the full Family Care range produced at the Centre.",
  },
  {
    slug: "entrepreneurship-training-graduation",
    title: "Entrepreneurship Training Participants Graduate",
    category: "Training",
    date: "2019-12-25",
    image: "/images/abu-icerfe-event-pic-11.jpeg",
    imageAlt: "A training cohort gathered outside the Centre",
    excerpt:
      "Participants completed the Centre’s entrepreneurship training programme at a graduation ceremony.",
  },
  {
    slug: "liquid-soap-making",
    title: "Liquid Soap Making Workshop",
    category: "Training",
    date: "2019-12-25",
    image: "/images/abu-icerfe-event-pic-6.jpeg",
    imageAlt: "A training session in progress at the Centre",
    excerpt:
      "A practical skills session on liquid soap production, part of the Centre’s skill acquisition training.",
  },
];

/**
 * Captions describe only what is visible in each photograph. The training
 * series is identified from the banner the participants are holding (TETFund /
 * GETrust, CBN Centre of Excellence, 7–9 September 2026); the building shots
 * are identified from the signage above the entrance. The previous
 * "photograph to be added" placeholders have been replaced now that the Centre
 * has supplied real images.
 */
export const galleryItems = [
  {
    title: "ICERFE Headquarters",
    caption: "Samaru Main Campus, Zaria",
    image: "/images/campus.png",
  },
  {
    title: "Teaching Entrepreneurship Using Effectuation",
    caption: "Participants at the CBN Centre of Excellence · 7–9 September 2026",
    image: "/images/abu-icerfe-event-pic-5.jpeg",
  },
  {
    title: "The training cohort",
    caption: "Staff of Ahmadu Bello University, Zaria",
    image: "/images/abu-icerfe-event-pic-11.jpeg",
  },
  {
    title: "Welcoming the participants",
    caption: "A programme supported by TETFund and GETrust",
    image: "/images/abu-icerfe-event-pic-4.jpeg",
  },
  {
    title: "Programme participants",
    caption: "Teaching Entrepreneurship Using Effectuation",
    image: "/images/abu-icerfe-event-pic-3.jpeg",
  },
  {
    title: "A session in progress",
    caption: "Effectuation principles under discussion",
    image: "/images/abu-icerfe-event-pic-1.jpeg",
  },
  {
    title: "Effectuation in the classroom",
    caption: "The “Patchwork Quilt” principle, on forming partnerships",
    image: "/images/abu-icerfe-event-pic-6.jpeg",
  },
  {
    title: "Entrepreneurship training participants",
    caption: "On the Samaru Main Campus",
    image: "/people/abu_icerfe_group_image_1.jpeg",
  },
  {
    title: "Outside the Centre",
    caption: "The ICERFE building, Samaru Main Campus",
    image: "/images/abu-icerfe-event-pic-2.jpeg",
  },
  {
    title: "At the entrance",
    caption: "International Centre of Excellence for Rural Finance and Entrepreneurship",
    image: "/images/abu-icerfe-event-pic-7.jpeg",
  },
  {
    title: "The Centre's entrance",
    caption: "TETFund Normal Intervention, 2013",
    image: "/images/abu-icerfe-event-pic-8.jpeg",
  },
  {
    title: "The ICERFE building",
    caption: "Samaru Main Campus, Zaria",
    image: "/images/abu-icerfe-event-pic-9.jpeg",
  },
  {
    title: "Approaching the Centre",
    caption: "Samaru Main Campus, Zaria",
    image: "/images/abu-icerfe-event-pic-10.jpeg",
  },
];
