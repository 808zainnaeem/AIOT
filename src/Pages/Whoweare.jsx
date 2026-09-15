import React, { useEffect, useContext } from 'react';
import { LanguageContext } from '../Context/LanguageContext';
import { Colors } from '../Utils/Colors';
import { Brain, Network, Shield, Lightbulb, Gauge, Play, Check, MapPin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { translations, language } = useContext(LanguageContext);
    const t = translations.about;
    const colors = Colors[language] || Colors.en;
    const isRTL = language === 'ar';
    const [expandedVision, setExpandedVision] = React.useState(false);
    const [expandedMission, setExpandedMission] = React.useState(false);
    const fadeUp = {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    };

    const stagger = {
        visible: { transition: { staggerChildren: 0.12 } },
    };

    const features = [
        { Icon: Brain, title: t.feature1Title, desc: t.feature1Desc },
        { Icon: Network, title: t.feature2Title, desc: t.feature2Desc },
        { Icon: Shield, title: t.feature3Title, desc: t.feature3Desc },
    ];

    const transformItems = [t.list1, t.list2, t.list3];

    const offices = [
        {
            region: t.pakistan,
            company: t.companyPakistan,
            city: t.lahore,
            address: t.pakistanAddress || translations.navbar?.topBar?.address || '15/1C, GECHS, Phase III, Peco Road, Lahore 54100, Punjab, Pakistan',
            email: 'info@aiotcons.com',
            phone: '+923 12 345 6778',
        },
        {
            region: t.uae,
            company: t.companyUAE,
            city: t.dubai,
            address: t.uaeAddress,
            email: 'info@aiotcons.com',
            phone: '+971 50 731 2970',
        },
        {
            region: t.uk,
            company: t.companyUK,
            city: t.glasgow,
            address: t.ukAddress,
            email: 'info@aiotcons.com',
            phone: '+447 42 841 7535',
        },
    ];

    const headingParts = (t.mainHeading || '').split('<br />');

    return (
        <div className="bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
            {/* Hero Section */}
            <div
                className="relative h-80 md:h-96 bg-cover bg-center"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(https://i.postimg.cc/wjn57QkV/Gemini-Generated-Image-616xj1616xj1616x.jpg)',
                }}
            >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        <span style={{ color: colors.logo }}>{t.heroTitle.split(' ')[0]}</span>{' '}
                        {t.heroTitle.split(' ').slice(1).join(' ')}
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl">{t.heroSubtitle}</p>
                </div>
            </div>

            {/* Who We Are Section */}
            <section className="relative overflow-hidden py-16 md:py-20 px-6 md:px-8">
                <div
                    className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
                    style={{ background: `${colors.logo}18` }}
                />
                <div className="relative max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={stagger}
                    >
                        <motion.p
                            className="text-sm font-semibold tracking-wide mb-3"
                            style={{ color: colors.logo }}
                            variants={fadeUp}
                        >
                            {t.whoWeAre}
                        </motion.p>
                        <motion.div
                            className={`w-14 h-1 mb-10 rounded-full ${isRTL ? 'ml-auto' : ''}`}
                            style={{ backgroundColor: colors.logo }}
                            variants={{
                                hidden: { scaleX: 0 },
                                visible: { scaleX: 1, transition: { duration: 0.6 } },
                            }}
                        />

                        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-14">
                            <motion.h2
                                className="lg:w-[320px] shrink-0 text-3xl md:text-4xl font-bold leading-tight text-gray-900"
                                variants={fadeUp}
                            >
                                {headingParts[0]}
                                {headingParts[1] && (
                                    <>
                                        <br />
                                        <span style={{ color: colors.logo }}>{headingParts[1]}</span>
                                    </>
                                )}
                            </motion.h2>

                            <motion.div className="flex flex-col gap-5 flex-1" variants={fadeUp}>
                                <p className="text-gray-600 leading-relaxed text-base md:text-lg">{t.desc1}</p>
                                <p className="text-gray-600 leading-relaxed text-base md:text-lg">{t.desc2}</p>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.25 }}
                        variants={stagger}
                    >
                        {features.map(({ Icon, title, desc }) => (
                            <motion.div
                                key={title}
                                className="group bg-white border border-gray-100 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
                                style={{ boxShadow: '0 8px 28px rgba(15, 23, 42, 0.06)' }}
                                variants={fadeUp}
                            >
                                <div
                                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105"
                                    style={{ backgroundColor: `${colors.logo}14` }}
                                >
                                    <Icon className="w-7 h-7" style={{ color: colors.logo }} />
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">{title}</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Dark Section - Vision & Mission */}
            <section className="relative bg-[#0b0b0b] text-white py-20 md:py-24 px-6 md:px-8 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-25"
                    style={{
                        backgroundImage:
                            'url(https://i.postimg.cc/7PC2T2f1/Gemini-Generated-Image-h6ndm1h6ndm1h6nd.jpg)',
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.25 }}
                        variants={stagger}
                    >
                        <motion.div variants={fadeUp}>
                            {t.aboutUs && (
                                <p
                                    className="text-sm font-semibold tracking-wide mb-3"
                                    style={{ color: colors.logo }}
                                >
                                    {t.aboutUs}
                                </p>
                            )}
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
                                {t.darkSectionTitle}
                            </h2>
                            <p className="text-gray-300 leading-relaxed mb-5">{t.darkSectionDesc1}</p>
                            <p className="text-gray-400 leading-relaxed">{t.darkSectionDesc2}</p>
                        </motion.div>

                        <motion.div className="space-y-5" variants={stagger}>
    {[
        {
            Icon: Lightbulb,
            title: t.visionTitle,
            desc: t.visionDesc,
            expanded: expandedVision,
            setExpanded: setExpandedVision,
        },
        {
            Icon: Gauge,
            title: t.missionTitle,
            desc: t.missionDesc,
            desc2: t.missionDesc2,
            expanded: expandedMission,
            setExpanded: setExpandedMission,
        },
    ].map(({ Icon, title, desc, desc2, expanded, setExpanded }) => {
        // How many characters to show before "Read more"
        const previewLength = 120;
        const fullText = desc + (desc2 ? ' ' + desc2 : '');
        const isLong = fullText.length > previewLength;
        const displayText = expanded || !isLong
            ? fullText
            : fullText.slice(0, previewLength) + '...';

        return (
            <motion.div
                key={title}
                className="flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                variants={fadeUp}
            >
                <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-black"
                    style={{ backgroundColor: colors.logo }}
                >
                    <Icon className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                        {displayText}
                    </p>

                    {isLong && (
                        <button
                            type="button"
                            onClick={() => setExpanded(!expanded)}
                            className="mt-3 text-sm font-semibold underline underline-offset-2 transition-opacity hover:opacity-80"
                            style={{ color: colors.logo }}
                        >
                            {expanded
                                ? (language === 'ar' ? 'اقرأ أقل' : 'Read less')
                                : (language === 'ar' ? 'اقرأ المزيد' : 'Read more')}
                        </button>
                    )}
                </div>
            </motion.div>
        );
    })}
</motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Smart Solutions + Transform Section */}
          {/* Smart Solutions + Transform — Unified Section */}
<section className="relative py-20 md:py-28 px-6 md:px-8 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
    {/* soft background glow */}
    <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-30 blur-3xl"
        style={{ background: `${colors.accent}18` }}
    />

    <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
            className="text-center max-w-3xl mx-auto mb-14 md:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={stagger}
        >
            <motion.p
                className="text-sm font-semibold tracking-wide mb-3"
                style={{ color: colors.accent }}
                variants={fadeUp}
            >
                {t.smartSolutions}
            </motion.p>
            <motion.div
                className="w-16 h-1 mx-auto mb-6 rounded-full"
                style={{ backgroundColor: colors.logo }}
                variants={{
                    hidden: { scaleX: 0 },
                    visible: { scaleX: 1, transition: { duration: 0.6 } },
                }}
            />
            <motion.h2
                className="text-1xl md:text-1xl lg:text-2xl  text-gray-900 leading-tight"
                variants={fadeUp}
            >
                {t.smartSolutionsHeading}
            </motion.h2>
        </motion.div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left side — Image + Play button */}
            <motion.div
                className="lg:col-span-5 relative group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
            >
                <div
                    className="relative h-full min-h-[340px] md:min-h-[420px] overflow-hidden rounded-3xl"
                    style={{ boxShadow: '0 20px 50px rgba(15, 23, 42, 0.12)' }}
                >
                    <img
                        src="https://i.postimg.cc/pV4ZqKZB/Gemini-Generated-Image-6twac06twac06twa.jpg"
                        alt="Business meeting"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* dark overlay for better contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button
                            type="button"
                            aria-label="Play video"
                            className="rounded-full p-5 md:p-6 cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95"
                            style={{
                                backgroundColor: colors.accent,
                                boxShadow: `0 12px 40px ${colors.accent}66`,
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.hover)}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.accent)}
                        >
                            <Play className="w-7 h-7 md:w-8 md:h-8 text-white" fill="white" />
                        </button>
                    </div>
                </div>
            </motion.div>

            {/* Right side — Content + Feature box */}
            <motion.div
                className="lg:col-span-7 flex flex-col justify-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={stagger}
            >
                <motion.div variants={fadeUp}>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-snug">
                        <span style={{ color: colors.accent }}>{t.transformTitle}</span>
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-8 max-w-xl">
                        {t.transformDesc}
                    </p>
                </motion.div>

                {/* Feature card */}
                <motion.div
                    className="relative overflow-hidden rounded-3xl p-7 md:p-9 text-white"
                    style={{
                        background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.hover || colors.accent} 100%)`,
                        boxShadow: `0 20px 50px ${colors.accent}40`,
                    }}
                    variants={fadeUp}
                >
                    {/* subtle pattern */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none"
                        style={{
                            backgroundImage: `radial-gradient(circle at 20% 30%, white 1px, transparent 1px)`,
                            backgroundSize: '24px 24px',
                        }}
                    />

                    <h4 className="relative text-xl md:text-2xl font-bold mb-6">
                        {t.transformBoxTitle}
                    </h4>

                    <div className="relative space-y-4">
                        {transformItems.map((item, index) => (
                            <div
                                key={item}
                                className="flex items-center gap-4 group/item"
                            >
                                <span className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover/item:scale-110">
                                    <Check className="w-4.5 h-4.5" strokeWidth={3} />
                                </span>
                                <span className="text-base md:text-lg font-medium leading-snug">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </div>

      
    </div>
</section>

            {/* Core Values */}
            {Array.isArray(t.coreValues) && t.coreValues.length > 0 && (
                <section className="py-14 md:py-16 px-6 md:px-8 bg-white border-y border-gray-100">
                    <div className="max-w-7xl mx-auto text-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.4 }}
                            variants={stagger}
                        >
                            <motion.h2
                                className="text-2xl md:text-3xl font-bold text-gray-900 mb-3"
                                variants={fadeUp}
                            >
                                {t.coreValuesTitle}
                            </motion.h2>
                            <motion.div
                                className="w-14 h-1 mx-auto mb-8 rounded-full"
                                style={{ backgroundColor: colors.logo }}
                                variants={{
                                    hidden: { scaleX: 0 },
                                    visible: { scaleX: 1, transition: { duration: 0.6 } },
                                }}
                            />
                            <motion.div
                                className="flex flex-wrap items-center justify-center gap-3 md:gap-4"
                                variants={stagger}
                            >
                                {t.coreValues.map((value) => (
                                    <motion.span
                                        key={value}
                                        className="px-4 py-2 text-sm md:text-base font-medium text-gray-800 rounded-full border border-gray-200 bg-gray-50"
                                        variants={fadeUp}
                                    >
                                        {value}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Our Presence Section */}
            <section className="py-16 md:py-20 px-6 md:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-12 md:mb-14"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                        variants={stagger}
                    >
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold text-gray-900 mb-3"
                            variants={fadeUp}
                        >
                            {t.presenceTitle.split(' ')[0]}{' '}
                            <span style={{ color: colors.accent }}>{t.presenceHighlight}</span>
                        </motion.h2>
                        <motion.div
                            className="w-16 h-1 mx-auto mb-5 rounded-full"
                            style={{ backgroundColor: colors.accent }}
                            variants={{
                                hidden: { scaleX: 0 },
                                visible: { scaleX: 1, transition: { duration: 0.6 } },
                            }}
                        />
                        <motion.h3
                            className="text-xl md:text-2xl font-semibold text-gray-700"
                            variants={fadeUp}
                        >
                            {t.presenceHeading}
                        </motion.h3>
                        <motion.p
                            className="mt-4 text-gray-500 max-w-xl mx-auto"
                            variants={fadeUp}
                        >
                            {t.presenceDesc}
                        </motion.p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
                        <motion.div
                            className="lg:col-span-1 space-y-5"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={stagger}
                        >
                            {offices.map((office) => (
                                <motion.div
                                    key={office.region}
                                    className={`rounded-2xl border border-gray-100 bg-gray-50/80 p-5 transition-shadow duration-300 hover:shadow-md ${
                                        isRTL ? 'border-r-4 border-r-transparent' : 'border-l-4'
                                    }`}
                                    style={{
                                        [isRTL ? 'borderRightColor' : 'borderLeftColor']: colors.accent,
                                    }}
                                    variants={fadeUp}
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                        <MapPin className="w-4 h-4" style={{ color: colors.accent }} />
                                        <h4 className="text-lg font-bold" style={{ color: colors.accent }}>
                                            {office.region}
                                        </h4>
                                    </div>
                                    <h5 className="text-gray-900 font-semibold mb-1">{office.company}</h5>
                                    <p className="text-sm font-medium mb-3" style={{ color: colors.accent }}>
                                        {office.city}
                                    </p>
                                    <p className="text-gray-600 text-sm mb-2 leading-relaxed">
                                        <span className="font-semibold text-gray-800">{t.address}</span>{' '}
                                        {office.address}
                                    </p>
                                    <p className="text-gray-600 text-sm mb-1.5 flex items-start gap-2">
                                        <Mail className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: colors.logo }} />
                                        <span>
                                            <span className="font-semibold text-gray-800">{t.email}</span>{' '}
                                            {office.email}
                                        </span>
                                    </p>
                                    <p className="text-gray-600 text-sm flex items-start gap-2">
                                        <Phone className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: colors.logo }} />
                                        <span>
                                            <span className="font-semibold text-gray-800">{t.phone}</span>{' '}
                                            {office.phone}
                                        </span>
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            className="lg:col-span-2"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.55 }}
                        >
                            <div
                                className="bg-gray-50 rounded-2xl p-4 md:p-6 lg:sticky lg:top-24 overflow-hidden border border-gray-100"
                                style={{ boxShadow: '0 12px 36px rgba(15, 23, 42, 0.06)' }}
                            >
                                <img
                                    src="/map.jpg"
                                    alt="World Map"
                                    className="w-full rounded-xl object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
