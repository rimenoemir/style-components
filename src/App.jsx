import React from "react";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import { StyledContainer } from "./components/styled";
import { Button } from "./components/button";
import {
  CoolButton,
  StrongButton,
  SubmitButton,
} from "./components/button/Button.styled";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
from{
  transform: rotate(0deg)
}
to{
  transform: rotate(360deg)
}
`;

const CanadaIcon = styled(FaCanadianMapleLeaf)`
  font-size: 40px;
  animation: ${rotate} 3s linear infinite;
  color: #e74c3c;
`;

const StyledImg = styled.img`
  width: 100%;
  padding: 4px;
  border: 1px solid #bdc3c7;
  border-radius: 4px;
  &:hover {
    animation: ${rotate} 10s linear infinite;
  }
`;

function App() {
  return (
    <>
      <StyledContainer>
        <StyledImg src="https://picsum.photos/id/35/1200/300" alt="" />
        <hr />
        <CanadaIcon></CanadaIcon>
        <h1>styled component uygulandı</h1>
        <Button $primary className="brn mr-50">
          Button
        </Button>{" "}
        ferhat gözüpek
        <br />
        <StrongButton $primary>Strong Button</StrongButton>
        <br />
        <CoolButton as="a" href="https:google.com" target="blank">
          Cool button
        </CoolButton>
        <br />
        <SubmitButton $primary>Submit Button</SubmitButton>
      </StyledContainer>
    </>
  );
}

export default App;
