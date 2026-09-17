import React from 'react';
import {
  AppWindow,
  Server,
  Headset,
  Lock,
  HardDrive,
  Lightbulb,
  Target,
  Map,
  Rocket,
} from 'lucide-react';
import ServiceOfferingPage from '../Components/ServiceOfferingPage';

const SERVICE_META = [
  {
    id: 'app-management',
    icon: AppWindow,
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'cloud-infra',
    icon: Server,
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'it-support',
    icon: Headset,
    image:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'cyber-monitoring',
    icon: Lock,
    image:
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'backup-dr',
    icon: HardDrive,
    image:
      'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=1400&q=80',
  },
];

const FALLBACK = {
  heroHighlight: 'Managed',
  heroRest: 'Services',
  heroSubtitle: 'Always-on operations, monitoring, and support that keep your digital estate healthy',
  expertiseLabel: 'What We Run',
  introTitle: 'Managed services that protect performance and free your teams',
  introDesc:
    'AIOT takes ownership of day-to-day technology operations applications, cloud, security, and support so your people can focus on growth while we keep systems reliable, secure, and ready.',
  capabilitiesLabel: 'Capabilities',
  approachLabel: 'How We Operate',
  approachTitle: 'A run model built for clarity and uptime',
  approachDesc:
    'Clear SLAs, proactive monitoring, and continuous improvement so managed services feel like an extension of your team, not a black box.',
  learnMore: 'Discuss this service',
  services: [
    {
      title: 'Application Management Services',
      shortTitle: 'Application Management',
      heading: 'Keep applications stable, current, and improving',
      content:
        'We manage enhancements, incidents, releases, and performance for your business-critical applications with disciplined change control and measurable service levels.',
      points: [
        'L2/L3 application support & enhancements',
        'Release management & change control',
        'Performance tuning & continuous improvement',
      ],
    },
    {
      title: 'Cloud & Infrastructure Management',
      shortTitle: 'Cloud & Infrastructure',
      heading: 'Operate cloud and infrastructure with confidence',
      content:
        'From landing zones to day-2 operations, we monitor, patch, optimize, and govern your cloud and infrastructure estate for cost, resilience, and scale.',
      points: [
        '24×7 monitoring & incident response',
        'Patching, capacity & cost optimization',
        'Multi-cloud & hybrid operations',
      ],
    },
    {
      title: 'IT Support & Service Desk',
      shortTitle: 'IT Support & Desk',
      heading: 'Responsive support your users can trust',
      content:
        'Our service desk resolves tickets fast, communicates clearly, and escalates with context delivering a consistent experience across channels and time zones.',
      points: [
        'Multi-channel service desk & SLAs',
        'Endpoint, identity & access support',
        'Knowledge base & self-service enablement',
      ],
    },
    {
      title: 'Cybersecurity & Monitoring',
      shortTitle: 'Cybersecurity',
      heading: 'Detect threats. Reduce risk. Stay ahead.',
      content:
        'We continuously monitor security posture, respond to alerts, and harden environments so vulnerabilities are found early and incidents are contained quickly.',
      points: [
        'SOC-style monitoring & alert triage',
        'Vulnerability management & hardening',
        'Identity, endpoint & cloud security ops',
      ],
    },
    {
      title: 'Data, Backup & Disaster Recovery',
      shortTitle: 'Backup & DR',
      heading: 'Protect what matters. Recover when it counts.',
      content:
        'We design and run backup and disaster recovery programs with tested restore paths, clear RPO/RTO targets, and reporting your leadership can rely on.',
      points: [
        'Backup policy design & continuous validation',
        'Disaster recovery runbooks & drills',
        'RPO/RTO reporting & compliance evidence',
      ],
    },
  ],
  processSteps: [
    { title: 'Onboard', desc: 'Map systems, SLAs, and operating baselines' },
    { title: 'Stabilize', desc: 'Fix noise, close gaps, and set health metrics' },
    { title: 'Operate', desc: 'Monitor, support, and improve every day' },
    { title: 'Optimize', desc: 'Reduce risk, cost, and toil over time' },
  ],
};

const ManagedServices = () => (
  <ServiceOfferingPage
    translationKey="managedServices"
    fallback={FALLBACK}
    serviceMeta={SERVICE_META}
    processIcons={[Lightbulb, Target, Map, Rocket]}
  />
);

export default ManagedServices;
