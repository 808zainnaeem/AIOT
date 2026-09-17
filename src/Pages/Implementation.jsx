import React from 'react';
import {
  Layers,
  Database,
  Cloud,
  Box,
  Settings,
  Shield,
  Lightbulb,
  Target,
  Map,
  Rocket,
} from 'lucide-react';
import ServiceOfferingPage from '../Components/ServiceOfferingPage';

const SERVICE_META = [
  {
    id: 'enterprise-tech',
    icon: Layers,
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80',
    ctaLink: '/technology-driven',
  },
  {
    id: 'sap-hana',
    icon: Database,
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80',
    ctaLink: '/sap-solutions',
  },
  {
    id: 'oracle-netsuite',
    icon: Cloud,
    image:
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=80',
    ctaLink: '/oracle-netsuite',
  },
  {
    id: 'microsoft-product',
    icon: Box,
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80',
    ctaLink: '/next-genration',
  },
  {
    id: 'utility-modernization',
    icon: Settings,
    image:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=80',
    ctaLink: '/utility-transformation',
  },
  {
    id: 'data-security',
    icon: Shield,
    image:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=80',
    ctaLink: '/technology-driven',
  },
];

const FALLBACK = {
  heroHighlight: 'Implementation',
  heroRest: '',
  heroSubtitle: 'From blueprint to go-live enterprise solutions delivered with precision',
  expertiseLabel: 'What We Implement',
  introTitle: 'Implementation that turns strategy into working systems',
  introDesc:
    'AIOT designs, configures, and deploys enterprise platforms that fit how your business runs with clear timelines, strong governance, and adoption built into every release.',
  capabilitiesLabel: 'Capabilities',
  approachLabel: 'How We Deliver',
  approachTitle: 'A proven path from design to go-live',
  approachDesc:
    'We combine deep product expertise with disciplined delivery so every implementation lands on time, on scope, and ready for users.',
  learnMore: 'Explore this solution',
  services: [
    {
      title: 'Enterprise Technology Solutions',
      shortTitle: 'Enterprise Tech',
      heading: 'Build the digital backbone of your business',
      content:
        'We implement core enterprise platforms ERP, CRM, collaboration, and custom applications that connect teams, data, and processes into one reliable operating system.',
      points: [
        'Solution design & fit-gap workshops',
        'Configuration, integration & data migration',
        'User enablement & hypercare support',
      ],
    },
    {
      title: 'SAP & HANA Solutions',
      shortTitle: 'SAP & HANA',
      heading: 'Modernize finance and operations on SAP',
      content:
        'From S/4HANA and HANA analytics to module rollouts, we help you implement SAP with clean processes, strong controls, and a roadmap that protects your investment.',
      points: [
        'S/4HANA & classic SAP implementations',
        'HANA analytics & reporting foundations',
        'Process redesign aligned to SAP best practice',
      ],
    },
    {
      title: 'Oracle NetSuite Solutions',
      shortTitle: 'Oracle NetSuite',
      heading: 'Run your business on one cloud ERP',
      content:
        'We implement NetSuite for finance, inventory, CRM, and operations tailored to your industry with SuiteScripts, workflows, and integrations that scale as you grow.',
      points: [
        'NetSuite ERP, CRM & e-commerce setup',
        'Custom workflows, SuiteScripts & dashboards',
        'Multi-subsidiary & multi-currency readiness',
      ],
    },
    {
      title: 'Microsoft & Product Solutions',
      shortTitle: 'Microsoft & Products',
      heading: 'Power productivity with Microsoft and AIOT products',
      content:
        'We deliver Microsoft 365, Dynamics, Azure, Power Platform, and AIOT product suites so your teams collaborate, automate, and innovate on a trusted stack.',
      points: [
        'Microsoft 365, Dynamics & Power Platform',
        'Azure cloud & identity foundations',
        'AIOT product rollout & integration',
      ],
    },
    {
      title: 'Utility Modernization',
      shortTitle: 'Utility Modernization',
      heading: 'Modern systems for modern utilities',
      content:
        'We help utilities modernize billing, customer experience, field operations, and grid-adjacent platforms with secure, compliant implementations built for regulated environments.',
      points: [
        'CIS, billing & customer experience platforms',
        'Field service & operations modernization',
        'Compliance-ready integrations & data flows',
      ],
    },
    {
      title: 'Data & Security Solutions',
      shortTitle: 'Data & Security',
      heading: 'Protect data. Unlock insight.',
      content:
        'We implement data platforms, analytics, and security controls that keep information trustworthy, accessible, and protected from lakehouse foundations to identity and access.',
      points: [
        'Data platforms, pipelines & analytics',
        'Identity, access & security baselines',
        'Governance, retention & compliance controls',
      ],
    },
  ],
  processSteps: [
    { title: 'Assess', desc: 'Scope requirements, risks, and success criteria' },
    { title: 'Design', desc: 'Blueprint processes, architecture, and integrations' },
    { title: 'Build', desc: 'Configure, migrate, integrate, and test thoroughly' },
    { title: 'Launch', desc: 'Go-live with training, hypercare, and handover' },
  ],
};

const Implementation = () => (
  <ServiceOfferingPage
    translationKey="implementation"
    fallback={FALLBACK}
    serviceMeta={SERVICE_META}
    processIcons={[Lightbulb, Target, Map, Rocket]}
  />
);

export default Implementation;
