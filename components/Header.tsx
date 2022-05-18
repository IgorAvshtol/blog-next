import { Button, Flex, Tab, TabList, Tabs, Text, useColorMode } from '@chakra-ui/react';
import Link from 'next/link';

export function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
      <header>
        <Flex height={20} alignItems='center' justifyContent='center' borderBottom='1px' borderColor='#cbcaca'>
          <Button onClick={toggleColorMode} fontFamily='IBM Plex Mono' fontWeight='normal'
                  fontSize={{ md: '14px', sm: '10px' }}>
            {colorMode === 'light' ? 'Dark' : 'Light'}
          </Button>
          <Flex width={3/4} justifyContent='flex-end'>
            <Tabs variant='soft-rounded' colorScheme={colorMode === 'light' ? 'blackAlpha' : 'whiteAlpha'}>
              <TabList>
                <Tab>
                  <Link href='/'>
                    <Text fontFamily='IBM Plex Mono' fontSize={{ md: '14px', sm: '10px' }}
                          color={colorMode === 'light' ? 'gray.600' : 'whiteAlpha.900'}>HOME</Text>
                  </Link>
                </Tab>
                <Tab>
                  <Link href='/gallery'>
                    <Text fontFamily='IBM Plex Mono' fontSize={{ md: '14px', sm: '10px' }}
                          color={colorMode === 'light' ? 'gray.600' : 'whiteAlpha.900'}>GALLERY</Text>
                  </Link>
                </Tab>
                <Tab>
                  <Link href='/projects'>
                    <Text fontFamily='IBM Plex Mono' fontSize={{ md: '14px', sm: '10px' }}
                          color={colorMode === 'light' ? 'gray.600' : 'whiteAlpha.900'}>PROJECTS</Text>
                  </Link>
                </Tab>
                <Tab>
                  <Link href='/posts'>
                    <Text fontFamily='IBM Plex Mono' fontSize={{ md: '14px', sm: '10px' }}
                          color={colorMode === 'light' ? 'gray.600' : 'whiteAlpha.900'}>POSTS</Text>
                  </Link>
                </Tab>
              </TabList>
            </Tabs>
          </Flex>
        </Flex>
      </header>
  );
}