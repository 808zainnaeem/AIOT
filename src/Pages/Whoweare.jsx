import React, { useEffect } from 'react';
import { useContext } from 'react';
import { LanguageContext } from '../Context/LanguageContext';
import { Colors } from '../Utils/Colors';
import { Brain, Network, Shield, Lightbulb, Gauge, TrendingUp, Play } from 'lucide-react';

export default function AboutPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { translations, language } = useContext(LanguageContext);
    const t = translations.about; // Shortcut
    const colors = Colors[language] || Colors.en;

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div
                className="relative h-96 bg-cover bg-center"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=800&fit=crop)',
                }}
            >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <h1 className="text-5xl font-bold mb-4">
                        <span style={{ color: colors.logo }}>{t.heroTitle.split(' ')[0]}</span>{' '}
                        {t.heroTitle.split(' ').slice(1).join(' ')}
                    </h1>
                    <p className="text-xl">{t.heroSubtitle}</p>
                </div>
            </div>

            {/* Who We Are Section */}
            <div className="max-w-6xl mx-auto py-16 px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-xl text-gray-700 font-normal mb-8">{t.whoWeAre}</h2>
                    <div className="w-20 h-0.5 bg-[#F65314] mb-12" style={{ backgroundColor: colors.accent }}></div>

                    <div className="flex flex-col lg:flex-row mb-12 gap-8">
                        <div style={{ width: '300px' }}>
                            <h3 className="w-[300px] text-4xl font-bold mb-4 text-gray-800">
                                {t.mainHeading.split('<br />')[0]} <br />
                                <span style={{ color: colors.logo }}>{t.mainHeading.split('<br />')[1]}</span>
                            </h3>
                        </div>

                        <div className="flex flex-col space-y-6 gap-">
                            <p className="text-gray-700 leading-relaxed text-lg">{t.desc1}</p>
                            <p className="text-gray-700 leading-relaxed text-lg">{t.desc2}</p>
                        </div>
                    </div>

                    {/* Features Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-sm">
                            <div className="flex items-start mb-4">
                                <Brain className="w-12 h-12 mr-4" style={{ color: colors.logo }} />
                                <h4 className="text-xl font-bold text-gray-900">{t.feature1Title}</h4>
                            </div>
                            <p className="text-gray-600 text-sm">{t.feature1Desc}</p>
                        </div>

                        <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-sm">
                            <div className="flex items-start mb-4">
                                <Network className="w-12 h-12 mr-4" style={{ color: colors.logo }} />
                                <h4 className="text-xl font-bold text-gray-900">{t.feature2Title}</h4>
                            </div>
                            <p className="text-gray-600 text-sm">{t.feature2Desc}</p>
                        </div>

                        <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-sm">
                            <div className="flex items-start mb-4">
                                <Shield className="w-12 h-12 mr-4" style={{ color: colors.logo }} />
                                <h4 className="text-xl font-bold text-gray-900">{t.feature3Title}</h4>
                            </div>
                            <p className="text-gray-600 text-sm">{t.feature3Desc}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dark Section - Vision & Mission */}
            <div className="relative bg-black text-white py-20 px-8">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{
                        backgroundImage: 'url(https://julienflorkin.com/wp-content/uploads/2023/11/Management-Consulting-2-1568x896.webp)',
                    }}
                ></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-4xl font-bold mb-8">{t.darkSectionTitle}</h2>
                            <p className="text-gray-300 leading-relaxed mb-6">{t.darkSectionDesc1}</p>
                            <p className="text-gray-300 leading-relaxed">{t.darkSectionDesc2}</p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex">
                                <div
                                    className="w-12 h-12 rounded flex items-center justify-center flex-shrink-0 mr-6 mt-1 text-black"
                                    style={{ backgroundColor: colors.logo }}
                                >
                                    <Lightbulb className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-3">{t.visionTitle}</h3>
                                    <p className="text-gray-300 leading-relaxed">{t.visionDesc}</p>
                                </div>
                            </div>

                            <div className="flex">
                                <div
                                    className="w-12 h-12 rounded flex items-center justify-center flex-shrink-0 mr-6 mt-1 text-black"
                                    style={{ backgroundColor: colors.logo }}
                                >
                                    <Gauge className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-3">{t.missionTitle}</h3>
                                    <p className="text-gray-300 leading-relaxed">{t.missionDesc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Smart Solutions Section */}
            <div className="py-20 px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 items-center mb-20">
                        <div className="flex-1">
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                                alt="Team collaboration"
                                className="rounded-lg shadow-lg w-full object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <h2 className="text-xl font-semibold mb-6" style={{ color: colors.accent }}>
                                {t.smartSolutions}
                            </h2>
                            <h3 className="text-3xl font-semibold text-gray-900 mb-6">
                                {t.smartSolutionsHeading}
                            </h3>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-xl font-semibold mb-4" style={{ color: colors.accent }}>
                                {t.transformTitle}
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-8">{t.transformDesc}</p>

                            <div className="p-8 rounded-lg text-white" style={{ backgroundColor: colors.accent }}>
                                <h4 className="text-2xl font-bold mb-6">{t.transformBoxTitle}</h4>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className="text-lg">{t.list1}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className="text-lg">{t.list2}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className="text-lg">{t.list3}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop"
                                alt="Business meeting"
                                className="rounded-lg shadow-lg w-full"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div
                                    className="rounded-full p-6 cursor-pointer transition-colors"
                                    style={{ backgroundColor: colors.accent }}
                                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.hover)}
                                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.accent)}
                                >
                                    <Play className="w-8 h-8 text-white" fill="white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Presence Section */}
            <div className="py-20 px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-2">
                            {t.presenceTitle.split(' ')[0]}{' '}
                            <span style={{ color: colors.accent }}>{t.presenceHighlight}</span>
                        </h2>
                        <div className="w-24 h-0.5 mx-auto mb-6" style={{ backgroundColor: colors.accent }}></div>
                        <h3 className="text-3xl font-semibold text-gray-800">{t.presenceHeading}</h3>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-1 space-y-8">
                            <div className="border-l-4 pl-6" style={{ borderColor: colors.accent }}>
                                <p className="text-lg mb-4" style={{ color: colors.accent }}>
                                    {t.presenceDesc}
                                </p>
                            </div>

                            <div>
                                <h4 className="text-xl font-bold mb-3" style={{ color: colors.accent }}>{t.pakistan}</h4>
                                <h5 className="text-gray-900 font-bold mb-2">{t.companyPakistan}</h5>
                                <p className="mb-3" style={{ color: colors.accent }}>{t.lahore}</p>
                                <p className="text-gray-700 text-sm mb-2">
                                    <span className="font-semibold">{t.address}</span> {t.pakistanAddress || translations.navbar?.topBar?.address}
                                </p>
                                <p className="text-gray-700 text-sm mb-2">
                                    <span className="font-semibold">{t.email}</span> info@aiotcons.com
                                </p>
                                <p className="text-gray-700 text-sm">
                                    <span className="font-semibold">{t.phone}</span> +923 12 345 6778
                                </p>
                            </div>

                           

                            <div>
                                <h4 className="text-xl font-bold mb-3" style={{ color: colors.accent }}>{t.uae}</h4>
                                <h5 className="text-gray-900 font-bold mb-2">{t.companyUAE}</h5>
                                <p className="mb-3" style={{ color: colors.accent }}>{t.dubai}</p>
                                <p className="text-gray-700 text-sm mb-2">
                                    <span className="font-semibold">{t.address}</span> {t.uaeAddress}
                                </p>
                                <p className="text-gray-700 text-sm mb-2">
                                    <span className="font-semibold">{t.email}</span> info@aiotcons.com
                                </p>
                                <p className="text-gray-700 text-sm">
                                    <span className="font-semibold">{t.phone}</span> +971 50 731 2970
                                </p>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-3" style={{ color: colors.accent }}>{t.uk}</h4>
                                <h5 className="text-gray-900 font-bold mb-2">{t.companyUK}</h5>
                                <p className="mb-3" style={{ color: colors.accent }}>{t.glasgow}</p>
                                <p className="text-gray-700 text-sm mb-2">
                                    <span className="font-semibold">{t.address}</span> {t.ukAddress}
                                </p>
                                <p className="text-gray-700 text-sm mb-2">
                                    <span className="font-semibold">{t.email}</span> info@aiotcons.uk
                                </p>
                                <p className="text-gray-700 text-sm">
                                    <span className="font-semibold">{t.phone}</span> +44-7428-417535
                                </p>
                            </div>

                            {/* <div>
                                <h4 className="text-xl font-bold mb-3" style={{ color: colors.accent }}>{t.ksa}</h4>
                                <h5 className="text-gray-900 font-bold mb-2">{t.companyGeneral}</h5>
                            </div>

                            <div>
                                <h4 className="text-xl font-bold mb-3" style={{ color: colors.accent }}>{t.australia}</h4>
                                <h5 className="text-gray-900 font-bold mb-2">{t.companyGeneral}</h5>
                            </div> */}
                        </div>

                        <div className="lg:col-span-2">
                            <div className="bg-gray-100 rounded-lg p-8 sticky top-0">
                                <img
                                    src="/map.jpg"
                                    alt="World Map"
                                    className="w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}