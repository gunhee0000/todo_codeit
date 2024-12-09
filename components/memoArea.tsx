import { Box, Img } from '@chakra-ui/react';
import { NextPage } from 'next';

export const MemoArea: NextPage = function () {
  return (
    <Box>
      <Img src="/memo.png" alt="내용 입력 란" w="588px" h="311px" />
    </Box>
  );
};
