import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop component that scrolls the page to the top whenever the route changes
 * This ensures all pages load from the top instead of maintaining previous scroll position
 */
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Small delay to ensure the page has rendered before scrolling
    const scrollTimer = setTimeout(() => {
      // Try both methods to ensure compatibility across browsers
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant", // Instant for immediate scroll
      });
      
      // Fallback for older browsers
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 0);

    return () => clearTimeout(scrollTimer);
  }, [pathname]);

  return null;
};
