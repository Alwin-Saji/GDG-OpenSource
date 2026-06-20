import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if (!window.location.hash) {
      document.documentElement.style.scrollBehavior = 'auto';
      window.scrollTo(0, 0);
      
      // Delay restoring smooth scroll to ensure the browser
      // applies the instant scroll first
      const timeoutId = setTimeout(() => {
        document.documentElement.style.scrollBehavior = '';
      }, 50);
      
      return () => clearTimeout(timeoutId);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
