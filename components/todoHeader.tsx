import { Box, Img, Text } from '@chakra-ui/react';
import { NextPage } from 'next';

export const TodoHeader: NextPage = function () {
  const todoStyle = { bg: '#FFFFFF', border: '2px solid #0F172A' };
  const doneStyle = { bg: '#DDD6FE', border: '2px solid #7C3AED' };
  return (
    <Box
      boxSizing="border-box"
      h="64px"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...todoStyle}
      borderRadius="24px"
      display="flex"
      alignItems="center"
      gap="16px"
      justifyContent="center"
      p="0"
    >
      <Img src="icon_todo.png" alt="todo아이콘" w="32px" h="32px" flex="none" order="0" flexGrow="0" />
      <Text textDecoration="underline" fontWeight="bold">
        비타민 챙겨먹기
      </Text>
    </Box>
  );
};
