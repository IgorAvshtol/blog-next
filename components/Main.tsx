import { Box, Flex, Heading, useColorMode } from '@chakra-ui/react';
import Image from 'next/image';

import { postData } from './posts/PostData';

export function Main() {
  const { colorMode } = useColorMode();
  const trimmedArray = postData.slice(0, -1);

  return (
      <Flex mt='20px' flexDirection='column'
            alignItems={{ md: colorMode === 'light' ? 'end' : 'flex-start', sm: 'center' }} flex='auto'>
        <Box zIndex={-1}>
          <Image src={colorMode === 'light' ? '/images/main.jpg' : '/images/mainDark.jpg'} alt='main-cover'
                 layout='fill' objectFit='cover' objectPosition='center'/>
        </Box>
        <Flex direction='column' alignItems='center'>
          <Heading as='h1' fontFamily={'IBM Plex Mono'}>
            Latest:
          </Heading>
          <Flex flexDirection={{ xl: 'row', lg: 'column', md: 'column', sm: 'column' }} justifyContent='space-between'
                alignItems={{ lg: 'center', md: 'center', sm: 'center' }}>
            {
              trimmedArray.map(post => <div key={post.key}>{post}</div>)
            }
          </Flex>
        </Flex>
      </Flex>

  );
}