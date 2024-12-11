import axios from 'axios';
import { TenantId } from './ctrl/tenantId';

export const GetItem = async (id: number) => {
  const tenantId = TenantId;

  try {
    const resp = await axios.get(`https://assignment-todolist-api.vercel.app/api/${tenantId}/items/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return resp.data;
  } catch (err: any) {
    console.error('Error occurred:', err.resp?.data || err.message); // 에러 로그 출력
  }
};
