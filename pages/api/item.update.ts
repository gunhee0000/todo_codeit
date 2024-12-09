import axios from 'axios';
import router from 'next/router';

export const UpdateItem = async (id: string, name: string, memo: string) => {
  if (!id) {
    // eslint-disable-next-line no-alert
    alert('수정할 데이터를 찾을 수 없습니다.');
    return;
  }

  const tenantId = 'girin';
  const req = {
    name,
    memo,
  };

  try {
    await axios.patch(`https://assignment-todolist-api.vercel.app/api/${tenantId}/items/${id}`, req, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(req);
    // eslint-disable-next-line no-alert
    alert('수정되었습니다.');
    router.push('/');
  } catch (error) {
    console.error('Failed to update item:', error);
    // eslint-disable-next-line no-alert
    alert('수정에 실패했습니다.');
  }
};
