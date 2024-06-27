import React, { useEffect, useRef, useState } from 'react';

interface TypographyProps {
  title: string;
  description: string;
}

const Typography = ({ title, description }: TypographyProps) => {
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
      <div ref={elementRef} className={`text-[#e7b973] mt-16 text-xl ${fadeIn ? 'slide-in-left' : ''}`}>
        {title}
      </div>
      <div className={`text-white mt-1 ${fadeIn ? 'slide-in-left' : ''}`}>
        {description}
      </div>
    </>
  );
};

export default Typography;