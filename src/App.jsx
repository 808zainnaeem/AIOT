import React, { Suspense, lazy, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { LanguageContext } from './Context/LanguageContext';
import Navbar from './Components/Navbar';
import Seo from './Components/Seo';
import FooterSection from './Components/Footer';
import { REDIRECTS, ROUTES } from './Utils/routes';
import Home from './Pages/Home';
import './App.css';

const About = lazy(() => import('./Pages/Whoweare'));
const Clientwall = lazy(() => import('./Pages/Clientwall'));
const Contact = lazy(() => import('./Pages/Contact'));
const TechnologyDriven = lazy(() => import('./Pages/TechnologyDriven'));
const NextGenration = lazy(() => import('./Pages/NextGenration'));
const SapSolutions = lazy(() => import('./Pages/SapSolutions'));
const UtilityTransformation = lazy(() => import('./Pages/UtilityTransformation'));
const OracleNetsuite = lazy(() => import('./Pages/OracleNetsuite'));
const Consulting = lazy(() => import('./Pages/Consulting'));
const Implementation = lazy(() => import('./Pages/Implementation'));
const ManagedServices = lazy(() => import('./Pages/ManagedServices'));
const PrivacyPolicy = lazy(() => import('./Pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./Pages/TermsOfService'));
const News = lazy(() => import('./Pages/News'));
const Blogs = lazy(() => import('./Pages/Blogs'));
const InnovateWithInsights = lazy(() => import('./Pages/InnovateWithInsights'));

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function RouteFallback() {
  return (
    <div className="min-h-[40vh] flex items-center justify-center" role="status" aria-label="Loading page">
      <span className="sr-only">Loading page</span>
    </div>
  );
}

function App() {
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const splash = document.getElementById('aiot-splash');
    if (splash) splash.remove();
    document.documentElement.style.overflow = '';
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Seo />
      <a href="#main-content" className="sr-only">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Suspense fallback={<RouteFallback />}>
          <Routes key={language}>
            <Route path={ROUTES.home} element={<Home />} />
            <Route path={ROUTES.about} element={<About />} />
            <Route path={ROUTES.clientWall} element={<Clientwall />} />
            <Route path={ROUTES.contact} element={<Contact />} />
            <Route path={ROUTES.technologyDriven} element={<TechnologyDriven />} />
            <Route path={ROUTES.nextGeneration} element={<NextGenration />} />
            <Route path={ROUTES.sapSolutions} element={<SapSolutions />} />
            <Route path={ROUTES.utilityTransformation} element={<UtilityTransformation />} />
            <Route path={ROUTES.oracleNetsuite} element={<OracleNetsuite />} />
            <Route path={ROUTES.consulting} element={<Consulting />} />
            <Route path={ROUTES.implementation} element={<Implementation />} />
            <Route path={ROUTES.managedServices} element={<ManagedServices />} />
            <Route path={ROUTES.privacyPolicy} element={<PrivacyPolicy />} />
            <Route path={ROUTES.termsOfService} element={<TermsOfService />} />
            <Route path={ROUTES.news} element={<News />} />
            <Route path={ROUTES.blogs} element={<Blogs />} />
            <Route path={ROUTES.innovateWithInsights} element={<InnovateWithInsights />} />

            {REDIRECTS.map(({ from, to }) => (
              <Route key={from} path={from} element={<Navigate to={to} replace />} />
            ))}
          </Routes>
        </Suspense>
      </main>
      <FooterSection />
    </Router>
  );
}

export default App;
