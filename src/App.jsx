import './App.css';
import HeroMain from "./components/herosection/HeroMain";
import NavbarMain from './components/navbar/NavbarMain';
import StarBackground from './components/herosection/Background/StarBackground';
import AboutMe from "./components/aboutme/AboutMe";

function App() {
  return (
    <>
      <StarBackground />
      <main>
        <NavbarMain />
        <HeroMain />
        <AboutMe/>
      </main>
    </>
  );
}

export default App;
