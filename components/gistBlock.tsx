import { Box, Flex, Text } from '@chakra-ui/react';
import Highlight from 'react-highlight';

interface IGist {
  code: string;
  filename: string;
}

export function GistBlock({code, filename}: IGist) {
  return (
      <Flex border='1px solid #ddd' borderRadius='5px' direction='column'>
        <Box fontSize={{md: '16px', sm: '12px'}}>
          <Highlight className='javascript'>
            {code}
          </Highlight>
        </Box>
        <Flex px='15px' h='30px' borderTop='1px solid #ddd' bgColor='#f7f7f7' alignItems='center'>
          <Text fontSize='12px' fontWeight='bold' color='#666'>{filename}</Text>
          <Text pl='4px' fontSize='12px' color='#666'>hosted with ❤ by</Text>
          <a href='https://github.com'>
            <Text pl='4px' fontSize='12px' fontWeight='bold' color='#666'>GitHub</Text>
          </a>
        </Flex>
      </Flex>
  );
};