import React from 'react';
import image from './image.png'; 

const Photo = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#0e0e0e' }}>
      <img src={image} alt="My Setup" style={{ maxWidth: '100%', maxHeight: '100%' }} />
    </div>
  );
};

export default Photo;
