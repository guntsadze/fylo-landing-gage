import React from "react";
import { img } from "../../images";
import styled from "styled-components";

export default function RenderHeader() {
  return (
    <Header>
      <Logo src={img.logo} alt="Logo" />
      <Ul>
        <Li>Features</Li>
        <Li>Team</Li>
        <Li>Sign In</Li>
      </Ul>
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 24px 24px 0px 24px;
  @media (min-width: 700px) {
    margin: 65px 80px 100px 80px;
  }
`;

const Logo = styled.img`
  width: 80px;
  height: 24px;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
`;

const Li = styled.li`
  list-style-type: none;
  margin-left: 1rem;
`;
