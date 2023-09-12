import styled from "styled-components";

export const ServiceContainer = styled.div`
  background: rgba(234, 246, 255, 0.53);
  text-align: center;
  padding: 82px 100px;

  @media screen and (max-width: 1280px) {
    padding: 40px 50px;
    text-align: left;
  }

  @media screen and (max-width: 768px) {
    display: block;
    padding: 14px 30px 37px;
  }
`;
export const Title = styled.h3`
  color: #090020;
  /* Heading/h3 */
  font-family: "Open Sans";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%; /* 30px */

  @media screen and (max-width: 1024px) {
    line-height: normal;
  }
`;

export const ServiceBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: start;
  gap: 44px;
  align-items: center;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "image";
  }
`;

export const ServiceImg = styled.img`
  width: 100%;
  max-width: 503px;

  @media screen and (max-width: 600px) {
    grid-area: image;

    margin: 0 auto;
  }
`;

export const ServiceTextWrapper = styled.div`
  text-align: left;

  @media screen and (max-width: 600px) {
    grid-area: header;
  }
`;

export const CardTitle = styled.h5`
  color: #020c18;
  /* Heading/h3 */
  font-family: Open Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 24px;

  @media screen and (max-width: 1024px) {
    line-height: normal;
  }
`;

export const CardMenu = styled.ul`
  list-style-type: disc;
  margin-left: 24px;
  margin-bottom: 48px;

  @media screen and (max-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const CardList = styled.li`
  color: #6d6d6d;
  font-family: Nunito;
  font-size: 20px;
  font-weight: 400;
  line-height: 150%; /* 30px */

  @media screen and (max-width: 1024px) {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
  }
`;

export const CardButton = styled.button`
  border-radius: 10px;
  background: #4d73f8;
  display: inline-flex;
  padding: 12px 32px;
  justify-content: center;
  align-items: center;
  color: #fff;
  border: 0;
  /* Body/p1-reg */
  font-family: Nunito;
  font-size: 20px;
  font-weight: 400;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #4d73f8;
    border: 1px solid #4d73f8;
    background-color: #fff;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
    padding: 6px 12px;
  }
`;
