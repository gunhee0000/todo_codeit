import axios from 'axios';
import { TenantId } from './ctrl/tenantId';
// import router from 'next/router';

export const UpdateItem = async (id: string, name: string, memo: string, imageUrl: string) => {
  if (!id) {
    // eslint-disable-next-line no-alert
    alert('수정할 데이터를 찾을 수 없습니다.');
    return;
  }

  const tenantId = TenantId;
  const req = {
    name,
    memo,
    imageUrl,
  };

  try {
    const resp = await axios.patch(`https://assignment-todolist-api.vercel.app/api/${tenantId}/items/${id}`, req, {
      headers: {
        'Content-Type': 'application/json',

        // const resp = await fetch(`https://assignment-todolist-api.vercel.app/api/${tenantId}/items/${id}`, {
        //   method: 'PATCH',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify(req),
        // });
      },
    });
    console.log('Memo value:', memo);
    console.log('Request Payload:', req);
    console.log('API Response:', resp.data);
    // eslint-disable-next-line no-alert
    alert('수정되었습니다.');
    // router.push('/');
  } catch (error) {
    console.error('Failed to update item:', error);
    // eslint-disable-next-line no-alert
    alert('수정에 실패했습니다.');
  }
};
