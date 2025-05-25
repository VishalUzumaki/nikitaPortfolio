import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const containerStyle = {
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#f7f7fa',
};

const imageStyle = {
  width: '600px',
  height: '800px',
  objectFit: 'cover',
  borderRadius: '16px',
  boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
  position: 'relative',
  zIndex: 2,
};

const rightSectionStyle = {
  width: '800px',
  height: '800px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#fff',
  borderRadius: '16px',
  boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
  marginLeft: '10px',
  position: 'relative',
  zIndex: 1,
  overflow: 'hidden',
};

const videoStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  zIndex: 0,
  opacity: 0.6,
};

const captions = [
  'Excessively Individualistic',
  'Unapologetically Iconic',
  "Don't Be Boring"
];

function MainSection() {
  const imageControls = useAnimation();
  const rightControls = useAnimation();
  const [captionIndex, setCaptionIndex] = React.useState(0);

  useEffect(() => {
    imageControls.start({
      opacity: 1,
      y: 0,
      x: 400,
      transition: { duration: 1.2, ease: 'easeOut' },
    }).then(() => {
      imageControls.start({
        x: '-80px',
        transition: { duration: 0.8, ease: 'easeInOut' },
      });
      rightControls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: 'easeInOut' },
      });
    });
  }, [imageControls, rightControls]);

  useEffect(() => {
    if (rightControls) {
      const interval = setInterval(() => {
        setCaptionIndex((prev) => (prev + 1) % captions.length);
      }, 1800);
      return () => clearInterval(interval);
    }
  }, [rightControls]);

  return (
    <section style={{ ...containerStyle, flexDirection: 'row' }}>
      <motion.img
        src="/main.jpg"
        alt="Center"
        style={imageStyle}
        initial={{ opacity: 0, y: 100, x: 0 }}
        animate={imageControls}
      />
      <motion.div
        style={rightSectionStyle}
        initial={{ opacity: 0, x: 100 }}
        animate={rightControls}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={videoStyle}
          src="/Video.mp4" // Replace with your video path
        />
        <motion.span
          key={captionIndex}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#fff',
            textAlign: 'center',
            width: '100%',
            position: 'relative',
            zIndex: 1,
            textShadow: '0 2px 8px rgba(0,0,0,0.5)',
          }}
        >
          {captions[captionIndex]}
        </motion.span>
      </motion.div>
    </section>
  );
}

export default MainSection;