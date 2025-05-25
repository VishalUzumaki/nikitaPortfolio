import React, { useState, useEffect } from 'react';
import AnimatedCaption from "./AnimatedCaption";

const images = [
  '/clothes1.jpeg',
  '/clothes2.jpeg',
  '/clothes3.jpeg',
  '/clothes4.jpeg',
  '/clothes5.jpeg',
];

const containerStyle = {
  display: 'flex',
  width: '100vw',
  height: '600px',
  background: '#f7f7fa',
  boxSizing: 'border-box',
  padding: '40px 0',
};

const leftStyle = {
  width: '45%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingLeft: '60px',
  paddingRight: '30px',
};

const middleStyle = {
  width: '15%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  padding: 0,
};

const cubeStyle = {
  width: '80px',
  height: '80px',
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
  cursor: 'pointer',
  border: '2px solid transparent',
  transition: 'border 0.2s',
  background: '#fff',
};

const rightStyle = {
  width: '40%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 10px',
};

const enlargedStyle = {
  width: '480px',
  height: '480px',
  objectFit: 'cover',
  borderRadius: '24px',
  boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
  background: '#fff',
  transition: 'box-shadow 0.3s',
};

function MidSection() {
  const [hovered, setHovered] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) {
    // Stack vertically on mobile
    return (
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100vw',
          minHeight: 500,
          background: '#f7f7fa',
          boxSizing: 'border-box',
          padding: '24px 0',
          alignItems: 'center',
        }}
      >
        <div style={{ width: '95vw', display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
          <AnimatedCaption />
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          gap: 16,
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 8,
            marginBottom: 16,
          }}>
            {images.map((img, idx) => (
              <div
                key={img}
                style={{
                  ...cubeStyle,
                  width: 56,
                  height: 56,
                  border: hovered === idx ? '2px solid #007aff' : cubeStyle.border,
                }}
                onMouseEnter={() => setHovered(idx)}
                onTouchStart={() => setHovered(idx)}
              >
                <img
                  src={process.env.PUBLIC_URL + img}
                  alt={`cube-${idx}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  draggable={false}
                />
              </div>
            ))}
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
          }}>
            <img
              src={process.env.PUBLIC_URL + images[hovered]}
              alt="enlarged"
              style={{
                ...enlargedStyle,
                width: '90vw',
                height: 'auto',
                maxHeight: 320,
                borderRadius: 16,
              }}
              draggable={false}
            />
          </div>
        </div>
      </section>
    );
  }

  // Desktop layout
  return (
    <section style={containerStyle}>
      <div style={leftStyle}>
        <AnimatedCaption />
      </div>
      <div style={middleStyle}>
        {images.map((img, idx) => (
          <div
            key={img}
            style={{
              ...cubeStyle,
              border: hovered === idx ? '2px solid #007aff' : cubeStyle.border,
            }}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(hovered)}
          >
            <img
              src={process.env.PUBLIC_URL + img}
              alt={`cube-${idx}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              draggable={false}
            />
          </div>
        ))}
      </div>
      <div style={rightStyle}>
        <img
          src={process.env.PUBLIC_URL + images[hovered]}
          alt="enlarged"
          style={enlargedStyle}
          draggable={false}
        />
      </div>
    </section>
  );
}

export default MidSection;