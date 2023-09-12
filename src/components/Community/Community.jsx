import React from "react";
import {
  Arrow,
  Card,
  CardImg,
  CardLink,
  CardPara,
  CardTitle,
  CardWrapper,
  ComContainer,
  HeaderWrapper,
  Paragraph,
  TextWrapper,
  Title,
} from "./community.style";
import { communityOptions } from "../../data/text";
import { BlogButton } from "../blog/blog.style";

const Community = () => {
  return (
    <ComContainer>
      <HeaderWrapper>
        <Title>Community</Title>
        <Paragraph>
          Join our vibrant community to connect, learn and grow together. Share
          ideas, ask questions and forge meaningful connections.
        </Paragraph>
      </HeaderWrapper>
      <CardWrapper>
        {communityOptions.map((option, index) => (
          <Card>
            <CardImg src={option.img} />
            <TextWrapper>
              <CardTitle>{option.title}</CardTitle>
              <CardPara>{option.description}</CardPara>
              <CardLink to="">
                Join Conversation <Arrow></Arrow>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="9"
                  viewBox="0 0 17 9"
                  fill="none"
                >
                  <path
                    d="M16.3536 4.85355C16.5488 4.65829 16.5488 4.34171 16.3536 4.14645L13.1716 0.964466C12.9763 0.769204 12.6597 0.769204 12.4645 0.964466C12.2692 1.15973 12.2692 1.47631 12.4645 1.67157L15.2929 4.5L12.4645 7.32843C12.2692 7.52369 12.2692 7.84027 12.4645 8.03553C12.6597 8.2308 12.9763 8.2308 13.1716 8.03553L16.3536 4.85355ZM0 5H16V4H0V5Z"
                    fill="#96B300"
                  />
                </svg>
              </CardLink>
            </TextWrapper>
          </Card>
        ))}
      </CardWrapper>
      <BlogButton>View all conversations</BlogButton>
    </ComContainer>
  );
};

export default Community;
