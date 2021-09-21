import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

    useEffect(() => {
        if (pathname === "/") {
            window.scrollTo(0, 0);
        } else {
          const scrollPx = window.innerWidth > 992 ? Math.ceil((window.innerWidth * 35 / 100)) : 
          window.innerWidth < 768 ? Math.ceil((window.innerWidth * 50 / 100)) : Math.ceil((window.innerWidth * 40 / 100));
          window.scrollTo({
            top: scrollPx,
            left: 0,
            behavior: 'smooth'
          });
        }
        
      }, [pathname]);
    
      return null;
}