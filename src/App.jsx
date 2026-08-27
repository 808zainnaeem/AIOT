import React, { useContext, useEffect, useState } from 'react';
import { LanguageContext } from './Context/LanguageContext';
import { Colors } from './Utils/Colors';
import Navbar from './Components/Navbar';
import PageLoader from './Components/PageLoader';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'; // Import the Home component
import About from './Pages/Whoweare'; // Import the About component
import Clientwall from './Pages/Clientwall'; // Import the Clientwall component
import Contact from './Pages/Contact'; // Import the Contact component
import './App.css'
import FooterSection from './Components/Footer';
import TechnologyDriven from './Pages/TechnologyDriven';
import NextGenration from './Pages/NextGenration';
import SapSolutions from './Pages/SapSolutions';
import UtilityTransformation from './Pages/UtilityTransformation';
import OracleNetsuite from './Pages/OracleNetsuite';
import Consulting from './Pages/Consulting';
import Outsourcing from './Pages/Outsourcing';
function App() {
  const { language, setLanguage, translations } = useContext(LanguageContext);
  const color = Colors[language] || Colors.en; // Get color settings based on selected language
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const splash = document.getElementById('aiot-splash');
    if (splash) splash.remove();

    const started = Date.now();
    const minMs = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 400 : 2400;
    let done = false;

    const finish = () => {
      if (done) return;
      done = true;
      const remaining = Math.max(0, minMs - (Date.now() - started));
      window.setTimeout(() => setLoading(false), remaining);
    };

    if (document.readyState === 'complete') {
      finish();
    } else {
      window.addEventListener('load', finish);
    }

    const fallback = window.setTimeout(finish, 3500);
    document.documentElement.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('load', finish);
      window.clearTimeout(fallback);
      document.documentElement.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = loading ? 'hidden' : '';
  }, [loading]);

  return (
    <Router>
      <PageLoader visible={loading} />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/clientwall" element={<Clientwall />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/technology-driven" element={<TechnologyDriven />} />
        <Route exact path="/next-genration" element={<NextGenration />} />
        <Route exact path="/sap-solutions" element={<SapSolutions />} />
        <Route exact path="/utility-transformation" element={<UtilityTransformation />} />
        <Route exact path="/oracle-netsuite" element={<OracleNetsuite />} />
        <Route exact path="/consulting" element={<Consulting />} />
        <Route exact path="/outsoursing" element={<Outsourcing />} />
      </Routes>
      <FooterSection />
    </Router>
  );
}

export default App;
