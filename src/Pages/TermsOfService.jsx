import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { LanguageContext } from '../Context/LanguageContext';
import { Colors } from '../Utils/Colors';
import { TERMS_META, TERMS_SECTIONS } from '../Utils/termsOfServiceContent';

function SectionBody({ section }) {
    return (
        <div className="space-y-3 text-gray-600 leading-relaxed text-[15px]">
            {(section.paragraphs || []).map((p) => (
                <p key={p.slice(0, 48)}>{p}</p>
            ))}
            {section.list?.length > 0 && (
                <ul className="list-disc pl-5 space-y-1.5">
                    {section.list.map((item) => (
                        <li key={item.slice(0, 48)}>{item}</li>
                    ))}
                </ul>
            )}
            {(section.paragraphsAfter || []).map((p) => (
                <p key={p.slice(0, 48)}>{p}</p>
            ))}
            {section.listAfter?.length > 0 && (
                <ul className="list-disc pl-5 space-y-1.5">
                    {section.listAfter.map((item) => (
                        <li key={item.slice(0, 48)}>{item}</li>
                    ))}
                </ul>
            )}
            {(section.closing || []).map((p) => (
                <p key={p.slice(0, 48)}>{p}</p>
            ))}
        </div>
    );
}

export default function TermsOfService() {
    const { language } = useContext(LanguageContext);
    const colors = Colors[language] || Colors.en;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white" key={language}>
            <div
                className="relative h-72 md:h-80 bg-cover bg-center"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&h=600&fit=crop)',
                }}
            >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 text-center">
                    <p className="text-sm font-semibold tracking-wide mb-3" style={{ color: colors.logo }}>
                        Legal
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{TERMS_META.title}</h1>
                    <p className="text-lg text-white/85 max-w-2xl">{TERMS_META.company}</p>
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
                            Last Updated: {TERMS_META.lastUpdated}
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            These Terms of Service govern your access to and use of the websites, marketplace,
                            software products, applications, APIs, platforms, and related services provided by{' '}
                            {TERMS_META.company}.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {TERMS_SECTIONS.map((section) => (
                            <section
                                key={section.title}
                                className="rounded-2xl bg-white p-6 md:p-8"
                                style={{
                                    border: `1px solid ${colors.logo}22`,
                                    boxShadow: '0 12px 32px rgba(15, 23, 42, 0.04)',
                                }}
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <span
                                        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                                        style={{ backgroundColor: `${colors.logo}14`, color: colors.logo }}
                                    >
                                        <FileText size={20} />
                                    </span>
                                    <h2 className="text-xl font-bold text-gray-900 pt-2">{section.title}</h2>
                                </div>
                                <SectionBody section={section} />
                            </section>
                        ))}
                    </div>

                    <div className="mt-12 rounded-2xl border border-gray-100 bg-gray-50 p-6 text-sm text-gray-600 space-y-1">
                        <p className="font-semibold text-gray-900">{TERMS_META.company}</p>
                        <p>Email: {TERMS_META.email}</p>
                        <p>Website: {TERMS_META.website}</p>
                        <p>Address: {TERMS_META.address}</p>
                        <Link
                            to="/privacy-policy"
                            className="inline-flex items-center gap-1 mt-3 font-semibold hover:opacity-80 transition"
                            style={{ color: colors.logo }}
                        >
                            View Privacy Policy
                            <span aria-hidden>→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
