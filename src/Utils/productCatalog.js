export const PRODUCT_URLS = [
    null,
    'https://peoplehub.nizam365.com/',
    'https://processhub.nizam365.com/',
    'https://commercehub.nizam365.com/',
    null,
    null,
    null,
    null,
    null,
];

export const PRODUCT_BRANDS = {
    0: {
        color: '#1976D2',
        gradient: 'linear-gradient(135deg, #0D47A1 0%, #1976D2 45%, #42A5F5 100%)',
        logo: '/products/usi-logo.png',
        innerBg: '#ffffff',
    },
    1: {
        color: '#7536dd',
        gradient: 'linear-gradient(135deg, #4C1D95 0%, #7536dd 45%, #A78BFA 100%)',
        logo: '/products/peoplehub-hcm.png',
        innerBg: '#ffffff',
    },
    2: {
        color: '#0D9488',
        gradient: 'linear-gradient(135deg, #0F766E 0%, #0D9488 45%, #2DD4BF 100%)',
        logo: '/products/processhub.png',
        innerBg: '#ffffff',
    },
    3: {
        color: '#0583FC',
        gradient: 'linear-gradient(135deg, #0369D9 0%, #0583FC 50%, #4DA8FF 100%)',
        logo: '/products/commercehub.png',
        innerBg: '#ffffff',
    },
};

export const FALLBACK_PRODUCTS = [
    { title: 'SAP Business One User Interface', description: 'Enhance your business operations with our user-friendly SAP Business One interface, designed for seamless navigation and efficient management of your enterprise resources.' },
    { title: 'PeopleHub HCM', description: 'A complete human capital management platform to hire, manage, and grow your workforce with payroll, attendance, and talent tools in one place.' },
    { title: 'ProcessHub Operations Suite', description: 'Streamline day-to-day operations with connected workflows, automation, and visibility across teams and processes.' },
    { title: 'CommerceHub UCP', description: 'A unified commerce platform that connects sales channels, inventory, and customer journeys so you can sell and fulfil with consistency.' },
    { title: 'Hire Lawyer Online', description: 'Connect with experienced legal professionals through our streamlined online platform, making it easy to find and hire the right lawyer for your needs.' },
    { title: 'InsightHub Vision AI', description: 'Turn visual data into actionable insight with AI-powered vision that supports monitoring, detection, and smarter decisions.' },
    { title: 'HealthHub Patient Care', description: 'A patient-care platform that helps healthcare teams manage records, appointments, and follow-ups with a smoother clinical experience.' },
    { title: 'BusinessHub ERP', description: 'An integrated ERP to manage finance, inventory, and operations from a single source of truth for growing businesses.' },
    { title: 'Connector', description: 'Effortlessly integrate and manage your systems with our connector for communication through WhatsApp, cellular APIs, and email exchanges, designed to streamline data flow.' },
];

export function getProductCatalog(translations) {
    const items = translations?.ourProducts?.items?.length
        ? translations.ourProducts.items
        : FALLBACK_PRODUCTS;

    return items.map((item, index) => ({
        id: `product-${index}`,
        title: item.title,
        description: item.description,
        url: PRODUCT_URLS[index] || null,
        brand: PRODUCT_BRANDS[index] || null,
        isPeopleHub: index === 1,
    }));
}

export function getSolutionsProducts(translations) {
    return getProductCatalog(translations).slice(0, 5);
}

export function getMoreSolutionsProducts(translations) {
    return getProductCatalog(translations).slice(5);
}
