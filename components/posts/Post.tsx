import { Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

interface IPost {
  href: string;
  image: string;
  title: string;
  description: string;
}

export function Post({ title, image, href, description }: IPost) {
  return (
      <Link href={href}>
        <a>
          <Flex direction='column' w='350px' h='350px' m='20px' borderRadius='10px' border='1px'
                borderColor='transparent' _hover={{ border: '1px', borderColor: 'grey' }}>
            <Flex w='100%' h='180px' borderTopRadius='10px'>
              <Image src={image} width='350px' alt={href} height='180px' objectFit='cover' objectPosition='left'
                     style={{ borderTopRightRadius: '10px', borderTopLeftRadius: '10px' }}/>
            </Flex>
            <Flex direction='column' p='10px'>
              <Heading as='h4' fontFamily='IBM Plex Mono' fontSize='22px'>
                {title}
              </Heading>
              <Text mt='10px' fontSize='md' fontFamily='IBM Plex Mono'>{description}</Text>
            </Flex>
          </Flex>
        </a>
      </Link>
  );
}