import './App.css';
import HeroMain from "./components/herosection/HeroMain";
import NavbarMain from './components/navbar/NavbarMain';
import StarBackground from './components/herosection/Background/StarBackground';
import AboutMe from "./components/aboutme/AboutMe";
import SkillsSection from "./components/skills/SkillsSection";
// import ContactSection from './components/contact/ContactSection'; 

function App() {
  return (
    <>
      <StarBackground />
      <main>
        <NavbarMain />
        <HeroMain />
        <AboutMe/>
        <SkillsSection />
        
      </main>
    </>
  );
}

export default App;
