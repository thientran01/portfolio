
import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const dot = dotRef.current;
    const outline = outlineRef.current;
    
    if (!dot || !outline) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const posX = e.clientX;
      const posY = e.clientY;
      
      // Add a small delay for the outline cursor for more fluid movement
      window.requestAnimationFrame(() => {
        dot.style.left = `${posX}px`;
        dot.style.top = `${posY}px`;
        
        outline.style.left = `${posX}px`;
        outline.style.top = `${posY}px`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <>
      <div ref={dotRef} className="cursor-dot"></div>
      <div ref={outlineRef} className="cursor-outline"></div>
    </>
  );
};

export default CustomCursor;
