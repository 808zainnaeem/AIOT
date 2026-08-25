import React, { useContext } from 'react';
import { LanguageContext } from '../Context/LanguageContext';
import { Colors } from '../Utils/Colors';
import Banner from '../Components/Banner';

const UtilityTransformation = () => {
  const { language, translations } = useContext(LanguageContext);
  const colors = Colors[language] || Colors.en;

  const t = {
    bannerUpper: translations.utility?.bannerUpper || "Technology",
    bannerMain: translations.utility?.bannerMain || "Utility Transformation",
    bannerSub: translations.utility?.bannerSub || "Revolutionizing Utilities with Smart, Scalable, and Sustainable Solutions.",

    sectionTitle: translations.utility?.sectionTitle || "Powering a Smarter Future",
    sectionSubtitle: translations.utility?.sectionSubtitle || "Innovate, Optimize, and Lead with AIOT’s Utility Solutions",
    sectionDescription: translations.utility?.sectionDescription ||
      "At AIOT, we specialize in transforming the utility sector with cutting-edge digital solutions that enhance efficiency, sustainability, and resilience. Our advanced technologies enable utility providers to optimize operations, reduce costs, and deliver smarter energy solutions.",

    servicesTitle: translations.utility?.servicesTitle || "Services",

    services: translations.utility?.services || [
      "Billing & Invoice",
      "Meter Reading & Operations",
      "Grit Asset & Equipment Management",
      "Customer Financials",
      "Energy Data Management"
    ]
  };

  const iconUrl = 'https://avatars.mds.yandex.net/i?id=ff295868b12482c6484cee594ba962101b530bfe-5226853-images-thumbs&n=13';

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.background, color: colors.text }}>
      {/* Banner */}
      <Banner
        upperText={t.bannerUpper}
        mainText={t.bannerMain}
        subText={t.bannerSub}
        bgImage="https://habrastorage.org/webt/pp/pr/un/ppprunckrvwqqfhcgedjwxz9jwu.jpeg"
        height="h-48 sm:h-64 md:h-80 lg:h-96"
        textColor={colors.text}
        accentColor={colors.logo}
      />

      {/* Text + Image Section */}
      <section className="py-12 px-6 md:py-20 lg:py-28 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold leading-tight" style={{ color: colors.text }}>
              {t.sectionTitle}
            </h2>
            <div className="w-20 h-1 mt-4 mb-8" style={{ backgroundColor: colors.logo }}></div>

            <h3 className="text-2xl sm:text-3xl md:text-2xl font-semibold mb-8 leading-tight" style={{ color: colors.text }}>
              {t.sectionSubtitle}
            </h3>

            <p className="text-base sm:text-lg leading-relaxed" style={{ color: colors.text + 'cc' }}>
              {t.sectionDescription}
            </p>
          </div>

          <div className="order-1 md:order-2">
            <img
              src="https://static.tildacdn.pro/tild3136-3630-4533-b234-323632663639/DALLE_2023-11-29_144.png"
              alt="Smart Utility Transformation"
              className="w-full h-auto shadow-2xl object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6" style={{ backgroundColor: colors.background }}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold" style={{ color: colors.text }}>
            {t.servicesTitle}
          </h2>
          <div className="w-24 h-1 mx-auto mt-4 mb-12" style={{ backgroundColor: colors.logo }}></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {t.services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition-all duration-300 border"
                style={{ borderColor: colors.logo + '30' }}
              >
                <img
                  src={iconUrl}
                  alt="Service icon"
                  className="w-16 h-16 mb-6 object-contain"
                  style={{ filter: 'brightness(1) saturate(100%)' }}
                />
                <h3 className="text-lg md:text-xl font-semibold text-center leading-tight" style={{ color: colors.text }}>
                  {service}
                </h3>
                <div className="w-16 h-1 mt-6" style={{ backgroundColor: colors.logo }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default UtilityTransformation;