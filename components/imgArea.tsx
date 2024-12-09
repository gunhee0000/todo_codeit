import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';

export const ImgArea: NextPage = function () {
  return (
    <Box>
      <Box
        boxSizing="border-box"
        w="384px"
        h="311px"
        bgColor="#F8FAFC"
        border="2px dashed #CBD5E1"
        borderRadius="24px"
      />
    </Box>
  );
};
