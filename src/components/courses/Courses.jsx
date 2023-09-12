import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import {
  Amount,
  Card,
  CardImg,
  CourseContainer,
  Description,
  Heading,
  Para,
  TextWrapper,
  Title,
} from "./courses.style";
import { sliderSettings } from "../../utils/common";
import { courseOptions } from "../../data/text";

const Courses = () => {
  return (
    <CourseContainer>
      <Heading>Upskill with our courses</Heading>
      <Description>
        Stay ahead in your career. Explore our courses to enhance your expertise
        and stay competitive in today’s rapidly evolving job market.
      </Description>
      <Swiper {...sliderSettings}>
        {courseOptions.map((option, index) => (
          <SwiperSlide key={index}>
            <Card>
              <CardImg src={option.img} />
              <TextWrapper>
                <Title>{option.title}</Title>
                <Amount>{option.price}</Amount>
                <Para>{option.description}</Para>
              </TextWrapper>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </CourseContainer>
  );
};

export default Courses;
