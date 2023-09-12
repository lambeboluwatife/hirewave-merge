import styled from "styled-components";

export const BlogContainer = styled.div`
  margin: 120px 100px 114px;
  text-align: center;
  gap: 48px;

  @media screen and (max-width: 1280px) {
    margin: 80px 50px;
    text-align: left;
  }

  @media screen and (max-width: 768px) {
    margin: 40px 30px 40px;
    text-align: left;
  }
`;
export const TitleBox = styled.div`
  display: grid;
  text-align: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;

export const Title = styled.h2`
  color: #090020;
  margin-bottom: 24px;
  /* Heading/h2 */
  font-family: "Open Sans";
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%; /* 40px */
  letter-spacing: -1.28px;

  @media screen and (max-width: 768px) {
    text-align: left;
    margin-bottom: 0;
  }
`;

export const ViewButton = styled.button`
  display: none;
  background-color: #fff;
  /* outline: 0; */
  border: 0;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
    color: #4d73f8;
    font-family: Nunito;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const Paragraph = styled.p`
  max-width: 704px;
  color: #6d6d6d;
  text-align: center;
  /* Body/p1-reg */
  font-family: Nunito;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const BlogCardWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  margin-top: 75px;
  margin-bottom: 90px;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const MoBlogWrapper = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 50px;
    margin-bottom: 60px;
    gap: 16px;
    justify-content: space-between;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const LeftBox = styled.div`
  display: grid;
  gap: 12px;
  text-align: left;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const RightBox = styled.div`
  display: grid;
  gap: 12px;
  align-items: center;

  @media screen and (max-width: 1024px) {
    /* grid-template-columns: repeat(2, 1fr); */
  }
`;

export const LeftImg = styled.img`
  max-width: 608px;
  max-height: 322px;
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 12px;
`;

export const LeftTitle = styled.h3`
  color: #020c18;
  /* Heading/h3 */
  font-family: Open Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  max-width: 607px;
`;
export const LeftPara = styled.p`
  color: #6d6d6d;
  max-width: 578px;
  /* Body/p1-reg */
  font-family: Nunito;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  /* min-width: 350px; */
`;

export const SpanBtn = styled.span`
  color: #96b300;
  /* Body/p2-reg */
  font-family: Nunito;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;

export const Card = styled.div`
  display: flex;
  gap: 24px;
  justify-content: end;
  align-items: center;

  @media screen and (max-width: 768px) {
    justify-content: start;
  }
`;

export const CardImg = styled.img`
  max-width: 241px;
  width: 100%;
  display: flex;
  border-radius: 12px;

  @media screen and (max-width: 760px) {
    max-width: 241px;
    border-radius: 8px;
  }

  @media screen and (max-width: 1024px) {
    max-width: 150px;
    border-radius: 8px;
  }

  @media screen and (max-width: 680px) {
    max-width: 150px;
    border-radius: 8px;
  }
`;

export const CardTextWrapper = styled.div`
  display: grid;
  gap: 12px;
  text-align: left;
`;

export const CardTitle = styled.h5`
  color: #020c18;
  /* Heading/h4 */
  font-family: Open Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media screen and (max-width: 680px) {
    font-size: 14px;
  }
`;

export const CardPara = styled.p`
  max-width: 280px;
  width: 100%;
  overflow: hidden;
  color: #6d6d6d;
  text-overflow: ellipsis;
  /* white-space: nowrap; */
  font-family: Nunito;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media screen and (max-width: 680px) {
    font-size: 12px;
  }
`;

export const BlogButton = styled.button`
  display: block;
  margin: 0 auto;
  background-color: #fff;
  padding: 12px 32px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #4d73f8;
  color: #4d73f8;
  font-family: Nunito;
  font-size: 18px;
  font-weight: 400;
  line-height: 150%;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #4d73f8;
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    display: ${({ show }) => (show ? "none" : "block")};
  }
`;

export const ParaSpan = styled.span`
  color: #96b300;
  font-family: Nunito;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
