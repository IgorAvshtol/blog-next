import Head from 'next/head';
import { Flex } from '@chakra-ui/react';

import { Post } from './Post';

export const postsData = [
  {
    title: 'Scroll to a newly added DOM element',
    description: 'Parent component renders child components based on some local state',
    image: '/images/lens.webp',
    href: '/posts/scroll'
  },
  {
    title: 'React may be getting a new hook — useEvent',
    description: 'New React hook that is named useEvent',
    image: '/images/useEvent.png',
    href: '/posts/useevent'
  },
  {
    title: 'Absolute imports in Create React App',
    description: 'One of the things that held me back from Create React App was the lack of absolute imports...',
    image: '/images/absolute.webp',
    href: '/posts/absolute'
  }
];

export function PostData() {
  return (
      <Flex m='0 auto' flexWrap='wrap' justifyContent={{ lg: 'space-between', md: 'center', sm: 'center' }}>
        <Head>
          <title>Blog by Igor | Posts</title>
        </Head>
        {
          postsData.map(post => <Post key={post.title} href={post.href} image={post.image} title={post.title}
                              description={post.description}/>)
        }
      </Flex>
  );
}