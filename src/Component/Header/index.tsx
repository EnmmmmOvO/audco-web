import React, { useState, useRef, useContext } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import './styles.css';
import LangContext from '../../Context';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const nodeRef = useRef(null);
  const { content } = useContext(LangContext);

  const { lang, setLang } = useContext(LangContext);

  const slide = (num: number) => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: num, behavior: 'smooth' });
  };

  return (
    <header className="bg-black fixed top-0 left-0 w-screen z-20">
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
              onClick={() => setLang(lang === "zh" ? "en" : "zh" )}
              alt="lang"
            />
            <Bars3Icon className="h-6 w-6 text-[#e7b973]" onClick={() => setMobileMenuOpen(true)} aria-hidden="true"/>
          </button>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
        <div className="fixed inset-0 z-10"/>

          <div ref={nodeRef}>
            <DialogPanel
              className="z-40 bg-black fixed inset-y-0 right-0 w-full overflow-y-auto px-4 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
            >
              <div className="flex items-center justify-between">
                <div className="-m-1.5 p-1.5">
                  <img
                    className="h-10 w-auto"
                    src={`${process.env.PUBLIC_URL}/static/logo/AUDCO.png`}
                    alt=""
                  />
                </div>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <XMarkIcon className="h-6 w-6 text-[#e7b973]" aria-hidden="true"/>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6 mt-5">
                    <div
                      onClick={() => slide(0)}
                      className="-mx-3 block text-white rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
                    >
                      {content.home}
                    </div>
                    <div
                      onClick={() => {
                        const temp = document.getElementById('introduce')?.offsetTop;
                        slide(temp ? temp - 96 : 0);
                      }}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                    >
                      {content.introduce}
                    </div>

                    <div
                      onClick={() => {
                        const temp = document.getElementById('list')?.offsetTop;
                        slide(temp ? temp - 96 : 0);
                      }}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                    >
                      {content.bo}
                    </div>
                    <div
                      onClick={() => {
                        const temp = document.getElementById('audco')?.offsetTop;
                        slide(temp ? temp - 96 : 0);
                      }}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                    >
                      {content.dd}
                    </div>
                    <div
                      onClick={() => {
                        const temp = document.getElementById('gdb')?.offsetTop;
                        slide(temp ? temp - 96 : 0);
                      }}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                    >
                      {content.gdb}
                    </div>
                    <div
                      onClick={() => {
                        const temp = document.getElementById('merchant')?.offsetTop;
                        slide(temp ? temp - 96 : 0);
                      }}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                    >
                      {content.become}
                    </div>
                    <div
                      onClick={() => {
                        const temp = document.getElementById('joinus')?.offsetTop;
                        slide(temp ? temp - 96 : 0);
                      }}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                    >
                      {content.join}
                    </div>
                    <div
                      onClick={() => {
                        const temp = document.getElementById('joinus')?.offsetTop;
                        slide(temp ? temp - 96 : 0);
                      }}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                    >
                      {content.mer}
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
      </Dialog>
    </header>
  );
};

export default Header;