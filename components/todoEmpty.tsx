import { Box, Img, Text } from '@chakra-ui/react';
import { NextPage } from 'next';

export const TodoEmpty: NextPage = function () {
  return (
    <Box w="49%">
      <Img src="/none_todo_lg.png" alt="todo_none" w="240px" h="240px" />
      <Text pt="10px" color="#94A3B8">
        할 일이 없어요. <br />
        TODO를 새롭게 추가해 주세요!
      </Text>
    </Box>
  );
};
