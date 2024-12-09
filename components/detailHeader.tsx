import { Box, Img, Text } from '@chakra-ui/react';
import { NextPage } from 'next';

interface DetailHeaderProps {
  isCompleted: boolean; // isCompleted를 prop으로 받음
  name: string; // 할 일의 이름도 prop으로 받음
}

export const DetailHeader: NextPage<DetailHeaderProps> = function ({ isCompleted, name }) {
  const todoStyle = { bg: '#FFFFFF', border: '2px solid #0F172A' };
  const doneStyle = { bg: '#DDD6FE', border: '2px solid #7C3AED' };

  const style = isCompleted ? doneStyle : todoStyle;

  return (
    <Box
      boxSizing="border-box"
      h="64px"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...style}
      borderRadius="24px"
      display="flex"
      alignItems="center"
      gap="16px"
      justifyContent="center"
      p="0"
    >
      <Img
        src={isCompleted ? '/icon_done.png' : '/icon_todo.png'} // 완료 상태에 따라 아이콘 변경
        alt="todo아이콘"
        w="32px"
        h="32px"
        flex="none"
        order="0"
        flexGrow="0"
      />
      <Text textDecoration="underline" fontWeight="bold">
        {name}
      </Text>
    </Box>
  );
};

export default DetailHeader;

// export const TodoHeader: NextPage = function () {
//   const todoStyle = { bg: '#FFFFFF', border: '2px solid #0F172A' };
//   const doneStyle = { bg: '#DDD6FE', border: '2px solid #7C3AED' };
//   return (
//     <Box
//       boxSizing="border-box"
//       h="64px"
//       // eslint-disable-next-line react/jsx-props-no-spreading
//       {...todoStyle}
//       borderRadius="24px"
//       display="flex"
//       alignItems="center"
//       gap="16px"
//       justifyContent="center"
//       p="0"
//     >
//       <Img src="icon_todo.png" alt="todo아이콘" w="32px" h="32px" flex="none" order="0" flexGrow="0" />
//       <Text textDecoration="underline" fontWeight="bold">
//         비타민 챙겨먹기
//       </Text>
//     </Box>
//   );
// };
