import React, { useContext } from 'react';
import { ArrowRight } from 'lucide-react';
import { LanguageContext } from '../Context/LanguageContext';
import { Colors } from '../Utils/Colors';
import Banner from '../Components/Banner';

const Consulting = () => {
  const { language, translations } = useContext(LanguageContext);
  const colors = Colors[language] || Colors.en;
  const isRTL = language === 'ar';

  const t = {
    bannerMain: translations.consulting?.bannerMain || "Consulting with AIOT",
    bannerSub: translations.consulting?.bannerSub || "Unlock Agility, Embrace Innovation: AIOT, Your Partner in Transformation",

    expertiseLabel: translations.consulting?.expertiseLabel || "Our Expertise",
    introTitle: translations.consulting?.introTitle || "Consulting Services That Drive Results",
    introDesc: translations.consulting?.introDesc || "Transform your business with our comprehensive consulting solutions. We combine strategic insight, industry expertise, and innovative technology to help you achieve sustainable growth and competitive advantage.",

    learnMore: translations.consulting?.learnMore || "Learn More",

    services: translations.consulting?.services || [
      {
        title: "Business Consulting",
        heading: "Public Sector Transformation and Development",
        content: "With extensive experience in public sector consulting, AIOT offers customized strategies to promote inclusive governance, efficient service delivery, and economic growth. Together, lets create a future of sustainable progress.",
        imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
      },
      {
        title: "Digital Transformation",
        heading: "Comprehensive Human Capital Solutions",
        content: "AIOT specializes in boosting employee engagement, talent development, and organizational culture. From leadership development to succession planning, our Human Capital Solutions foster high performance and ensure long-term success.",
        imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
      },
      {
        title: "Public Sector",
        heading: "Sustainability and Impact Consulting",
        content: "AIOT Sustainability Consulting specializes in ESG-driven services, helping clients achieve their sustainability goals in alignment with global SDGs. Our solutions are designed to support clients in reaching their sustainability ambitions effectively.",
        imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop"
      }
    ],

    stats: translations.consulting?.stats || {
      projects: "500+ Projects Delivered",
      consultants: "50+ Expert Consultants",
      satisfaction: "98% Client Satisfaction",
      industries: "25+ Industries Served"
    },

    ctaTitle: translations.consulting?.ctaTitle || "Ready to Transform Your Business?",
    ctaDesc: translations.consulting?.ctaDesc || "Let's discuss how our consulting services can help you achieve your goals",
    ctaButton: translations.consulting?.ctaButton || "Schedule a Consultation"
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Unchanged Image & Height */}
      <Banner
        mainText={t.bannerMain}
        subText={t.bannerSub}
        bgImage="https://t3.ftcdn.net/jpg/05/29/21/14/360_F_529211458_RujobxovChrIQMtkOG6CqpwE0gxuQH0v.jpg"
        height="h-48 sm:h-64 md:h-80 lg:h-96"
        textColor={colors.text}
        accentColor={colors.logo}
      />

      {/* Introduction Section - Same Gradient & Style */}
      <div className="py-20 px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-lg font-semibold mb-4" style={{ color: colors.logo }}>
            {t.expertiseLabel}
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.introTitle}
          </h3>
          <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: colors.logo }}></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t.introDesc}
          </p>
        </div>
      </div>

      {/* Services Grid - Exact Same Layout & Effects */}
      <div className="py-20 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-32">
          {t.services.map((service, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              dir={isRTL ? 'rtl' : 'ltr'}
            >
              {/* Image Side - Unchanged */}
              <div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform"></div>
                  <img
                    src={service.imageUrl}
                    alt={service.heading}
                    className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Content Side */}
              <div>
                <span className="text-red-500 font-semibold text-sm uppercase tracking-wider">
                  {service.title}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6 leading-tight">
                  {service.heading}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {service.content}
                </p>
                <button className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors flex items-center gap-2">
                  {t.learnMore}
                  <ArrowRight className="w-5 h-5" style={{ transform: isRTL ? 'scaleX(-1)' : 'none' }} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section - Unchanged */}
      <div className="py-20 px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-red-500 mb-2">500+</div>
              <div className="text-gray-300">{t.stats.projects}</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-red-500 mb-2">50+</div>
              <div className="text-gray-300">{t.stats.consultants}</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-red-500 mb-2">98%</div>
              <div className="text-gray-300">{t.stats.satisfaction}</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-red-500 mb-2">25+</div>
              <div className="text-gray-300">{t.stats.industries}</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - Unchanged Gradient */}
      <div className="py-20 px-8 bg-gradient-to-r from-red-500 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t.ctaTitle}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t.ctaDesc}
          </p>
          <button className="bg-white text-red-500 hover:bg-gray-100 font-semibold px-10 py-4 rounded-lg transition-colors text-lg flex items-center gap-2 mx-auto">
            {t.ctaButton}
            <ArrowRight className="w-5 h-5" style={{ transform: isRTL ? 'scaleX(-1)' : 'none' }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Consulting;