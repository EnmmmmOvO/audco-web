import React, { CSSProperties, useEffect, useRef, useState } from 'react';

interface TitleProps {
  title: string;
  style?: CSSProperties;
  className?: string;
}

const Title = ({ title, style, className }: TitleProps) => {
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
     <div ref={elementRef} className={`${fadeIn ? 'fade-in' : ''} ${className}`} style={style}>
      {title}
    </div>
  );
}

export default Title;