import './App.css';
import Loader from "./components/Loader";
import HeroMain from "./components/herosection/HeroMain";
import NavbarMain from './components/navbar/NavbarMain';
import StarBackground from './components/herosection/Background/StarBackground';
import AboutMe from "./components/aboutme/AboutMe";
import SkillsSection from "./components/skills/SkillsSection";
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';

import { Routes, Route, useLocation } from 'react-router-dom';
import ProjectDetails from './components/skills/ProjectDetails';
import { useEffect, useState } from 'react';
import ProjectTab from './components/skills/ProjectTab';

function App() {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);
  const [loading, setLoading] = useState(true); // ✅ Added loading state

  // Handle scroll-based navbar hiding
  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY < 50);
    };

    if (location.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setShowNavbar(false);
    }
  }, [location]);

  // Loader logic – wait 2.5 seconds before showing rest of content
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <StarBackground />
      {showNavbar && <NavbarMain />}

      <main>
        <Routes>
          <Route
            path="/"
            element={
              loading ? (
                <Loader /> // ✅ Show loader first
              ) : (
                <>
                  <HeroMain />
                  <AboutMe />
                  <SkillsSection />
                  <Experience />
                  <Contact />
                </>
              )
            }
          />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/projects" element={<ProjectTab />} />
          <Route
            path="*"
            element={
              <h2 style={{ color: 'white', textAlign: 'center' }}>Page Not Found</h2>
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
