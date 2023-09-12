import React from "react";
import { Box, Card, CardText, TContainer, Title } from "./topic.style";
import { helpOptions } from "../../data/text";

const Topic = () => {
  return (
    <TContainer>
      <Title>Help Topics</Title>
      <Box>
        {helpOptions.map((option, index) => (
          <Card key={index}>
            <CardText>{option.name}</CardText>
          </Card>
        ))}
      </Box>
    </TContainer>
  );
};

export default Topic;
