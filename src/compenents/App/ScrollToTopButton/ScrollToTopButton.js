import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div
      className={`position-fixed bottom-0 end-0  ${isVisible ? 'visible' : 'invisible'}`}
      style={{ opacity: isVisible ? '0.9' : '0', transition: 'opacity 0.6s', zIndex: '2' }}
    >
      <button
        className='btn btn-secondary scroll'
        onClick={scrollToTop}
        style={{
          boxShadow: '5px 5px 5px 5px rgba(3, 100, 24, 0.5)',
          background: 'gray',
          color: 'white',
          transition: 'box-shadow 0.3s'
        }}
        onMouseOver={(e) => e.target.style.boxShadow = '5px 5px 5px 5px rgba(3, 100, 24, 0.9)'}
        onMouseOut={(e) => e.target.style.boxShadow = '5px 5px 5px 5px rgba(3, 100, 24, 0.3)'}
      >
        Revenir en haut
      </button>
    </div>
  );
};

export default ScrollToTopButton;
