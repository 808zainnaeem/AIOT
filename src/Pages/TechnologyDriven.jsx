import React, { useContext } from 'react';
import { LanguageContext, SUPPORTED_LANGUAGES } from '../Context/LanguageContext'; // Adjust path if needed
import Banner from '../Components/Banner';

const TechnologyDriven = () => {
  const { language, setLanguage, translations } = useContext(LanguageContext);

  const services = translations.services || []; // Fallback to empty array if not loaded

  const iconUrl = 'https://avatars.mds.yandex.net/i?id=ff295868b12482c6484cee594ba962101b530bfe-5226853-images-thumbs&n=13';

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  // For RTL support in Arabic (mirrors layout automatically with Tailwind)
  const isRTL = language === 'ar';

  return (
    <div className="min-h-screen bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Banner - assuming you can pass translations here if needed */}
      <Banner
        upperText={translations.banner.upperText}
        mainText={translations.banner.mainText}
        subText={translations.banner.subText}
        bgImage="https://g.foolcdn.com/editorial/images/816830/gettyimages-1275073399.jpg"
        height="h-48 sm:h-64 md:h-80 lg:h-96"
      />

      {/* Language Switcher (top-right, fixed or sticky as needed) */}
      <div className="absolute top-4 right-4 z-10">
        <select
          value={language}
          onChange={handleLanguageChange}
          className="px-4 py-2 bg-orange-500 text-white rounded-md shadow-lg focus:outline-none"
        >
          {SUPPORTED_LANGUAGES.map((lang) => (
            <option key={lang.code} value={lang.code}>{lang.name}</option>
          ))}
        </select>
      </div>

      {/* Text + Image Section */}
      <section className="py-12 px-6 md:py-20 lg:py-28 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className={`${isRTL ? 'md:order-2' : 'md:order-1'}`}>
            <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold text-gray-900 leading-tight">
              {translations.section1.title}
            </h2>
            <div className="w-20 h-1 bg-orange-500 mt-4 mb-8"></div>
            <h3 className="text-2xl sm:text-3xl md:text-3xl font-semibold text-gray-900 mb-8 leading-tight">
              {translations.section1.subtitle}
            </h3>
            <p className="text-base sm:text-sm text-gray-700 leading-relaxed">
              {translations.section1.description}
            </p>
          </div>
          {/* Right: Image */}
          <div className={`${isRTL ? 'md:order-1' : 'md:order-2'}`}>
            <img
              src="https://dotcommagazine.com/wp-content/uploads/2025/05/4053507-G13-1-1024x576.jpg"
              alt={translations.section1.imageAlt}
              className="w-full h-auto shadow-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold text-gray-900">
            {translations.servicesSection.title} <span className="text-orange-500">DTS</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 mb-12"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={iconUrl}
                  alt={translations.servicesSection.serviceIconAlt}
                  className="w-16 h-16 mb-6 object-contain"
                />
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 text-center leading-tight">
                  {service}
                </h3>
                <div className="w-16 h-1 bg-orange-500 mt-6"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyDriven;