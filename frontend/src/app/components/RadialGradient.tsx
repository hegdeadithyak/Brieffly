'use client';
import React, { useEffect, useState } from 'react';

const RadialGradient = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const mouseXpercentage = Math.round((event.pageX / windowWidth) * 100);
      const mouseYpercentage = Math.round((event.pageY / windowHeight) * 100);
      setMousePosition({ x: mouseXpercentage, y: mouseYpercentage });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const gradientStyle = {
    backgroundImage: `radial-gradient(at ${mousePosition.x}% ${mousePosition.y}%, #808080, #000000)`,
    position: 'fixed' as 'fixed', // Ensure correct typing
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  };

  return <div style={gradientStyle}></div>;
};

export default RadialGradient;
