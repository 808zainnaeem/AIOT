import React, { useState, useContext } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { LanguageContext } from '../Context/LanguageContext';
import { Colors } from '../Utils/Colors';

export default function ClientWall() {
    const { translations } = useContext(LanguageContext);
    const t = translations.clientWall;
    const colors = Colors.en; // Ready for Colors.ar if colors differ per language later

    const [currentSlide, setCurrentSlide] = useState(0);

    const clients = [
        [
            { name: 'Big Bird', logo: '/1.jpg' },
            { name: 'Airlink', logo: '/3.jpg' },
            { name: 'Citi', logo: '/4.png' },
            { name: 'Abu Dhabi', logo: '/2.jpg' },
            { name: 'Kansai Paint', logo: '/6.png' },
            { name: 'The Handyman', logo: '/5.png' },
            { name: 'Union Developer', logo: '/7.png' }


        ]
        // Add more slide groups here if needed
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % clients.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + clients.length) % clients.length);
    };

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div
                className="relative h-80 bg-cover bg-center"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&h=600&fit=crop)',
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
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
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

                            <p className="text-gray-600 leading-relaxed">
                                {t.sectionDesc}
                            </p>
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
                            {/* Previous Button */}
                            <button
                                onClick={prevSlide}
                                className="absolute left-0 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
                            >
                                <ChevronLeft className="w-6 h-6 text-gray-600" />
                            </button>

                            {/* Logos Container */}
                            <div className="overflow-hidden w-full max-w-6xl mx-16">
                                <div
                                    className="flex transition-transform duration-500 ease-in-out"
                                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                                >
                                    {clients.map((slideGroup, slideIndex) => (
                                        <div key={slideIndex} className="min-w-full flex justify-center items-center gap-12 py-8">
                                            {slideGroup.map((client, index) => (
                                                <div key={index} className="flex items-center justify-center">
                                                    <img
                                                        src={client.logo}
                                                        alt={client.name}
                                                        className="h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Next Button */}
                            <button
                                onClick={nextSlide}
                                className="absolute right-0 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
                            >
                                <ChevronRight className="w-6 h-6 text-gray-600" />
                            </button>
                        </div>

                        {/* Dots Indicator */}
                        <div className="flex justify-center gap-2 mt-8">
                            {clients.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? 'bg-gray-800' : 'bg-gray-300'
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