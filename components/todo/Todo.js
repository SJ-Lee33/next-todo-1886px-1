import { useState } from "react";

import Item from "./Item";
import Form from "./Form";

import { useToast, Box } from "@chakra-ui/react";

export default function Todo() {
  const [id, setId] = useState(0);
  const [todoList, setTodoList] = useState([]);
  const deleteToast = useToast();

  const pushTodo = (value) => {
    const todos = todoList;
    const todo = { id, value };
    setId((current) => current + 1);
    todos.push(todo);
    setTodoList(todos);
  };

  const deleteTodo = (index) => {
    const todos = todoList.filter((todo, _index) => index !== _index);
    setTodoList(todos);
    deleteToast({
      duration: 2500,
      isClosable: true,
      fontSize: 50,
      render: () => (
        <Box color="white" p={7} bg="purple.300">
          할 일 삭제 완료!
        </Box>
      ),
    });
  };

  return (
    <Box margin="2rem" padding="2rem 0" borderRadius="md" bg="#FED7E2">
      <Form pushTodo={pushTodo} />
      <Item todoList={todoList} deleteTodo={deleteTodo} />
    </Box>
  );
}
