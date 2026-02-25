import { useState, useEffect, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import IntroScreen from './components/IntroScreen';
import HeroSection from './components/HeroSection';
import OfferSlider from './components/OfferSlider';
import JuiceSection from './components/JuiceSection';
import ShawarmaSection from './components/ShawarmaSection';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);
  const [isIdle, setIsIdle] = useState(false);

  const sections = useMemo(() => [
   { id: 'hero', component: HeroSection },
  { id: 'offers', component: OfferSlider },
    { id: 'juice', component: JuiceSection },
    { id: 'shawarma', component: ShawarmaSection },
  
  ], []);

  useEffect(() => {
    if (showIntro) return;

    const interval = setInterval(() => {
      setCurrentSection((prev) => (prev + 1) % sections.length);
    }, 12000);

    return () => clearInterval(interval);
  }, [showIntro, sections.length]);

  useEffect(() => {
    let timeout: number;

    const handleActivity = () => {
      setIsIdle(false);
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsIdle(true), 5000);
    };

    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keydown', handleActivity);
    handleActivity();

    return () => {
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keydown', handleActivity);
      clearTimeout(timeout);
    };
  }, []);

  const CurrentSectionComponent = sections[currentSection].component;

  return (
    <div className={`min-h-screen overflow-hidden ${isIdle ? 'cursor-none' : ''}`}>
      <AnimatePresence mode="wait">
        {showIntro ? (
          <IntroScreen key="intro" onComplete={() => setShowIntro(false)} />
        ) : (
          <motion.div
            key={sections[currentSection].id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <CurrentSectionComponent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
