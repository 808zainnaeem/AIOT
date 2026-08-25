import React, { useContext } from 'react';
import { LanguageContext } from '../Context/LanguageContext';
import { Colors } from '../Utils/Colors';
import Banner from '../Components/Banner';

const NextGenration = () => {
  const { language, translations } = useContext(LanguageContext);

  // Get colors based on current language
  const colors = Colors[language] || Colors.en;

  // Translation keys (add these to your en.json and ar.json)
  const t = {
    upperText: translations.emergingTech?.bannerUpper || "Innovation",
    mainText: translations.emergingTech?.bannerMain || "Emerging Technology Solutions",
    subText: translations.emergingTech?.bannerSub || "Driving Innovation and Shaping the Future of Business",

    sectionTitle: translations.emergingTech?.sectionTitle || "Unlocking the Future of Innovation",
    sectionSubtitle: translations.emergingTech?.sectionSubtitle || "Stay Ahead with Cutting-Edge Solutions that Transform Your Business",
    sectionDescription: translations.emergingTech?.sectionDescription ||
      "Emerging technologies are reshaping industries, and we're here to help your business stay at the forefront. " +
      "By harnessing advancements in AI, IoT, blockchain, and more, we deliver solutions that drive innovation, " +
      "enhance efficiency, and create new growth opportunities. Our expertise empowers organizations to leverage " +
      "these technologies for a competitive edge in an ever-evolving market.",

    servicesTitle: translations.emergingTech?.servicesTitle || "Services in",
    servicesHighlight: translations.emergingTech?.servicesHighlight || "ETS",

    services2: translations.emergingTech?.services2 || [
      'IT Strategy & Roadmap Development',
      'Micro Services Architecture',
      'End-To-End Implementation Support',
      'IT Standards Consulting',
      'DevOps',
      'License Procurement & Management',
      'IT Organization Consulting',
      'App Dev With Low-Code/No-Code',
      'IT Assessment',
      'Data Engineering & Warehousing',
      'JIRA Software Implementation',
      'AS-IS Assessment',
      'Data Visualization & Storytelling',
      'JIRA Service Management',
      'GAP Assessment'
    ]
  };

  const iconUrl = 'https://avatars.mds.yandex.net/i?id=ff295868b12482c6484cee594ba962101b530bfe-5226853-images-thumbs&n=13';

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.background, color: colors.text }}>
      {/* Banner with dynamic colors */}
      <Banner
        upperText={t.upperText}
        mainText={t.mainText}
        subText={t.subText}
        bgImage="https://qtxasset.com/quartz/qcloud5/media/image/Featured%20Images%20-%20Fierce%20Healthcare%20-%202024-07-03T161633.287.jpg?VersionId=E304MfeoNscTOlNGdq7ZKUCY11pborLW"
        height="h-48 sm:h-64 md:h-80 lg:h-96"
        textColor={colors.text}
        accentColor={colors.accent}
      />

      {/* Text + Image Section */}
      <section className="py-12 px-6 md:py-20 lg:py-28 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="order-2 md:order-1">
            <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold leading-tight" style={{ color: colors.text }}>
              {t.sectionTitle}
            </h2>
            <div className="w-20 h-1 mt-4 mb-8" style={{ backgroundColor: colors.logo }}></div>

            <h3 className="text-2xl sm:text-3xl md:text-2xl font-semibold mb-8 leading-tight" style={{ color: colors.text }}>
              {t.sectionSubtitle}
            </h3>

            <p className="text-base sm:text-sm leading-relaxed" style={{ color: colors.text }}>
              {t.sectionDescription}
            </p>
          </div>

          {/* Right: Image */}
          <div className="order-1 md:order-2">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/050/599/643/small_2x/futuristic-microchip-tech-illustrating-advanced-electronics-concepts-video.jpg"
              alt="Cutting-edge technology visualization"
              className="w-full h-auto shadow-2xl object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6" style={{ backgroundColor: colors.background }}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold" style={{ color: colors.text }}>
            {t.servicesTitle} <span style={{ color: colors.logo }}>{t.servicesHighlight}</span>
          </h2>
          <div className="w-24 h-1 mx-auto mt-4 mb-12" style={{ backgroundColor: colors.logo }}></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {t.services2.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300 border"
                style={{ borderColor: colors.hover + '40' }}
              >
                <img
                  src={iconUrl}
                  alt="Service icon"
                  className="w-16 h-16 mb-6 object-contain filter brightness-100"
                  style={{ filter: `brightness(1) hue-rotate(0deg) saturate(100%)` }}
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

export default NextGenration;