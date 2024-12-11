import axios from 'axios';
import { TenantId } from './ctrl/tenantId';

export const ImgUpload = async (id: string, image: File) => {
  const tenantId = TenantId;

  const req = new FormData();
  req.append('image', image);

  console.log('Request payload:', req);
  try {
    const resp = await axios.post(`https://assignment-todolist-api.vercel.app/api/${tenantId}/images/upload`, req, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log('Upload response data:', resp.data);
    const { url } = resp.data;

    if (!url) {
      throw new Error('이미지 URL이 응답에서 누락되었습니다.');
    }
    const response = await axios.patch(
      `https://assignment-todolist-api.vercel.app/api/${tenantId}/items/${id}`,
      { imageUrl: url },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    console.log('OK');
    return response.data;
  } catch (err: any) {
    console.error('Error occurred:', err.response?.data || err.message);
  }
};
