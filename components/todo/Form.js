import { useState } from "react";
import css from "styled-jsx/css";
import { Input, Button, FormControl, Box, useToast } from "@chakra-ui/react";

export default function Form({ pushTodo }) {
  const [newTodo, setNewTodo] = useState("");
  const addToast = useToast();

  const changeInputText = (e) => {
    setNewTodo(e.target.value);
  }; //handleChange

  const submitItem = (e) => {
    e.preventDefault();
    pushTodo(newTodo);
    setNewTodo("");
    addToast({
      duration: 3000,
      isClosable: true,
      fontSize: 50,
      render: () => (
        <Box color="white" p={7} bg="teal.300">
          할 일 추가 완료!
        </Box>
      ),
    });
  };

  return (
    <form onSubmit={submitItem} className="Form">
      <Input
        autoFocus
        w="80%"
        variant="flushed"
        placeholder="할 일을 입력한 후, 엔터키를 누르세요."
        value={newTodo}
        onChange={changeInputText}
      />
      <Button
        type="submit"
        bg="pink.200"
        marginLeft="1rem"
        _hover={{ bg: "pink.300" }}
        _active={{ bg: "pink.500" }}
      >
        추가
      </Button>
      <style jsx>{style}</style>
    </form>
  );
}

const style = css`
  .Form {
    width: 100%;
    display: flex;
    margin: 1rem 0;
    padding: 1rem;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;
