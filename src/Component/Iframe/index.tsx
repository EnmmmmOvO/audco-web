import React from 'react';

interface IframeProps {
  src: string;
  title?: string;
}


const Iframe = ({ src, title } : IframeProps) => {
  return (
    <div className="rounded-xl h-[550px] bg-cover flex-shrink-0">
      <iframe
        src={src}
        className="w-full h-[500px]"
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <div className="text-white flex justify-center mt-5">{title}</div>
    </div>

  );
}

export default Iframe;