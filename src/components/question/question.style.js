import styled from "styled-components";

export const QContainer = styled.div`
  padding: 80px;
  width: 100%;

  @media screen and (max-width: 768px) {
    padding: 56px 24px;
  }
`;
export const QWrapper = styled.div`
  padding: 0 46px;
  width: 100%;

  @media screen and (max-width: 768px) {
    padding: 0 12px;
    gap: 32px;
  }
`;

export const TitleWrapper = styled.div`
  margin: auto;
  display: grid;
  gap: 12px;
  max-width: 720px;
  width: 100%;
  margin-bottom: 56px;

  @media screen and (max-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const Title = styled.h1`
  color: #020c18;
  text-align: center;
  /* Heading/h1 */
  font-family: "Open Sans";
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media screen and (max-width: 768px) {
    font-size: 24px;
    line-height: 40px; /* 166.667% */
    letter-spacing: -0.24px;
  }
`;

export const TitleDes = styled.p`
  color: #6d6d6d;
  text-align: center;

  /* Body/p1-reg */
  font-family: Nunito;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 22px; /* 137.5% */
    letter-spacing: -0.16px;
  }
`;

export const Box = styled.div`
  margin: 0 auto;
  max-width: 740px;
  width: 100%;
  width: 100%;
  text-align: left;
`;

export const Card = styled.div`
  display: flex;
  gap: 16px;
  padding: 20px 0px;
  justify-content: space-between;
`;

export const TextWrapper = styled.div`
  display: grid;
  gap: 12px;
`;

export const CardTitle = styled.h4`
  color: #020c18;

  /* Heading/h4 */
  font-family: "Open Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media screen {
    font-size: 16px;
    line-height: 25px; /* 156.25% */
    letter-spacing: -0.16px;
  }
`;

export const CardDescription = styled.p`
  color: #6d6d6d;
  text-overflow: ellipsis;
  font-family: Nunito;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;

  @media screen {
    font-size: 12px;
    overflow: auto;
    line-height: 22px; /* 183.333% */
    letter-spacing: -0.12px;
  }
`;
