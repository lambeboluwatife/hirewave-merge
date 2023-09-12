import styled from "styled-components";

export const Container = styled.div`
  margin: 20px 100px;
  position: relative;
  justify-content: center;
  align-items: center;
  display: grid;
  height: 346px;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    height: 140px;
    margin: 24px 30px;
  }
`;
export const DreamBg = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  /* width: 100%; */
  height: 100%;
  overflow: hidden;
`;
export const ImageBg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -o-object-fit: cover;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    border-radius: 5px;
  }
`;

export const DreamContent = styled.div`
  max-width: 1240px;
  width: 100%;
  display: grid;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  z-index: 2;
  /* gap: 38px; */

  @media screen and (max-width: 974px) {
    gap: 12px;
    width: 100%;
  }
`;

export const DreamTitle = styled.h1`
  font-family: "Open Sans";
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%;
  color: #fff;
  justify-self: center;
  align-self: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const FieldContainer = styled.div`
  display: flex;
  border-radius: 10px;
  background: #090020;
  gap: 34px;
  flex-wrap: wrap;
  /* width: 100%; */
  max-width: 974px;
  align-items: center;
  padding: 12px 40px 33px 32px;
  justify-content: start;
  margin: 32px 24px 0;

  @media screen and (max-width: 974px) {
    display: grid;
    flex-direction: column;
    gap: 16px;
    margin: 18px 16px;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    display: grid;
    gap: 10px;
    padding: 12px 16px;
  }
`;

export const InputFieldWrapper = styled.div`
  /* display: grid; */
  /* max-width: 357px; */
  /* width: 100%; */

  /* @media screen and (max-width: 768px) {
    max-width: auto;
  } */
`;

export const Label = styled.label`
  font-family: Nunito;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  color: #fff;

  @media screen and (max-width: 974px) {
    display: none;
  }
`;

export const FieldInput = styled.input`
  border-radius: 10px;
  background: #fff;
  width: 360px;
  /* width: 100%; */
  padding: 12px 16px;
  height: 50px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MediaInput = styled.input`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    border-radius: 10px;
    background: #fff;
    width: 270px;
    /* min-width: 250px; */
    padding: 12px 16px;
    max-height: 30px;
  }
`;

export const ButtonWrapper = styled.div`
  height: 70px;
  display: flex;
  align-items: end;

  @media screen and (max-width: 974px) {
    height: 40px;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    max-height: 30px;
    max-width: 300px;
    width: 100%;
  }
`;

export const FieldButton = styled.button`
  display: inline-flex;
  padding: 12px 32px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: #4d73f8;
  transition: all 0.5s ease-in-out;
  color: #000;
  border: 0;
  outline: 0;
  /* align-self: center; */

  &:hover {
    border: 1px solid #4d73f8;
    background: #fff;
    transform: translateX(1.5);
    color: #4d73f8;
  }

  @media screen and (max-width: 974px) {
    height: 100%;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    max-width: 600px;
    width: 100%;
    padding: 0;
  }
`;

export const Media = styled.div`
  display: block;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
