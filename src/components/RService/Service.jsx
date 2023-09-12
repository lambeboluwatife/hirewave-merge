import macbook from "../../assets/macbook.jpg";
import {
  CardButton,
  CardList,
  CardMenu,
  CardTitle,
  ServiceBox,
  ServiceContainer,
  ServiceImg,
  ServiceTextWrapper,
  Title,
} from "./Service.style";

const Service = () => {
  return (
    <ServiceContainer>
      <ServiceBox>
        <ServiceImg src={macbook} />
        <ServiceTextWrapper>
          <CardTitle>Our Services</CardTitle>
          <CardMenu>
            <CardList>CV/ Resume Writing</CardList>
            <CardList>Linkedln Optimization</CardList>
            <CardList>Resume Review & Interview Coaching</CardList>
            <CardList>Talent Matching</CardList>
            <CardList>Internship Programs</CardList>
          </CardMenu>
          <CardButton>Contact Us Now</CardButton>
        </ServiceTextWrapper>
      </ServiceBox>
    </ServiceContainer>
  );
};

export default Service;
