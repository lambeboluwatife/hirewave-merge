import styled from "styled-components";

export const TContainer = styled.div`
  margin: 0 100px;
  text-align: left;

  @media screen and (max-width: 768px) {
    margin: 0 30px;
  }
`;

export const Title = styled.h3`
  color: #020c18;
  /* Heading/h3 */
  font-family: "Open Sans";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;
export const Box = styled.div`
  display: grid;
  margin: 45px 0 70px;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 24px;
  row-gap: 40px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 768px) {
    margin: 24px 26px 75px;
    grid-template-columns: 1fr 1fr;
    column-gap: 6px;
    row-gap: 12px;
  }

  @media screen and (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  display: grid;
  border-radius: 10px;
  width: 100%;
  padding: 16px;
  min-height: 134px;
  border: 0.5px solid #6d6d6d;
  background: rgba(234, 246, 255, 0.53);
  text-align: center;

  @media screen and (max-width: 768px) {
    border-radius: 5px;
    min-height: 47px;
    padding: 12px;
  }
`;

export const CardText = styled.h4`
  color: #020c18;
  text-align: center;
  /* Heading/h4 */
  font-family: "Open Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  align-self: center;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
