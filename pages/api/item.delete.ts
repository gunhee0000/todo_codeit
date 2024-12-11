import axios from 'axios';
import router from 'next/router';
import { TenantId } from './ctrl/tenantId';

export const DeleteItem = async (id: string) => {
  if (!id) {
    // eslint-disable-next-line no-alert
    alert('삭제할 데이터를 찾을 수 없습니다.');
    return;
  }

  const tenantId = TenantId;
  try {
    await axios.delete(`https://assignment-todolist-api.vercel.app/api/${tenantId}/items/${id}`);
    // eslint-disable-next-line no-alert
    alert('삭제되었습니다.');
    router.push('/');
  } catch (error) {
    console.error('Failed to delete item:', error);
    // eslint-disable-next-line no-alert
    alert('삭제에 실패했습니다.');
  }
};
