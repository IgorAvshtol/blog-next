import Head from 'next/head';
import { Flex } from '@chakra-ui/react';

import { Post } from './post';

export const postsArray = [
  <Post key={1} image={'/images/lens.webp'} href='/posts/fetching-data' title='Scroll to a newly added DOM element'
        description='Parent component renders child components based on some local state'/>,
  <Post key={2} image={'/images/useEvent.png'} href='/posts/useevent' title='React may be getting a new hook — useEvent'
        description='New React hook that is named useEvent'/>,
  <Post key={3} image={'/images/absolute.webp'} href='/posts/absolute' title='Absolute imports in Create React App'
        description='One of the things that held me back from Create React App was the lack of absolute imports...'/>
];

export function PostsContainer() {
  return (
      <Flex m='0 auto' flexWrap='wrap' justifyContent={{ lg: 'space-between', md: 'center', sm: 'center' }}>
        <Head>
          <title>Blog by Igor | Posts</title>
        </Head>
        {
          postsArray.map(post => <div key={post.key}>{post}</div>)
        }
      </Flex>
  );
}