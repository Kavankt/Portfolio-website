import './App.css';
import HeroMain from "./components/herosection/HeroMain";
import NavbarMain from './components/navbar/NavbarMain';
import StarBackground from './components/herosection/Background/StarBackground';
import AboutMe from "./components/aboutme/AboutMe";
import SkillsSection from "./components/skills/SkillsSection";
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import { Routes, Route } from 'react-router-dom';
import ProjectDetails from './components/skills/ProjectDetails';

function App() {
  return (
    <>
      {/* Elements that appear on EVERY page */}
      <StarBackground />
      <NavbarMain />
      
      <main>
        {/* Content that appears on the home page (/) */}
        <Routes>
          <Route path="/" element={
            <>
              <HeroMain />
              <AboutMe />
              <SkillsSection />
              <Experience />
              <Contact />
            </>
          } />
          
          {/* Other routes */}
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="*" element={<h2>Page Not Found</h2>} />
        
        </Routes>
      </main>
    </>
  );
}

export default App;