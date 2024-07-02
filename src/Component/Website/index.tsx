import React, { useEffect, useRef, useState } from 'react';

interface WebsiteProps {
  description: string;
  website: string;
  className?: string;
}

const Website = ({ website, description, className }: WebsiteProps) => {
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div ref={elementRef} className={`${fadeIn ? 'slide-in-left' : ''} text-[#e7b973] ${className}`}>
      <a href={website} target="_blank" rel="noreferrer">{description}: <span className="text-white border-b-2 border-white">{website}</span></a>
    </div>
  );
};

export default Website;