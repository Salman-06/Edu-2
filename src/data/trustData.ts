/**
 * Core Organization Data & Configuration for Edu Care Academy Trust
 * Ground truth from organization profile.
 */

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  points: string[];
  iconName: string;
  category: string;
  whatsappMessage: string;
}

export interface InitiativeItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  details: string[];
  themeColor: string;
  badgeText: string;
  metric: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Events' | 'Education' | 'Career Guidance' | 'Youth Empowerment' | 'Community Welfare' | 'Talent Programs' | 'Scientific Mentorship';
  description: string;
  date: string;
  highlight: string;
  gradient: string;
}

export const TRUST_CONFIG = {
  name: 'Edu Care Academy Trust',
  shortName: 'Edu Care Trust',
  tagline: '“Together We Make Difference”',
  establishedYear: '2018',
  location: 'Coimbatore, Tamil Nadu',
  state: 'Tamil Nadu',
  country: 'India',
  
  // Easily configurable contact details
  whatsappNumber: '919842212345', // Format: CountryCode + Number (without '+')
  displayPhone: '+91 98422 12345',
  displayEmail: 'contact@educareacademytrust.org',
  displayAddress: 'Edu Care Academy Trust, Coimbatore, Tamil Nadu, India',

  founder: {
    name: 'Dr. Y. Benazir',
    role: 'Founder & Chairman',
    credentials: [
      'Ph.D. in Management',
      'Internationally Certified NLP Practitioner',
      'Certified Career Counselor',
    ],
    bio: 'Fostering leadership, higher learning, and public service among students across Tamil Nadu with extensive expertise in career guidance, behavioral psychology, and institutional development.',
  },

  mission: 'To establish institutions and frameworks that promote educational excellence, personality development, and community service while producing socially responsible leaders of change.',
  vision: 'To nurture young minds towards identifying their dream careers and becoming inspiring future leaders through social mobility, academic rigor, and collective unity.',

  supportingText: 'Edu Care Academy Trust works towards educational excellence, career guidance, skill development, leadership and community welfare, helping young people discover their potential and build meaningful futures.',
};

export const CORE_FOCUS_AREAS = [
  {
    number: '01',
    title: 'Personality Development & Skill Enhancement',
    description: 'Structured training modules, personal counseling, self-monitoring strategies and communication workshops for youth.',
    icon: 'Sparkles',
    accent: 'from-cyan-500/20 to-blue-600/20',
    borderAccent: 'group-hover:border-cyan-400/50',
    tags: ['Training Modules', 'Self-Monitoring', 'Communication'],
  },
  {
    number: '02',
    title: 'Career Counseling & Assistance',
    description: 'Guidance programs designed to help students identify professional opportunities and improve industry alignment.',
    icon: 'Compass',
    accent: 'from-blue-600/20 to-indigo-600/20',
    borderAccent: 'group-hover:border-blue-400/50',
    tags: ['Pathway Awareness', 'Opportunity Mapping', 'Industry Alignment'],
  },
  {
    number: '03',
    title: 'Academic & Research Support',
    description: 'Modern learning approaches, research guidance and specialized mentorship for higher education pathways.',
    icon: 'GraduationCap',
    accent: 'from-indigo-600/20 to-teal-500/20',
    borderAccent: 'group-hover:border-teal-400/50',
    tags: ['Research Guidance', 'Higher Education', 'Modern Pedagogy'],
  },
];

export const SOCIAL_INITIATIVES: InitiativeItem[] = [
  {
    id: 'pasiyatral',
    name: 'Pasiyatral',
    tagline: 'Helping the Hunger',
    description: 'Social drive providing nutritious food to roadside individuals, underprivileged citizens and students in need of career support.',
    details: [
      'Nutritious meal delivery to roadside individuals',
      'Direct support for underprivileged citizens in Tamil Nadu',
      'Subsidized nutritional & logistical backing for students pursuing higher education',
    ],
    themeColor: 'emerald',
    badgeText: 'Food & Welfare Relief',
    metric: 'Sustained Community Drives',
  },
  {
    id: 'puthaga-pasi',
    name: 'Puthaga Pasi',
    tagline: 'Read, Donate, Lead',
    description: 'Book donation campaign focused on encouraging reading habits, community libraries and access to learning materials.',
    details: [
      'Civic book collection and redistribution drives',
      'Establishing accessible community library shelves',
      'Providing academic reference textbooks to aspiring rural students',
    ],
    themeColor: 'cyan',
    badgeText: 'Literacy Movement',
    metric: 'Books Collected & Shared',
  },
  {
    id: 'tamil-nadu-got-talent',
    name: "Tamil Nadu's Got Talent",
    tagline: 'Celebrating Youth Innovation & Art',
    description: 'Youth empowerment platform recognizing talent across singing, dancing, drama and technical innovations with certificates and honors.',
    details: [
      'Singing & performing arts recognition',
      'Creative drama & expressive staging',
      'Scientific innovation & student inventions showcase',
      'Certificates, honors and mentorship awards',
    ],
    themeColor: 'amber',
    badgeText: 'Talent Showcase',
    metric: 'Statewide Youth Platform',
  },
  {
    id: 'kalams-dream',
    name: "Kalam's Dream",
    tagline: 'Scientific & Technical Mentorship',
    description: 'Scientific mentorship initiative dedicated to mentoring and training students aspiring towards scientific research and technical innovation.',
    details: [
      'Mentorship inspired by Dr. A.P.J. Abdul Kalam',
      'Guidance for young researchers in science & technology',
      'Hands-on technical workshops and research project mentorship',
      'Cultivating scientific temperament and patent-oriented curiosity',
    ],
    themeColor: 'blue',
    badgeText: 'Scientific Innovation',
    metric: 'Young Researchers Guided',
  },
];

