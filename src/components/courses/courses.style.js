import styled from "styled-components";

export const CourseContainer = styled.div`
  margin-left: 100px;
  margin-bottom: 80px;
  text-align: left;

  @media screen and (max-width: 1280px) {
    margin-left: 50px;
  }

  @media screen and (max-width: 768px) {
    margin-left: 30px;
  }
`;

export const Heading = styled.h2`
  color: #020c18;

  /* Heading/h2 */
  font-family: "Open Sans";
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -1.28px;

  @media screen and (max-width: 1024px) {
    font-size: 26px;
  }

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Description = styled.p`
  color: #6d6d6d;
  margin: 20px 0 48px;
  max-width: 632px;
  /* Body/p1-reg */
  font-family: Nunito;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media screen and (max-width: 1024px) {
    font-size: 18px;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Card = styled.div`
  display: grid;
  border: 1px solid rgba(2, 12, 24, 0.7);
  border-radius: 5px;
`;

export const CardImg = styled.img`
  max-height: 145px;
  max-width: 400px;
  width: 100%;
`;

export const TextWrapper = styled.div`
  padding: 16px;
  text-align: left;
`;

export const Title = styled.h4`
  color: #020c18;

  /* Heading/h4 */
  font-family: Open Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Amount = styled.p`
  color: #020c18;
  font-family: Nunito;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 24px */
`;

export const Para = styled.p`
  color: #6d6d6d;

  /* Body/p2-reg */
  font-family: Nunito;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
