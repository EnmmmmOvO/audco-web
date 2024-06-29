import React from 'react';
import Text from '../Text';

interface CardProps {
  logo: string;
  title: string;
  color: string;
  background: string;
  description: string[];
  else?: string;
}


const Card = (props: CardProps) => {
  return (
    <div>
    <div
      className="rounded-xl h-[500px] w-[330px] min-w-[330px] bg-cover flex-shrink-0"
      style={{
        backgroundImage: `linear-gradient(to bottom, white 40%, transparent 80%), url(${process.env.PUBLIC_URL}/static/${props.background})`
      }}
    >
      <div className="ml-4 mr-4 mt-5">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold pt-5 pb-5 pr-2" style={{
            color: props.color
          }}>{props.title}</div>
          <img src={`${process.env.PUBLIC_URL}/static/logo/${props.logo}`} className="h-10" alt="DCG LOGO"/>
        </div>
        <ul className="list-disc list-inside">
          {props.description.map((item, index) => (
            <li className="mt-0.5" key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
    {props.else && <Text description={props.else} className="text-white flex justify-center mt-5" />}
    </div>
  );
}

export default Card;