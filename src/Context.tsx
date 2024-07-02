import React from 'react';

interface LangContextProps {
  content: { [key: string]: string };
  lang: string;
  setLang: (lang: string) => void;
}

const LangContext = React.createContext<LangContextProps>({
  content: {},
  lang: "zh",
  setLang: () => {
    if (process.env.NODE_ENV === 'development') {
      console.warn('DialogContext is not defined');
    }
  }
});

export default LangContext;