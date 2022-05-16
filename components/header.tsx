import { Button, Flex, Text, useColorMode } from '@chakra-ui/react';
import Link from 'next/link';

export function Header() {
  const {colorMode, toggleColorMode} = useColorMode();

  return (
      <header>
        <Flex height={20} alignItems='center' justifyContent='center' borderBottom='1px' borderColor='#cbcaca'>
          <Button onClick={toggleColorMode} fontFamily='IBM Plex Mono' fontWeight='normal'>
            {colorMode === 'light' ? 'Dark' : 'Light'}
          </Button>
          <Flex width={3/4} justifyContent='flex-end'>
            <Flex width={{md:'300px', sm:'260px'}} justifyContent='space-between' alignItems='center'>
              <Link href='/'>
                <a>
                  <Text fontFamily='IBM Plex Mono' fontSize={{md: '14px', sm: '13px'}}>HOME</Text>
                </a>
              </Link>
              <Link href='/gallery'>
                <a>
                  <Text fontFamily='IBM Plex Mono' fontSize={{md: '14px', sm: '13px'}}>GALLERY</Text>
                </a>
              </Link>
              <Link href='/projects'>
                <a>
                  <Text fontFamily='IBM Plex Mono' fontSize={{md: '14px', sm: '13px'}}>PROJECTS</Text>
                </a>
              </Link>
              <Link href='/gist'>
                <a>
                  <Text fontFamily='IBM Plex Mono' fontSize={{md: '14px', sm: '13px'}}>GISTS</Text>
                </a>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </header>
  );

}