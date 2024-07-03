import React from 'react';

const Merchant = () => {
  const photo = [
    'WechatIMG244.jpg',
  ]


  return (
    <div className="container">
      <div className="flex flex-wrap gap-3 justify-between">
        {photo.map((photo, index) => (
          <div key={index} className="w-14 h-14 bg-gray-200 overflow-hidden">
            <img src={`${process.env.PUBLIC_URL}/static/merchants/${photo}`} alt={`Photo ${index + 1}`}
                 className="w-full h-full object-cover"/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Merchant;