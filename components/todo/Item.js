import { MdDelete, MdCheck } from "react-icons/md";
import css from "styled-jsx/css";
import { Center } from "@chakra-ui/react";

export default function Item({ todoList, deleteTodo }) {
  const checkTodo = (event) => {
    const { style } = event.target.nextSibling;
    const { checked } = event.target;
    style.textDecoration = checked ? "line-through" : null;
    style.color = checked ? "gray" : null;
    style.fontStyle = checked ? " italic" : null;
  };

  return todoList.map((todo, index) => (
    <div key={todo.id} className="todoItemBlock">
      <Center>
        <input
          type="checkbox"
          id={index}
          onClick={checkTodo}
          className="CheckBox"
        />
        <label htmlFor={index} className="CheckLabel">
          <span className="CustomCheckBox" />
          {todo.value}
        </label>
        <button className="DeleteButton" onClick={() => deleteTodo(index)}>
          <MdDelete />
        </button>{" "}
        <style jsx>{style}</style>
      </Center>
    </div>
  ));
}

const style = css`
  .todoItemBlock {
    display: flex;
    width: 100%;
    align-items: center;
    height: fit-content;
    margin: 2rem;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 1rem;
  }

  .CheckBox {
    margin-right: 1rem;
    cursor: pointer;
    transform: scale(1.5);
  }

  .CheckLabel {
    margin-right: 1rem;
    cursor: pointer;
  }

  .DeleteButton {
    color: gray;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;
