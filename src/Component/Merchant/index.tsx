import React from 'react';
import Image from '../Image';

const Merchant = () => {
  const photo = [
    '华阳集运.jpg',
    'Hua Ao.jpg',
    'bohemia.png',
    'molife.png',
    '筠姿.jpg',
    'JK.jpg',
    'tianyd.png',
    '澳华教育.png',
    '盼茶ASHFIELD.jpg',
    'Concept Wrape.jpg',
    '古越龙山.png',
    'WechatIMG244.jpg',
    '1719195115578.png',
    'AG Cafe.jpg',
    'Devrek.png',
    'E.T. Chickens Processors.png',
    'JNZ BUSINESS.jpg',
    'MBR.jpg',
    'Print One.jpg',
    'Rose Co.png',
    'Sushi Culture.jpg',
    'The Yook.png',
    'Top Global.jpg',
    'WSET.jpg',
    '塑眠.jpg',
    '太赫.jpeg',
    '小松龙虾.jpg',
    '张师傅装修.png',
    '梨漾.jpg',
  ]


  return (
    <div className="container">
      <div className="flex flex-wrap gap-3">
        {photo.map((photo, index) => (
          <Image
            key={index}
            src={`${process.env.PUBLIC_URL}/static/merchants/${photo}`}
            className="w-14 h-14 bg-gray-200 overflow-hidden object-cover"
          />
        ))}
      </div>
    </div>
  );
}

export default Merchant;