export const ALL_SERVICES: ServiceItem[] = [
  {
    id: 'personality-development',
    title: 'Personality Development & Skill Enhancement',
    shortDesc: 'Structured training modules, personal counseling, self-monitoring strategies and communication workshops for youth.',
    points: [
      'Structured training modules tailored for youth and college students',
      'One-on-one personal counseling and behavioral development',
      'Self-monitoring and goal-setting strategies',
      'Communication, public speaking and interpersonal workshops',
    ],
    iconName: 'UserCheck',
    category: 'Skill Cultivation',
    whatsappMessage: 'Hello Edu Care Academy Trust, I am interested in Personality Development & Skill Enhancement. Please provide more details.',
  },
  {
    id: 'career-counseling',
    title: 'Career Counseling & Assistance',
    shortDesc: 'Guidance programs designed to help students identify professional opportunities and improve industry alignment.',
    points: [
      'Personalized career guidance and psychometric pathway analysis',
      'Professional pathway awareness across emerging industries',
      'Industry alignment and job market readiness',
      'Comprehensive student assistance for college admissions',
    ],
    iconName: 'Compass',
    category: 'Professional Pathways',
    whatsappMessage: 'Hello Edu Care Academy Trust, I am interested in Career Counseling & Assistance. Please provide more details.',
  },
  {
    id: 'academic-research-support',
    title: 'Academic & Research Support',
    shortDesc: 'Modern learning approaches, research guidance and specialized mentorship for higher education pathways.',
    points: [
      'Specialized research methodology and publication guidance',
      'Higher education pathways mentorship (M.Phil, Ph.D. & PG)',
      'Modern learning approaches and critical thinking frameworks',
      'Academic mentorship for undergraduate and postgraduate scholars',
    ],
    iconName: 'BookOpen',
    category: 'Higher Learning',
    whatsappMessage: 'Hello Edu Care Academy Trust, I am interested in Academic & Research Support. Please provide more details.',
  },
  {
    id: 'youth-empowerment',
    title: 'Youth Empowerment',
    shortDesc: 'Statewide talent recognition, leadership incubation, and innovation encouragement for the next generation of changemakers.',
    points: [
      'Statewide talent recognition programs & stage showcases',
      'Leadership training and social responsibility bootcamps',
      'Skill development initiatives for college and rural youth',
      'Innovation encouragement and entrepreneurial thinking',
    ],
    iconName: 'Sparkles',
    category: 'Leadership & Talent',
    whatsappMessage: 'Hello Edu Care Academy Trust, I am interested in Youth Empowerment programs. Please provide more details.',
  },
  {
    id: 'scientific-mentorship',
    title: 'Scientific & Technical Mentorship',
    shortDesc: 'Inspiring technical curiosity, scientific career navigation, and research-oriented development for students.',
    points: [
      'Guidance for scientific career trajectories and STEM fields',
      'Technical innovation mentorship and problem-solving workshops',
      'Research-oriented development for young student inventors',
      'Cultivating curiosity inspired by Kalam’s Dream initiative',
    ],
    iconName: 'Atom',
    category: 'STEM & Research',
    whatsappMessage: 'Hello Edu Care Academy Trust, I am interested in Scientific & Technical Mentorship. Please provide more details.',
  },
  {
    id: 'community-welfare',
    title: 'Community Welfare & Outreach',
    shortDesc: 'Grassroots community service programs promoting hunger relief, literacy access, and social mobility across Tamil Nadu.',
    points: [
      'Pasiyatral food security drives for vulnerable citizens and students',
      'Puthaga Pasi community library and book donation campaigns',
      'Educational aid for underprivileged and first-generation learners',
      'Social responsibility volunteer opportunities for youth',
    ],
    iconName: 'HeartHandshake',
    category: 'Social Impact',
    whatsappMessage: 'Hello Edu Care Academy Trust, I am interested in Community Welfare and volunteer initiatives. Please provide more details.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Career Counseling & Guidance Symposium',
    category: 'Career Guidance',
    description: 'Interactive session guiding higher secondary and college students on career pathways and professional choices in Coimbatore.',
    date: 'Coimbatore',
    highlight: 'Career Guidance',
    gradient: 'from-blue-600/30 to-indigo-900/40',
  },
  {
    id: 'g-2',
    title: 'Puthaga Pasi Book Donation Drive',
    category: 'Community Welfare',
    description: 'Community members and students gathering reference books and literature to set up free educational shelves.',
    date: 'Tamil Nadu Drive',
    highlight: 'Puthaga Pasi',
    gradient: 'from-teal-600/30 to-emerald-900/40',
  },
  {
    id: 'g-3',
    title: 'Kalam’s Dream Science Mentorship Session',
    category: 'Scientific Mentorship',
    description: 'Interactive technical workshop mentoring students on scientific thinking and innovation methodologies.',
    date: 'Science Seminar',
    highlight: "Kalam's Dream",
    gradient: 'from-cyan-600/30 to-blue-900/40',
  },
  {
    id: 'g-4',
    title: 'Personality & NLP Communication Workshop',
    category: 'Education',
    description: 'Dr. Y. Benazir conducting a structured youth personality development and self-monitoring workshop.',
    date: 'Workshop Series',
    highlight: 'NLP & Personality',
    gradient: 'from-indigo-600/30 to-purple-900/40',
  },
  {
    id: 'g-5',
    title: "Tamil Nadu's Got Talent Showcase",
    category: 'Talent Programs',
    description: 'Youth celebrating artistic expression, drama, music, and student innovation awards with honors.',
    date: 'Statewide Platform',
    highlight: 'Got Talent',
    gradient: 'from-amber-600/30 to-orange-900/40',
  },
  {
    id: 'g-6',
    title: 'Pasiyatral Community Nutrition Drive',
    category: 'Community Welfare',
    description: 'Nutritious meal distribution and direct relief support for roadside individuals and underprivileged citizens.',
    date: 'Coimbatore Outreach',
    highlight: 'Pasiyatral',
    gradient: 'from-emerald-600/30 to-teal-900/40',
  },
  {
    id: 'g-7',
    title: 'Academic & Research Methodology Seminar',
    category: 'Education',
    description: 'Scholars and educators discussing modern learning approaches and research pathways.',
    date: 'Academic Forum',
    highlight: 'Research Support',
    gradient: 'from-sky-600/30 to-slate-900/40',
  },
  {
    id: 'g-8',
    title: 'Youth Leadership & Social Mobility Summit',
    category: 'Youth Empowerment',
    description: 'Inspiring future changemakers to bridge academic excellence with community service.',
    date: 'Annual Leadership Meet',
    highlight: 'Youth Leadership',
    gradient: 'from-blue-600/30 to-violet-900/40',
  },
];

