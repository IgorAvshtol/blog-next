import type { NextPage } from 'next';
import Head from 'next/head';
import { Box } from '@chakra-ui/react';

import { Main } from '../components/main';

const Home: NextPage = () => {
  return (
      <Box minH='100vh' display='flex' flexDirection='column'>
        <Head>
          <title>Blog by Igor</title>
        </Head>
        <Main/>
      </Box>
  );
};

export default Home;
