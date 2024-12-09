import { Box, Button, Img } from '@chakra-ui/react';
import axios, { AxiosResponse } from 'axios';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { items } from '@/models/items';
import { TodoEmpty } from './todoEmpty';

const TodoItems: NextPage = function () {
  const [todoItems, setTodoItems] = useState<items[]>([]); // 상태로 아이템 관리
  const tenantId = 'girin'; // tenantId 고정

  /** 목록 로딩 */
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response: AxiosResponse<items[]> = await axios.get(
          `https://assignment-todolist-api.vercel.app/api/${tenantId}/items`,
        );
        const filteredItems = response.data
          .filter((item) => !item.isCompleted) // isCompleted가 false인 데이터만 필터링
          .sort((a, b) => a.id - b.id); // id를 기준으로 오름차순 정렬
        setTodoItems(filteredItems); // 상태에 데이터 저장
      } catch (error) {
        console.error('Failed to fetch items:', error);
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
      setTodoItems((prevItems) => prevItems.filter((item) => item.id !== id));
      window.location.reload();
    } catch (error) {
      console.error(`Failed to update item with id ${id}:`, error);
    }
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
          <Button bgColor="#FFFFFF" _hover="none" p="0" onClick={() => complete(item.id)}>
            <Img src={item.isCompleted ? '/icon_done.png' : '/icon_todo.png'} alt="아이콘" w="32px" h="32px" />
          </Button>
          <Button bgColor="#FFFFFF" _hover="none" p="0">
            {item.name}
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default TodoItems;
