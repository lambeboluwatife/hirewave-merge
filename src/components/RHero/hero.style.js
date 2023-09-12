import styled from "styled-components";

export const HeroContainer = styled.div`
  /* top: -80px; */
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  padding-left: 100px;
  justify-content: space-between;
  align-items: center;
  height: 700px;
  /* z-index: -1; */
  gap: 79px;

  @media screen and (max-width: 1280px) {
    padding-left: 50px;
  }
  @media screen and (max-width: 1024px) {
    gap: 20px;
    height: auto;
  }

  @media screen and (max-width: 768px) {
    display: block;
    margin: 55px 32px 14px;
    padding: 0;
  }

  @media screen and (max-width: 640px) {
    display: block;
    top: 0;
    height: auto;
    /* padding-left: 32px; */
  }
`;

export const HeroImg = styled.img`
  position: absolute;
  display: flex;
  top: 0;
  right: 0;
  max-width: 630px;
  max-height: 803px;
  width: 100%;
  height: 100%;
  z-index: -1;
  justify-self: end;

  @media screen and (max-width: 1280px) {
    width: 80%;
    max-width: 500px;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 100%;
    max-width: 550px;
    max-height: 700px;
    position: static;
    align-self: flex-start;
  }

  @media screen and (max-width: 768px) {
    max-height: 550px;
    max-width: 430px;
    margin: 0 auto;
  }
`;

export const HeroContent = styled.div`
  max-width: 660px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;

  @media screen and (max-width: 1280px) {
    margin-right: 16px;
  }

  @media screen and (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 58px;
  }
`;

export const HeroH1 = styled.h1`
  color: #020c18;
  font-family: "Open Sans";
  font-size: 64px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%; /* 80px */

  @media screen and (max-width: 1280px) {
    color: #020c18;
    font-size: 48px;
    line-height: normal;
  }

  @media screen and (max-width: 1024px) {
    color: #020c18;
    font-size: 32px;
    line-height: normal;
  }

  @media screen and (max-width: 768px) {
    font-size: 48px;
    line-height: 125%;
  }

  @media screen and (max-width: 640px) {
    color: #020c18;
    font-size: 32px;
    line-height: normal;
  }
`;

export const HeroPara = styled.p`
  color: #6d6d6d;

  /* Body/p1-reg */
  font-family: Nunito;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 24px;
  max-width: 462px;

  @media screen and (max-width: 1024px) {
    font-size: 18px;
    line-height: normal;
  }

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 640px) {
    font-size: 16px;
    line-height: normal;
  }
`;

export const FormBox = styled.form`
  max-width: 373px;
  margin-top: 48px;
  position: relative;
  border: 0.5px solid #020c18;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    max-width: 500px;
    width: 85%;
    /* margin-bottom: 58px; */
  }
`;

export const FormInput = styled.input`
  padding: 12px 15px;
  font-family: Nunito;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  border: 0;
  outline: 0;
  width: 100%;

  &::placeholder {
    color: rgba(109, 109, 109, 0.37);
  }
`;

export const FormButton = styled.button`
  border-radius: 10px;
  color: #fff;
  border: 0;
  background: #4d73f8;
  padding: 12px 18px;
  position: absolute;
  bottom: 2.5px;
  right: 2.5px;
  z-index: 1;
  font-size: 20px;
  cursor: pointer;
`;
