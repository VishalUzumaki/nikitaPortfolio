import React from 'react';
import { motion } from 'framer-motion';

const headerStyle = {
  width: '100%',
  background: 'linear-gradient(90deg, #b3e0ff 0%, #fff 50%, #ffb6c1 100%)',
  color: '#000',
  padding: '20px 0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const titleStyle = {
  fontSize: '2rem',
  fontWeight: 'bold',
  color: '#000',
};

function Header() {
  return (
    <motion.header
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={headerStyle}
    >
      <span style={titleStyle}>NIKITA</span>
    </motion.header>
  );
}

export default Header;