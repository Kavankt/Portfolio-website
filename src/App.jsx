import './App.css';
import HeroMain from "./components/herosection/HeroMain";
import NavbarMain from './components/navbar/NavbarMain';
import StarBackground from './components/herosection/Background/StarBackground';

function App() {
  return (
    <>
      <StarBackground />
      <main>
        <NavbarMain />
        <HeroMain />
      </main>
    </>
  );
}

export default App;
