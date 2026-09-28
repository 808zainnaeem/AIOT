/** Canonical kebab-case paths aligned with navbar page names. */
export const ROUTES = {
  home: '/',
  about: '/about',
  clientWall: '/client-wall',
  contact: '/contact',
  consulting: '/consulting',
  implementation: '/implementation',
  managedServices: '/managed-services',
  news: '/news',
  blogs: '/blogs',
  innovateWithInsights: '/innovate-with-insights',
  technologyDriven: '/technology-driven',
  nextGeneration: '/next-generation',
  sapSolutions: '/sap-solutions',
  utilityTransformation: '/utility-transformation',
  oracleNetsuite: '/oracle-netsuite',
  privacyPolicy: '/privacy-policy',
  termsOfService: '/terms-of-service',
};

/** Old paths that redirect to canonical URLs. */
export const REDIRECTS = [
  { from: '/clientwall', to: ROUTES.clientWall },
  { from: '/About', to: ROUTES.about },
  { from: '/next-genration', to: ROUTES.nextGeneration },
  { from: '/terms-and-conditions', to: ROUTES.termsOfService },
  { from: '/terms-conditions', to: ROUTES.termsOfService },
  { from: '/Terms-Conditions', to: ROUTES.termsOfService },
  { from: '/outsourcing', to: ROUTES.managedServices },
  { from: '/outsoursing', to: ROUTES.managedServices },
];

const SITE_NAME = 'AIOT Consulting';
const BRAND = 'AIOT';
const DEFAULT_DESCRIPTION =
  'AIOT (AIOTCons) blends Artificial Intelligence and the Internet of Things to deliver consulting, implementation, and managed services that drive business success.';

export const SEO_BY_PATH = {
  [ROUTES.home]: {
    title: `${BRAND} | Analytical, Intelligent, Optimised Technology Consulting`,
    description: DEFAULT_DESCRIPTION,
  },
  [ROUTES.about]: {
    title: `About ${BRAND} | ${SITE_NAME}`,
    description:
      'Learn who we are at AIOT (AIOTCons) — empowering businesses through AI, IoT, and future-ready technology solutions.',
  },
  [ROUTES.clientWall]: {
    title: `Client Wall | ${BRAND}`,
    description:
      'Explore the industry leaders who trust AIOTCons for innovative IT solutions and measurable results.',
  },
  [ROUTES.contact]: {
    title: `Contact ${BRAND} | Lahore, Pakistan`,
    description:
      'Get in touch with AIOTCons (AIOT Consulting) in Lahore, Pakistan for smart, innovative technology solutions. Email info@aiotcons.com.',
  },
  [ROUTES.consulting]: {
    title: `Consulting Services | ${BRAND}`,
    description:
      'IT strategy, digital transformation, business process consulting, and enterprise architecture advisory from AIOTCons.',
  },
  [ROUTES.implementation]: {
    title: `Implementation Services | ${BRAND}`,
    description:
      'Enterprise technology implementation across SAP, Oracle NetSuite, Microsoft, utilities, and security by AIOT.',
  },
  [ROUTES.managedServices]: {
    title: `Managed Services | ${BRAND}`,
    description:
      'Application management, cloud infrastructure, IT support, cybersecurity monitoring, and disaster recovery from AIOTCons.',
  },
  [ROUTES.news]: {
    title: `News | ${BRAND}`,
    description: 'Stay updated with the latest news and innovations from AIOT IT Solutions (AIOTCons).',
  },
  [ROUTES.blogs]: {
    title: `Blogs | ${BRAND}`,
    description: 'Insights, trends, and expert opinions on technology and digital innovation from AIOTCons.',
  },
  [ROUTES.innovateWithInsights]: {
    title: `Innovate with Insights | ${BRAND}`,
    description:
      'Discover strategies to enhance your business through emerging trends and thought leadership from AIOT.',
  },
  [ROUTES.technologyDriven]: {
    title: `Technology Driven Solutions | ${BRAND}`,
    description: 'Enterprise technology solutions from AIOTCons that modernize operations and accelerate growth.',
  },
  [ROUTES.nextGeneration]: {
    title: `Next Generation Solutions | ${BRAND}`,
    description: 'Microsoft and next-generation product solutions for modern enterprises by AIOT Consulting.',
  },
  [ROUTES.sapSolutions]: {
    title: `SAP Solutions | ${BRAND}`,
    description: 'SAP and HANA implementation expertise for scalable enterprise operations from AIOTCons.',
  },
  [ROUTES.utilityTransformation]: {
    title: `Utility Transformation | ${BRAND}`,
    description: 'Utility Modernisation solutions from AIOT that transform operations and customer experience.',
  },
  [ROUTES.oracleNetsuite]: {
    title: `Oracle NetSuite | ${BRAND}`,
    description: 'Oracle NetSuite solutions from AIOTCons for unified cloud ERP and business growth.',
  },
  [ROUTES.privacyPolicy]: {
    title: `Privacy Policy | ${BRAND}`,
    description: 'How AIOTCons collects, uses, and protects your personal information.',
  },
  [ROUTES.termsOfService]: {
    title: `Terms of Service | ${BRAND}`,
    description: 'Terms governing your use of AIOTCons websites and services.',
  },
};

export const DEFAULT_SEO = {
  title: `${BRAND} | Analytical, Intelligent, Optimised Technology Consulting`,
  description: DEFAULT_DESCRIPTION,
};

export const CANONICAL_PATHS = Object.values(ROUTES).filter((path, index, arr) => arr.indexOf(path) === index);
