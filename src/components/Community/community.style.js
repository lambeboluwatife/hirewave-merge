import { Link } from "react-router-dom";
import styled from "styled-components";

export const ComContainer = styled.div`
  margin: 150px 100px;
  display: grid;
  gap: 48px;

  @media screen and (max-width: 1280px) {
    margin: 75px 50px;
  }
  @media screen and (max-width: 768px) {
    margin: 75px 30px;
  }
`;

export const HeaderWrapper = styled.div`
  max-width: 718px;
  display: grid;
  width: 100%;
  gap: 24px;
  align-self: center;
  justify-self: center;

  @media screen and (max-width: 768px) {
    max-width: 500px;
    gap: 12px;
  }
`;

export const Title = styled.h3`
  color: #020c18;
  text-align: center;

  /* Heading/h2 */
  font-family: "Open Sans";
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -1.28px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Paragraph = styled.p`
  color: #6d6d6d;
  text-align: center;
  /* Body/p1-reg */
  font-family: Nunito;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* justify-content: space-between; */
  /* align-items: center; */
  gap: 24px;
  margin-bottom: 90px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 58px;
  }

  @media screen and (max-width: 680px) {
    grid-template-columns: 1fr;
    margin: 0 44px 24px;
  }
`;
export const Card = styled.div`
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(9, 0, 32, 0.1);
  display: grid;
  gap: 12px;
  text-align: left;
  /* align-items: normal; */
`;

export const CardImg = styled.img`
  width: 100%;
  display: flex;
  border-radius: 12px 12px 0 0;
  align-self: flex-start;
`;

export const TextWrapper = styled.div`
  padding: 0 24 12px;
  display: grid;
  gap: 12px;
  align-self: flex-start;

  padding: 0 24px 12px;
`;

export const CardTitle = styled.h4`
  color: #020c18;

  /* Heading/h4 */
  font-family: "Open Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const CardPara = styled.p`
  color: #6d6d6d;

  /* Body/p2-reg */
  font-family: Nunito;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const CardLink = styled(Link)`
  color: #020c18;
  font-family: Nunito;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 21px */
  cursor: pointer;
`;
export const Arrow = styled.span`
  stroke-width: 1px;
  stroke: #96b300;
`;
