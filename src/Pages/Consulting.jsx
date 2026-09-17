import React from 'react';
import {
  ClipboardList,
  Compass,
  Network,
  RefreshCw,
  Workflow,
  Lightbulb,
  Target,
  Map,
  Rocket,
} from 'lucide-react';
import ServiceOfferingPage from '../Components/ServiceOfferingPage';

const SERVICE_META = [
  {
    id: 'it-strategy',
    icon: Compass,
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'digital-transformation',
    icon: RefreshCw,
    image:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'business-process',
    icon: Workflow,
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'tech-assessment',
    icon: ClipboardList,
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'cloud-architecture',
    icon: Network,
    image:
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a2?auto=format&fit=crop&w=1400&q=80',
  },
];

const FALLBACK = {
  heroHighlight: 'Consulting',
  heroRest: '',
  heroSubtitle: 'Unlock Agility, Embrace Innovation: AIOT, Your Partner in Transformation',
  expertiseLabel: 'Our Expertise',
  introTitle: 'Consulting built for measurable outcomes',
  introDesc:
    'We combine strategic insight, industry depth, and practical technology expertise to help you move faster, reduce risk, and create lasting competitive advantage.',
  capabilitiesLabel: 'Capabilities',
  approachLabel: 'How We Work',
  approachTitle: 'A clear path from insight to impact',
  approachDesc:
    'Every engagement follows a disciplined method so strategy becomes delivery, not a slide deck.',
  learnMore: 'Discuss this service',
  services: [
    {
      title: 'IT Strategy & Advisory',
      shortTitle: 'IT Strategy & Advisory',
      heading: 'Align technology with business ambition',
      content:
        'We help executives set a clear technology agenda investment priorities, operating models, and governance so IT becomes a growth engine rather than a cost center.',
      points: [
        'Enterprise IT vision & operating model',
        'Investment prioritization & value cases',
        'Governance, risk & vendor strategy',
      ],
    },
    {
      title: 'Digital Transformation Consulting',
      shortTitle: 'Digital Transformation',
      heading: 'Reinvent how your organization works',
      content:
        'From customer journeys to back-office platforms, we design transformation programs that connect people, process, and technology with adoption built in from day one.',
      points: [
        'Transformation roadmap & change design',
        'Customer & employee experience redesign',
        'Program governance & value tracking',
      ],
    },
    {
      title: 'Business Process Consulting',
      shortTitle: 'Business Process',
      heading: 'Simplify flows. Unlock performance.',
      content:
        'We diagnose friction across critical processes, redesign end-to-end workflows, and introduce automation where it creates real capacity not complexity.',
      points: [
        'Process discovery & maturity assessment',
        'Target operating model design',
        'Automation & continuous improvement',
      ],
    },
    {
      title: 'Technology Assessment & Roadmapping',
      shortTitle: 'Tech Assessment',
      heading: 'Know where you stand. Plan where you go.',
      content:
        'We evaluate applications, infrastructure, data, and security posture, then translate findings into a sequenced roadmap your teams can execute with confidence.',
      points: [
        'Application & infrastructure health checks',
        'Gap analysis vs. industry benchmarks',
        'Phased roadmap with cost & risk view',
      ],
    },
    {
      title: 'Cloud & Enterprise Architecture',
      shortTitle: 'Cloud & Architecture',
      heading: 'Architect for scale, resilience, and speed',
      content:
        'We design cloud and enterprise architectures that are secure by default, cost-aware, and ready for AI, integrations, and multi-cloud growth.',
      points: [
        'Reference architectures & landing zones',
        'Integration, data & platform blueprints',
        'Security, FinOps & reliability patterns',
      ],
    },
  ],
  processSteps: [
    { title: 'Discover', desc: 'Understand goals, constraints, and current state' },
    { title: 'Define', desc: 'Shape strategy, priorities, and success metrics' },
    { title: 'Design', desc: 'Architect solutions and a phased roadmap' },
    { title: 'Deliver', desc: 'Guide execution and measure outcomes' },
  ],
};

const Consulting = () => (
  <ServiceOfferingPage
    translationKey="consulting"
    fallback={FALLBACK}
    serviceMeta={SERVICE_META}
    processIcons={[Lightbulb, Target, Map, Rocket]}
  />
);

export default Consulting;
