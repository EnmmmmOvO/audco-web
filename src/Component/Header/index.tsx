import React, { useContext, useEffect, useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { LangContext, DialogContext } from '../../Context';
import './index.css';

const Header: React.FC = () => {
  const { setOpen } = useContext(DialogContext);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const { lang, setLang } = useContext(LangContext);
  const [scrollThreshold, setScrollThreshold] = useState(0);

  const scrollCheck = () => {
    const scrollTop = window.scrollY;
    const threshold = 300;
    const buffer = 100;

    if (scrollTop > lastScrollTop) {
      if (scrollTop > threshold + buffer) {
        setShowHeader(false);
        setScrollThreshold(scrollTop);
      }
    } else {
      if (scrollTop < scrollThreshold - buffer) {
        setShowHeader(true);
        setScrollThreshold(scrollTop);
      }
    }
    setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
  };


  useEffect(() => {
    window.addEventListener('scroll', scrollCheck);
    return () => {
      window.removeEventListener('scroll', scrollCheck);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollTop]);

  return (
    <header
      className={`bg-black top-0 left-0 w-screen z-20 fixed ${showHeader ? 'header-show' : 'header-hidden'}`}
      style={{ transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out" }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 bg-black" aria-label="Global">
        <div className="flex items-center w-full h-full">
          <div className="-m-1.5 p-1.5">
            <img className="h-10 w-auto" src={`${process.env.PUBLIC_URL}/static/logo/AUDCO.png`} alt="audco"/>
          </div>
        </div>
        <div className="flex items-center justify-end w-full h-full">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <a href="https://audco.cloudns.ch/easycal/" target="_blank" rel="noopener noreferrer">
              <img
                src={`${process.env.PUBLIC_URL}/static/calculator.svg`}
                className={`h-5 w-5 mr-6`}
                alt="calculator"
                aria-hidden="true"
              />
            </a>
            <img
              src={`${process.env.PUBLIC_URL}/static/lang.svg`}
              className={`h-6 w-6 mr-6`}
              aria-hidden="true"
              onClick={() => setLang(lang === "zh" ? "en" : "zh")}
              alt="lang"
            />
            <Bars3Icon className="h-6 w-6 text-[#e7b973]" onClick={() => setOpen(true)} aria-hidden="true" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;