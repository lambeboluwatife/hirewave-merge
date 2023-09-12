import React, { useState } from "react";
import {
  Box,
  QContainer,
  QWrapper,
  Title,
  TitleDes,
  TitleWrapper,
} from "./question.style";
import { accordionOption } from "../../data/text";
import Accordion from "./Accordion";

const Question = () => {
  return (
    <QContainer>
      <QWrapper>
        <TitleWrapper>
          <Title>Common Questions</Title>
          <TitleDes>Here you can find solutions to all your queries.</TitleDes>
        </TitleWrapper>
        <Box>
          {accordionOption.map((option, index) => (
            <Accordion
              key={index}
              title={option.title}
              description={option.description}
            />
          ))}
        </Box>
      </QWrapper>
    </QContainer>
  );
};

export default Question;
