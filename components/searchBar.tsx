import { Box, Button, Flex, Img, Spacer, Textarea } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { AddItem } from '@/pages/api/item.add';

export const SearchBar = function () {
  const [title, setTitle] = useState('');

  return (
    <Flex pt="18px">
      <Box>
        <Img src="/search.png" alt="할 일 입력란" w="1016px" h="56px" position="absolute" zIndex="0" />
        <Textarea
          placeholder="할 일을 입력해주세요"
          w="1016px"
          minH="56px"
          resize="none"
          border="none"
          alignContent="center"
          focusBorderColor="transparent"
          outline="none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Box>
      <Spacer />
      <Button
        h="56px"
        w="168px"
        bgColor="#FFFFFF"
        _hover="none"
        p="0"
        disabled={title.length === 0}
        onClick={() => AddItem(title)}
      >
        <Img src={title.length === 0 ? '/btn_add_deactiv_lg.png' : '/btn_add_inactiv_lg.png'} alt="추가버튼_lg" />
      </Button>
    </Flex>
  );
};
