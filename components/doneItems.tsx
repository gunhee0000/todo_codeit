import { Box, Button, Img } from '@chakra-ui/react';
import axios, { AxiosResponse } from 'axios';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { items } from '@/models/items';
import { DoneEmpty } from './doneEmpty';
import { TenantId } from '@/pages/api/ctrl/tenantId';
import { GetItem } from '@/pages/api/item.get';

const TodoItems: NextPage = function () {
  const [todoItems, setTodoItems] = useState<items[]>([]);
  const tenantId = TenantId;
  const router = useRouter();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response: AxiosResponse<items[]> = await axios.get(
          `https://assignment-todolist-api.vercel.app/api/${tenantId}/items`,
        );
        const filteredItems = response.data.filter((item) => item.isCompleted).sort((a, b) => a.id - b.id);
        setTodoItems(filteredItems);
      } catch (error) {
        console.error('Failed to fetch items:', error);
      }
    };

    fetchItems();
  }, []); // 컴포넌트가 마운트될 때만 실행

  const undo = async (id: number) => {
    try {
      await axios.patch(
        `https://assignment-todolist-api.vercel.app/api/${tenantId}/items/${id}`,
        { isCompleted: false },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      // 완료된 아이템을 제거하고 상태 업데이트
      window.location.reload();
    } catch (error) {
      console.error(`Failed to update item with id ${id}:`, error);
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
    return <DoneEmpty />;
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
          bgColor="#DDD6FE"
          w="100%"
          h="50px"
          gap="16px"
          mt="10px"
          textDecoration="line-through"
        >
          <Button bgColor="#DDD6FE" _hover={{ background: 'none' }} p="0" onClick={() => undo(item.id)}>
            <Img src={item.isCompleted ? '/icon_done.png' : '/icon_todo.png'} alt="아이콘" w="32px" h="32px" />
          </Button>
          <Button bgColor="#DDD6FE" _hover={{ background: 'none' }} p="0" onClick={() => navToDetail(item)}>
            {item.name}
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default TodoItems;
