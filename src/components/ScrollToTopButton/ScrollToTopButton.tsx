import { useEffect, useState } from 'react';

import './index.css';

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState<boolean>(false);

  const checkScrollTopVisibility = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTopVisibility);
    return () => {
      window.removeEventListener('scroll', checkScrollTopVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button className={`scroll-to-top ${showButton ? 'visible' : ''}`} onClick={scrollToTop}>
      SCROLL TO TOP
    </button>
  );
}

export default ScrollToTopButton;
