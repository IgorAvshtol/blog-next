import type { NextPage } from 'next';
import Head from 'next/head';
import { Box } from '@chakra-ui/react';

import { Main } from '../components/main';

const Home: NextPage = () => {
  return (
      <>
        <Head>
          <title>Blog by Igor</title>
        </Head>
        <Main/>
      </>
  );
};

export default Home;
