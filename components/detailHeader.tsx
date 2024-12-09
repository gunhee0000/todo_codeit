import { Box, Img, Textarea } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useState } from 'react';

interface DetailHeaderProps {
  isCompleted: boolean; // isCompleted를 prop으로 받음
  name: string; // 할 일의 이름도 prop으로 받음
}

export const DetailHeader: NextPage<DetailHeaderProps> = function ({ isCompleted, name }) {
  const todoStyle = { bg: '#FFFFFF', border: '2px solid #0F172A' };
  const doneStyle = { bg: '#DDD6FE', border: '2px solid #7C3AED' };

  const style = isCompleted ? doneStyle : todoStyle;
  const [title, setTitle] = useState('');

  return (
    <Box
      boxSizing="border-box"
      h="64px"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...style}
      borderRadius="24px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      p="0"
    >
      <Img
        src={isCompleted ? '/icon_done.png' : '/icon_todo.png'} // 완료 상태에 따라 아이콘 변경
        alt="todo아이콘"
        w="32px"
        h="32px"
      />
      <Textarea
        minH="32px"
        resize="none"
        border="none"
        focusBorderColor="transparent"
        outline="none"
        textAlign="center"
        textDecoration="underline"
        fontWeight="bold"
        placeholder={name}
        whiteSpace="nowrap"
        overflow="hidden"
        value={title}
        width={`${Math.max(title.length * 20, name.length * 20)}px`}
        onChange={(e) => setTitle(e.target.value)}
      />
    </Box>
  );
};

export default DetailHeader;
