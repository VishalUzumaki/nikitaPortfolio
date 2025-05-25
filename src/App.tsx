import React, { useRef, useState } from 'react';
import Headers from './components/Header';
import MainSection from './components/MainSection';
import MidSection from './components/MidSection';

function App() {
  const [showMid, setShowMid] = useState(false);
  const isScrolling = useRef(false);

  // Handle scroll to switch sections
  const handleWheel = (e: React.WheelEvent) => {
    if (isScrolling.current) return;
    isScrolling.current = true;

    if (!showMid && e.deltaY > 0) {
      setShowMid(true);
    } else if (showMid && e.deltaY < 0) {
      setShowMid(false);
    }

    setTimeout(() => {
      isScrolling.current = false;
    }, 800); // debounce to prevent rapid toggling
  };

  return (
      <div
  style={{
    height: '100vh',
    overflow: 'hidden',
    background: 'linear-gradient(120deg, #e0eaff 0%, #fff 30%, #ffb6e6 60%, #222 100%)',
  }}
  onWheel={handleWheel}
>
    <div
      style={{ height: '100vh', overflow: 'hidden' }}
      onWheel={handleWheel}
    >
      <Headers />
      <div
        style={{
          transition: 'transform 0.7s cubic-bezier(0.4,0,0.2,1)',
          transform: showMid ? 'translateY(-100vh)' : 'translateY(0)',
        }}
      >
        <div style={{ height: '100vh' }}>
          <MainSection />
        </div>
        <div style={{ height: '100vh' }}>
          <MidSection />
        </div>
      </div>
    </div>
        </div>
  );
}

export default App;