import { NextPage } from 'next';
import { Box, Flex, Spacer } from '@chakra-ui/react';
import styles from '../styles/Home.module.css';
import { ServiceLayout } from '@/components/service_layout';
import { SearchBar } from '@/components/searchBar';
import TodoItems from '@/components/todoItems';
import DoneItems from '@/components/doneItems';

const IndexPage: NextPage = function () {
  return (
    <ServiceLayout title="todo list" minH="100vh">
      <Box className={styles.container}>
        <Box className={styles.searchBar}>
          <SearchBar />
        </Box>
        <Box className={styles.body}>
          <Box className={styles.iconBox}>
            <Flex>
              <Box className={styles.icon}>
                <img src="/todo.png" alt="todo" />
              </Box>
              <Spacer />
              <Box className={styles.icon}>
                <img src="/done.png" alt="done" />
              </Box>
            </Flex>
          </Box>
          <Box className={styles.contentsBox}>
            <Flex>
              <Box className={styles.contentsTodo}>
                <TodoItems />
              </Box>
              <Spacer />
              <Box className={styles.contentsDone}>
                <DoneItems />
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </ServiceLayout>
  );
};

export default IndexPage;
