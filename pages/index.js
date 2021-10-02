import styled from "styled-components";
import Header from "../components/Header";
import Todo from "../components/todo/Todo";
import { Button } from "@chakra-ui/react";

function TodoPage() {
  return (
    <>
      <Header />
      <Todo />
    </>
  );
}

export default TodoPage;
