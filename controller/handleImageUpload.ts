/* eslint-disable no-alert */
import { ImgUpload } from '@/pages/api/img.upload';

export const HandleImageUpload = async (id: string, file: File, setNewImage: (url: string) => void): Promise<void> => {
  if (file.size > 5 * 1024 * 1024) {
    alert('이미지 크기는 5MB를 초과할 수 없습니다.');
    return;
  }

  try {
    const uploadedImageUrl = await ImgUpload(id, file); // 업로드 함수 호출
    setNewImage(uploadedImageUrl.imageUrl); // 업로드한 이미지 URL을 상태로 저장
    alert('이미지 업로드에 성공했습니다.');
  } catch (err) {
    alert('이미지 업로드에 실패했습니다.');
    console.log(err);
  }
};
