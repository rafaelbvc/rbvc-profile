import { createContext } from "react";

interface IPositionContext {
  aboutTop: string;
  contactTop: string;
  portifolioTop: string;
  hireTop: string;
  setAboutTop: (aboutTop: string)=> void
  setContactTop: (contactTop: string) => void
  setPortifolioTop: (portifolioTop: string) => void
  setHireTio: (hireTop: string) => void
}

interface ITopPositionProvider {
  children: React.ReactNode;
}

export const TopPositionContext = createContext({} as IPositionContext);

export const TopPositionProvider = ({children}: ITopPositionProvider) => {
    
}