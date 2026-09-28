import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { DEFAULT_SEO, ROUTES, SEO_BY_PATH } from '../Utils/routes';

/** Always use production origin so preview/localhost never poison canonicals. */
const SITE_ORIGIN = 'https://aiotcons.com';
const OG_IMAGE = `${SITE_ORIGIN}/hero-poster.webp`;
const LOGO_URL = `${SITE_ORIGIN}/NewLogo.png`;

const SAME_AS = [
  'https://www.facebook.com/AIOTCons/',
  'https://x.com/AIOTCons',
  'https://www.linkedin.com/company/AIOTCons',
  'https://www.instagram.com/AIOTCons/',
  'https://www.threads.net/@AIOTCons',
  'https://www.youtube.com/@AIOTCons',
];

const BREADCRUMB_LABELS = {
  [ROUTES.home]: 'Home',
  [ROUTES.about]: 'About',
  [ROUTES.clientWall]: 'Client Wall',
  [ROUTES.contact]: 'Contact',
  [ROUTES.consulting]: 'Consulting',
  [ROUTES.implementation]: 'Implementation',
  [ROUTES.managedServices]: 'Managed Services',
  [ROUTES.news]: 'News',
  [ROUTES.blogs]: 'Blogs',
  [ROUTES.innovateWithInsights]: 'Innovate with Insights',
  [ROUTES.technologyDriven]: 'Technology Driven',
  [ROUTES.nextGeneration]: 'Next Generation',
  [ROUTES.sapSolutions]: 'SAP Solutions',
  [ROUTES.utilityTransformation]: 'Utility Transformation',
  [ROUTES.oracleNetsuite]: 'Oracle NetSuite',
  [ROUTES.privacyPolicy]: 'Privacy Policy',
  [ROUTES.termsOfService]: 'Terms of Service',
};

const SERVICE_PATHS = new Set([
  ROUTES.consulting,
  ROUTES.implementation,
  ROUTES.managedServices,
  ROUTES.technologyDriven,
  ROUTES.nextGeneration,
  ROUTES.sapSolutions,
  ROUTES.utilityTransformation,
  ROUTES.oracleNetsuite,
]);

function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel, href) {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function upsertJsonLd(id, data) {
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

function buildOrganization() {
  return {
    '@type': 'Organization',
    '@id': `${SITE_ORIGIN}/#organization`,
    name: 'AIOT Consulting',
    alternateName: ['AIOT', 'AIOTCons', 'AIOT Consulting (Pvt.) Ltd.', 'aiotcons'],
    url: `${SITE_ORIGIN}/`,
    logo: {
      '@type': 'ImageObject',
      url: LOGO_URL,
    },
    image: OG_IMAGE,
    email: 'info@aiotcons.com',
    telephone: '+92-312-345-6778',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '15/1C, GECHS, Phase III, Peco Road',
      addressLocality: 'Lahore',
      postalCode: '54100',
      addressRegion: 'Punjab',
      addressCountry: 'PK',
    },
    areaServed: ['PK', 'AE', 'SA', 'EU', 'AS'],
    sameAs: SAME_AS,
  };
}

function buildWebSite() {
  return {
    '@type': 'WebSite',
    '@id': `${SITE_ORIGIN}/#website`,
    name: 'AIOTCons | AIOT Consulting',
    alternateName: ['AIOT', 'AIOTCons', 'aiotcons.com'],
    url: `${SITE_ORIGIN}/`,
    publisher: { '@id': `${SITE_ORIGIN}/#organization` },
    inLanguage: 'en',
  };
}

function buildBreadcrumb(pathname) {
  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: `${SITE_ORIGIN}/`,
    },
  ];

  if (pathname !== ROUTES.home) {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: BREADCRUMB_LABELS[pathname] || pathname.replace(/^\//, ''),
      item: `${SITE_ORIGIN}${pathname}`,
    });
  }

  return {
    '@type': 'BreadcrumbList',
    '@id': `${SITE_ORIGIN}${pathname}#breadcrumb`,
    itemListElement: items,
  };
}

function buildService(pathname, seo) {
  if (!SERVICE_PATHS.has(pathname)) return null;
  return {
    '@type': 'Service',
    '@id': `${SITE_ORIGIN}${pathname}#service`,
    name: BREADCRUMB_LABELS[pathname] || seo.title,
    description: seo.description,
    url: `${SITE_ORIGIN}${pathname}`,
    provider: { '@id': `${SITE_ORIGIN}/#organization` },
    areaServed: 'Worldwide',
  };
}

function buildGraph(pathname, seo, canonical) {
  const graph = [buildOrganization(), buildWebSite(), buildBreadcrumb(pathname)];

  if (pathname === ROUTES.home) {
    graph.push({
      '@type': 'WebPage',
      '@id': `${canonical}#webpage`,
      url: canonical,
      name: seo.title,
      description: seo.description,
      isPartOf: { '@id': `${SITE_ORIGIN}/#website` },
      about: { '@id': `${SITE_ORIGIN}/#organization` },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: OG_IMAGE,
      },
    });
  } else {
    graph.push({
      '@type': 'WebPage',
      '@id': `${canonical}#webpage`,
      url: canonical,
      name: seo.title,
      description: seo.description,
      isPartOf: { '@id': `${SITE_ORIGIN}/#website` },
      breadcrumb: { '@id': `${SITE_ORIGIN}${pathname}#breadcrumb` },
    });
  }

  const service = buildService(pathname, seo);
  if (service) graph.push(service);

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

export default function Seo() {
  const { pathname } = useLocation();
  const seo = SEO_BY_PATH[pathname] || DEFAULT_SEO;
  const canonical = `${SITE_ORIGIN}${pathname === '/' ? '/' : pathname}`;

  useEffect(() => {
    document.title = seo.title;
    upsertMeta('name', 'description', seo.description);
    upsertMeta(
      'name',
      'keywords',
      'AIOT, AIOTCons, aiotcons, AIOT Consulting, AIOT IT Solutions, technology consulting, Lahore, Pakistan'
    );
    upsertMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    upsertMeta('name', 'author', 'AIOT Consulting');
    upsertMeta('name', 'geo.region', 'PK-PB');
    upsertMeta('name', 'geo.placename', 'Lahore');

    upsertMeta('property', 'og:title', seo.title);
    upsertMeta('property', 'og:description', seo.description);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:url', canonical);
    upsertMeta('property', 'og:site_name', 'AIOTCons | AIOT Consulting');
    upsertMeta('property', 'og:image', OG_IMAGE);
    upsertMeta('property', 'og:image:alt', 'AIOT Consulting — Analytical, Intelligent, Optimised Technology');
    upsertMeta('property', 'og:locale', 'en_US');

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:site', '@AIOTCons');
    upsertMeta('name', 'twitter:creator', '@AIOTCons');
    upsertMeta('name', 'twitter:title', seo.title);
    upsertMeta('name', 'twitter:description', seo.description);
    upsertMeta('name', 'twitter:image', OG_IMAGE);

    upsertLink('canonical', canonical);
    upsertJsonLd('aiot-jsonld', buildGraph(pathname, seo, canonical));
  }, [pathname, seo.title, seo.description, canonical]);

  return null;
}
