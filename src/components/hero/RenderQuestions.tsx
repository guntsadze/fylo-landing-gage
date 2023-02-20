import React from "react";
import styled from "styled-components";
import Btns from "../Btns";

export default function RenderQuestions() {
  return (
    <QuestionsDivContainer>
      <Screen>
        <Title>Get early acces today</Title>
        <Par>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </Par>
      </Screen>
      <Btns />
    </QuestionsDivContainer>
  );
}

const Screen = styled.div``;

const QuestionsDivContainer = styled.div`
  height: 345px;
  background-color: #575988;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  border: 1px solid;
  @media (min-width: 700px) {
    justify-content: space-between;
    align-items: flex-start;
    justify-content: center;
    padding: 0 80px;
  }
  @media (min-width: 1200px) {
    flex-direction: initial;
    align-items: center;
    justify-content: space-between;
  }
`;

const Title = styled.h2`
  font-size: 18px;
  color: white;
  @media (min-width: 700px) {
    text-align: left;
    font-size: 32px;
  }
`;

const Par = styled.p`
  font-size: 14px;
  width: 276px;
  color: white;
  @media (min-width: 700px) {
    text-align: left;
    font-size: 16px;
    width: 533px;
  }
`;
