import React, { useState, useContext } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { LanguageContext } from '../Context/LanguageContext';
import { Colors } from '../Utils/Colors';

export default function ClientWall() {
    const { translations, language } = useContext(LanguageContext);
    const t = translations.clientWall || {};
    const colors = Colors[language] || Colors.en;
    const isRTL = language === 'ar';

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
            {
                name: 'New Web Work',
                logo: 'https://newwebwork.com/wp-content/uploads/2025/04/cropped-logo_2_1_-removebg-preview.png',
                url: 'https://newwebwork.com/',
            },
            { name: 'LeatherTex', logo: '/18.jpg', url: 'https://www.leathertex.com.pk/' },
        ],
        [
            { name: 'Soloinsight', logo: '/19.png', url: 'https://www.soloinsight.com/' },
            { name: 'Netlex', logo: '/20.png', url: 'https://netlex.se' },
            { name: 'Partner', logo: '/21.png', scale: 1.85 },
            {
                name: 'Al Ghurair Giga',
                logo: '/22.png',
                url: 'https://www.alghurairgiga.com/',
                scale: 1.15,
            },
            {
                name: 'Ghazi Fabrics International',
                logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP3ylNNClV8WOD0kyCzMRWpIAdUQaloa0oQTNDXf-Ltg&s=10',
                url: 'https://ghazifabrics.com/',
            },
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
            <span className="flex h-full w-full items-center justify-center overflow-hidden p-3 sm:p-4">
                <img
                    src={client.logo}
                    alt={client.name}
                    className={`h-full w-full object-contain object-center transition-all duration-300 ${
                        isDark ? '' : 'grayscale hover:grayscale-0'
                    }`}
                    style={
                        client.scale
                            ? { transform: `scale(${client.scale})`, transformOrigin: 'center center' }
                            : undefined
                    }
                />
            </span>
        );

        const sharedClass =
            'flex h-24 w-full max-w-[10.5rem] items-center justify-center overflow-hidden rounded-2xl border transition hover:shadow-md sm:h-28 sm:max-w-[12rem] md:h-32 md:max-w-[13rem]';
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

    const heroRest =
        (t.heroTitle || '').split(' ').slice(1).join(' ') ||
        (t.heroTitle || '').replace(t.heroHighlight || '', '').trim();

    return (
        <div className="overflow-x-hidden bg-white" dir={isRTL ? 'rtl' : 'ltr'} key={language}>
            {/* Hero Section */}
            <div
                className="relative h-52 bg-cover bg-center sm:h-64 md:h-80"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://i.postimg.cc/6569bGpp/Chat-GPT-Image-Sep-14-2026-10-26-11-AM.png)',
                }}
            >
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
                    <h1 className="mb-2 text-3xl font-bold sm:mb-4 sm:text-4xl md:text-5xl">
                        <span style={{ color: colors.logo }}>{t.heroHighlight}</span> {heroRest}
                    </h1>
                    <p className="max-w-2xl text-sm sm:text-lg md:text-xl">{t.heroSubtitle}</p>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-16 grid grid-cols-1 items-center gap-8 sm:mb-24 sm:gap-12 lg:mb-32 lg:grid-cols-2 lg:gap-16">
                        <div>
                            <img
                                src="https://i.postimg.cc/7LktXSqf/Chat-GPT-Image-Sep-14-2026-10-32-47-AM.png"
                                alt="Team collaboration"
                                className="w-full rounded-lg shadow-lg"
                            />
                        </div>

                        <div>
                            <h2 className="mb-4 text-base font-normal text-gray-700 sm:mb-6 sm:text-lg">
                                {t.sectionSubtitle}
                            </h2>

                            <h3 className="mb-4 text-2xl font-bold text-gray-900 sm:mb-6 sm:text-3xl">
                                {t.sectionTitle}
                            </h3>

                            <p className="mb-5 text-sm leading-relaxed text-gray-600 sm:text-base">
                                {t.sectionDesc}
                            </p>
                            {t.sectionDesc2 && (
                                <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                                    {t.sectionDesc2}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Our Clients Section */}
                    <div className="mb-10 text-center sm:mb-16">
                        <h2 className="mb-3 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                            {t.clientsTitle.split(' ')[0]}{' '}
                            <span style={{ color: colors.logo }}>{t.clientsHighlight}</span>
                        </h2>
                        <div
                            className="mx-auto mb-6 h-0.5 w-20 sm:mb-8 sm:w-24"
                            style={{ backgroundColor: colors.logo }}
                        />
                        <p className="mx-auto max-w-3xl text-base text-gray-700 sm:text-xl md:text-2xl">
                            {t.clientsDesc}
                        </p>
                    </div>

                    {/* Client Logos Carousel */}
                    <div className="relative">
                        <div className="flex items-center justify-center">
                            <button
                                type="button"
                                onClick={prevSlide}
                                aria-label="Previous clients"
                                className="absolute start-0 z-10 rounded-full bg-white p-2 shadow-lg transition-colors hover:bg-gray-100 sm:p-3"
                            >
                                <ChevronLeft className="h-5 w-5 text-gray-600 sm:h-6 sm:w-6" />
                            </button>

                            <div className="mx-10 w-full max-w-6xl overflow-hidden sm:mx-14 md:mx-16">
                                <div
                                    className="flex transition-transform duration-500 ease-in-out"
                                    style={{
                                        transform: `translateX(${isRTL ? '' : '-'}${currentSlide * 100}%)`,
                                    }}
                                >
                                    {clients.map((slideGroup, slideIndex) => (
                                        <div
                                            key={slideIndex}
                                            className="grid w-full min-w-full shrink-0 grid-cols-2 place-items-center gap-4 py-6 sm:gap-8 sm:py-8 md:grid-cols-3 md:gap-12"
                                        >
                                            {slideGroup.map((client, index) => (
                                                <LogoCard
                                                    key={`${client.logo}-${index}`}
                                                    client={client}
                                                />
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={nextSlide}
                                aria-label="Next clients"
                                className="absolute end-0 z-10 rounded-full bg-white p-2 shadow-lg transition-colors hover:bg-gray-100 sm:p-3"
                            >
                                <ChevronRight className="h-5 w-5 text-gray-600 sm:h-6 sm:w-6" />
                            </button>
                        </div>

                        <div className="mt-6 flex justify-center gap-2 sm:mt-8">
                            {clients.map((_, index) => (
                                <button
                                    type="button"
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                    className={`h-2.5 w-2.5 rounded-full transition-colors sm:h-3 sm:w-3 ${
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
