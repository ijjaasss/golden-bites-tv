import { useState, useEffect, useMemo } from 'react';
import IntroSection from './components/IntroSection';
import OfferSlider from './components/OfferSlider';

import LaysShawarma from './components/LaysShawarma';
import VideoPlay from './components/VideoPlay';

type Section = {
  id: string;
  component: React.ReactNode;
};
function App() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const sections = useMemo<Section[]>(() => [
     { id: "intro", component: <IntroSection /> },
    { id: "offers", component: <OfferSlider />},

       { id: "lays", component: <LaysShawarma />},
     {
    id: "grillburger",
    component: <VideoPlay src="/video/burger video.mp4" />,
  },
  
  {
    id: "shawaya mandi",
    component: <VideoPlay src="/video/shawaya mandi.mp4" />,
  },{
    id: "green apple mojito",
    component: <VideoPlay src="/video/MOJITO.mp4" />,
  },{
    id: "alfredo pasta",
    component: <VideoPlay src="/video/Alfredo pasta (1).mp4" />,
  },{
    id: "chilli paneer pizza",
    component: <VideoPlay src="/video/chilli paneer pizza.mp4" />,
  },{
    id: "avil milk",
    component: <VideoPlay src="/video/avil milk.mp4" />,
  }
  ], []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentSectionIndex((prevIndex) =>
          prevIndex === sections.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 300);
    }, 10000);

    return () => clearInterval(interval);
  }, [sections.length]);

  const CurrentComponent = sections[currentSectionIndex].component;

  return (
    <div className="w-screen h-screen overflow-hidden">
      <div
        className={`w-full h-full transition-opacity duration-300 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
      >
       {CurrentComponent}
      </div>
    </div>
  );
}

export default App;
