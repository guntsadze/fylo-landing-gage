import React from "react";
import { img } from "../../images";
import styled from "styled-components";

export default function RenderHeroHeader() {
  return (
    <SectionHero>
      <HeroImg src={img.ilustrationOne} alt="ilustration-1" />
      <Screen>
        <Title>
          All your files in one secure location, accessible anywhere.
        </Title>
        <Par>
          Fylo stores your most important files in one secure location. Access
          them wherever you need, share and collaborate with friends, family,
          and co-workers.
        </Par>
        <BtnInputContainer>
          <Input type="email" placeholder="Enter your email" />
          <Btn>Get Started</Btn>
        </BtnInputContainer>
      </Screen>
    </SectionHero>
  );
}

const SectionHero = styled.section`
  margin: 35px 35px 90px 35px;
  display: flex;
  flex-direction: column;
  text-align: center;
  @media (min-width: 700px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    margin: 35px 80px 200px 80px;
  }
  @media (max-width: 1340px) {
    flex-direction: column;
    align-items: center;
  }
`;

const HeroImg = styled.img`
  width: 304px;
  height: 225px;
  @media (min-width: 700px) {
    width: 640px;
    height: 474px;
  }
`;

const Title = styled.h1`
  margin: 40px 0 24px 0;
  @media (min-width: 700px) {
    text-align: left;
    font-family: "Raleway", sans-serif;
    font-size: 40px;
    width: 571px;
  }
`;

const Par = styled.p`
  margin-bottom: 33px;
  @media (min-width: 700px) {
    text-align: left;
    width: 508px;
  }
`;

const BtnInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 700px) {
    flex-direction: row;
  }
`;

const Input = styled.input`
  height: 40px;
  border-radius: 3.13px;
  border: 1px solid;
  margin-bottom: 16px;
  @media (min-width: 700px) {
    width: 320px;
  }
`;

const Btn = styled.div`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2f65f8;
  border-radius: 3.13px;
  color: white;
  cursor: pointer;
  transition: 0.3s;
  @media (min-width: 500px) {
    width: 200px;
    margin-left: 16px;
  }
  &:hover {
    background-color: #6c9bff;
  }
`;

const Screen = styled.div`
  @media (min-width: 700px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
