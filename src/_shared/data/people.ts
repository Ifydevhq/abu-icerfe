export type Person = {
  name: string;
  role: string;
  unit?: string;
  photo?: string;
  qualifications?: string;
  /** Civil-service grade, where it differs from the job title. */
  rank?: string;
  email?: string;
};

/** The Centre's management team. */
export const administration: Person[] = [
  {
    name: "Prof. Baba El-Yakubu Jibril",
    role: "Director",
    photo: "/people/director.jpeg",
    qualifications:
      "BEng (ABU), MSc (Dahran), PhD (Salford), FNSE, COREN (Registered)",
  },
  { name: "Dr Moh'd H. Ya'u", role: "Deputy Director" },
  { name: "Mrs. L. D. Lambaya", role: "Administrative Secretary" },
  { name: "Mrs. Zainab A. A.", role: "Finance Officer" },
  { name: "Mrs. M. S. Ibrahim", role: "Centre's Librarian" },
  { name: "Hamza Ahmed", role: "Resident Internal Auditor" },
];

/** Full staff list, grouped by function. */
export const staffGroups: {
  title: string;
  blurb: string;
  members: Person[];
}[] = [
  {
    title: "Leadership",
    blurb: "Direction and oversight of the Centre.",
    members: [
      {
        name: "Prof. Baba El-Yakubu Jibril",
        role: "Director",
        qualifications: "BEng (ABU), MSc (Dahran), PhD (Salford), FNSE, COREN (Registered)",
        photo: "/people/director.jpeg",
      },
      { name: "Dr Moh'd H. Ya'u", role: "Deputy Director" },
    ],
  },
  {
    title: "Academic staff",
    blurb: "Teaching, research supervision and entrepreneurship training.",
    members: [
      {
        name: "Dr. Auwalu Inusa",
        role: "Associate Professor",
        qualifications: "PhD, ACS, MAMN",
        photo: "/people/gens-coordinator.jpg",
      },
      {
        name: "Muktar Abdullahi",
        role: "Lecturer",
        qualifications: "MSc Rural Finance and Entrepreneurship · PhD Candidate",
        email: "muktarabdullahi@abu.edu.ng",
        photo: "/people/abuicerfe-staff-muktar-abdullahi.jpeg",
      },
      { name: "Mal. A. S. Richifa", role: "Assistant GENS Coordinator" },
      { name: "Shamsudeen S. M.", role: "Skill Acquisition Trainer" },
    ],
  },
  {
    title: "Registry & administration",
    blurb: "Records, correspondence and the Centre's day-to-day administration.",
    members: [
      {
        name: "Zainab Abdullahi Musa",
        role: "Principal Assistant Registrar",
        photo: "/people/abuicerfe-staff-zainab-abdullahi-musa.png",
      },
      { name: "Mrs. L. D. Lambaya", role: "Administrative Secretary" },
    ],
  },
  {
    title: "Finance, audit & procurement",
    blurb: "Stewardship of the Centre's funds, controls and purchasing.",
    members: [
      {
        name: "Hamza Ahmed",
        role: "Resident Internal Auditor",
        rank: "Higher Executive Officer (Audit)",
        photo: "/people/abuicerfe-staff-hamza-ahmed.jpeg",
      },
      {
        name: "Danjuma Musa",
        role: "Procurement Officer",
        rank: "Principal Procurement Officer",
        photo: "/people/abuicerfe-staff-danjuma-musa.jpeg",
      },
      { name: "Idris Ahmad", role: "Principal Accountant" },
    ],
  },
  {
    title: "Library & information",
    blurb: "Research collections and knowledge services.",
    members: [
      {
        name: "Aisha Ibrahim Jalo",
        role: "Senior Library Officer",
        photo: "/people/abuicerfe-staff-aisha-ibrahim-jalo.jpeg",
      },
      { name: "Mrs. M. S. Ibrahim", role: "Centre's Librarian" },
      { name: "Abubakar Haruna", role: "Deputy Librarian" },
    ],
  },
  {
    title: "Technology & operations",
    blurb: "Systems, facilities and day-to-day operations.",
    members: [
      { name: "Nuraddeen Yahuza", role: "IT Consultant / Webmaster" },
      { name: "Muwaffaq M. Sadiq", role: "Senior Computer Operator" },
      { name: "Aliyu Umar", role: "Senior Office Assistant" },
    ],
  },
];


export const directorProfile = {
  name: "Prof. Baba El-Yakubu Jibril",
  role: "Director",
  photo: "/people/director.jpeg",
  qualifications:
    "BEng (ABU), MSc (Dahran), PhD (Salford), FNSE, COREN (Registered)",
  summary:
    "Prof. Baba El-Yakubu Jibril is the Director of the International Center of Excellence for Rural Finance and Entrepreneurship. He is a Fellow of the Nigerian Society of Engineers and a COREN-registered engineer.",
  /**
   * Only what the Centre has supplied. The previous Director's biography,
   * areas of focus and dated education history were removed rather than
   * carried over — they described a different person. Add the new Director's
   * own profile here and both the homepage and /about/director pick it up.
   */
  bio: [
    "Prof. Baba El-Yakubu Jibril holds a B.Eng. from Ahmadu Bello University, Zaria, an M.Sc. from Dahran and a Ph.D. from the University of Salford. He is a Fellow of the Nigerian Society of Engineers (FNSE) and registered with the Council for the Regulation of Engineering in Nigeria (COREN).",
  ],
  education: [
    {
      qualification: "Ph.D.",
      institution: "University of Salford",
    },
    {
      qualification: "M.Sc.",
      institution: "Dahran",
    },
    {
      qualification: "B.Eng.",
      institution: "Ahmadu Bello University, Zaria",
    },
  ] as { period?: string; qualification: string; institution: string }[],
  /** No areas of focus supplied yet; the section hides itself while empty. */
  focus: [] as string[],
};
