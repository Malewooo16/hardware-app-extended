"use client"



import React, { useState, useEffect } from 'react';
import  {AiOutlineArrowUp} from "react-icons/ai"

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button onClick={handleScrollToTop} style={{ display: isVisible ? 'block' : 'none' }}  className="scroll-top-btn">
      <AiOutlineArrowUp/>
    </button>
  );
}

export default ScrollToTopButton;
