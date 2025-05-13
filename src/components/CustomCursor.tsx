
import React, { useEffect, useRef, useState } from 'react';

type CursorState = 'default' | 'pointer' | 'text' | 'nav';

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  const [cursorType, setCursorType] = useState<CursorState>('default');
  
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
    
    // Handle different cursor states based on elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.tagName.toLowerCase() === 'a' || 
          target.tagName.toLowerCase() === 'button' ||
          target.dataset.cursor === 'pointer' ||
          target.closest('[data-cursor="pointer"]')) {
        setCursorType('pointer');
      } else if (target.tagName.toLowerCase() === 'input' || 
                target.tagName.toLowerCase() === 'textarea') {
        setCursorType('text');
      } else {
        setCursorType('default');
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);
  
  return (
    <>
      <div 
        ref={dotRef} 
        className={`cursor-dot ${cursorType === 'pointer' ? 'cursor-dot-active' : ''}`}
      ></div>
      <div 
        ref={outlineRef} 
        className={`cursor-outline ${cursorType === 'pointer' ? 'cursor-outline-active' : ''} 
                   ${cursorType === 'text' ? 'cursor-outline-text' : ''}`}
      ></div>
    </>
  );
};

export default CustomCursor;
