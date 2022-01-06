import type { NextPage } from 'next';
import { Box, Center, Flex, Square, Text } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-brand">
      <Flex color="white">
        <Center w="100px" bg="brand.500">
          <Text>Box 1</Text>
        </Center>
        <Square bg="blue.500" size="150px">
          <Text>Box 2</Text>
        </Square>
        <Box flex="1" bg="tomato">
          <Text>Box 3</Text>
        </Box>
      </Flex>
    </div>
  );
};

export default Home;
