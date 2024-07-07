'use client';
import React, { createContext, useContext, useState } from "react";

type ctcProps = {
 children: React.ReactNode
}

type LangProps = string[]; // Correcting type to match the useState

type ContextType = {
  lang: LangProps;
  setLang: React.Dispatch<React.SetStateAction<LangProps>>;
  langSets: LangProps;
};

const ctx = createContext<ContextType | undefined>(undefined);

export default ctx;

export const ContextProviderNext = ({children}:ctcProps) =>{

    const [lang, setLang] = useState<LangProps>(['en']);
    const langSets: LangProps  = ['en','hi'];

   return <ctx.Provider value={{lang, setLang, langSets}}>{children}</ctx.Provider>
}

export const ctxTransfer = () =>{
  const ctxRes = useContext(ctx);
  if (ctxRes === undefined) {
    throw new Error('ctxRes must be used within a ContextProviderNext');
  }
  return ctxRes;
}