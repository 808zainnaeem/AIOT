import React, { useContext } from 'react';
import { ArrowRight, Briefcase, Users, TrendingUp, CheckCircle, Clock, DollarSign } from 'lucide-react';
import { LanguageContext } from '../Context/LanguageContext';
import { Colors } from '../Utils/Colors';
import Banner from '../Components/Banner';

const Outsourcing = () => {
  const { language, translations } = useContext(LanguageContext);
  const colors = Colors[language] || Colors.en;
  const isRTL = language === 'ar';

  const t = {
    bannerMain: translations.outsourcing?.bannerMain || "Outsourcing with AIOT",
    bannerSub: translations.outsourcing?.bannerSub || "Unlock Agility, Embrace Innovation: AIOT, Your Partner in Transformation",

    whyOutsourceLabel: translations.outsourcing?.whyOutsourceLabel || "Why Outsource?",
    introTitle: translations.outsourcing?.introTitle || "Transform Your Business Operations",
    introDesc: translations.outsourcing?.introDesc || "Partner with AIOT to streamline your operations, reduce costs, and access world-class expertise. Our comprehensive outsourcing solutions allow you to focus on what matters most - growing your business.",

    keyBenefitsTitle: translations.outsourcing?.keyBenefitsTitle || "Key Benefits",

    servicesTitle: translations.outsourcing?.servicesTitle || "Our Outsourcing Services",

    learnMore: translations.outsourcing?.learnMore || "Learn More",

    processTitle: translations.outsourcing?.processTitle || "Our Process",

    ctaTitle: translations.outsourcing?.ctaTitle || "Ready to Optimize Your Operations?",
    ctaDesc: translations.outsourcing?.ctaDesc || "Let's discuss how our outsourcing solutions can transform your business",
    ctaButton: translations.outsourcing?.ctaButton || "Request a Quote",

    services: translations.outsourcing?.services || [
      {
        icon: <Briefcase className="w-12 h-12" />,
        title: "Business Process",
        heading: "Efficient Business Process Outsourcing",
        content: "AIOT offers efficient BPO solutions designed to optimize operations and reduce costs. From customer service to HR and finance, we provide scalable support backed by advanced technology and expertise. Focus on growing your business while we manage your non-core functions.",
        imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
        color: 'bg-blue-500',
        benefits: ["Cost Reduction", "24/7 Support", "Scalable Solutions"]
      },
      {
        icon: <Users className="w-12 h-12" />,
        title: "HR Solutions",
        heading: "HR Outsourcing Solutions",
        content: "AIOT provides customized Human Resource Outsourcing (HRO) solutions to optimize HR functions, from talent acquisition to payroll and compliance. Focus on driving strategic growth while we improve efficiency and manage your workforce needs.",
        imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
        color: 'bg-purple-500',
        benefits: ["Talent Acquisition", "Payroll Management", "Compliance"]
      }
    ],

    benefits: translations.outsourcing?.benefits || [
      {
        icon: <DollarSign className="w-8 h-8" />,
        title: "Cost Efficiency",
        description: "Reduce operational costs by up to 60% while maintaining quality"
      },
      {
        icon: <Clock className="w-8 h-8" />,
        title: "Time Savings",
        description: "Free up valuable time to focus on core business activities"
      },
      {
        icon: <TrendingUp className="w-8 h-8" />,
        title: "Scalability",
        description: "Easily scale your operations up or down based on demand"
      },
      {
        icon: <CheckCircle className="w-8 h-8" />,
        title: "Quality Assurance",
        description: "Access to expert teams with proven track records"
      }
    ],

    processSteps: translations.outsourcing?.processSteps || [
      { step: "01", title: "Consultation", desc: "Understanding your needs" },
      { step: "02", title: "Strategy", desc: "Developing custom solutions" },
      { step: "03", title: "Implementation", desc: "Seamless transition" },
      { step: "04", title: "Support", desc: "Ongoing optimization" }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Banner
        mainText={t.bannerMain}
        subText={t.bannerSub}
        bgImage="https://t3.ftcdn.net/jpg/05/29/21/14/360_F_529211458_RujobxovChrIQMtkOG6CqpwE0gxuQH0v.jpg"
        height="h-48 sm:h-64 md:h-80 lg:h-96"
        textColor={colors.text}
        accentColor={colors.logo}
      />

      {/* Introduction Section */}
      <div className="py-20 px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-lg font-semibold mb-4" style={{ color: colors.logo }}>
            {t.whyOutsourceLabel}
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

      {/* Benefits Grid */}
      <div className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">{t.keyBenefitsTitle}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                {/* <div className="text-white w-16 h-16 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: colors.logo }}>
                  {benefit.icon}
                </div> */}
                <h4 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.servicesTitle}
            </h2>
            <div className="w-24 h-1 mx-auto" style={{ backgroundColor: colors.logo }}></div>
          </div>

          <div className="space-y-32">
            {t.services.map((service, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                dir={isRTL ? 'rtl' : 'ltr'}
              >
                {/* Image Side */}
                <div>
                  <div className="relative group">
                    <div className={`absolute inset-0 ${service.color} rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform opacity-20`}></div>
                    <img
                      src={service.imageUrl}
                      alt={service.heading}
                      className="relative rounded-2xl shadow-2xl w-full h-[450px] object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Floating Badge */}
                    <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4">
                      <div className={`${service.color} text-white p-3 rounded-lg`}>
                        {service.icon}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div>
                  <span className="font-semibold text-sm uppercase tracking-wider" style={{ color: colors.logo }}>
                    {service.title}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6 leading-tight">
                    {service.heading}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {service.content}
                  </p>

                  {/* Benefits List */}
                  <div className="space-y-3 mb-8">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <button className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors flex items-center gap-2">
                    {t.learnMore}
                    <ArrowRight className="w-5 h-5" style={{ transform: isRTL ? 'scaleX(-1)' : 'none' }} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.processTitle}</h2>
            <div className="w-24 h-1 mx-auto" style={{ backgroundColor: colors.logo }}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {t.processSteps.map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="text-6xl font-bold mb-4" style={{ color: colors.logo + '33' }}>{item.step}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 -translate-x-1/2" style={{ backgroundColor: colors.logo + '33' }}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-8 text-white" style={{ background: `linear-gradient(to right, ${colors.logo}, ${colors.accent})` }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t.ctaTitle}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t.ctaDesc}
          </p>
          <button className="bg-white hover:bg-gray-100 font-semibold px-10 py-4 rounded-lg transition-colors text-lg flex items-center gap-2 mx-auto" style={{ color: colors.logo }}>
            {t.ctaButton}
            <ArrowRight className="w-5 h-5" style={{ transform: isRTL ? 'scaleX(-1)' : 'none' }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Outsourcing;