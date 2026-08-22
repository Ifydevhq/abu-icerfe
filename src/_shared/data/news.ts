export type NewsItem = {
  slug: string;
  title: string;
  category: 'Enterprise' | 'Training' | 'Facilities';
  date: string;
  excerpt: string;
};

/**
 * Items carried over from the Centre's existing records. Dates reflect what the
 * Centre published; several entries share a posting date in the original record.
 */
export const news: NewsItem[] = [
  {
    slug: 'bakery-commissioning',
    title: 'Commissioning of the ICERFE Bakery',
    category: 'Facilities',
    date: '2019-12-25',
    excerpt:
      'The Centre’s bakery on the ABU Main Campus, Samaru, was formally commissioned — putting the Improved Rocket Baker’s Oven into production.',
  },
  {
    slug: 'entrepreneurship-lab-shoe-polish',
    title: 'Inspection of PUP Shoe Polish at the Entrepreneurship Laboratory',
    category: 'Enterprise',
    date: '2019-12-25',
    excerpt:
      'A visit to the Entrepreneurship Laboratory to review production of the Centre’s PUP shoe polish line.',
  },
  {
    slug: 'icerfe-special-bread',
    title: 'ICERFE ABU Special Bread',
    category: 'Enterprise',
    date: '2019-12-25',
    excerpt: 'The bakery’s flagship product, produced and sold on campus by the Centre.',
  },
  {
    slug: 'chocolate-and-buttered-breads',
    title: 'ICERFE ABU Chocolate & Buttered Breads',
    category: 'Enterprise',
    date: '2019-12-25',
    excerpt: 'An expansion of the bakery range into chocolate and buttered varieties.',
  },
  {
    slug: 'family-care-jelly',
    title: 'ICERFE Family Care Jelly',
    category: 'Enterprise',
    date: '2019-12-25',
    excerpt: 'Petroleum jelly produced under the Centre’s Family Care line.',
  },
  {
    slug: 'family-care-products',
    title: 'ICERFE Special Family Care Products',
    category: 'Enterprise',
    date: '2019-12-25',
    excerpt: 'Liquid soap, jelly and hand sanitiser — the full Family Care range produced at the Centre.',
  },
  {
    slug: 'entrepreneurship-training-graduation',
    title: 'Entrepreneurship Training Participants Graduate',
    category: 'Training',
    date: '2019-12-25',
    excerpt: 'Participants completed the Centre’s entrepreneurship training programme at a graduation ceremony.',
  },
  {
    slug: 'liquid-soap-making',
    title: 'Liquid Soap Making Workshop',
    category: 'Training',
    date: '2019-12-25',
    excerpt: 'A practical skills session on liquid soap production, part of the Centre’s skill acquisition training.',
  },
];

export const galleryItems = [
  { title: 'ICERFE Headquarters', caption: 'ABU Main Campus, Samaru, Zaria', image: '/images/campus.png' },
  { title: 'Reception & Waiting Room', caption: 'ICERFE Headquarters, Samaru Zaria' },
  { title: 'Board Room', caption: 'ICERFE Headquarters, Samaru Zaria' },
  { title: 'Conference Hall', caption: 'Inside the Centre’s green building' },
  { title: 'Postgraduate Classroom', caption: 'Open classroom and work stations' },
  { title: 'ICERFE Bakery', caption: 'Improved Rocket Baker’s Oven in production' },
  { title: 'Entrepreneurship Laboratory', caption: 'Where the Centre’s product lines are developed' },
  { title: 'Skill Acquisition Training', caption: 'Practical training sessions on campus' },
  { title: 'Training Graduation', caption: 'Entrepreneurship programme participants' },
];
