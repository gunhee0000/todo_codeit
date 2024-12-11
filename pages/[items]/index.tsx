/* eslint-disable camelcase */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-alert */
import { Box, Button, Flex, Img, Spacer, Text, Textarea } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { ServiceLayout } from '@/components/service_layout';
import styles from '@/styles/details.module.css';
import { DeleteItem } from '@/pages/api/item.delete';
import { UpdateItem } from '@/pages/api/item.update';
import { ImgUpload } from '../api/img.upload';
import { HandleImageUpload } from '@/controller/handleImageUpload';

const Detail: NextPage = function () {
  const router = useRouter();
  const { id, title, contents, imgUrl, isCompleted } = router.query;
  const [newMemo, setMemo] = useState('');
  const [newName, setName] = useState('');
  // const [newImgUrl, setImageUrl] = useState('');

  const todoStyle = { bg: '#FFFFFF', border: '2px solid #0F172A' };
  const doneStyle = { bg: '#DDD6FE', border: '2px solid #7C3AED' };

  const style = isCompleted === 'true' ? doneStyle : todoStyle;

  const [newImage, setNewImage] = useState<string | null>(imgUrl as string | null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const img_sm = { width: '64px', height: '64px' };
  const img_lg = { width: '100%', height: '100%' };
  return (
    <ServiceLayout title="detail">
      <Box className={styles.container}>
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
          <Img src={isCompleted === 'true' ? '/icon_done.png' : '/icon_todo.png'} alt="todo아이콘" w="32px" h="32px" />
          <Textarea
            minH="32px"
            resize="none"
            border="none"
            focusBorderColor="transparent"
            outline="none"
            textAlign="center"
            textDecoration="underline"
            fontWeight="bold"
            placeholder={title as string}
            whiteSpace="nowrap"
            overflow="hidden"
            value={newName}
            width={`${Math.max((newName || title || '').length * 17, 100)}px`}
            onChange={(e) => setName(e.target.value)}
          />
        </Box>
        <Box className={styles.contents}>
          <Box
            className={styles.noneImg}
            display="flex"
            justifyContent="center"
            alignItems="center"
            position="relative"
          >
            <Img src={newImage || '/img_empty.png'} alt="이미지" {...(newImage ? img_lg : img_sm)} />
            <Box
              position="absolute"
              bottom="20px"
              right="10px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Button
                background="none"
                _hover={{ background: 'none' }}
                p="0"
                onClick={() => fileInputRef.current?.click()}
              >
                <Img src={imgUrl ? 'btn_modify.png' : '/btn_add.png'} alt="사진추가버튼" w="64px" h="64px" bg="none" />
              </Button>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    const file = e.target.files[0];
                    HandleImageUpload(id as string, file, setNewImage);
                  }
                }}
              />
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
              <Text w="588px" minH="41px" color="#92400E" fontWeight="bold" alignItems="center" justifyContent="center">
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
                placeholder={contents as string}
                value={newMemo}
                onChange={(e) => setMemo(e.target.value)}
              />
            </Box>
          </Box>
        </Box>
        <Box className={styles.btns}>
          <Flex pt="20px">
            <Spacer />
            <Button
              bg="none"
              _hover={{ background: 'none' }}
              p="0"
              onClick={() => {
                UpdateItem(
                  id as string,
                  (newName.length === 0 ? title : newName) as string,
                  (newMemo.length === 0 ? contents : newMemo) as string,
                  (newImage?.length === 0 ? imgUrl : newImage) as string,
                );
              }}
            >
              <Img
                src={newMemo.length === 0 ? '/btn_confirm_deactiv.png' : '/btn_confirm_inactiv.png'}
                alt="수정 버튼"
                w="168px"
                h="56px"
                mr="16px"
              />
            </Button>
            <Button bg="none" _hover={{ background: 'none' }} p="0" onClick={() => DeleteItem(id as string)}>
              <Img src="/btn_delete.png" alt="삭제 버튼" w="168px" h="56px" />
            </Button>
          </Flex>
        </Box>
      </Box>
    </ServiceLayout>
  );
};

export default Detail;
