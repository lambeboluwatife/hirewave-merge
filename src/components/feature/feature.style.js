import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  align-items: start;
  gap: 24px;
  margin: 48px 100px;

  @media screen and (max-width: 1200px) {
    /* margin: 48px 50px; */
    grid-template-columns: 0.5fr 2.5fr;
  }

  @media screen and (max-width: 1024px) {
    display: block;
    margin: 48px 100px;
  }

  @media screen and (max-width: 768px) {
    display: block;
    margin: 0 30px;
  }
`;
export const FilterContainer = styled.div`
  border-radius: 10px;
  padding: 24px 24px 63px;
  width: 100%;
  box-sizing: border-box;
  /* max-width: 397px; */
  border: 0.5px solid rgba(109, 109, 109, 0.35);
  box-shadow: 0px 4px 4px 0px rgba(109, 109, 109, 0.09);

  @media screen and (max-width: 1200px) {
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const FeaturedContainer = styled.div`
  background: #fff;
`;

export const FilterTitle = styled.h2`
  color: #3e3e3e;
  font-family: "Open Sans";
  font-size: 32px;
  font-weight: 600;
  line-height: 125%; /* 40px */
  letter-spacing: -1.28px;
`;
export const FilterSpan = styled.span`
  font-size: 24px;
`;

export const FilterForm = styled.div`
  max-width: 331px;

  width: 100%;
  display: grid;
  gap: 24px;
`;
export const FilterSelect = styled.select`
  box-sizing: border-box;
  /* width: 331px; */
  /* flex-shrink: 0; */
  max-width: 320px;
  border: 0;
  color: #6d6d6d;
  background-color: #f6fbff;
  border-radius: 10px;
  padding: 15px 20px;
  margin-top: 38px;
  font-family: Nunito;
  font-size: 18px;
  font-weight: 400;
  line-height: 150%;
  /* appearance: none; */
`;

export const FilterText = styled.input`
  height: 57px;
  /* flex-shrink: 0; */
  max-width: 320px;
  background-color: #f6fbff;
  border-radius: 10px;
  padding: 15px 20px;
  outline: 0;
  border: 0;
  margin-top: 38px;
  font-family: Nunito;
  font-size: 18px;
  font-weight: 400;
  line-height: 150%;
`;

export const SearchTitle = styled.h3`
  color: #020c18;
  margin: 25px 23px 22px;
  /* Heading/h3 */
  font-family: Open Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%; /* 30px */

  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 18px;
    line-height: normal;
  }
`;
export const SearchWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 12px;
  row-gap: 24px;
  margin-left: 17px;
  margin-bottom: 70px;

  @media screen and (max-width: 1024px) {
    column-gap: 12px;
    row-gap: 24px;
    justify-content: center;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
    margin: 0 0 80px;
    row-gap: 12px;
    column-gap: 6px;
  }
`;

export const SearchLink = styled(Link)`
  border-radius: 10px;
  border: 1px solid #6d6d6d;
  padding: 10px 24px;
  color: #98aefa;
  /* Body/p1-reg */
  font-family: Nunito;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */

  @media screen and (max-width: 768px) {
    border-radius: 5px;
    font-size: 10px;
    font-weight: 400;
    line-height: normal;
    padding: 6px 8px;
  }
`;

export const FeaturedTitle = styled.h2`
  color: #3e3e3e;
  /* Heading/h2 */
  font-family: Open Sans;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%; /* 40px */
  letter-spacing: -1.28px;
`;

export const MoView = styled.p`
  display: none;
  color: #4d73f8;
  font-family: Nunito;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const FeaturedOptions = styled.div`
  display: grid;
  margin-top: 24px;
  gap: 24px;
  margin-bottom: 55px;

  @media screen and (max-width: 768px) {
    gap: 12px;
    margin-bottom: 75px;
  }
`;

export const FeaturedWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.07);

  @media screen and (max-width: 768px) {
    border-radius: 5px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
    padding: 12px 8px;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: start;
  margin-left: 37px;
  margin-top: 34px;
  gap: 31px;

  @media screen and (max-width: 768px) {
    /* display: none; */
    margin: 0;
  }
`;

export const LogoImg = styled.img`
  width: 80px;
  height: 80px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const TextWrapper = styled.div`
  display: grid;
  gap: 12px;
  margin-bottom: 36px;

  @media screen and (max-width: 768px) {
    margin: 0;
    gap: 5px;
  }
`;

export const LogoTitle = styled.h4`
  color: #3e3e3e;
  /* Heading/h4 */
  font-family: Open Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%; /* 22.5px */

  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: normal;
  }
`;

export const LogoParagraph = styled.p`
  color: rgba(9, 0, 32, 0.7);
  font-family: Nunito;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */

  @media screen and (max-width: 768px) {
    font-size: 12px;
    line-height: normal;
  }
`;

export const LogoDesWrapper = styled.div`
  display: flex;
  gap: 12px;

  @media screen {
    gap: 6px;
  }
`;

export const LogoDescripton = styled.p`
  color: #090020;
  padding: 2px 9px;
  border-radius: 10px;
  background: rgba(150, 179, 0, 0.5);
  font-family: Nunito;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */

  @media screen and (max-width: 768px) {
    padding: 2px 6px;
    font-size: 10px;
    line-height: normal;
  }
`;

export const RightWrapper = styled.div`
  display: grid;
  margin-right: 24px;
  justify-content: end;
  align-self: center;

  @media screen and (max-width: 768px) {
    margin: 0;
    gap: 9px;
  }
`;

export const SVG = styled.p`
  width: 24px;
  height: 24px;
  margin-bottom: 15px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Active = styled.p`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    color: #020c18;
    font-family: Nunito;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    /* align-self: flex-start; */
  }
`;

export const RightDate = styled.p`
  color: rgba(9, 0, 32, 0.7);
  /* Body/p2-reg */
  font-family: Nunito;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */

  @media screen and (max-width: 768px) {
    font-size: 10px;
    line-height: normal;
  }
`;

export const RightLocation = styled.p`
  color: #090020;
  /* Body/p2-reg */
  font-family: Nunito;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */

  @media screen and (max-width: 768px) {
    font-size: 10px;
    line-height: normal;
  }
`;

export const Wrapper = styled.div`
  margin: 40px auto 80px;
  justify-content: center;
  display: grid;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