export const TIMELINE_MILESTONES = [
  {
    year: '2018',
    title: 'Establishment in Coimbatore',
    description: 'Founded under the leadership of Dr. Y. Benazir to foster educational excellence, youth leadership, and community service in Tamil Nadu.',
  },
  {
    year: '2019',
    title: 'Launch of Pasiyatral & Puthaga Pasi',
    description: 'Pioneered grassroots social drives: providing nutritious food to roadside individuals and spearheading community book donation campaigns.',
  },
  {
    year: '2021',
    title: 'NLP & Personality Development Programs',
    description: 'Integrated internationally certified NLP practitioner frameworks into structured self-monitoring and youth communication workshops.',
  },
  {
    year: '2023',
    title: "Tamil Nadu's Got Talent & Kalam's Dream",
    description: 'Expanded state-wide platforms recognizing youth talents in performing arts and mentoring students in scientific research and technical innovation.',
  },
  {
    year: 'Present',
    title: 'Sustained Social & Educational Leadership',
    description: 'Continues active mentorship, career guidance, higher education research support, and impactful community welfare initiatives across Tamil Nadu.',
  },
];

/**
 * Knowledge Base for Edu Care Assistant Chatbot
 * Strictly grounded in provided organization facts.
 */
export const CHATBOT_QA = [
  {
    patterns: ['what is edu care', 'about edu care', 'who are you', 'tell me about edu care academy trust'],
    answer: 'Edu Care Academy Trust is a youth-focused learning, career guidance, skill development and community welfare organization based in Coimbatore, Tamil Nadu, established in 2018. The Trust fosters leadership, higher learning, and public service among students.',
  },
  {
    patterns: ['when was', 'established', 'year founded', 'founding year'],
    answer: 'Edu Care Academy Trust was established in the year 2018 in Coimbatore, Tamil Nadu.',
  },
  {
    patterns: ['where is', 'location', 'address', 'city', 'coimbatore'],
    answer: 'Edu Care Academy Trust is located in Coimbatore, Tamil Nadu, India.',
  },
  {
    patterns: ['founder', 'chairman', 'benazir', 'dr y benazir', 'who started', 'leadership'],
    answer: 'The Founder & Chairman of Edu Care Academy Trust is Dr. Y. Benazir. Her credentials include a Ph.D. in Management, Internationally Certified NLP Practitioner certification, and Certified Career Counselor credentials.',
  },
  {
    patterns: ['credentials', 'qualification', 'degree of founder'],
    answer: 'Dr. Y. Benazir holds a Ph.D. in Management, is an Internationally Certified NLP Practitioner, and is a Certified Career Counselor.',
  },
  {
    patterns: ['tagline', 'motto', 'slogan'],
    answer: 'The official tagline of Edu Care Academy Trust is “Together We Make Difference”.',
  },
  {
    patterns: ['mission', 'our mission'],
    answer: 'Our Mission is: “To establish institutions and frameworks that promote educational excellence, personality development, and community service while producing socially responsible leaders of change.”',
  },
  {
    patterns: ['vision', 'our vision'],
    answer: 'Our Vision is: “To nurture young minds towards identifying their dream careers and becoming inspiring future leaders through social mobility, academic rigor, and collective unity.”',
  },
  {
    patterns: ['services', 'what services', 'what do you do', 'offerings'],
    answer: 'Edu Care Academy Trust provides: 1) Personality Development & Skill Enhancement, 2) Career Counseling & Assistance, 3) Academic & Research Support, 4) Youth Empowerment, 5) Scientific & Technical Mentorship, and 6) Community Welfare initiatives.',
  },
  {
    patterns: ['personality development', 'skill enhancement', 'nlp'],
    answer: 'Our Personality Development & Skill Enhancement program provides structured training modules, personal counseling, self-monitoring strategies, and communication workshops for youth, led with certified NLP frameworks.',
  },
  {
    patterns: ['career counseling', 'career guidance', 'counselor'],
    answer: 'Our Career Counseling & Assistance programs help students identify professional opportunities, map career pathways, and improve industry alignment through personalized student assistance.',
  },
  {
    patterns: ['academic support', 'research support', 'phd', 'higher education'],
    answer: 'Our Academic & Research Support offers modern learning approaches, specialized research guidance, and mentorship for students pursuing higher education pathways.',
  },
  {
    patterns: ['pasiyatral', 'hunger', 'food'],
    answer: 'Pasiyatral (“Helping the Hunger”) is a social drive by Edu Care Academy Trust providing nutritious food to roadside individuals, underprivileged citizens, and students in need of career support.',
  },
  {
    patterns: ['puthaga pasi', 'book', 'donate', 'library', 'reading'],
    answer: 'Puthaga Pasi (“Read, Donate, Lead”) is a book donation campaign focused on encouraging reading habits, establishing community libraries, and expanding access to learning materials across Tamil Nadu.',
  },
  {
    patterns: ['tamil nadu got talent', 'talent', 'singing', 'dancing', 'drama'],
    answer: "Tamil Nadu's Got Talent is a youth empowerment platform recognizing talent across singing, dancing, drama, and innovations with certificates and honors.",
  },
  {
    patterns: ['kalam', "kalam's dream", 'scientific mentorship', 'science', 'innovation'],
    answer: "Kalam's Dream is our scientific mentorship initiative dedicated to mentoring and training students aspiring towards scientific research and technical innovation, inspired by Dr. A.P.J. Abdul Kalam.",
  },
  {
    patterns: ['contact', 'phone', 'whatsapp', 'reach', 'email', 'how can i contact'],
    answer: 'You can connect with Edu Care Academy Trust through our Contact page, WhatsApp message, or direct phone call. We are located in Coimbatore, Tamil Nadu.',
  },
];

export function buildWhatsAppUrl(customMessage?: string): string {
  const number = TRUST_CONFIG.whatsappNumber;
  const defaultMsg = `Hello Edu Care Academy Trust,

I would like to know more about your services.

Name: 
Service/Enquiry: General Enquiry
Message: Please provide more information.

Thank you!`;

  const msg = customMessage || defaultMsg;
  return `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
}
