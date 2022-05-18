import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Head from 'next/head';

import { PostHeader } from 'components/posts/PostHeader';
import { Gist } from 'components/Gist';
import code from 'assets/useEvent.json';

export default function UseEvent() {
  return (
      <Flex direction='column' justifyContent='start' w={{ xl: '50%', lg: '70%', md: '80%', sm: '90%' }}>
        <Head>
          <title>Blog by Igor | React may be getting a new hook — useEvent</title>
        </Head>
        <PostHeader date={'Nov 13,2021'}/>
        <Heading as='h3' size='lg' my='20px'>
          React may be getting a new hook — useEvent
        </Heading>
        <Box mb='20px'>
          <Image src='/images/useEvent.png' width={'400vw'} height={'200px'} layout='responsive' objectFit='cover'
                 alt='cover'/>
        </Box>
        <Text mb='20px' fontSize='20px'>
          The RFC is summarized with this statement:
          <br/><br/>
          What the React team is referring to when they say function identity is <a
            href={'https://codesandbox.io/s/nifty-mendel-8diiq?file=/src/App.js:1001-1029'}
            style={{ textDecoration: 'underline' }}>referential equality</a>. When a component
          re-renders, every function declared within it is re-created. If you have a memoized child component that
          references that function via a prop, it will see a change causing it to re-render.
          <br/><br/>
          An important tool to prevent components that are memoized from re-rendering needlessly is useCallback. (If
          that sentence didn’t make sense read more about re-rendering and memoization before reading on.)
        </Text>
        <Gist code={code.first} filename={'parent.js'}/>
        <Text my='20px' fontSize='20px'>
          In the example above <mark>handleSomething</mark> will always be a new function,
          and <mark>MemoizedComponent</mark> will re-render every time ParentComponent re-renders. To fix this we
          utilize useCallback which will memoize handleSomething.
        </Text>
        <Gist code={code.second} filename={'parent.js'}/>
        <Text my='20px' fontSize='20px'>
          The above code works great, but the problem is presented when the callback has dependencies. Every time the
          dependency changes a new function is created, which then causes <mark>MemoizedComponent</mark> to re-render.
        </Text>
        <Gist code={code.third} filename={'parent.js'}/>
        <Text my='20px' fontSize='20px'>
          Now imagine a scenario where there is a state that is being updated as the user types. Combine that with a
          callback function that has a dependency on that state, and now <mark>MemoizedComponent</mark> is re-rendering
          every time the
          user types. This is obviously suboptimal, and the problem <mark>useEvent</mark> hopes to solve.
        </Text>
        <Gist code={code.fourth} filename={'parent.js'}/>
        <Text my='20px' fontSize='20px'>
          When using <mark>useEvent</mark> the function will always have access to the latest state and prop values, the
          reference
          never changes, and <mark>MemoizedComponent</mark> isn’t needlessly re-rendering.
        </Text>
      </Flex>
  );
};