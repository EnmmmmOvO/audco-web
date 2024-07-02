import React, { useEffect, useRef, useState } from 'react';

interface ImageProps {
  src: string;
  className?: string;
  onClick?: () => void;
}

const Image = ({ src, className, onClick }: ImageProps) => {
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

  return <img src={src} className={`${fadeIn ? 'slide-in-left' : ''} ${className}`} alt="logo" ref={elementRef} onClick={onClick}/>;
}

export default Image;