import { Box, Flex, Img, Spacer, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import { ServiceLayout } from '@/components/service_layout';
import styles from '../../styles/details.module.css';
import { DetailHeader } from '@/components/detailHeader';

const Detail: NextPage = function () {
  return (
    <ServiceLayout title="detail">
      <Box className={styles.container}>
        <DetailHeader isCompleted={false} name="test" />
        <Box className={styles.contents}>
          <Flex>
            <Box className={styles.photo}>
              <Box className={styles.noneImg} />
            </Box>
            <Spacer />
            <Box className={styles.memo}>
              <Img src="/memo.png" alt="내용 입력 란" w="588px" h="311px" />
            </Box>
          </Flex>
        </Box>
        <Box className={styles.btns}>
          <Flex pt="20px">
            <Spacer />
            <Img src="/btn_confirm_deactiv.png" alt="추가 버튼" w="168px" h="56px" mr="16px" />
            <Img src="/btn_delete.png" alt="삭제 버튼" w="168px" h="56px" />
          </Flex>
        </Box>
      </Box>
    </ServiceLayout>
  );
};

export default Detail;
