import React, { useState, useContext } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { LanguageContext } from '../Context/LanguageContext';
import { Colors } from '../Utils/Colors';

export default function ContactUs() {
    const { translations, language } = useContext(LanguageContext);
    const t = translations.contact;
    const colors = Colors[language] || Colors.en;

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
        <div className="bg-white">
            {/* Hero Section */}
            <div
                className="relative h-80 bg-cover bg-center"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&h=600&fit=crop)',
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
                            <p className="text-gray-600 mb-2">+92 316 7676911</p>
                            <p className="text-gray-600">+44 7429 417535</p>
                        </div>

                        <div className="bg-orange-50 p-8 rounded-lg text-center">
                            <div className="flex justify-center mb-4">
                                <div className="rounded-full p-4" style={{ backgroundColor: colors.accent }}>
                                    <Mail className="w-8 h-8 text-white" />
                                </div>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">{t.emailTitle}</h4>
                            <p className="text-gray-600 mb-2">zahid@aiotcons.com</p>
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
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

                        {/* Office Locations */}
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-6">{t.officesTitle}</h3>
                            <div className="space-y-6">
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <div className="flex items-start mb-4">
                                        <MapPin className="w-6 h-6 mr-3 mt-1 flex-shrink-0" style={{ color: colors.accent }} />
                                        <div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-2">{t.pakistanOffice}</h4>
                                            <p className="text-gray-600 mb-2">
                                                <span className="font-semibold">{t.companyPakistan}</span>
                                            </p>
                                            <p className="text-gray-600">
                                                {t.pakistanAddress || translations.navbar?.topBar?.address}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <div className="flex items-start mb-4">
                                        <MapPin className="w-6 h-6 mr-3 mt-1 flex-shrink-0" style={{ color: colors.accent }} />
                                        <div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-2">{t.ukOffice}</h4>
                                            <p className="text-gray-600 mb-2">
                                                <span className="font-semibold">{t.companyUK}</span>
                                            </p>
                                            <p className="text-gray-600">
                                                {t.ukAddress}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <div className="flex items-start mb-4">
                                        <MapPin className="w-6 h-6 mr-3 mt-1 flex-shrink-0" style={{ color: colors.accent }} />
                                        <div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-2">{t.uaeOffice}</h4>
                                            <p className="text-gray-600 mb-2">
                                                <span className="font-semibold">{t.companyUAE}</span>
                                            </p>
                                            <p className="text-gray-600">
                                                {t.uaeAddress}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="mt-8 bg-gray-200 rounded-lg overflow-hidden h-64 flex items-center justify-center">
                                <div className="text-center p-8">
                                    <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                    <p className="text-gray-500">{t.mapView || 'Map View'}</p>
                                    <p className="text-sm text-gray-400">{t.mapCity || 'Lahore, Pakistan'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}