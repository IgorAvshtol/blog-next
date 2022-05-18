import { Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { Header } from './Header';
import { Footer } from './Footer';

interface ILayout {
  children: ReactNode;
}

export function Layout({ children }: ILayout) {
  return (
      <Flex minH='100vh' flexDirection='column'>
        <Header/>
        <Flex justifyContent='center' mt='30px'>
          {children}
        </Flex>
        <Footer/>
      </Flex>
  );
}