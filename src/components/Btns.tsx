import React from "react";
import styled from "styled-components";

export default function Btns() {
  return (
    <>
      <BtnInputContainer>
        <form id="form" action="#">
          <div className="inputBox">
            <Input
              type="text"
              name=""
              id="email"
              placeholder="Enter your email"
            />
            <span id="text"></span>
          </div>
        </form>

        <Btn>Get Started For Free</Btn>
      </BtnInputContainer>
    </>
  );
}

const BtnInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  font-size: 10px;
  @media (min-width: 900px) {
    width: 480px;
  }
`;

const Input = styled.input`
  height: 32px;
  border-radius: 3.13px;
  border: 1px solid;
  margin-bottom: 16px;
  width: 100%;
`;

const Btn = styled.div`
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2f65f8;
  border-radius: 3.13px;
  color: white;
  cursor: pointer;
  transition: 0.3s;
  @media (min-width: 900px) {
    width: 200px;
  }
  &:hover {
    background-color: #6c9bff;
  }
`;
