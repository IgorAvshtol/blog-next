import { Box, Flex, Text, useColorMode } from '@chakra-ui/react';
import Image from 'next/image';

interface IProject {
  title: string;
  link: string;
}

export function Project({title, link}: IProject) {
  const {colorMode} = useColorMode();

  return (
      <Flex mt='20px' direction='column' minW='300px' w='20%'>
        <Box h='50' p='10px'
             bgColor={colorMode === 'light' ? '#EDF2F7' : 'rgba(255,255,255,0.08)'} borderRadius='10px'
             _hover={{bgColor: colorMode === 'light' ? '#e2e6ea' : '#1d4973'}}>
          <a href={link}>
            <Flex alignItems='center'>
              <Image src='/images/github.png' width={35} height={35}/>
              <Text ml='20px' fontSize={'lg'}>
                {title}
              </Text>
            </Flex>
          </a>
        </Box>

      </Flex>
  );
};