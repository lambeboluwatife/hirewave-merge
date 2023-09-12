import { GoSearch } from "react-icons/go";
import {
  FormBox,
  FormButton,
  FormInput,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroImg,
  HeroPara,
} from "./hero.style";
import destination from "../../assets/destination.png";

const Hero = () => {
  return (
    <>
      <HeroContainer>
        <HeroContent>
          <HeroH1>Empowering your journey to Professional Success</HeroH1>
          <HeroPara>
            At Hirewave, we care about your journey. Explore our curated
            resources to enhance your job search and career growth.
          </HeroPara>
          <FormBox>
            <FormInput type="text" placeholder="Search Topics, Keywords..." />
            <FormButton>
              <GoSearch />{" "}
            </FormButton>
          </FormBox>
        </HeroContent>
        <HeroImg src={destination} alt="frame" />
      </HeroContainer>
    </>
  );
};

export default Hero;
