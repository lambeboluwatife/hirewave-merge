import sketch from "../../assets/EcoSketch.png";
import {
  BlogButton,
  BlogCardWrapper,
  BlogContainer,
  Card,
  CardImg,
  CardPara,
  CardTextWrapper,
  CardTitle,
  LeftBox,
  LeftImg,
  LeftPara,
  LeftTitle,
  MoBlogWrapper,
  ParaSpan,
  Paragraph,
  RightBox,
  SpanBtn,
  Title,
  TitleBox,
  ViewButton,
} from "./blog.style";
import { blogOption } from "../../data/text";

const Blog = () => {
  return (
    <BlogContainer>
      <TitleBox>
        <Title>Blog</Title>
        <Paragraph>
          Explore insightful articles on career growth, job hunting tips,
          interview strategies, and workplace success to boost your professional
          journey.
        </Paragraph>
        <ViewButton>View All</ViewButton>
      </TitleBox>
      <BlogCardWrapper>
        <LeftBox>
          <LeftImg src={sketch} />
          <LeftTitle>
            Mastering your Job Search: The Ultimate Guide to Landing Your Dream
            Job.
          </LeftTitle>
          <LeftPara>
            In today’s competitive job market, finding the perfect job can be a
            daunting task. However, with the right strategies...
            <SpanBtn>read more </SpanBtn>
          </LeftPara>
        </LeftBox>
        <RightBox>
          {blogOption.map((option, index) => (
            <Card key={index}>
              <CardImg src={option.img} />
              <CardTextWrapper>
                <CardTitle>{option.title}</CardTitle>
                <CardPara>{option.description}</CardPara>
              </CardTextWrapper>
            </Card>
          ))}
        </RightBox>
      </BlogCardWrapper>
      <MoBlogWrapper>
        <Card>
          <CardImg src={sketch} />
          <CardTextWrapper>
            <CardTitle>Mastering your Job Search</CardTitle>
            <CardPara>
              In today’s competitive job market, finding the perfect....
              <ParaSpan>read more</ParaSpan>
            </CardPara>
          </CardTextWrapper>
        </Card>
        {blogOption.map(
          (option, index) =>
            index <= 1 && (
              <Card key={index}>
                <CardImg src={option.img} />
                <CardTextWrapper>
                  <CardTitle>{option.title}</CardTitle>
                  <CardPara>
                    {option.mobDescription} <ParaSpan>read more</ParaSpan>
                  </CardPara>
                </CardTextWrapper>
              </Card>
            )
        )}
      </MoBlogWrapper>
      <BlogButton show={1}>View All</BlogButton>
    </BlogContainer>
  );
};

export default Blog;
