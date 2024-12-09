import { Box, Img, Text } from '@chakra-ui/react';
import { NextPage } from 'next';

export const DoneHeader: NextPage = function () {
  return (
    <Box
      boxSizing="border-box"
      h="64px"
      bg="#DDD6FE"
      border="2px solid #7C3AED"
      borderRadius="24px"
      display="flex"
      alignItems="center"
      gap="16px"
      justifyContent="center"
      p="0"
    >
      <Img src="icon_done.png" alt="done아이콘" w="32px" h="32px" flex="none" order="0" flexGrow="0" />
      <Text textDecoration="underline">비타민 챙겨먹기</Text>
    </Box>
  );
};
