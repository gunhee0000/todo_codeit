import axios from 'axios';

export const AddItem = async (title: string) => {
  if (!title || title.trim().length === 0) {
    console.error('Invalid title:', title);
    throw new Error('할 일 제목은 필수입니다.');
  }

  const tenantId = 'girin'; // 고정된 tenantId
  const req: Record<string, any> = {
    name: title.trim(),
  };

  console.log('Request payload:', req); // 요청 데이터 출력

  try {
    const response = await axios.post(`https://assignment-todolist-api.vercel.app/api/${tenantId}/items`, req, {
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
