export type Person = {
  name: string;
  role: string;
  unit?: string;
  photo?: string;
  qualifications?: string;
};

/** The Centre's management team. */
export const administration: Person[] = [
  { name: 'Dr. I. B. Bugaje', role: 'Director', photo: '/people/director.jpg', qualifications: 'B.Sc (ABU), M.Sc (Salford), PhD (UPM)' },
  { name: "Dr Moh'd H. Ya'u", role: 'Deputy Director' },
  { name: 'Mrs. L. D. Lambaya', role: 'Administrative Secretary' },
  { name: 'Mrs. Zainab A. A.', role: 'Finance Officer' },
  { name: 'Mrs. M. S. Ibrahim', role: "Centre's Librarian" },
  { name: 'Hamza Ahmed', role: 'Resident Internal Auditor' },
];

/** Full staff list, grouped by function. */
export const staffGroups: { title: string; blurb: string; members: Person[] }[] = [
  {
    title: 'Directorate',
    blurb: 'Leadership and administration of the Centre.',
    members: [
      { name: 'Dr. I. B. Bugaje', role: 'Director', photo: '/people/director.jpg' },
      { name: "Dr Moh'd H. Ya'u", role: 'Deputy Director' },
      { name: 'Mrs. L. D. Lambaya', role: 'Administrative Secretary' },
    ],
  },
  {
    title: 'Finance & Audit',
    blurb: 'Stewardship of the Centre’s funds and procurement.',
    members: [
      { name: 'Mrs. Zainab A. A.', role: 'Finance Officer' },
      { name: 'Idris Ahmad', role: 'Principal Accountant' },
      { name: 'Hamza Ahmed', role: 'Resident Internal Auditor' },
      { name: 'Salamatu Yohanna', role: 'Procurement Officer' },
    ],
  },
  {
    title: 'Academic & Training',
    blurb: 'Entrepreneurship teaching, skills training and student support.',
    members: [
      { name: 'Dr. Auwal Inusa', role: 'Entrepreneurship GENS Coordinator', photo: '/people/gens-coordinator.jpg' },
      { name: 'Mal. A. S. Richifa', role: 'Assistant GENS Coordinator' },
      { name: 'Shamsudeen S. M.', role: 'Skill Acquisition Trainer' },
    ],
  },
  {
    title: 'Library & Information',
    blurb: 'Research collections and knowledge services.',
    members: [
      { name: 'Mrs. M. S. Ibrahim', role: "Centre's Librarian" },
      { name: 'Abubakar Haruna', role: 'Deputy Librarian' },
    ],
  },
  {
    title: 'Technology & Operations',
    blurb: 'Systems, facilities and day-to-day operations.',
    members: [
      { name: 'Nuraddeen Yahuza', role: 'IT Consultant / Webmaster' },
      { name: 'Muwaffaq M. Sadiq', role: 'Senior Computer Operator' },
      { name: 'Aliyu Umar', role: 'Senior Office Assistant' },
    ],
  },
];

/** Governing Board — university principal officers. */
export const governingBoard: Person[] = [
  { name: 'Prof. Kabir Bala', role: 'Chairman', unit: 'Vice-Chancellor, Ahmadu Bello University', photo: '/people/vice-chancellor.jpg' },
  { name: 'Mal. Rabiu Samaila', role: 'Member', unit: 'Registrar' },
  { name: 'Dr. A. L. Gambo', role: 'Member', unit: 'University Librarian' },
  { name: "Mal. Moh'd B. Aminu", role: 'Member', unit: 'Bursar' },
  { name: 'Dr. I. B. Bugaje', role: 'Member / Secretary', unit: 'Director, ICERFE', photo: '/people/director.jpg' },
];

export const directorProfile = {
  name: 'Dr. Idris Bashir Bugaje',
  role: 'Director',
  photo: '/people/director.jpg',
  qualifications: 'B.Sc (ABU), M.Sc (Salford), PhD (UPM)',
  summary:
    'Dr. Idris Bashir Bugaje leads ICERFE, bringing together an academic background in management and entrepreneurship with practical consultancy across public and development sectors.',
  bio: [
    'Dr. Bugaje holds a Ph.D. in Entrepreneurship from Universiti Putra Malaysia (UPM), an M.Sc. in Management from Salford Business School at the University of Salford, Manchester, and a B.Sc. in Business Administration from Ahmadu Bello University, Zaria.',
    'His expertise is augmented by professional certifications and training in e-learning and courseware development, agricultural value chain financing, entrepreneurship boot camps, and the World Bank / NUC training-of-trainers programme on procurement.',
    'Alongside directing the Centre, he is a lecturer and consultant. His contributions include research on the social impact of tax reforms, reviews of public service rules, and assessments of university governance structures. He also delivers service modules and courses on procurement within the Sustainable Procurement, Environmental and Social Standards Enhancement Centre of Excellence (SPESSECE), a World Bank project at ABU Zaria.',
  ],
  education: [
    { period: '2016 – 2018', qualification: 'Ph.D. in Entrepreneurship', institution: 'Universiti Putra Malaysia (UPM)' },
    { period: '2012 – 2015', qualification: 'M.Sc. in Management', institution: 'Salford Business School, University of Salford, Manchester' },
    { period: '2005 – 2010', qualification: 'B.Sc. in Business Administration', institution: 'Ahmadu Bello University, Zaria' },
  ],
  focus: [
    'Rural and agricultural value chain financing',
    'Entrepreneurship education and capacity building',
    'Public sector governance and procurement',
    'Enterprise development services',
  ],
};
