import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [scale1, setScale1] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerStart = 130;
      const triggerEnd = 530;

      if (scrollPosition < triggerStart) {
        setScale1(1);
      } else if (scrollPosition > triggerEnd) {
        setScale1(0.9); // 最小缩放比例为0.8
      } else {
        const scaleValue = 1 - (scrollPosition - triggerStart) / (triggerEnd - triggerStart) * 0.1;
        setScale1(scaleValue);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="w-screen bg-black flex flex-col justify-center">
      <div className="p-7 flex justify-between">
        <div><img src={`${process.env.PUBLIC_URL}/static/logo/AUDCO.png`} className="w-10" alt="logo"/></div>
        <div className="flex align-middle">
          <img src={`${process.env.PUBLIC_URL}/static/logo/hamburger-icon.svg`} className="w-5" alt="logo"/>
        </div>
      </div>

      <div className="pt-[40px] w-full">
        <div className="ml-[30px] mr-[30px] mb-[56px]">
          <div className="h-1 w-12 bg-white"/>
          <div className="text-[#FADA5E] text-4xl font-bold mt-6">WEB 3.0</div>
          <div className="text-[#FADA5E] text-4xl mt-3">商业生态社区</div>
        </div>

        <div className='transition-transform ease-in-out w-full'
             style={{transform: `scale(${scale1})`, transition: 'transform ease-out'}}>
          <img src={`${process.env.PUBLIC_URL}/static/bitcoin.png`} className="w-full rounded-b-2xl" alt="logo"/>
        </div>
      </div>

      <div className="ml-5 mr-5 mt-3">
        <div className="text-white">
          伴随着加密货币投资市场的高速增长，加密货币作为一种全新的支付方式，正在为商企带来全新的挑战和机遇。
        </div>

        <div className="text-white mt-7">
          1. 为商家导流社区8000+客户
        </div>
        <div className="text-white">
          2. 数字货币支付方案
        </div>
        <div className="text-white">
          Real World Asset数字货币蓝筹投资项目
        </div>
      </div>


      <div className="ml-5 mr-5 mt-24">
        <div className="h-1 w-12 bg-white" />
        <div className="flex items-center mt-3">
          <div className="text-4xl align-middle text-white">DCG公司介绍</div>
          <img src={`${process.env.PUBLIC_URL}/static/logo/DCG.png`} className="w-12 ml-5" alt="DCG LOGO"/>
        </div>
      </div>

      <div className="h-[1000px]">
        11
      </div>
    </div>
  );
}

export default App;