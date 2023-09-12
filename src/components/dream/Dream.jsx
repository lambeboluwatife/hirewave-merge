import jobBg from "../../assets/jobBg.png";
import {
  ButtonWrapper,
  Container,
  DreamBg,
  DreamContent,
  DreamTitle,
  FieldButton,
  FieldContainer,
  FieldInput,
  ImageBg,
  InputFieldWrapper,
  Label,
  Media,
  MediaInput,
} from "./dream.style";

const Dream = () => {
  return (
    <Container>
      <DreamBg>
        <ImageBg src={jobBg} />
      </DreamBg>
      <DreamContent>
        <DreamTitle>Find your dream job</DreamTitle>
        <FieldContainer>
          <InputFieldWrapper>
            <div>
              <Label>What</Label>
            </div>
            <FieldInput type="text" placeholder=" e.g “product designer”" />
            <MediaInput
              type="text"
              placeholder=" What e.g “product designer”"
            />
          </InputFieldWrapper>
          <Media>
            <InputFieldWrapper>
              <div>
                <Label>Where</Label>
              </div>
              <FieldInput type="text" placeholder="e.g “lagos”" />
            </InputFieldWrapper>
          </Media>
          <ButtonWrapper>
            <FieldButton>Search</FieldButton>
          </ButtonWrapper>
        </FieldContainer>
      </DreamContent>
    </Container>
  );
};

export default Dream;
