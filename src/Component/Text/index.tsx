import React, { CSSProperties, useEffect, useRef, useState } from 'react';

interface TextProps {
  description: string;
  style?: CSSProperties;
  className?: string;
}

const Text = ({ description, style, className }: TextProps) => {
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
    <>
      <div ref={elementRef} className={`${className} text-white ${fadeIn ? 'slide-in-left' : ''}`} style={{...style}}>
        {description}
      </div>
    </>
  );
};

export default Text;