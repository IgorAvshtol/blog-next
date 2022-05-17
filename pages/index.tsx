import type { NextPage } from 'next';
import Head from 'next/head';

import { Main } from 'components/main';

const Home: NextPage = () => {
  return (
      <>
        <Head>
          <title>Blog by Igor | Home</title>
        </Head>
        <Main/>
      </>
  );
};

export default Home;
