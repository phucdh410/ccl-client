import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import tw from "twin.macro";

import { css } from "styled-components/macro";
import { SectionHeading as StudentScore } from "../misc/Headings.js";
import { ReactComponent as ArrowLeftIcon } from "../../images/arrow-left-2-icon.svg";
import { ReactComponent as ArrowRightIcon } from "../../images/arrow-right-2-icon.svg";

import "slick-carousel/slick/slick.css";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const TestimonialSliderContainer = tw.div`mt-24`;
const TestimonialSlider = styled(Slider)``;
const Testimonial = tw.div`flex! flex-col items-center md:items-stretch md:flex-row md:justify-center outline-none`;
const ImageContainer = styled.div`
  ${tw`md:mx-3 lg:mx-6 w-2/3 md:w-6/12 rounded flex items-center max-w-xs md:max-w-none`}
  img {
    ${tw`rounded`}
  }
`;
const TheStudent = tw.h5`font-bold text-lg lg:text-xl xl:text-2xl text-primary-500`;

const SliderControlButtonContainer = styled.div`
  ${tw`absolute top-0 h-full flex items-end md:items-center z-20 p-8`}
  button {
    ${tw`text-secondary-500 hover:text-primary-500 focus:outline-none transition duration-300 transform hover:scale-125 transform -translate-y-2/3 md:translate-y-0`}
    svg {
      ${tw`w-8`}
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 50%;
      padding: 10px;
    }
  }
`;


const NextArrow = ({ currentSlide, slideCount, ...props }) => (
  <SliderControlButtonContainer tw="right-0">
    <button {...props}>
      <ArrowRightIcon />
    </button>
  </SliderControlButtonContainer>
);

const PreviousArrow = ({ currentSlide, slideCount, ...props }) => (
  <SliderControlButtonContainer tw="left-0">
    <button {...props}>
      <ArrowLeftIcon />
    </button>
  </SliderControlButtonContainer>
);

export default ({ testimonials = [] }) => {
  return (
    <Container>
      <Content>
      {testimonials.map((testimonial, index) => (
              <HeadingInfoContainer key={index}>
          
          <TheStudent>{testimonial.studentName} - {testimonial.occupation}</TheStudent>
          <StudentScore>{testimonial.result}</StudentScore>
          <HeadingDescription></HeadingDescription>
        </HeadingInfoContainer>
      ))}
        <TestimonialSliderContainer>
          <TestimonialSlider
            nextArrow={<NextArrow />}
            prevArrow={<PreviousArrow />}
          >
            {testimonials.flatMap((testimonial, index) => {
              // Ensure that galleryImgs exists and is an array
              const images = Array.isArray(testimonial.galleryImgs)
                ? testimonial.galleryImgs
                : [];
              return images.map((image, imageIndex) => (
                <Testimonial key={`${index}-${imageIndex}`}>
                  <ImageContainer>
                    <img
                      src={image}
                      alt={`${testimonial.studentName}-${imageIndex}`}
                    />
                  </ImageContainer>

                </Testimonial>
              ));
            })}
          </TestimonialSlider>
        </TestimonialSliderContainer>

      </Content>
    </Container>
  );
};
