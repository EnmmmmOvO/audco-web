import React, { useEffect, useState } from 'react';
import './App.css';
import Line from './Component/Line';
import Card from './Component/Card';
import Typography from './Component/Typography';
import Text from './Component/Text';
import Website from './Component/Website';
import Title from './Component/Title';
import Image from './Component/Image';
import Iframe from './Component/Iframe';

function App() {
  const [scale1, setScale1] = useState(1);
  const [scale2, setScale2] = useState(1);

  const handleScroll = (triggerStart: number, triggerEnd: number, set: (value: (((prevState: number) => number) | number)) => void) => {
    const scrollPosition = window.scrollY;

    if (scrollPosition < triggerStart) {
      set(1);
    } else if (scrollPosition > triggerEnd) {
      set(0.9)
    } else {
      const scaleValue = 1 - (scrollPosition - triggerStart) / (triggerEnd - triggerStart) * 0.1;
      set(scaleValue);
    }
  };

  useEffect(() => {
    const scroll = () => {
      handleScroll(130, 730, setScale1);
      handleScroll(2550, 2950, setScale2);
    }

    window.addEventListener('scroll', scroll);
    return () => {
      window.removeEventListener('scroll', scroll);
    };
  }, []);

  return (
    <>
    {/*<div*/}
    {/*  className="w-screen h-screen fixed top-0 left-0 -z-10"*/}
    {/*  style={{ backgroundImage: `linear-gradient(to bottom, black 60%, transparent 95%), url(${process.env.PUBLIC_URL}/static/bitcoin.png)` }}*/}
    {/*/>*/}
    <div className="w-screen flex bg-black flex-col justify-center">
      <div className="p-7 flex justify-end">
        <div><img src={`${process.env.PUBLIC_URL}/static/logo/AUDCO.png`} className="w-14" alt="logo"/></div>
        {/*<div className="flex align-middle">*/}
        {/*  <img src={`${process.env.PUBLIC_URL}/static/logo/hamburger-icon.svg`} className="w-5" alt="logo"/>*/}
        {/*</div>*/}
      </div>

      <div className="pt-[40px] w-full">
        <div className="ml-[30px] mr-[30px] mb-[56px]">
          <Line />

          <div className="text-[#e7b973] text-4xl font-bold mt-6 slide-in-left">WEB 3.0</div>
          <div className="text-[#e7b973] text-4xl mt-3 slide-in-left">商业生态社区</div>
        </div>

        <div className='transition-transform ease-in-out w-full fade-in'
             style={{transform: `scale(${scale1})`, transition: 'transform ease-out'}}>
          <img
            src={`${process.env.PUBLIC_URL}/static/bitcoin.png`}
            className="w-full rounded-b-2xl" alt="logo"/>
        </div>
      </div>

      <div className="ml-5 mr-5 mt-3">
        <Text
          description="伴随着加密货币投资市场的高速增长，加密货币作为一种全新的支付方式，正在为商企带来全新的挑战和机遇。"/>

        <div className="mt-7">
          <Text description="1. 为商家导流社区8000+客户"/>
          <Text description="2. 数字货币支付方案"/>
          <Text description="Real World Asset数字货币蓝筹投资项目"/>
        </div>
      </div>

      <div className="ml-5 mr-5 mt-24">
        <Line/>
        <div className="flex items-center mt-3">
          <Title title={'DCG公司介绍'} className="text-4xl align-middle text-white" />
          <Image src={`${process.env.PUBLIC_URL}/static/logo/DCG.png`} className="w-12 ml-10"/>
        </div>
      </div>

      <div className="mt-12 flex overflow-x-auto pl-5 pr-5 space-x-6 scrollbar-hide">
        <Card
          logo="logo.png"
          color="#2e42ea"
          title="DAEX GLOBAL"
          background="DAEX-page.png"
          description={['Austrac Registration No: DCE100740685-001', '目前约有47万用戶', '为客户提供合法合规的加密货币交易服务']}
        />

        <Card
          logo="vg.png"
          color="#3a5de7"
          title="Vanguard Global"
          background="vgpage.jpg"
          description={['Vanguard Global', '澳大利亚首支主动型数字基金']}
        />

        <Card
          color="#cf9b5c"
          logo="GDB.png"
          title="Global Digital Bank"
          background="gdb-page.png"
          description={['GDB Wallet', 'AUDCO （Web 3.0 商业生态网络）']}
        />
      </div>

      <div className="ml-5 mr-5 mt-24">
        <Line/>
        <div className="items-center mt-8">
          <Title title={'AUDCO商业生态网络'} className="text-3xl align-middle text-white" />
          <Title title='+数字钱包' className="text-3xl align-middle text-white" />
          <Title title='商业的未来' className={`text-[#e7b973] text-4xl mt-3`} />
        </div>

        <Typography
          title={'极致安全'}
          description={'我们的数字钱包采用最先进的加密技术，确保您的资金和交易信息得到最高级别的保护。'}
        />
        <Typography
          title={'业务增长加速器'}
          description={'AUDCO社区的投资系统吸引了大量用户，无论是澳洲商品或是服务，还是国际生意，都能为您的商业导流，提升竞争力。'}
        />
        <Typography
          title={'无缝接入商业生态'}
          description={'您不仅能与其他企业进行无缝的资金交流，还能享受由此带来的商业机会和合作伙伴关系。'}
        />
        <Typography
          title={'钱包链接DApps'}
          description={'DApps是运行在区块链网络上的应用程序，利用区块链的去中心化和安全特性提供各种服务，包括AUDCO社区的高收益投资系统。'}
        />
      </div>


      <div className="ml-5 mr-5 mt-24">
        <Line/>
        <div className="items-center mt-8 mb-8">
          <div className="mt-3">
            <Title title='介绍' className='text-4xl align-middle text-white' />
            <Image src={`${process.env.PUBLIC_URL}/static/logo/GDB.png`} className="h-10 mt-5"/>
          </div>
        </div>
      </div>

      <div className='transition-transform ease-in-out w-full'
           style={{transform: `scale(${scale2})`, transition: 'transform ease-out'}}>
        <img src={`${process.env.PUBLIC_URL}/static/car.jpg`} className="w-full rounded-2xl" alt="logo"/>
      </div>

      <div className="ml-5 mr-5 mt-5">
        <Text
          description="作为AUDCO社区投资人常用的区块链钱包，GDB钱包和商城正在链接更多商品和购买者。许多澳大利亚商家已经在GDB商城推广品牌和产品，其加密货币支付系统让商家能更自由，安全地管理加密货币资产，并引导购买流量。"
        />

        <Text description="GDB商城目前已经在苹果和谷歌商城正式上线" style={{marginTop: '20px'}}/>
        <Text description="- 下载程序的二维码"/>

        <div className="flex mt-8">
          <div className="flex-1 flex justify-center">
            <Image src={`${process.env.PUBLIC_URL}/static/logo/google-store.svg`} className="w-6" />
          </div>
          <div className="flex-1 flex justify-center">
            <Image src={`${process.env.PUBLIC_URL}/static/logo/app-store.svg`} className="w-6" />
          </div>
        </div>

        <div className="flex mt-5">
          <div className="flex-1 flex justify-center">
            <Image src={`${process.env.PUBLIC_URL}/static/gdb-google.png`} className="w-36" />
          </div>
          <div className="flex-1 flex justify-center">
            <Image src={`${process.env.PUBLIC_URL}/static/gdb-app.png`} className="w-36" />
          </div>
        </div>
      </div>

      <div className="ml-5 mr-5 mt-24">
        <Line/>
        <div className="items-center mt-8 mb-8">
          <div className="mt-3">
            <Title title='如何成为商家？' className='text-4xl align-middle text-[#e7b973]' />
          </div>
        </div>

        <div className="mt-12 flex overflow-x-auto pl-5 pr-5 space-x-6 scrollbar-hide mb-10">
          <Iframe src={'https://www.youtube.com/embed/E2U5vJD4Vew'} title={'GDB 账户注册及使用'}/>
          <Iframe src={'https://www.youtube.com/embed/loCc8RrUKq0'} title={'GDB 商家信息入驻'}/>
        </div>

        <Website
          description={'更多视频及文字教程'}
          website={'https://audco.cloudns.ch/resource/'}
          className="text-xl"
        />
      </div>

      <div className="ml-5 mr-5 mt-24">
        <Line/>
        <div className="items-center mt-8 mb-8">
          <div className="flex justify-between items-center">
            <Title title='加入AUDCO商业生态社区' className='text-4xl align-middle mr-5 text-[#e7b973]'/>
            <Image src={`${process.env.PUBLIC_URL}/static/logo/AUDCO.png`} className="h-20"/>
          </div>
        </div>
        <Text
          description={'加入AUDCO社区，让更多商家、企业、投资人、商品与服务紧密连接在一起。助力您的生意，丰富您的投资类别'}
          style={{marginTop: '20px'}}
        />

        <div className="mt-12 mb-8">
          <Website description={'Website'} website={'https://www.au-dco.com/'}/>
          <Website description={'Twitter'} website={'https://x.com/Web3Audco'}/>
        </div>


        <Text
          description={'加入AUDCO社区，让更多商家、企业、投资人、商品与服务紧密连接在一起。助力您的生意，丰富您的投资类别'}
          style={{ marginTop: '20px' }}
        />

        <Text
          description={'欢迎您加入AUDCO'}
          style={{ marginTop: '40px', color: '#e7b973', fontSize: '24px' }}
        />
         <Text
          description={'WhatsApp 社区'}
          style={{ color: '#e7b973', fontSize: '24px' }}
        />

        <div className="flex items-center justify-around mt-8">
          <div>
            <Image src={`${process.env.PUBLIC_URL}/static/whatsapp.jpg`}/>
          </div>
          <Text description={'让更多的商家，企业，投资人，商品与服务更紧密的链接在一起。'} style={{ marginLeft: 30 }}/>
        </div>

        <div className="text-white mt-10 mb-10 flex w-full justify-center">
          <div>
            © 2024 DCG. All rights reserved
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;