import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const headerStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: '#000',
  color: '#fff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const titleStyle = {
  fontSize: '5rem',
  fontWeight: 'bold',
  color: '#fff',
  letterSpacing: '0.2em',
};

function Header() {
  const controls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      controls.start({ y: '-100vh', opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } });
    }, 1200);
    return () => clearTimeout(timer);
  }, [controls]);

  return (
    <motion.header
      style={headerStyle}
      initial={{ y: 0, opacity: 1 }}
      animate={controls}
    >
      <span style={titleStyle}>NIKITA</span>
    </motion.header>
  );
}

export default Header;