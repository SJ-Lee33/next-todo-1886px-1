import { useState } from "react";

import Item from "./Item";
import Form from "./Form";

import { Heading, Container, useToast, Box } from "@chakra-ui/react";

export default function Todo() {
  const [id, setId] = useState(0);
  const [todoList, setTodoList] = useState([]);

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
  };

  return (
    <>
      <Form pushTodo={pushTodo} />
      <Item todoList={todoList} deleteTodo={deleteTodo} />
    </>
  );
}
