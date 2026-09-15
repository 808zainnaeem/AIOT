import React, { useState, useContext } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { LanguageContext } from '../Context/LanguageContext';
import { Colors } from '../Utils/Colors';

export default function ClientWall() {
    const { translations } = useContext(LanguageContext);
    const t = translations.clientWall;
    const colors = Colors.en;

    const [currentSlide, setCurrentSlide] = useState(0);

    const clients = [
        [
            { name: 'Big Bird', logo: '/1.jpg', url: 'https://bigbirdfoods.com/' },
            { name: 'Airlink', logo: '/3.jpg', url: 'https://www.airlinkcommunication.com/index.php' },
            { name: 'Citi Pharma', logo: '/4.png', url: 'https://www.citipharma.com.pk/' },
            { name: 'Kansai Paint', logo: '/6.png', url: 'https://kpme.com/pakistan/' },
            { name: 'The Handyman', logo: '/5.png', url: 'https://thehandyman.com.pk/' },
            { name: 'Partner', logo: '/12.jpeg' },
        ],
        [
            { name: 'Union Developer', logo: '/7.png', url: 'https://www.uniondevelopers.com/' },
            { name: 'Samad Group of Industries', logo: '/8.png', url: 'https://www.samadgroup.com/' },
            { name: 'Swift Global Logistics', logo: '/9.jpeg' },
            { name: 'Interface Marketing Consultancy', logo: '/10.png' },
            { name: 'Partner', logo: '/11.jpeg' },
            { name: 'SuperIBS', logo: '/13.png', url: 'https://superibs.com/' },
        ],
        [
            { name: 'Super International IT Services', logo: '/14.png' },
            { name: 'Super International Travel and Tourism', logo: '/15.png' },
            { name: 'Leader Properties', logo: '/16.jpeg' },
            { name: 'Spring Fields Preschools', logo: '/17.webp', url: 'https://springfieldspreschools.com/' },
            { name: 'New Web Work', logo: 'https://newwebwork.com/wp-content/uploads/2025/04/cropped-logo_2_1_-removebg-preview.png', url: 'https://newwebwork.com/', },
        ],
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % clients.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + clients.length) % clients.length);
    };

    const LogoCard = ({ client }) => {
        const isDark = Boolean(client.bg);
        const content = (
            <span className="flex h-28 w-40 sm:h-32 sm:w-44 items-center justify-center p-3">
                <img
                    src={client.logo}
                    alt={client.name}
                    className={`max-h-full max-w-full object-contain transition-all duration-300 ${
                        isDark ? '' : 'grayscale hover:grayscale-0'
                    }`}
                />
            </span>
        );

        const sharedClass =
            'flex items-center justify-center rounded-2xl border transition hover:shadow-md';
        const sharedStyle = {
            backgroundColor: client.bg || '#ffffff',
            borderColor: isDark ? '#000000' : '#f3f4f6',
        };

        if (client.url) {
            return (
                <a
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={client.name}
                    className={sharedClass}
                    style={sharedStyle}
                >
                    {content}
                </a>
            );
        }

        return (
            <div className={sharedClass} style={sharedStyle}>
                {content}
            </div>
        );
    };

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div
                className="relative h-80 bg-cover bg-center"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://i.postimg.cc/6569bGpp/Chat-GPT-Image-Sep-14-2026-10-26-11-AM.png)',
                }}
            >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <h1 className="text-5xl font-bold mb-4">
                        <span style={{ color: colors.logo }}>{t.heroHighlight}</span> {t.heroTitle.split(' ')[1]}
                    </h1>
                    <p className="text-xl">{t.heroSubtitle}</p>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="py-20 px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                        {/* Left side - Image */}
                        <div>
                            <img
                                src="https://i.postimg.cc/7LktXSqf/Chat-GPT-Image-Sep-14-2026-10-32-47-AM.png"
                                alt="Team collaboration"
                                className="rounded-lg shadow-lg w-full"
                            />
                        </div>

                        {/* Right side - Content */}
                        <div>
                            <h2 className="text-gray-700 text-lg font-normal mb-6">
                                {t.sectionSubtitle}
                            </h2>

                            <h3 className="text-3xl font-bold text-gray-900 mb-6">
                                {t.sectionTitle}
                            </h3>

                            <p className="text-gray-600 leading-relaxed mb-5">
                                {t.sectionDesc}
                            </p>
                            {t.sectionDesc2 && (
                                <p className="text-gray-600 leading-relaxed">
                                    {t.sectionDesc2}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Our Clients Section */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-3">
                            {t.clientsTitle.split(' ')[0]} <span style={{ color: colors.logo }}>{t.clientsHighlight}</span>
                        </h2>
                        <div className="w-24 h-0.5 mx-auto mb-8" style={{ backgroundColor: colors.logo }}></div>
                        <p className="text-2xl text-gray-700">
                            {t.clientsDesc}
                        </p>
                    </div>

                    {/* Client Logos Carousel */}
                    <div className="relative">
                        <div className="flex items-center justify-center">
                            <button
                                type="button"
                                onClick={prevSlide}
                                className="absolute left-0 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
                            >
                                <ChevronLeft className="w-6 h-6 text-gray-600" />
                            </button>

                            <div className="overflow-hidden w-full max-w-6xl mx-16">
                                <div
                                    className="flex transition-transform duration-500 ease-in-out"
                                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                                >
                                    {clients.map((slideGroup, slideIndex) => (
                                        <div
                                            key={slideIndex}
                                            className="min-w-full grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-12 py-8 place-items-center"
                                        >
                                            {slideGroup.map((client, index) => (
                                                <LogoCard key={`${client.logo}-${index}`} client={client} />
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={nextSlide}
                                className="absolute right-0 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
                            >
                                <ChevronRight className="w-6 h-6 text-gray-600" />
                            </button>
                        </div>

                        <div className="flex justify-center gap-2 mt-8">
                            {clients.map((_, index) => (
                                <button
                                    type="button"
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-colors ${
                                        currentSlide === index ? 'bg-gray-800' : 'bg-gray-300'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
