import { Box, Flex, Image } from '@chakra-ui/react';

const images = [
  {
    id: 1,
    URL: 'https://images.unsplash.com/photo-1652308804881-796d40396751?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    id: 2,
    URL: 'https://images.unsplash.com/photo-1652258996399-cddfb4fbc9f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=666&q=80'
  },
  {
    id: 3,
    URL: 'https://images.unsplash.com/photo-1652297895605-1205f64727a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    id: 4,
    URL: 'https://images.unsplash.com/photo-1652293573668-6241cc7d7fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
  },
  {
    id: 5,
    URL: 'https://images.unsplash.com/photo-1652318224806-453c59b64f18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    id: 6,
    URL: 'https://images.unsplash.com/photo-1652347465364-22625aacb6fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  }
];

export default function ImageGallery() {
  return (
      <Flex width='90%' m='0 auto' flexWrap='wrap' mt={10}
            justifyContent={{lg: 'space-between', md: 'center', sm: 'center'}}>
        {images.map((image) => (
            <Box width='400px' m='10px 20px' shadow='md' p={2} key={image.id}>
              <Image src={image.URL} alt='Image'/>
            </Box>
        ))}
      </Flex>
  );
}