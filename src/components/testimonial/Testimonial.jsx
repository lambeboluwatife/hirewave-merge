import toju from "../../assets/toju.png";
import bubble from "../../assets/Chat Bubble Oval Quotation.png";
import {
  Bubble,
  CardDescription,
  CardHead,
  CardImg,
  CardName,
  CardTextWrapper,
  CardTitle,
  Heading,
  MobCard,
  TesCard,
  TesContainer,
} from "./testimonial.style";

const Testimonial = () => {
  return (
    <TesContainer>
      <Heading>Testimonials</Heading>
      <TesCard>
        <CardImg src={toju} alt="user photo" />
        <CardTextWrapper>
          <CardName>Alero Toju</CardName>
          <CardTitle>HR at Polished Beauty</CardTitle>
          <CardDescription>
            Thanks to Hirewave, I landed my dream job in no time. User-friendly
            interface, relevant listings, and constant updates made all the
            difference!
          </CardDescription>
        </CardTextWrapper>
        <Bubble src={bubble} alt="quotation" />
      </TesCard>
      <MobCard>
        <CardHead>
          <CardImg src={toju} alt="user photo" />
          <div>
            <CardName>Alero Toju</CardName>
            <CardTitle>HR at Polished Beauty</CardTitle>
          </div>
        </CardHead>
        <CardDescription>
          Thanks to Hirewave, I landed my dream job in no time. User-friendly
          interface, relevant listings, and constant updates made all the
          difference!
        </CardDescription>
      </MobCard>
    </TesContainer>
  );
};

export default Testimonial;
