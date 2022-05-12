import { Box, Flex, Heading, useColorMode } from '@chakra-ui/react';
import Image from 'next/image';

export function Main() {
  const {colorMode} = useColorMode();

  return (
      <main>
        <Flex mt='20px' flexDirection='column' alignItems='center' flex='auto'>
          <Box zIndex={-1}>
            <Image src={colorMode === 'light' ? '/images/main.jpg' : '/images/mainDark.jpg'} alt='main-cover' layout='fill'
                   objectFit='cover' objectPosition='center'/>
          </Box>

          <Heading as='h1' fontFamily={'IBM Plex Mono'}>
            Created with:
          </Heading>

          <Flex width='55%' flexDirection={{xl: 'row', lg: 'column', md: 'column', sm: 'column'}}
                justifyContent='space-between' alignItems={{lg: 'center', md: 'center', sm: 'center'}}>
            <Box w='300px' p='15px' border='1px' borderRadius='20px' borderColor='white'>
              <a href='https://nextjs.org/docs'>
                <Heading as='h2' size='lg' fontFamily={'IBM Plex Mono'}>
                  Next JS &rarr;
                </Heading>
                <p>Find in-depth information about Next.js features and API.</p>
              </a>
            </Box>

            <Box mt={{lg: '10px', md: '10px', sm: '10px'}} w='300px' p='15px' border='1px' borderRadius='20px'
                 borderColor='white'>
              <a href='https://chakra-ui.com/'>
                <Heading as='h2' size='lg' fontFamily={'IBM Plex Mono'}>
                  Chakra UI &rarr;
                </Heading>
                <p>Create accessible React apps with speed.</p>
              </a>
            </Box>
          </Flex>
        </Flex>
      </main>
  );
}