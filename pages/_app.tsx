import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme, type ThemeConfig } from '@chakra-ui/react';

import { Layout } from '../components/layout';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
};

const theme = extendTheme({config, breakpoints});

function MyApp({Component, pageProps}: AppProps) {
  return (
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>);
}

export default MyApp;
