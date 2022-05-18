import { Avatar, Flex, Text, WrapItem } from '@chakra-ui/react';

interface IHeader {
  date: string;
}

export function PostHeader({ date }: IHeader) {
  return (
      <Flex>
        <WrapItem>
          <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov'/>
        </WrapItem>
        <Flex direction='column' ml='20px' fontFamily='IBM Plex Mono'>
          <Text size={'sm'}>
            Dan Abramov
          </Text>
          <Text size={'sm'} color='gray.400' fontFamily='IBM Plex Mono'>
            {date}
          </Text>
        </Flex>
      </Flex>
  );
}