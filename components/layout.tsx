import { ReactNode } from 'react';
import { Header } from './header';
import { Footer } from './footer';

interface ILayout {
  children: ReactNode;
}

export function Layout({children}: ILayout) {
  return (
      <>
        <Header/>
        {children}
        <Footer/>
      </>
  );
}