import React, { useRef } from 'react';

const imageUrl = process.env.PUBLIC_URL + '/gallery.png';

function Gallery() {
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    if (imgRef.current) {
      imgRef.current.style.transformOrigin = `${x}% ${y}%`;
    }
  };

  const handleMouseLeave = () => {
    if (imgRef.current) {
      imgRef.current.style.transformOrigin = '50% 50%';
    }
  };

  return (
    <div
      style={{
        width: 800,
        height: 400,
        overflow: 'hidden',
        borderRadius: 16,
        boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
        position: 'relative',
        margin: '40px auto',
        background: '#fff',
        cursor: 'zoom-in',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img
        ref={imgRef}
        src={imageUrl}
        alt="gallery"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.3s, transform-origin 0.1s',
        }}
        className="gallery-img"
        onMouseEnter={() => {
          if (imgRef.current) imgRef.current.style.transform = 'scale(2.2)';
        }}
        onMouseLeave={() => {
          if (imgRef.current) imgRef.current.style.transform = 'scale(1)';
        }}
        draggable={false}
      />
    </div>
  );
}

export default Gallery;