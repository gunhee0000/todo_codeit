import { Box, Button, Img } from '@chakra-ui/react';
import axios, { AxiosResponse } from 'axios';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { items } from '@/models/items';
import { TodoEmpty } from './todoEmpty';
import { TenantId } from '@/pages/api/ctrl/tenantId';
import { GetItem } from '@/pages/api/item.get';

const TodoItems: NextPage = function () {
  const [todoItems, setTodoItems] = useState<items[]>([]);
  const tenantId = TenantId;
  const router = useRouter();

  /** 목록 로딩 */
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const resp: AxiosResponse<items[]> = await axios.get(
          `https://assignment-todolist-api.vercel.app/api/${tenantId}/items`,
        );
        const filteredItems = resp.data
          .filter((item) => !item.isCompleted) // isCompleted가 false인 데이터만 필터링
          .sort((a, b) => a.id - b.id); // id를 기준으로 오름차순 정렬
        setTodoItems(filteredItems); // 상태에 데이터 저장
        // console.log(resp.data);
      } catch (error) {
        console.error('목록을 불러오지 못했습니다.', error);
      }
    };

    fetchItems();
  }, []); // 컴포넌트가 마운트될 때만 실행

  // isCompleted를 true로 업데이트
  const complete = async (id: number) => {
    try {
      await axios.patch(
        `https://assignment-todolist-api.vercel.app/api/${tenantId}/items/${id}`,
        { isCompleted: true },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      // 완료된 아이템을 제거하고 상태 업데이트
      // setTodoItems((prevItems) => prevItems.filter((item) => item.id !== id));
      window.location.reload();
    } catch (error) {
      console.error(`정보를 불러오지 못했습니다 id: ${id}:`, error);
    }
  };

  const navToDetail = async (item: items) => {
    const data = await GetItem(item.id);
    router.push({
      pathname: `/${item.name}`,
      query: {
        id: data.id,
        title: data.name,
        contents: data.memo,
        imgUrl: data.imageUrl,
        isCompleted: data.isCompleted,
      },
    });
  };

  if (todoItems.length === 0) {
    return <TodoEmpty />;
  }
  return (
    <Box>
      {todoItems.map((item) => (
        <Box
          key={item.id}
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          p="10px 15px"
          border="2px solid #000"
          borderRadius="25px"
          bgColor="#FFFFFF"
          w="100%"
          h="50px"
          gap="16px"
          mt="10px"
        >
          <Button bgColor="#FFFFFF" _hover={{ background: 'none' }} p="0" onClick={() => complete(item.id)}>
            <Img src={item.isCompleted ? '/icon_done.png' : '/icon_todo.png'} alt="아이콘" w="32px" h="32px" />
          </Button>
          <Button bgColor="#FFFFFF" _hover={{ background: 'none' }} p="0" onClick={() => navToDetail(item)}>
            {item.name}
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default TodoItems;
