import React from "react";
import { img } from "../../images";
import styled from "styled-components";

export default function RenderFooter() {
  return (
    <>
      <Footer>
        <Logo src={img.logo} alt="logo" />
        <PhoneContainer>
          <Screen>
            <Phone>
              <ImgPhone src={img.iconPhone} alt="phone" />
              <div>Phone:+12345678</div>
            </Phone>
            <Email>
              <ImgEmail src={img.iconEmail} alt="Email" />
              <div>Email:test@gmail.com</div>
            </Email>
          </Screen>

          <Ul>
            <Li>About Us</Li>
            <Li>Jobs</Li>
            <Li>Press</Li>
            <Li>Blog</Li>
          </Ul>
          <Ul>
            <Li>Contact Us</Li>
            <Li>Terms</Li>
            <Li>Privacy</Li>
          </Ul>
          <SocialContainer>
            <img src={img.facebook} alt="facebook" />
            <img src={img.twitter} alt="twitter" />
            <img src={img.instagram} alt="instagram" />
          </SocialContainer>
        </PhoneContainer>
      </Footer>
    </>
  );
}

const Screen = styled.div``;

const Footer = styled.section`
  background-color: #07043b;
  height: 590px;
  padding: 65px 0 0 40px;
  @media (min-width: 700px) {
    height: 391px;
    display: flex;
    align-items: center;
    position: relative;
    padding: 0 80px;
  }
`;

const PhoneContainer = styled.div`
  color: white;
  @media (min-width: 700px) {
    display: flex;
    align-items: flex-start;
    width: 100%;
    justify-content: space-between;
    margin-top: 7rem;
  }
`;

const Logo = styled.img`
  color: white;
  filter: invert(1);
  width: 150px;
  margin-bottom: 30px;
  @media (min-width: 500px) {
    position: absolute;
    bottom: 63%;
  }
`;

const Phone = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ImgPhone = styled.img`
  margin-right: 15px;
`;

const Email = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`;

const ImgEmail = styled.img`
  margin-right: 15px;
`;

const Ul = styled.ul`
  color: white;
  list-style: none;
  padding: 0;
  @media (min-width: 700px) {
    margin: 0;
  }
`;

const Li = styled.li`
  margin-bottom: 30px;
  transition: 0.3s;
  &:hover {
    color: #6c9bff;
    cursor: pointer;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;
