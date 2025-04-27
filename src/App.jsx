import './App.css';
import HeroMain from "./components/herosection/HeroMain";
import NavbarMain from './components/navbar/NavbarMain';
import StarBackground from './components/herosection/Background/StarBackground';
import AboutMe from "./components/aboutme/AboutMe";
import SkillsSection from "./components/skills/SkillsSection";
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';

function App() {
  return (
    <>
      <StarBackground />
      <main>
        <NavbarMain />
        <HeroMain />
        <AboutMe/>
        <SkillsSection />
        <Experience />
        <Contact />
        
        
      </main>
    </>
  );
}

export default App;
