import styled from "styled-components";

export const CourseContainer = styled.div`
  display: block;
  text-align: center;
  background: #7291ff;
  padding: 35px 0;
  margin-top: -50px;

  @media screen and (max-width: 1024px) {
    margin-top: 0;
    padding: 12px 44px;
  }
`;

export const CoursePara = styled.p`
  margin: 0 auto;
  color: #eaf6ff;
  text-align: center;
  font-family: "Open Sans";
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%; /* 35px */

  @media screen and (max-width: 768px) {
    font-size: 16px;
    max-width: 310px;
  }
`;
