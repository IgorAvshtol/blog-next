import Head from 'next/head';
import { Flex, Heading } from '@chakra-ui/react';

import { PostData } from 'components/posts/PostData';

export default function Posts() {
  return (
      <Flex direction='column' alignItems='center'>
        <Head>
          <title>Blog by Igor | Posts</title>
        </Head>
        <Heading as='h3' size='xl' my='10px' fontFamily='IBM Plex Mono'>
          Posts
        </Heading>
        <PostData/>
      </Flex>
  );
};