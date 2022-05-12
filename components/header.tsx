import { Button, Flex, Text, useColorMode } from '@chakra-ui/react';
import Link from 'next/link';

export function Header() {
  const {colorMode, toggleColorMode} = useColorMode();

  return (
      <header>
        <Flex height={20} alignItems='center' justifyContent='center' borderBottom='1px' borderColor='#cbcaca'>
          <Flex width={3/4} justifyContent='flex-end'>
            <Flex width={300} justifyContent='space-between' alignItems='center'>
              <Button onClick={toggleColorMode} fontFamily='IBM Plex Mono' fontWeight='normal'>
                {colorMode === 'light' ? 'Dark' : 'Light'}
              </Button>
              <Link href='/'>
                <a>
                  <Text fontFamily='IBM Plex Mono' fontSize={14}>HOME</Text>
                </a>
              </Link>
              <Link href='/gallery'>
                <a>
                  <Text fontFamily='IBM Plex Mono' fontSize={14}>GALLERY</Text>
                </a>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </header>
  );

}