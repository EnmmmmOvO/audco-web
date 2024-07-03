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
import Header from './Component/Header';
import LangContext from './Context';
import Merchant from './Component/Merchant';

function App() {
  const [scale1, setScale1] = useState(1);
  const [scale2, setScale2] = useState(1);
  const [lang, setLang] = useState('zh');
  const [content, setContent] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    import (`./Content/${lang}.json`)
      .then(data => setContent(data.default))
      .catch(_error => setLang('zh'));
  }, [lang]);

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
    setLang(navigator.language.includes('en') ? 'en' : 'zh');

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
    <LangContext.Provider value={{ lang, setLang, content }}>
      <div
        className="w-screen min-h-screen fixed bottom-0 top-0 -z-10 overflow-hidden"
        style={{ backgroundImage: `linear-gradient(to bottom, black 30%, transparent 50%), url(${process.env.PUBLIC_URL}/static/34.jpg)`, overflow: 'hidden' }}
        />
      <Header />
      <div className="w-screen flex flex-col justify-center pt-28 box-border overflow-hidden">
        <div className="w-full mt-10">
          <div className="ml-[30px] mr-[30px] mb-[56px]">
            <div className="text-[#e7b973] text-5xl font-bold mb-8 slide-in-left">AUDCO</div>
            <Line/>
            <div className="text-[#e7b973] text-4xl font-bold mt-6 slide-in-left">WEB 3.0</div>
            <div className="text-[#e7b973] text-4xl mt-3 slide-in-left">{content.bec}</div>
          </div>

          <div className='transition-transform ease-in-out w-full fade-in'
               style={{transform: `scale(${scale1})`, transition: 'transform ease-out'}}>
            <img
              src={`${process.env.PUBLIC_URL}/static/output.jpg`}
              className="w-full rounded-b-2xl" alt="logo"/>
            <div className="text-white flex justify-center mt-5">{content.e}</div>
          </div>
        </div>

        <div className="ml-5 mr-5 mt-12" id="introduce">
          <Line/>
          <div className="flex items-center mt-8">
            <Image src={`${process.env.PUBLIC_URL}/static/logo/DCG.png`} className="w-12"/>
            <Title title={content.introduce} className="text-4xl align-middle text-white ml-10"/>
          </div>
        </div>


        <div className="ml-5 mr-5 mt-3">

          <div className="mt-7">
            <Text description={content.founed} className="mt-3"/>
            <Text description={content.service} className="mt-3"/>
            <Text description={content.solution} className="mt-3"/>
            <Text description={content.first} className="mt-3"/>
          </div>
        </div>

        <div className="ml-5 mr-5 mt-24" id="list">
          <Line/>
          <div className="flex items-center mt-8">
            <Image src={`${process.env.PUBLIC_URL}/static/logo/DCG.png`} className="w-12"/>
            <Title title={content.bo} className="text-4xl align-middle text-white ml-10"/>
          </div>
        </div>


        <div className="mt-12 flex overflow-x-auto pl-5 pr-5 space-x-6 scrollbar-hide">
          <Card background={lang === 'zh' ? "WechatIMG1046.jpg" : "10491719987082_.pic_hd.jpg"} else={content.dce as string} />

          <Card background={lang === 'zh' ? "WechatIMG27.png" : "291719985773_.pic.png"} else={content.cf} load/>

          <Card background={lang === 'zh' ? "WechatIMG1039.jpg" : "WechatIMG1040.jpg"} else={content.include as string} load/>
        </div>

        <div className="ml-5 mr-5 mt-12" id="audco">
          <Line/>
          <div className="items-center mt-8">
            <Title title={'AUDCO ='} className="text-3xl align-middle text-white"/>
            <Title title={content.plus} className="text-3xl align-middle text-white"/>
            <Title title={content.future} className={`text-[#e7b973] text-4xl mt-3`}/>
          </div>

          <Typography
            title={content.safe}
            description={content.tech}
          />
          <Typography
            title={content.growth}
            description={content.attracts}
          />
          <Typography
            title={content.integration}
            description={content.communication}
          />
          <Typography
            title={content.link}
            description={content.app}
          />
        </div>


        <div className="ml-5 mr-5 mt-24" id="gdb">
          <Line/>
          <div className="items-center mt-8 mb-8">
            <div className="mt-3">
              <Title title='GDB - Wallet and Mall' className='text-4xl align-middle text-white'/>
              <Image src={`${process.env.PUBLIC_URL}/static/logo/GDB.png`} className="h-10 mt-5"/>
            </div>
          </div>
        </div>

        <div className='transition-transform ease-in-out w-full'
             style={{transform: `scale(${scale2})`, transition: 'transform ease-out'}}>
          <img src={`${process.env.PUBLIC_URL}/static/1.png`} className="w-full rounded-2xl" alt="logo"/>
        </div>

        <div className="ml-5 mr-5 mt-5">
          <Text
            description={content.buy}
          />

          <Text description={` • ${content.free}`} className="mt-5 ml-1"/>
          <Text description={` • ${content.solution2}`}  className="ml-1"/>
          <Text description={` • ${content.rwa}`} className="ml-1" />

          <Text description={content.officially} style={{marginTop: '20px'}}/>
          <Text description={`- ${content.download}`} />

          <div className="flex mt-8">
            <div className="flex-1 flex justify-center">
              <Image src={`${process.env.PUBLIC_URL}/static/logo/google-store.svg`} className="w-6"/>
            </div>
            <div className="flex-1 flex justify-center">
              <Image src={`${process.env.PUBLIC_URL}/static/logo/app-store.svg`} className="w-6"/>
            </div>
          </div>

          <div className="flex mt-5">
            <div className="flex-1 flex justify-center">
              <Image src={`${process.env.PUBLIC_URL}/static/gdb-google.png`} className="w-36"/>
            </div>
            <div className="flex-1 flex justify-center">
              <Image src={`${process.env.PUBLIC_URL}/static/gdb-app.png`} className="w-36"/>
            </div>
          </div>
        </div>

        <div className="ml-5 mr-5 mt-24" id="merchant">
          <Line/>
          <div className="items-center mt-8 mb-8">
            <div className="mt-3">
              <Title title={content.become} className='text-4xl align-middle text-[#e7b973]'/>
            </div>
          </div>

          <div className="mt-12 flex overflow-x-auto pl-5 pr-5 space-x-6 scrollbar-hide mb-10">
            <Iframe src={'https://www.youtube.com/embed/E2U5vJD4Vew'} title={content.register}/>
            <Iframe src={'https://www.youtube.com/embed/loCc8RrUKq0'} title={content.in}/>
          </div>

          <Text description={content.click} />
          <div className="w-full h-full mt-5 flex justify-center items-center">
            <Image
              src={`${process.env.PUBLIC_URL}/static/jump.svg`}
              className="h-10"
              onClick={() => window.open('https://audco.cloudns.ch/resource/')}
            />
          </div>

        </div>

        <div className="ml-5 mr-5 mt-24" id="joinus">
          <Line/>
          <div className="items-center mt-8 mb-8">
            <div className="flex justify-between items-center">
              <Title title={content.join} className='text-4xl align-middle mr-5 text-[#e7b973]'/>
              <Image src={`${process.env.PUBLIC_URL}/static/logo/AUDCO.png`} className="h-20"/>
            </div>
          </div>
          <Text
            description={content.audco}
            style={{marginTop: '20px'}}
          />

          <div className="mt-12 mb-8">
            <Website description={'Website'} website={'https://www.au-dco.com/'}/>
            <Website description={'Twitter'} website={'https://x.com/Web3Audco'}/>
          </div>


          {/*<Text*/}
          {/*  description={'加入AUDCO社区，让更多商家、企业、投资人、商品与服务紧密连接在一起。助力您的生意，丰富您的投资类别'}*/}
          {/*  style={{marginTop: '20px'}}*/}
          {/*/>*/}

          <Text
            description={content.welcome}
            style={{marginTop: '40px', color: '#e7b973', fontSize: '24px'}}
          />
          <Text
            description={content.wapp}
            style={{color: '#e7b973', fontSize: '24px'}}
          />

          <div className="flex items-center justify-around mt-8">
            <div>
              <Image src={`${process.env.PUBLIC_URL}/static/whatsapp.jpg`}/>
            </div>
            <Text description={content.close} style={{marginLeft: 30}}/>
          </div>
        </div>

        <div className="ml-5 mr-5 mt-24">
          <Line/>
          <div className="items-center mt-8 mb-8">
            <div className="mt-3">
              <Title title={content.mer} className='text-4xl align-middle text-[#e7b973]'/>
            </div>
          </div>

          <Merchant />
        </div>

        <div className="text-white mt-20 mb-10 flex w-full justify-center">
          <div>
            © 2024 DCG. All rights reserved
          </div>
        </div>
      </div>
    </LangContext.Provider>
  );
}

export default App;