import React, { useContext, useState } from "react";
import { createContext } from "react";

interface IVisibilityContext {
  vvisibility: string;
  pvisibility: string;
  setVVisibilityState: (vvisibility: string) => void;
  setPVisibilityState: (pvisibility: string) => void;
}

interface IVisibilityProvider {
  children: React.ReactNode;
}

export const VisibilityContext = createContext({} as IVisibilityContext);

export const VisibilityProvider = ({ children }: IVisibilityProvider) => {
  const [vvisibility, setVVisibility] = useState<string>("hidden");
  const [pvisibility, setPVisibility] = useState<string>("hidden");

  function setVVisibilityState(vvisibility: string) {
    setVVisibility(vvisibility);
  }

  function setPVisibilityState(pvisibility: string) {
    setPVisibility(pvisibility);
  }

  return (
    <VisibilityContext.Provider
      value={{
        vvisibility,
        pvisibility,
        setVVisibilityState,
        setPVisibilityState,
      }}
    >
      {children}
    </VisibilityContext.Provider>
  );
};

export default VisibilityProvider;

export function useVisibilityContext() {
  const visibility = useContext(VisibilityContext);
  return visibility;
}
