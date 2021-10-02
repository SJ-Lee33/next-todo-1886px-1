import { WrapItem, Center, Heading } from "@chakra-ui/react";
import css from "styled-jsx/css";
export default function Header() {
  return (
    <WrapItem>
      <Center w="100%" h="7rem" bg="#00462a">
        <div className="header">Next.js로 만든 TO-DO APP</div>
        <style jsx>{style}</style>
      </Center>
    </WrapItem>
  );
}

const style = css`
  .header {
    font-size: 2rem;
    color: white;
  }
`;
