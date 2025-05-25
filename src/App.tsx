import React, { useRef, useState } from 'react';
import Headers from './components/Header';
import MainSection from './components/MainSection';
import MidSection from './components/MidSection';
import './App.css';

function App() {
  const [showMid, setShowMid] = useState(false);
  const isScrolling = useRef(false);

  const handleWheel = (e: React.WheelEvent) => {
    if (window.innerWidth <= 600) return; // Disable scroll effect on mobile
    if (isScrolling.current) return;
    isScrolling.current = true;

    if (!showMid && e.deltaY > 0) {
      setShowMid(true);
    } else if (showMid && e.deltaY < 0) {
      setShowMid(false);
    }

    setTimeout(() => {
      isScrolling.current = false;
    }, 800);
  };

  return (
    <div className="app-root" onWheel={handleWheel}>
      <div className="app-container" onWheel={handleWheel}>
        <Headers />
        <div
          className="sections-wrapper"
          style={{
            transform:
              window.innerWidth > 600
                ? showMid
                  ? 'translateY(-100vh)'
                  : 'translateY(0)'
                : undefined,
          }}
        >
          <div className="section">
            <MainSection />
          </div>
          <div className="section">
            <MidSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;