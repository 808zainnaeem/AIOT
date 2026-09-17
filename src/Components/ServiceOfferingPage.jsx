import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import { LanguageContext } from '../Context/LanguageContext';
import { Colors } from '../Utils/Colors';

const DEFAULT_HERO_BG =
  'https://i.postimg.cc/6569bGpp/Chat-GPT-Image-Sep-14-2026-10-26-11-AM.png';

const DROPDOWN_TITLE_KEYS = {
  consulting: [
    'itStrategy',
    'digitalTransformation',
    'businessProcess',
    'techAssessment',
    'cloudEnterpriseArch',
  ],
  implementation: [
    'enterpriseTech',
    'sapHana',
    'oracleNetsuite',
    'microsoftProduct',
    'utilityModernization',
    'dataSecurity',
  ],
  managedServices: [
    'appManagement',
    'cloudInfra',
    'itSupport',
    'cyberMonitoring',
    'backupDr',
  ],
};

const ServiceImage = ({ src, alt, accent, Icon, index }) => (
  <div className="relative group">
    <div
      className="absolute -inset-3 rounded-3xl opacity-25 blur-2xl transition duration-500 group-hover:opacity-45"
      style={{ background: `linear-gradient(135deg, ${accent}66, transparent)` }}
    />
    <div
      className="relative overflow-hidden rounded-2xl"
      style={{
        border: `1px solid ${accent}33`,
        boxShadow: '0 20px 48px rgba(15, 23, 42, 0.1)',
      }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-[300px] sm:h-[360px] md:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09]/50 via-transparent to-transparent" />
      <div
        className="absolute top-5 left-5 w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg"
        style={{ backgroundColor: accent }}
      >
        <Icon size={22} />
      </div>
      <span className="absolute bottom-5 right-5 text-5xl font-black text-white/25 select-none leading-none">
        {String(index + 1).padStart(2, '0')}
      </span>
    </div>
  </div>
);

/**
 * Shared layout for Consulting / Implementation / Managed Services pages.
 */
