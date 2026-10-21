/**
 * Content for the ICERFE Innovation Hub page.
 *
 * Grounded in the Centre's own published commitments: the Innovation Hub and
 * Entrepreneurship Laboratories appear in its facilities list, and its mandate
 * commits it to "incubation and consultancy services" and to assisting
 * entrepreneurs "from start-up to maturity". Programme structure and sector
 * focus are introductory descriptions pending the Hub's own detail; no figures,
 * cohorts or named partners are asserted.
 *
 * Images are placeholders drawn from the Centre's photographs — replace the
 * paths below when the Hub's own photography is available.
 */

export const innovationHub = {
  name: 'ICERFE Innovation Hub',
  tagline: 'Where rural enterprise ideas become working businesses.',
  intro:
    'The Innovation Hub is the Centre’s home for early-stage founders. It brings incubation, mentorship and access to finance together on the Samaru campus, so that ideas in agribusiness, rural finance and light manufacturing can be tested, built and taken to market.',
  /**
   * Set this to the standalone Innovation Hub website once it is live; the
   * page then shows a "Visit the Hub website" button in the hero and closing
   * band. Leave null until then.
   */
  websiteUrl: null as string | null,
  images: {
    hero: '/images/abu-icerfe-event-pic-6.jpeg',
    overview: '/images/abu-icerfe-event-pic-4.jpeg',
    facilities: '/images/abu-icerfe-event-pic-9.jpeg',
    facilitiesSecondary: '/images/abuicerfe_hero_image_2.jpeg',
  },
};

export const hubPillars = [
  {
    title: 'Incubation',
    body: 'A structured residency for early-stage ventures, with workspace, routine check-ins and support from first prototype to first customers.',
  },
  {
    title: 'Mentorship & advisory',
    body: 'Founders are paired with the Centre’s faculty and practitioners for guidance on business models, governance, pricing and operations.',
  },
  {
    title: 'Access to finance',
    body: 'Drawing on the Centre’s rural finance expertise to prepare ventures for credit, grants and investment, and to connect them with financial institutions.',
  },
  {
    title: 'Skills & capacity building',
    body: 'Practical workshops in bookkeeping, product development, marketing and digital tools, delivered through the Centre’s training programmes.',
  },
  {
    title: 'Product development',
    body: 'Hands-on access to the Entrepreneurship Laboratories to develop, test and refine products before they reach the market.',
  },
  {
    title: 'Market linkages',
    body: 'Introductions to buyers, cooperatives, government programmes and the wider University network to help ventures find and keep customers.',
  },
];

export const hubJourney = [
  {
    step: '01',
    title: 'Apply',
    body: 'Submit an idea or early venture with a short outline of the problem it solves and who it serves.',
  },
  {
    step: '02',
    title: 'Pre-incubation',
    body: 'Refine the idea through guided validation: customer discovery, costing and a basic business model.',
  },
  {
    step: '03',
    title: 'Incubation',
    body: 'Build the venture with workspace, mentorship, laboratory access and preparation for finance.',
  },
  {
    step: '04',
    title: 'Launch & growth',
    body: 'Graduate into the market with continued advisory support from start-up to maturity.',
  },
];

export const hubFocusAreas = [
  'Agribusiness & food processing',
  'Rural & inclusive finance',
  'Light manufacturing & consumer goods',
  'Clean energy & appropriate technology',
  'Digital services for rural markets',
  'Cooperative & community enterprise',
];

export const hubFacilities = [
  {
    title: 'Co-working space',
    body: 'Shared work stations for resident founders within the Centre’s building on Samaru Main Campus.',
  },
  {
    title: 'Entrepreneurship Laboratories',
    body: 'Production space where products are made, tested and refined, alongside the Centre’s own enterprise lines.',
  },
  {
    title: 'Conference hall & classroom',
    body: 'Space for workshops, pitch sessions and demo days in the University’s first green building.',
  },
  {
    title: 'Research & library access',
    body: 'Founders work alongside the Centre’s research in rural finance and its journal, NJRFE.',
  },
];

export const hubAudiences = [
  {
    title: 'Students & graduates',
    body: 'ABU students and alumni with a business idea or an early venture.',
  },
  {
    title: 'Rural entrepreneurs',
    body: 'Founders and small enterprises in agriculture and rural value chains.',
  },
  {
    title: 'Researchers & staff',
    body: 'University researchers turning their work into products and services.',
  },
  {
    title: 'Partners',
    body: 'Institutions, funders and companies looking to support or co-run programmes.',
  },
];
