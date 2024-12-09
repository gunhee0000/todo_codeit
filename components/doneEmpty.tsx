import { Box, Img, Text } from '@chakra-ui/react';
import { NextPage } from 'next';

export const DoneEmpty: NextPage = function () {
  return (
    <Box w="49%">
      <Img src="/none_todo_lg.png" alt="todo_none" w="240px" h="240px" />
      <Text pt="10px" color="#94A3B8">
        아직 다 한 일이 없어요. <br />
        해야 할 일을 체크해 보세요!
      </Text>
    </Box>
  );
};
