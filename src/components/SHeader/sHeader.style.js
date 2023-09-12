import styled from "styled-components";

export const HContainer = styled.div`
  text-align: center;
  margin: 60px 100px;
  border-bottom: 1px solid rgba(109, 109, 109, 0.7);

  @media screen and (max-width: 768px) {
    margin: 23px 30px;
  }
`;
export const Htitle = styled.h2`
  color: #020c18;
  font-family: "Open Sans";
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 12px;
  }
`;
