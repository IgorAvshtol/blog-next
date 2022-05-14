import { Flex } from '@chakra-ui/react';

import { ReactNode } from 'react';
import { Header } from './header';
import { Footer } from './footer';

interface ILayout {
  children: ReactNode;
}

export function Layout({children}: ILayout) {
  return (
      <Flex minH='100vh' flexDirection='column'>
        <Header/>
        {children}
        <Footer/>
      </Flex>
  );
}