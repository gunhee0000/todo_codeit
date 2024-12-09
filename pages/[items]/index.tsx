import { Box, Flex, Img, Spacer, Text, Textarea } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ServiceLayout } from '@/components/service_layout';
import styles from '../../styles/details.module.css';
import { DetailHeader } from '@/components/detailHeader';

const Detail: NextPage = function () {
  const router = useRouter();
  const { id, title, contents, imgUrl, isCompleted } = router.query;

  return (
    <ServiceLayout title="detail">
      <Box className={styles.container}>
        <DetailHeader isCompleted={isCompleted === 'true'} name={title as string} />
        <Box className={styles.contents}>
          <Flex>
            <Box className={styles.noneImg} display="flex" justifyContent="center" alignItems="center">
              <Img src="/img_empty.png" alt="빈이미지" w="64px" h="64px" />
              <Box>
                <Img src="/btn_add.png" alt="사진추가버튼" w="64px" h="64px" />
              </Box>
            </Box>

            <Spacer />
            <Box className={styles.memo}>
              <Img src="/memo.png" alt="내용 입력 란" w="588px" h="311px" zIndex="0" position="absolute" />
              <Box
                boxSizing="border-box"
                display="block"
                zIndex="1"
                position="relative"
                alignItems="center"
                justifyContent="center"
              >
                <Text
                  w="588px"
                  minH="41px"
                  color="#92400E"
                  fontWeight="bold"
                  alignItems="center"
                  justifyContent="center"
                >
                  MEMO
                </Text>
                <Textarea
                  resize="none"
                  border="none"
                  alignContent="center"
                  w="588px"
                  minH="270px"
                  focusBorderColor="transparent"
                  outline="none"
                  textAlign="center"
                />
              </Box>
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
