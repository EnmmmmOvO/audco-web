import React from 'react';
import Text from '../Text';

interface CardProps {
  background: string;
  else: string;
  load?: boolean;
}


const Card = (props: CardProps) => {
  return (
    <div>
      <div
        className="rounded-xl h-[500px] w-[330px] min-w-[330px] bg-cover flex-shrink-0"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/static/${props.background})` }}
        />
      {props.load
        ? <div className="text-white flex justify-center mt-5" >{props.else}</div>
        : <Text description={props.else} className="text-white flex justify-center mt-5" />
      }

    </div>
  );
}

export default Card;