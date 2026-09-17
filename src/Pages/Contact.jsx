import React, { useState, useContext } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { LanguageContext } from '../Context/LanguageContext';
import { Colors } from '../Utils/Colors';

export default function ContactUs() {
    const { translations, language } = useContext(LanguageContext);
    const t = translations.contact || {};
    const colors = Colors[language] || Colors.en;
    const isRTL = language === 'ar';

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className="bg-white" dir={isRTL ? 'rtl' : 'ltr'} key={language}>
            {/* Hero Section */}
            <div
                className="relative h-80 bg-cover bg-center"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://i.postimg.cc/JndqwXCd/Chat-GPT-Image-Sep-14-2026-10-34-41-AM.png)',
                }}
            >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <h1 className="text-5xl font-bold mb-4">
                        <span style={{ color: colors.accent }}>{t.heroHighlight}</span> {t.heroTitle.split(' ')[1]}
                    </h1>
                    <p className="text-xl">{t.heroSubtitle}</p>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="py-20 px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-gray-700 text-lg font-normal mb-3">{t.introTitle}</h2>
                        <div className="w-20 h-0.5 mx-auto mb-6" style={{ backgroundColor: colors.accent }}></div>
                        <h3 className="text-4xl font-bold text-gray-900 mb-6">
                            {t.introHeading}
                        </h3>
                        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            {t.introDesc}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                        {/* Contact Info Cards */}
                        <div className="bg-orange-50 p-8 rounded-lg text-center">
                            <div className="flex justify-center mb-4">
                                <div className="rounded-full p-4" style={{ backgroundColor: colors.accent }}>
                                    <Phone className="w-8 h-8 text-white" />
                                </div>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">{t.phoneTitle}</h4>
                            <p className="text-gray-600 mb-2">+923 12 345 6778</p>
                            <p className="text-gray-600 mb-2"> +971 50 731 2970</p>
                            <p className="text-gray-600 mb-2"> +447 42 841 7535</p>

                        </div>

                        <div className="bg-orange-50 p-8 rounded-lg text-center">
                            <div className="flex justify-center mb-4">
                                <div className="rounded-full p-4" style={{ backgroundColor: colors.accent }}>
                                    <Mail className="w-8 h-8 text-white" />
                                </div>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">{t.emailTitle}</h4>
                            <p className="text-gray-600 mb-2">info@aiotcons.com</p>
                            <p className="text-gray-600">bd@aiotcons.com</p>
                        </div>

                        <div className="bg-orange-50 p-8 rounded-lg text-center">
                            <div className="flex justify-center mb-4">
                                <div className="rounded-full p-4" style={{ backgroundColor: colors.accent }}>
                                    <Clock className="w-8 h-8 text-white" />
                                </div>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">{t.hoursTitle}</h4>
                            <p className="text-gray-600">{t.hours}</p>
                        </div>
                    </div>

                    {/* Contact Form and Offices Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-start">
                        {/* Contact Form */}
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-6">{t.formTitle}</h3>
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                                        {t.nameLabel}
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[colors.accent] focus:outline-none transition-colors"
                                        placeholder={t.namePlaceholder}
                                        style={{ '--tw-ring-color': colors.accent } /* for focus ring if needed */}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                        {t.emailLabel}
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[colors.accent] focus:outline-none transition-colors"
                                        placeholder={t.emailPlaceholder}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                                        {t.phoneLabel}
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[colors.accent] focus:outline-none transition-colors"
                                        placeholder={t.phonePlaceholder}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                                        {t.subjectLabel}
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[colors.accent] focus:outline-none transition-colors"
                                        placeholder={t.subjectPlaceholder}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                                        {t.messageLabel}
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="6"
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[colors.accent] focus:outline-none transition-colors resize-none"
                                        placeholder={t.messagePlaceholder}
                                    />
                                </div>

                                <button
                                    onClick={handleSubmit}
                                    className="text-white font-semibold px-8 py-4 rounded-lg transition-colors flex items-center justify-center gap-2 w-full hover:opacity-90"
                                    style={{ backgroundColor: colors.accent }}
                                >
                                    <Send className="w-5 h-5" />
                                    {t.sendButton}
                                </button>
                            </div>
                        </div>

                        {/* Office Locations Collage */}
                        <div className="lg:sticky lg:top-24 lg:self-start">
                            <h3 className="text-3xl font-bold text-gray-900 mb-6">{t.officesTitle}</h3>

                            <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                                {/* Map / collage backdrop */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{
                                        backgroundImage:
                                            'linear-gradient(rgba(15,23,42,0.58), rgba(15,23,42,0.72)), url(/map.jpg)',
                                    }}
                                />

                                <div className="relative z-10 p-4 sm:p-5">
                                    <div className="flex items-center gap-2 mb-4 text-white">
                                        <MapPin className="w-5 h-5" style={{ color: colors.accent }} />
                                        <p className="text-sm font-semibold tracking-wide uppercase opacity-90">
                                            {t.mapView || 'Map View'} · {t.officesTitle}
                                        </p>
                                    </div>

                                    {/* Collage: 1 large + 2 stacked */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                                        {[
                                            {
                                                title: t.pakistanOffice,
                                                company: t.companyPakistan,
                                                address: t.pakistanAddress || translations.navbar?.topBar?.address,
                                                city: 'Lahore, Pakistan',
                                                image:
                                                    'https://pakgeography.com/wp-content/uploads/2025/12/Pakistan.webp',
                                                featured: true,
                                            },
                                            {
                                                title: t.ukOffice,
                                                company: t.companyUK,
                                                address: t.ukAddress,
                                                city: 'Glasgow, UK',
                                                image:
                                                    'https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=700&h=500&fit=crop',
                                            },
                                            {
                                                title: t.uaeOffice,
                                                company: t.companyUAE,
                                                address: t.uaeAddress,
                                                city: 'Abu Dhabi, UAE',
                                                image:
                                                    'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=700&h=500&fit=crop',
                                            },
                                        ].map((office) => (
                                            <div
                                                key={office.title}
                                                className={`group relative overflow-hidden rounded-xl bg-white shadow-md transition-transform duration-300 hover:-translate-y-1 ${
                                                    office.featured ? 'md:row-span-2 min-h-[280px]' : 'min-h-[170px]'
                                                }`}
                                            >
                                                <img
                                                    src={office.image}
                                                    alt={office.title}
                                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
                                                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                                                    <div className="flex items-center gap-1.5 mb-1">
                                                        <MapPin
                                                            className="w-4 h-4 shrink-0"
                                                            style={{ color: colors.accent }}
                                                        />
                                                        <h4 className="text-sm font-bold leading-tight">
                                                            {office.title}
                                                        </h4>
                                                    </div>
                                                    <p className="text-xs font-medium text-white/90 mb-1">
                                                        {office.company}
                                                    </p>
                                                    <p className="text-[11px] text-white/70 mb-1.5">{office.city}</p>
                                                    <p className="text-xs text-white/80 leading-relaxed line-clamp-2">
                                                        {office.address}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}