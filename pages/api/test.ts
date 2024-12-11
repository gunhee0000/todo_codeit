import axios from 'axios';
import { TenantId } from './ctrl/tenantId';
// import router from 'next/router';

export const Test = async (id: string) => {
  const tenantId = TenantId;

  try {
    const resp = await axios.get(`https://assignment-todolist-api.vercel.app/api/${tenantId}/items/${id}`);

    console.log('테스트 결과:', resp.data);
  } catch (error) {
    console.error('Failed to test:', error);
    // eslint-disable-next-line no-alert
    alert('error');
  }
};
