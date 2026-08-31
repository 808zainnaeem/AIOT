import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, Database, Users, Mail } from 'lucide-react';
import { LanguageContext } from '../Context/LanguageContext';
import { Colors } from '../Utils/Colors';

export default function PrivacyPolicy() {
    const { translations, language } = useContext(LanguageContext);
    const colors = Colors[language] || Colors.en;
    const t = translations.privacyPolicy || {};
    const navbarTrans = translations.navbar || {};

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sections = [
        {
            icon: Eye,
            title: t.collectTitle || 'Information We Collect',
            content: t.collectDesc || 'We may collect personal information you provide directly, such as your name, email address, phone number, company details, and message content when you contact us, book a demo, or subscribe to updates. We may also collect limited technical data such as browser type, device information, and pages visited to improve site performance and security.',
        },
        {
            icon: Database,
            title: t.useTitle || 'How We Use Your Information',
            content: t.useDesc || 'We use collected information to respond to inquiries, deliver requested services, improve our website and products, send relevant updates when you opt in, and protect against misuse or unauthorized access. We do not sell your personal information.',
        },
        {
            icon: Lock,
            title: t.sharingTitle || 'Sharing & Disclosure',
            content: t.sharingDesc || 'We may share information with trusted service providers who help us operate our website and business, only as needed to perform their services. We may also disclose information when required by law or to protect the rights, safety, and security of AIOT, our users, or others.',
        },
        {
            icon: Shield,
            title: t.securityTitle || 'Data Security',
            content: t.securityDesc || 'We apply reasonable administrative, technical, and organizational measures to protect personal information against unauthorized access, loss, misuse, or alteration. No method of transmission over the internet is fully secure, so we encourage you to use strong practices when sharing data online.',
        },
        {
            icon: Users,
            title: t.rightsTitle || 'Your Rights',
            content: t.rightsDesc || 'Depending on your location, you may have the right to access, correct, update, or request deletion of your personal information. You may also opt out of marketing communications at any time. To exercise these rights, contact us using the details below.',
        },
        {
            icon: Mail,
            title: t.contactTitle || 'Contact Us',
            content: t.contactDesc || 'If you have questions about this Privacy Policy or how we handle your data, please reach out to us.',
        },
    ];

    return (
        <div className="bg-white" key={language}>
            <div
                className="relative h-72 md:h-80 bg-cover bg-center"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1600&h=600&fit=crop)',
                }}
            >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 text-center">
                    <p className="text-sm font-semibold tracking-[0.22em] uppercase mb-3" style={{ color: colors.logo }}>
                        {t.eyebrow || 'Legal'}
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        {t.title || 'Privacy Policy'}
                    </h1>
                    <p className="text-lg text-white/85 max-w-2xl">
                        {t.subtitle || 'How AIOT collects, uses, and protects your information.'}
                    </p>
                </div>
            </div>

            <div className="relative py-16 md:py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <div
                        className="rounded-2xl p-6 md:p-8 mb-12"
                        style={{
                            backgroundColor: `${colors.logo}0A`,
                            border: `1px solid ${colors.logo}22`,
                        }}
                    >
                        <p className="text-sm font-semibold mb-2" style={{ color: colors.logo }}>
                            {t.lastUpdatedLabel || 'Last updated'}: {t.lastUpdated || 'August 28, 2026'}
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            {t.intro || 'AIOT Consulting ("AIOT", "we", "us", or "our") respects your privacy. This Privacy Policy explains how we collect, use, store, and protect information when you visit our website, contact us, or use our services.'}
                        </p>
                    </div>

                    <div className="space-y-8">
                        {sections.map(({ icon: Icon, title, content }) => (
                            <section
                                key={title}
                                className="rounded-2xl bg-white p-6 md:p-8"
                                style={{
                                    border: `1px solid ${colors.logo}22`,
                                    boxShadow: '0 12px 32px rgba(15, 23, 42, 0.04)',
                                }}
                            >
                                <div className="flex items-start gap-4">
                                    <span
                                        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                                        style={{ backgroundColor: `${colors.logo}14`, color: colors.logo }}
                                    >
                                        <Icon size={20} />
                                    </span>
                                    <div>
                                        <h2 className="text-xl font-bold text-gray-900 mb-3">{title}</h2>
                                        <p className="text-gray-600 leading-relaxed">{content}</p>
                                        {title === (t.contactTitle || 'Contact Us') && (
                                            <div className="mt-4 space-y-1 text-sm text-gray-700">
                                                <p>
                                                    <span className="font-semibold">{navbarTrans.topBar?.email || 'info@aiotcons.com'}</span>
                                                </p>
                                                <p>{navbarTrans.topBar?.phone || '+92 3123456778'}</p>
                                                <p className="text-gray-500">{navbarTrans.topBar?.address || '15/1C, GECHS, PHASE III, PECO ROAD, LAHORE 54100, PUNJAB, PAKISTAN'}</p>
                                                <Link
                                                    to="/contact"
                                                    className="inline-flex items-center gap-1 mt-3 font-semibold hover:opacity-80 transition"
                                                    style={{ color: colors.logo }}
                                                >
                                                    {t.contactCta || 'Go to Contact page'}
                                                    <span aria-hidden>→</span>
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </section>
                        ))}
                    </div>

                    <p className="text-sm text-gray-500 mt-12 leading-relaxed">
                        {t.changes || 'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. Continued use of our website after changes means you accept the revised policy.'}
                    </p>
                </div>
            </div>
        </div>
    );
}
