import React from "react";
import { img } from "../../images";
import styled from "styled-components";

export default function RenderSectionHero() {
  return (
    <>
      {/* <SecTionImg src={img.bgCurveMobile} alt="curve" /> */}
      <ScreenBg src={img.bgCurveDesktop} />
      <SectionHero>
        <Ilustration src={img.ilustrationTwo} alt="ilustration" />
        <Screen>
          <Title>Stay productive, wherever you are</Title>
          <Par>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </Par>
          <ParPar>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required!
          </ParPar>
          <BtnContainer>
            <Arr>
              <Btn>See how Fylo Works</Btn>
              <Arrow src={img.iconArrow} alt="arrow" />
            </Arr>
            <Rectangle></Rectangle>
          </BtnContainer>
          <AvatarCardContainer>
            <Quotes src={img.iconQuites} alt="quotes" />
            <AvatarP>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </AvatarP>
            <InformationContainer>
              <AavatarImg src={img.avatar} alt="avatar" />
              <User>
                <UserN>Kyle Burton</UserN>
                <Inf>Founder & CEO, Huddle</Inf>
              </User>
            </InformationContainer>
          </AvatarCardContainer>
        </Screen>
      </SectionHero>
    </>
  );
}

const Screen = styled.div`
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  @media (max-width: 1280px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const ScreenBg = styled.img`
  width: 100%;
  display: block;
`;

// const SecTionImg = styled.img`
//   filter: brightness(0.9);
//   width: 375px;
//   @media (min-width: 500px) {
//     display: none;
//   }
// `;

const SectionHero = styled.section`
  background-color: #f8f8fe;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  @media (min-width: 500px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: 0 80px;
  }
  @media (max-width: 1280px) {
    flex-direction: column;
  }
`;

const Ilustration = styled.img`
  width: 320px;
  height: 241px;
  margin: 60px 28px 87px 2px;
  @media (min-width: 500px) {
    width: 542px;
    height: 409px;
  }
`;

const Title = styled.h2`
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  color: #07043b;
  @media (min-width: 500px) {
    text-align: left;
    font-size: 40px;
  }
`;

const Par = styled.p`
  color: #615f7e;
  width: 364px;
  @media (min-width: 500px) {
    text-align: left;
    font-size: 16px;
    width: 529px;
  }
`;

const ParPar = styled.p`
  color: #615f7e;
  width: 348px;
  @media (min-width: 500px) {
    text-align: left;
    font-size: 16px;
    width: 529px;
  }
`;

const BtnContainer = styled.div`
  margin: 40px 0;
`;

const Arr = styled.div`
  display: flex;
  align-items: center;
`;
const Btn = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  color: #3da08f;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: #71dfcc;
  }
`;

const Arrow = styled.img`
  margin-left: 8px;
`;

const Rectangle = styled.div`
  width: 169px;
  height: 1px;
  background-color: #3da08f;
`;

const AvatarCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 169.1px;
  background-color: white;
  border-radius: 3.93px;
  margin: 0 48px 82px 48px;
  padding-left: 25px;
  padding-top: 20px;
  box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
  @media (min-width: 500px) {
    margin: 0 48px 82px 0px;
  }
`;

const Quotes = styled.img`
  width: 14px;
`;

const AvatarP = styled.p`
  text-align: left;
  width: 221.3px;
  font-size: 10px;
`;

const InformationContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;

const AavatarImg = styled.img`
  width: 24px;
  border-radius: 50%;
  margin-right: 8px;
`;
const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const UserN = styled.div`
  font-size: 9px;
`;
const Inf = styled.div`
  font-size: 6px;
`;
