export type Programme = {
  title: string;
  level: string;
  summary: string;
  details: string[];
};

/**
 * Only the programmes documented by the Centre are listed. Where the Centre
 * has announced further postgraduate and diploma awards without published
 * details, they are represented on the page as "in development" rather than
 * described speculatively.
 */
export const programmes: Programme[] = [
  {
    title: 'M.Sc. Rural Finance and Entrepreneurship',
    level: 'Postgraduate degree',
    summary:
      'A full postgraduate degree covering rural financial systems, enterprise development and the economics of smallholder markets.',
    details: [
      'Modular course structure developed with the Carsey Institute, University of New Hampshire, USA',
      'Combines rural finance theory with applied enterprise development practice',
      'Taught at the Centre’s postgraduate facility on Samaru Main Campus',
    ],
  },
  {
    title: 'Professional Master Programme in Rural Finance',
    level: 'Professional / blended learning',
    summary:
      'A blended-learning professional award designed for practitioners already working in microfinance and rural financial institutions.',
    details: [
      'Blended delivery for working professionals',
      'Developed under the Centre’s MacArthur Foundation mandate',
      'Focused on practice in rural financial institutions',
    ],
  },
];

export const services = [
  {
    title: 'Capacity building & training',
    body: 'Structured training for staff of microfinance banks, cooperatives and rural financial institutions, including credit, product development and strategic planning.',
  },
  {
    title: 'Curriculum development',
    body: 'Design of modular course structures and courseware for entrepreneurship and rural finance, developed with international academic partners.',
  },
  {
    title: 'Consultancy',
    body: 'Applied research and advisory work spanning governance reviews, tax and public policy impact, procurement and enterprise development.',
  },
  {
    title: 'Seminars & workshops',
    body: 'Interactive sessions for entrepreneurs and institutions, delivered on campus and in partnership with state governments.',
  },
];

export const enterprises = [
  { name: 'ICERFE Bakery', note: 'Bread and confectionery produced on the Samaru campus.' },
  { name: 'Family Care line', note: 'Liquid soap, petroleum jelly and hand sanitiser.' },
  { name: 'PUP Shoe Polish', note: 'Produced through the Entrepreneurship Laboratory.' },
];