export default function ServiceOfferingPage({
  translationKey,
  fallback,
  serviceMeta,
  processIcons = [],
  heroBg = DEFAULT_HERO_BG,
}) {
  const { language, translations, localePack } = useContext(LanguageContext);
  const colors = Colors[language] || Colors.en;
  const isRTL = language === 'ar';
  const location = useLocation();
  const [activeId, setActiveId] = useState(serviceMeta[0]?.id);

  // Prefer raw locale pack so deepMerge doesn't keep English service arrays
  const local = localePack?.[translationKey] || {};
  const merged = translations[translationKey] || {};
  const c = { ...merged, ...local };

  const heroHighlight = c.heroHighlight || c.eyebrow || fallback.heroHighlight;
  const heroRest = c.heroRest || '';
  const heroSubtitle = c.heroSubtitle || c.bannerSub || fallback.heroSubtitle;

  const services = useMemo(() => {
    const expected = serviceMeta.length;
    const localServices = local.services;
    const hasLocal = Array.isArray(localServices) && localServices.length === expected;
    const base =
      hasLocal
        ? localServices
        : language === 'en' && Array.isArray(merged.services) && merged.services.length === expected
          ? merged.services
          : fallback.services;

    const dropdown = translations.dropdown?.whatWeDo || {};
    const titleKeys = DROPDOWN_TITLE_KEYS[translationKey] || [];

    return serviceMeta.map((meta, i) => {
      const localizedTitle =
        !hasLocal && language !== 'en' ? dropdown[titleKeys[i]] : undefined;
      return {
        ...meta,
        title:
          (hasLocal ? base[i]?.title : localizedTitle) ||
          base[i]?.title ||
          fallback.services[i].title,
        shortTitle:
          (hasLocal ? base[i]?.shortTitle : localizedTitle) ||
          base[i]?.shortTitle ||
          fallback.services[i].shortTitle,
        heading: base[i]?.heading || fallback.services[i].heading,
        content: base[i]?.content || fallback.services[i].content,
        points: base[i]?.points?.length ? base[i].points : fallback.services[i].points,
        ctaLink: meta.ctaLink || base[i]?.ctaLink || '/contact',
      };
    });
  }, [
    language,
    local.services,
    merged.services,
    serviceMeta,
    fallback,
    translations.dropdown,
    translationKey,
  ]);

  const processSteps = useMemo(() => {
    const localSteps = local.processSteps;
    const steps =
      Array.isArray(localSteps) && localSteps.length
        ? localSteps
        : language === 'en' && Array.isArray(merged.processSteps) && merged.processSteps.length
          ? merged.processSteps
          : fallback.processSteps;
    return steps.map((step, i) => ({
      ...step,
      icon: processIcons[i] || Lightbulb,
      step: String(i + 1).padStart(2, '0'),
    }));
  }, [language, local.processSteps, merged.processSteps, fallback.processSteps, processIcons]);

  useEffect(() => {
    const hash = location.hash?.replace('#', '');
    if (!hash) return;
    const el = document.getElementById(hash);
    if (el) {
      window.setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
      setActiveId(hash);
    }
  }, [location.hash]);

  useEffect(() => {
    const observers = [];
    services.forEach((service) => {
      const el = document.getElementById(service.id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(service.id);
        },
        { rootMargin: '-35% 0px -45% 0px', threshold: 0.1 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [services]);

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
  };

  return (
    <div key={language} className="min-h-screen bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <section
        className="relative h-72 sm:h-80 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${heroBg})`,
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-3 sm:mb-4 tracking-tight">
            <span style={{ color: colors.logo }}>{heroHighlight}</span>
            {heroRest ? <> {heroRest}</> : null}
          </h1>
          <p className="text-base sm:text-xl text-white/90 max-w-2xl leading-relaxed">
            {heroSubtitle}
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 px-6 md:py-20">
        <div
          className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
          style={{ background: `${colors.logo}22` }}
        />
        <motion.div
          className="relative max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.p
            className="text-sm md:text-base font-semibold tracking-[0.22em] uppercase mb-3"
            style={{ color: colors.logo }}
            variants={headerVariants}
          >
            {c.expertiseLabel || fallback.expertiseLabel}
          </motion.p>
          <motion.div
            className="w-16 h-1 mx-auto mb-6 rounded-full"
            style={{ backgroundColor: colors.logo }}
            variants={{
              hidden: { scaleX: 0 },
              visible: { scaleX: 1, transition: { duration: 0.7 } },
            }}
          />
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 max-w-3xl mx-auto leading-tight mb-6"
            variants={headerVariants}
          >
            {c.introTitle || fallback.introTitle}
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto"
            variants={headerVariants}
          >
            {c.introDesc || fallback.introDesc}
          </motion.p>
        </motion.div>
      </section>

      <section id="capabilities" className="px-6 pb-4 scroll-mt-28">
        <div className="max-w-5xl mx-auto">
          <p
            className="text-sm font-semibold tracking-[0.22em] uppercase mb-6 text-center"
            style={{ color: colors.logo }}
          >
            {c.capabilitiesLabel || fallback.capabilitiesLabel}
          </p>
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
            {services.map((service) => {
              const Icon = service.icon;
              const active = activeId === service.id;
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => {
                    document
                      .getElementById(service.id)
                      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    setActiveId(service.id);
                    window.history.replaceState(null, '', `#${service.id}`);
                  }}
                  className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition border max-w-full"
                  style={{
                    borderColor: active ? colors.logo : `${colors.logo}40`,
                    backgroundColor: active ? colors.logo : '#fff',
                    color: active ? '#fff' : '#111827',
                    boxShadow: active ? `0 8px 20px ${colors.logo}33` : 'none',
                  }}
                >
                  <Icon size={15} className="shrink-0" />
                  <span className="truncate">{service.shortTitle || service.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-6">
        <div className="max-w-7xl mx-auto space-y-24 md:space-y-28">
          {services.map((service, index) => {
            const Icon = service.icon;
            const imageFirst = index % 2 === 0;
            return (
              <motion.article
                key={service.id}
                id={service.id}
                className="scroll-mt-32 grid md:grid-cols-2 gap-10 lg:gap-16 items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={{ visible: { transition: { staggerChildren: 0.14 } } }}
              >
                <motion.div
                  className={imageFirst ? 'md:order-1' : 'md:order-2'}
                  variants={cardVariants}
                >
                  <ServiceImage
                    src={service.image}
                    alt={service.heading}
                    accent={colors.logo}
                    Icon={Icon}
                    index={index}
                  />
                </motion.div>

                <motion.div
                  className={imageFirst ? 'md:order-2' : 'md:order-1'}
                  variants={cardVariants}
                >
                  <span
                    className="text-sm font-semibold uppercase tracking-[0.18em]"
                    style={{ color: colors.logo }}
                  >
                    {service.title}
                  </span>
                  <h3 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                    {service.heading}
                  </h3>
                  <div
                    className="mt-5 h-1 w-14 rounded-full"
                    style={{ backgroundColor: colors.logo }}
                  />
                  <p className="mt-6 text-lg text-gray-600 leading-relaxed">{service.content}</p>

                  <ul className="mt-8 space-y-3">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <CheckCircle2
                          className="w-5 h-5 mt-0.5 shrink-0"
                          style={{ color: colors.logo }}
                        />
                        <span className="text-gray-700 font-medium leading-snug">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={service.ctaLink || '/contact'}
                    className="mt-9 inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-semibold border-2 transition hover:text-white"
                    style={{ borderColor: '#111827', color: '#111827' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = colors.logo;
                      e.currentTarget.style.borderColor = colors.logo;
                      e.currentTarget.style.color = '#fff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.borderColor = '#111827';
                      e.currentTarget.style.color = '#111827';
                    }}
                  >
                    {c.learnMore || fallback.learnMore}
                    <ArrowRight
                      className="w-4 h-4"
                      style={{ transform: isRTL ? 'scaleX(-1)' : undefined }}
                    />
                  </Link>
                </motion.div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section
        className="relative overflow-hidden py-20 px-6 md:py-24"
        style={{ backgroundColor: `${colors.logo}0F` }}
      >
        <div
          className="pointer-events-none absolute -top-16 left-1/2 h-56 w-[36rem] -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: `${colors.logo}22` }}
        />
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.p
              className="text-sm md:text-base font-semibold tracking-[0.22em] uppercase mb-3"
              style={{ color: colors.logo }}
              variants={headerVariants}
            >
              {c.approachLabel || fallback.approachLabel}
            </motion.p>
            <motion.div
              className="w-16 h-1 mx-auto mb-6 rounded-full"
              style={{ backgroundColor: colors.logo }}
              variants={{
                hidden: { scaleX: 0 },
                visible: { scaleX: 1, transition: { duration: 0.7 } },
              }}
            />
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              variants={headerVariants}
            >
              {c.approachTitle || fallback.approachTitle}
            </motion.h2>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto leading-relaxed"
              variants={headerVariants}
            >
              {c.approachDesc || fallback.approachDesc}
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.article
                  key={step.title}
                  className="group relative rounded-2xl bg-white p-7"
                  style={{
                    border: `1px solid ${colors.logo}33`,
                    boxShadow: '0 12px 32px rgba(15, 23, 42, 0.06)',
                  }}
                  variants={cardVariants}
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                >
                  <span
                    className="absolute inset-x-0 top-0 h-1 rounded-t-2xl origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                    style={{ backgroundColor: colors.logo }}
                  />
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${colors.logo}14`, color: colors.logo }}
                    >
                      <Icon size={22} />
                    </div>
                    <span className="text-3xl font-black text-gray-200">
                      {step.step || String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-[15px] leading-relaxed">{step.desc}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
