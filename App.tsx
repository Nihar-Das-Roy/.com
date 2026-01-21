
import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { 
  Navbar, 
  Hero, 
  About, 
  Services, 
  Skills, 
  Resume, 
  Portfolio, 
  Contact, 
  Footer, 
  WhatsAppButton 
} from './components/Sections';

const DESKTOP_WIDTH = 1440;

const App: React.FC = () => {
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  const updateScale = () => {
    const windowWidth = window.innerWidth;
    // Calculate scale based on the fixed 1440px design
    const newScale = windowWidth / DESKTOP_WIDTH;
    setScale(newScale);

    // Update the wrapper height to prevent whitespace or cutting
    if (containerRef.current) {
      const height = containerRef.current.scrollHeight;
      setContentHeight(height * newScale);
    }
  };

  useLayoutEffect(() => {
    updateScale();
    window.addEventListener('resize', updateScale);
    // Intersection observer or mutation observer could be used for dynamic height,
    // but for this static-ish portfolio, a small delay or initial measure works.
    const timer = setTimeout(updateScale, 500);
    return () => {
      window.removeEventListener('resize', updateScale);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div 
      className="bg-black text-white relative"
      style={{ 
        height: contentHeight || 'auto',
        overflow: 'hidden'
      }}
    >
      <div 
        ref={containerRef}
        style={{
          width: `${DESKTOP_WIDTH}px`,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      >
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Skills />
        <Resume />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default App;
