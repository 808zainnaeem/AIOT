import React, { useContext } from 'react';
import { LanguageContext } from '../Context/LanguageContext';
import { Colors } from '../Utils/Colors';
import Banner from '../Components/Banner';

const SapSolutions = () => {
  const { language, translations } = useContext(LanguageContext);
  const colors = Colors[language] || Colors.en;

  // Translation fallback
  const t = {
    bannerUpper: translations.sap?.bannerUpper || "Technology",
    bannerMain: translations.sap?.bannerMain || "SAP Solutions for Enterprise",
    bannerSub: translations.sap?.bannerSub || "Transforming Enterprises with Cutting-Edge SAP Solutions.",

    sectionTitle: translations.sap?.sectionTitle || "Powering Enterprise Success",
    sectionSubtitle: translations.sap?.sectionSubtitle || "Optimize, Automate, and Scale Your Business with AIOT’s SAP Expertise.",
    sectionDescription: translations.sap?.sectionDescription ||
      "At AIOT, we provide cutting-edge SAP solutions designed to streamline your business operations, enhance efficiency, and drive sustainable growth. Whether you need ERP integration, cloud transformation, or customized SAP modules, our expert team ensures seamless implementation tailored to your enterprise needs. With AIOT’s SAP solutions, you gain real-time insights, improved decision-making, and a competitive edge in today’s digital landscape. Let us help you transform your enterprise with innovation and reliability.",

    servicesTitle: translations.sap?.servicesTitle || "Services",

    services3: translations.sap?.services3 || [
      'GROW with SAP (S/4HANA Cloud Public Edition)',
      'SAP S/4HANA (On Premise)',
      'RISE with SAP (S/4HANA Cloud Private Edition)',
      'SAP Ariba',
      'SAP Success Factors',
      'SAP OpenText',
      'SAP Analytics Cloud',
      'SAP BTP',
      'SAP Industry Solutions',
      'SAP Integration Services',
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
        bgImage="https://vc8bit.ru/wa-data/public/blog/img/it-infrastructure-banner.jpg"
        height="h-48 sm:h-64 md:h-80 lg:h-96"
        textColor={colors.text}
        accentColor={colors.logo}
      />

      {/* Text + Image Section */}
      <section className="py-12 px-6 md:py-20 lg:py-28 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold leading-tight" style={{ color: colors.text }}>
              {t.sectionTitle}
            </h2>
            <div className="w-20 h-1 mt-4 mb-8" style={{ backgroundColor: colors.logo }}></div>

            <h3 className="text-2xl sm:text-3xl md:text-2xl font-semibold mb-8 leading-tight" style={{ color: colors.text }}>
              {t.sectionSubtitle}
            </h3>

            <p className="text-base sm:text-sm leading-relaxed" style={{ color: colors.text + 'cc' }}>
              {t.sectionDescription}
            </p>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2">
            <img
              src="https://static.tildacdn.com/tild6365-3763-4439-b264-396564623033/3e8ea960694b21d78937.jpg"
              alt="SAP Enterprise Solutions"
              className="w-full h-auto shadow-2xl object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6" style={{ backgroundColor: colors.background }}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold" style={{ color: colors.text }}>
            {t.servicesTitle}
          </h2>
          <div className="w-24 h-1 mx-auto mt-4 mb-12" style={{ backgroundColor: colors.logo }}></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {t.services3.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-orange-200"
                style={{ borderColor: colors.logo + '30' }}
              >
                <img
                  src={iconUrl}
                  alt="SAP Service"
                  className="w-16 h-16 mb-6 object-contain"
                  style={{ filter: `hue-rotate(15deg) saturate(140%)` }}
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

export default SapSolutions;