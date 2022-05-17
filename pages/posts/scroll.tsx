import { Box, Flex, Heading, ListItem, OrderedList, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Head from 'next/head';

import { Header } from 'components/posts/header';
import { GistBlock } from 'components/gistBlock';
import code from 'assets/scroll.json';

export default function Scroll() {
  return (
      <Flex direction='column' justifyContent='start' w={{ xl: '50%', lg: '70%', md: '80%', sm: '90%' }}>
        <Head>
          <title>Blog by Igor | AScroll to a newly added DOM element</title>
        </Head>
        <Header date={'Nov 27,2021'}/>
        <Heading as='h3' size='lg' my='20px'>
          Scroll to a newly added DOM element
        </Heading>
        <Box mb='20px'>
          <Image src='/images/lens.webp' width={'400vw'} height={'200px'} layout='responsive' objectFit='cover'
                 alt={'cover'}/>
        </Box>
        <Text mb='20px' fontSize='20px'>
          The premise — a parent component renders child components based on some local state and we wish to scroll to
          the first of those newly rendered child components.
        </Text>
        <Text mb='20px' fontSize='20px'>
          TLDR: Here is a <a href={'https://codesandbox.io/s/nifty-mendel-8diiq?file=/src/App.js:1001-1029'}
                             style={{ textDecoration: 'underline' }}>link</a> to codesandbox.
        </Text>
        <Text mb='20px' fontSize='20px'>
          See the parent component below — right now, it does everything, but the scrolling part. It has an “Add items”
          button, which — when pressed-add 10 more items to the existing state of items:
        </Text>
        <GistBlock code={code.first} filename={'parent.js'}/>
        <Text my='20px' fontSize='20px'>
          There are two crucial pieces of information that we need to achieve that:
        </Text>
        <OrderedList ml='25px' fontSize='18px'>
          <ListItem>The index of the first of these newly added items.</ListItem>
          <ListItem>The fact that the item that we wish to scroll to has mounted.</ListItem>
        </OrderedList>
        <Heading as='h3' my='20px' fontSize='22px'>
          Track index of first newly added item
        </Heading>
        <Text my='20px' fontSize='20px'>
          For this, we will use <mark>useRef</mark> hook which gives as an instance variable that we can use to store
          values between
          renders. Then, as we will add news items to the <mark>items</mark> state variable, we will measure the length
          of <mark>
          previousItems</mark> that we receive as an argument in the callback function that we pass
          to <mark>setItems</mark>. If we add <mark>+1</mark>
          to this length, we will get the index of the first recently added item:
        </Text>
        <GistBlock code={code.second} filename={'parent.js'}/>
        <Heading as='h3' my='20px' fontSize='22px'>
          Scroll to the new item on mount
        </Heading>
        <Text my='20px' fontSize='20px'>
          To scroll to the item, we actually need to break out the <mark>element</mark> that we render for each item in
          the <mark>items</mark>
          state and we need to do that because we need to hook into it’s own lifecycle i.e. track when it is mounted.
          <br/><br/>
          A component is considered mounted when it is added into the real DOM (you can see it when you pop open your
          dev tools and can find a dom node representing that component in the “Elements” tab).
          <br/><br/>
          In class-based components, we would reach for the <mark>componentDidMount</mark> lifecycle method, but in the
          world of
          hooks, the child component that renders the item will look like this:
        </Text>
        <GistBlock code={code.third} filename={'parent.js'}/>
        <Text my='20px' fontSize='20px'>
          When rendering <mark>items</mark> , we need to somehow tell the first “new” instance of the child component
          that viewport
          should be scrolled to. For that, we will pass a <mark>shouldScrollTo</mark> as follows:
        </Text>
        <GistBlock code={code.fourth} filename={'parent.js'}/>
        <Text my='20px' fontSize='20px'>
          Here we simply compare if the item that we are rendering has the same <mark>index</mark> as
          the <mark>firstNewItemIndex</mark> to tell that <mark>Child</mark> instance that it should be scrolled to
          after it has <mark>mounted</mark>.
          <br/><br/>
          Finally, we need to use the <mark>shouldScrollTo</mark> to, well, actually scroll and we do so as follows:
        </Text>
        <GistBlock code={code.fifth} filename={'parent.js'}/>
        <Text my='20px' fontSize='20px'>
          And there we have it — now every time new items are added, the app will automatically scroll to the first one
          in the most recent set added.
        </Text>
      </Flex>
  );
};