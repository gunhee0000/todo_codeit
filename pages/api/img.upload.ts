import axios from 'axios';

export const ImgUpload = async (id: string, url: string) => {
  if (!url || url.trim().length === 0) {
    console.error('Invalid ImageUrl:', url);
    throw new Error('사진이 없로드 되지 않았습니다.');
  }

  const tenantId = 'girin';
  const req: Record<string, any> = {
    url: url.trim(),
  };

  console.log('Request payload:', req);

  try {
    const response = await axios.post(`https://assignment-todolist-api.vercel.app/api/${tenantId}/images/upload`, req, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    window.location.reload();
    return response.data; // 응답 데이터 반환
  } catch (err: any) {
    console.error('Error occurred:', err.response?.data || err.message); // 에러 로그 출력
  }
};
