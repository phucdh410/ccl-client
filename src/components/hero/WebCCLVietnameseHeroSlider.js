import React, { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { PrimaryButton } from "../misc/Buttons.js";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";

import "slick-carousel/slick/slick.css";

import CARD_DATA_HERO from "components/hero/heroCardData/WebCCLVietnameseHeroSliderLibrary.js";

const TestimonialImageSlider = tw(Slider)`w-full lg:w-5/12 flex-shrink-0 max-w-screen-xl mx-auto`;

const ImageAndControlContainer = tw.div`relative outline-none`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-cover bg-center h-80 sm:h-96 lg:h-144`
]);

const ControlContainer = tw.div`rounded-br-md absolute bottom-0 right-0 bg-gray-100 px-2 py-2 lg:px-6 lg:py-4 rounded-tl-3xl border`;
const ControlButton = styled(PrimaryButton)`
  ${tw`mx-2 lg:mx-3 rounded-full text-gray-100 p-2`}
  
  svg {
    ${tw`w-5 h-5`}
  }
`;


export default ({
  testimonials = null,
  textOnLeft = false
}) => {
  /*
   * You can modify the testimonials shown by modifying the array below or passing in the testimonials prop above
   * You can add or remove objects from the array as you need.
   */


  if (!testimonials || testimonials.length === 0) testimonials = CARD_DATA_HERO;

  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [imageSliderRef, setImageSliderRef] = useState(null);
  const [textSliderRef, setTextSliderRef] = useState(null);

  return (
    <TestimonialImageSlider arrows={false} ref={setImageSliderRef} asNavFor={textSliderRef} fade={true}>
      {testimonials.map((testimonial, index) => (
        <ImageAndControlContainer key={index} className="ksdkgh">
          <Image imageSrc={testimonial.imageSrc} />
          <ControlContainer>
            <ControlButton onClick={imageSliderRef?.slickPrev}>
              <ChevronLeftIcon />
            </ControlButton>
            <ControlButton onClick={imageSliderRef?.slickNext}>
              <ChevronRightIcon />
            </ControlButton>
          </ControlContainer>
        </ImageAndControlContainer>
      ))}
    </TestimonialImageSlider>
  );
};
