import React, { useEffect, useRef, useState } from 'react';

interface WebsiteProps {
  description: string;
  website: string;
}

const Website = ({ website, description }: WebsiteProps) => {
  const [fadeIn, setFadeIn] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFadeIn(true);
          // observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div ref={elementRef} className={`${fadeIn ? 'slide-in-left' : ''} text-[#e7b973]`}>
      <a href={website} target="_blank" rel="noreferrer">{description}: <span className="text-white">{website}</span></a>
    </div>
  );
};

export default Website;