import {useState, useEffect} from 'react'

export const useWindowScroll = () => {
    const [scroll, setScroll] = useState({
      position: 0,
      direction: ''
    });

    useEffect(() => {
      const updatePosition = () => setScroll((prev) => ({
        position: window.scrollY,
        direction: prev.position > window.scrollY ? 'up' : 'down'
      }));
      
      window.addEventListener("scroll", updatePosition);

      return () => window.removeEventListener("scroll", updatePosition);
    }, []);
  
    return {scroll};
  }