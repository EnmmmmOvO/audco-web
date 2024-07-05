import React, { useContext, useRef } from 'react';
import { LangContext, DialogContext } from '../../Context';
import './styles.css'
import { XMarkIcon } from '@heroicons/react/24/outline';

const CustomDialog = () => {
  const { open, setOpen } = useContext(DialogContext);
  const nodeRef = useRef(null);

  const { content } = useContext(LangContext);

  const slide = (num: number) => {
    setOpen(false);
    window.scrollTo({ top: num, behavior: 'smooth' });
  };

  return (
    <div
      ref={nodeRef}
      className={`fixed inset-0 p-4 
      z-50 w-screen bg-black h-screen box-border ${open ? 'fade-in-dialog' : 'fade-out-dialog'}`}
      style={{ transition: "transform 0.8s ease-in-out, opacity 0.8s ease-in-out" }}
    >
      <div className="flex items-center justify-end">
        <button
          type="button"
          className="-m-2.5 rounded-md p-2.5 text-gray-700"
          onClick={() => setOpen(false)}
        >
          <XMarkIcon className="h-6 w-6 text-[#e7b973]" aria-hidden="true"/>
        </button>
      </div>
      <div className="mt-6 flow-root">
        <div className="-my-6 divide-y divide-gray-500/10">
          <div className="space-y-2 py-6 mt-5">
            <div
              onClick={() => slide(0)}
              className="-mx-3 block text-white rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50 hover:text-black"
            >
              {content.home}
            </div>
            <div
              onClick={() => {
                const temp = document.getElementById('introduce')?.offsetTop;
                slide(temp ? temp - 96 : 0);
              }}
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-black"
            >
              {content.introduce}
            </div>

            <div
              onClick={() => {
                const temp = document.getElementById('list')?.offsetTop;
                slide(temp ? temp - 96 : 0);
              }}
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-black"
            >
              {content.bo}
            </div>
            <div
              onClick={() => {
                const temp = document.getElementById('audco')?.offsetTop;
                slide(temp ? temp - 96 : 0);
              }}
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-black"
            >
              {content.dd}
            </div>
            <div
              onClick={() => {
                const temp = document.getElementById('gdb')?.offsetTop;
                slide(temp ? temp - 96 : 0);
              }}
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-black"
            >
              {content.gdb}
            </div>
            <div
              onClick={() => {
                const temp = document.getElementById('merchant')?.offsetTop;
                slide(temp ? temp - 96 : 0);
              }}
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-black"
            >
              {content.become}
            </div>
            <div
              onClick={() => {
                const temp = document.getElementById('joinus')?.offsetTop;
                slide(temp ? temp - 96 : 0);
              }}
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-black"
            >
              {content.join}
            </div>
            <div
              onClick={() => {
                const temp = document.getElementById('community')?.offsetTop;
                slide(temp ? temp - 96 : 0);
              }}
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-black"
            >
              {content.mer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomDialog;