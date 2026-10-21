export const site = {
  name: 'ICERFE',
  fullName: 'International Center of Excellence for Rural Finance and Entrepreneurship',
  parent: 'Ahmadu Bello University, Zaria',
  tagline: 'Research, training and enterprise development in rural finance.',
  vision:
    'To be a world-class Centre for research and training in Rural Finance and Entrepreneurship, and a point of reference in the creation and dissemination of practical knowledge for global rural financial institutions and entrepreneurs.',
  mission:
    'To provide the resources and expertise that develop an entrepreneurial mindset and build capacity in rural finance, through teaching, research, training, networking and business support services.',
  address: {
    line1: 'Opposite ABU Sport Complex, Samaru Main Campus',
    line2: 'Along Sokoto Road, Samaru, Sabon Gari',
    city: 'Zaria',
    state: 'Kaduna State',
    country: 'Nigeria',
  },
  emails: ['icerfe@abu.edu.ng', 'icerfeabu@gmail.com'],
  phones: ['+234 803 400 1270', '+234 703 398 3378'],
  journalUrl: 'https://journals.abu.edu.ng/index.php/njrfe/index',
  universityUrl: 'https://abu.edu.ng',
} as const;

export const navigation = [
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'History', href: '/about/history', description: 'How the Centre began and what it has built' },
      { label: "Director's Office", href: '/about/director', description: 'Leadership and profile' },
      { label: 'Academic Board', href: '/about/academic-board', description: 'Academic and professional direction' },
      { label: 'Organogram', href: '/about/organogram', description: 'How the Centre is structured' },
    ],
  },
  {
    label: 'People',
    href: '/staff',
    children: [
      { label: 'Administration', href: '/administration', description: 'The Centre’s management team' },
      { label: 'Staff Directory', href: '/staff', description: 'Everyone at the Centre' },
    ],
  },
  { label: 'Programmes', href: '/programmes' },
  { label: 'Innovation Hub', href: '/innovation-hub' },
  { label: 'News & Events', href: '/news' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
] as const;
