import { Header } from 'components/posts/header';
import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Head from 'next/head';

import { GistBlock } from 'components/gistBlock';
import code from 'assets/absolute.json';

export default function Absolute() {
  return (
      <Flex direction='column' justifyContent='start' w={{xl: '50%', lg: '70%', md: '80%', sm: '90%'}}>
        <Head>
          <title>Blog by Igor | Absolute imports in Create React App</title>
        </Head>
        <Header date={'Jun 21,2020'}/>
        <Heading as='h3' size='lg' my='20px'>
          Absolute imports in Create React App
        </Heading>
        <Box mb='20px'>
          <Image src='/images/absolute.webp' width={'400vw'} height={'200px'} objectPosition='left' layout='responsive'
                 objectFit='cover'
                 alt={'cover'}/>
        </Box>
        <Text mb='20px' fontSize='20px'>
          One of the things that held me back from Create React App was the lack of absolute imports. I loved them so
          much in my custom webpack config that I couldn&apos;t live without it. After a time I found that they can be
          configured in CRA too! Let&apos;s see how to do it.
        </Text>
        <Heading as='h3' my='20px' fontSize='22px'>
          Why do you need absolute imports?
        </Heading>
        <GistBlock code={code.first} filename={'parent.js'}/>
        <Heading as='h3' my='20px' fontSize='22px'>
          Absolute imports to the rescue!
        </Heading>
        <Text mb='20px' fontSize='20px'>
          Absolute imports can help you make that code a lot cleaner, more readable and manageable. We want to be able
          to transform our paths from this:
        </Text>
        <GistBlock code={code.second} filename={'parent.js'}/>
        <Text my='20px' fontSize='20px'>
          to that:
        </Text>
        <GistBlock code={code.third} filename={'parent.js'}/>
        <Text my='20px' fontSize='20px'>
          Let&apos;s assume you have <mark>src</mark> with multiple directories where your code lives. We want to
          make <mark>src</mark> your base path
          for the imports.
        </Text>
        <Flex justifyContent='center'>
          <Image src='/images/folders.png' width={250} height={150} layout='fixed' alt={'cover'}/>
        </Flex>
        <Text my='20px' fontSize='20px'>
          The first step is to create <mark>jsconfig.json</mark> file (if it doesn&apos;t exist already) in root directory of
          your CRA app(
          <mark>tsconfig.json</mark>
          in case you used TypeScript template). Then add <mark>baseUrl</mark> configuration to it:
        </Text>
        <GistBlock code={code.fourth} filename={'parent.js'}/>
        <Text my='20px' fontSize='20px'>
          That few simple lines will tell CRA config to use your <mark>src</mark> directory as a base for your imports
          so you can
          import your components with absolute paths. After that you can change imports in your code as presented below:
        </Text>
        <GistBlock code={code.fourth} filename={'parent.js'}/>
        <Text my='20px' fontSize='20px'>
          A lot cleaner and without ./../ mess. I hope you found it right on time! :)
          <br/><br/>
          Docs reference:
          <Link href='https://create-react-app.dev/docs/importing-a-component/#absolute-imports' color='blue' textDecoration='underline' ml='3px'>https://create-react-app.dev/docs/importing-a-component#absolute-imports</Link>
        </Text>
      </Flex>
  );
};