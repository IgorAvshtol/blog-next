import { Flex } from '@chakra-ui/react';
import Image from 'next/image';

export default function Custom404() {
  return (
      <Flex justifyContent='center'>
        <Image src='/images/404-not-found.png' width={600} height={320} objectFit='cover' alt='404-error-cover'/>
      </Flex>
  );
};