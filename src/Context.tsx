import React from 'react';

interface LangContextProps {
  content: { [key: string]: string };
  lang: string;
  setLang: (lang: string) => void;
}

interface DialogContextProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const LangContext = React.createContext<LangContextProps>({
  content: {},
  lang: "zh",
  setLang: () => {
    if (process.env.NODE_ENV === 'development') {
      console.warn('DialogContext is not defined');
    }
  }
});

export const DialogContext = React.createContext<DialogContextProps>({
  open: false,
  setOpen: () => {
    if (process.env.NODE_ENV === 'development') {
      console.warn('DialogContext is not defined');
    }
  }
});
