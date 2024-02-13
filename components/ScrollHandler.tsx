"use client"
import { useEffect, useState } from 'react';

const ScrollHandler: React.FC = () => {
  const [activeLinkId, setActiveLinkId] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      for (let i = 1; i <= 7; i++) {
        const section = document.getElementById(`section${i}`);
        const nextSection = i < 7 ? document.getElementById(`section${i + 1}`) : null;

        if (section && nextSection) {
          const sectionTop = section.offsetTop;
          const nextSectionTop = nextSection.offsetTop;

          if (scrollY >= sectionTop && scrollY < nextSectionTop) {
            setActiveLinkId(i);
            break; // Exit the loop once we find the active link
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
};

export default ScrollHandler;
