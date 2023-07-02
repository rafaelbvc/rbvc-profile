import React, { useContext, useState } from "react";
import { createContext } from "react";

interface IVisibilityContext {
  vvisibility: string;
  pvisibility: string;
  aboutVisibility: string;
  contactVisibility: string;
  portifolioVisibility: string;
  hireVisibility: string;
  settingsVisibility: string;
  setVVisibilityState: (vvisibility: string) => void;
  setPVisibilityState: (pvisibility: string) => void;
  setAboutVisibilityState: (aboutVisibility: string) => void;
  setContactVisibilityState: (contactVisibility: string) => void;
  setPortifolioVisibilityState: (portifolioVisibility: string) => void;
  setHireVisibilityState: (hireVisibility: string) => void;
  setSettingsVisibilityState: (settingsVisibility: string) => void;
}

interface IVisibilityProvider {
  children: React.ReactNode;
}

export const VisibilityContext = createContext({} as IVisibilityContext);

export const VisibilityProvider = ({ children }: IVisibilityProvider) => {
  const [vvisibility, setVVisibility] = useState<string>(" hidden");
  const [pvisibility, setPVisibility] = useState<string>(" hidden");
  const [aboutVisibility, setAboutVisibility] = useState<string>(" hidden");
  const [contactVisibility, setContactVisibility] = useState<string>(" hidden");
  const [portifolioVisibility, setPortifolioVisibility] = useState<string>(" hidden");
  const [hireVisibility, setHireVisibility] = useState<string>(" hidden")
  const [settingsVisibility, setSettingsVisibility] = useState<string>(" hidden")
    


  function setVVisibilityState(vvisibility: string) {
    setVVisibility(vvisibility);
  }

  function setPVisibilityState(pvisibility: string) {
    setPVisibility(pvisibility);
  }

  function setAboutVisibilityState(aboutVisibility: string) {
    setAboutVisibility(aboutVisibility);
  }

  function setContactVisibilityState(contactVisibility: string) {
    setContactVisibility(contactVisibility);
  }

  function setPortifolioVisibilityState(portifolioVisibility: string) {
    setPortifolioVisibility(portifolioVisibility);
  }

  function setHireVisibilityState(hireVisibility: string) {
    setHireVisibility(hireVisibility);
  }

  function setSettingsVisibilityState(settingsVisibility: string){
    setSettingsVisibility(settingsVisibility);
  }

  return (
    <VisibilityContext.Provider
      value={{
        vvisibility,
        pvisibility,
        aboutVisibility,
        contactVisibility,
        portifolioVisibility,
        hireVisibility,
        settingsVisibility,
        setVVisibilityState,
        setPVisibilityState,
        setAboutVisibilityState,
        setContactVisibilityState,
        setPortifolioVisibilityState,
        setHireVisibilityState,
        setSettingsVisibilityState,
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
