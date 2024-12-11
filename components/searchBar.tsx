import { Box, Button, Flex, Img, Spacer, Textarea } from '@chakra-ui/react';
import { useState } from 'react';
import { AddItem } from '@/pages/api/item.add';
import styles from '@/styles/Home.module.css';

export const SearchBar = function () {
  const [title, setTitle] = useState('');

  return (
    <Box className={styles.searchBox}>
      <Box className={styles.inputBox}>
        <Img src="/search.png" alt="할 일 입력란" h="56px" pr="10px" position="absolute" zIndex="0" />
        <Textarea
          placeholder="할 일을 입력해주세요"
          w="1016px"
          minH="100%"
          resize="none"
          border="none"
          alignContent="center"
          focusBorderColor="transparent"
          outline="none"
          overflow="hidden"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Box>
      <Box className={styles.inputBtn}>
        <Button
          h="100%"
          w="168px"
          bg="none"
          _hover={{ background: 'none' }}
          p="0"
          disabled={title.length === 0}
          onClick={() => AddItem(title)}
        >
          <Img src={title.length === 0 ? '/btn_add_deactiv_lg.png' : '/btn_add_inactiv_lg.png'} alt="추가버튼_lg" />
        </Button>
      </Box>
    </Box>
  );
};
