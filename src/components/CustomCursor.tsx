
import React, { useEffect, useRef, useState } from 'react';

type CursorState = 'default' | 'pointer' | 'text' | 'nav';

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  const [cursorType, setCursorType] = useState<CursorState>('default');
  const [isHidden, setIsHidden] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  
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
      } else if (target.dataset.cursor === 'nav' ||
                target.closest('[data-cursor="nav"]')) {
        setCursorType('nav');
      } else {
        setCursorType('default');
      }
    };
    
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    
    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);
  
  return (
    <>
      <div 
        ref={dotRef} 
        className={`cursor-dot ${cursorType === 'pointer' ? 'cursor-dot-active' : ''} 
                    ${cursorType === 'nav' ? 'cursor-dot-nav' : ''}
                    ${isClicking ? 'cursor-dot-clicking' : ''}
                    ${isHidden ? 'opacity-0' : 'opacity-100'}`}
      ></div>
      <div 
        ref={outlineRef} 
        className={`cursor-outline ${cursorType === 'pointer' ? 'cursor-outline-active' : ''} 
                   ${cursorType === 'text' ? 'cursor-outline-text' : ''}
                   ${cursorType === 'nav' ? 'cursor-outline-nav' : ''}
                   ${isClicking ? 'cursor-outline-clicking' : ''}
                   ${isHidden ? 'opacity-0' : 'opacity-100'}`}
      ></div>
    </>
  );
};

export default CustomCursor;
