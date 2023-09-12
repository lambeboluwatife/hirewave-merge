import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import {
  Card,
  CardDescription,
  CardTitle,
  TextWrapper,
} from "./question.style";

const Accordion = ({ title, description }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Card onClick={() => setIsActive(!isActive)}>
      <TextWrapper>
        <CardTitle>{title}</CardTitle>
        {isActive && <CardDescription>{description}</CardDescription>}
      </TextWrapper>
      <div>{isActive ? <BsChevronUp /> : <BsChevronDown />}</div>
    </Card>
  );
};

export default Accordion;
