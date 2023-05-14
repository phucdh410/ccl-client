import React from "react";
import tw from "twin.macro";
import styled, { css } from "styled-components/macro"; //eslint-disable-line
import { ContainerInfo} from "components/misc/WebCCLVietnameseLayout.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

import InfoSection from 'images/info/CCLOverviewInforgraphic.svg'; 




import "slick-carousel/slick/slick.css";

const PrimaryBackgroundContainer = tw.div`-mx-8 px-8 -mt-8 pt-8 -mb-8 pb-8 min-h-screen bg-primary-900 text-gray-100`;

const HeadingContainer = tw.div``;
const Subheading = tw(SubheadingBase)`text-center text-gray-100 mb-4`;
const Heading = tw(SectionHeading)``;
const Description = tw(SectionDescription)`mx-auto text-center text-gray-300 max-w-4xl`;
const Testimonial = tw.div`px-4 py-8 sm:px-1 sm:py-8 focus:outline-none flex! flex-col justify-between h-full`

export default ({
  subheading = "",
  heading = "THÔNG TIN VỀ KỲ THI",
  description = "Những chi tiết bạn nên biết về kỳ thi Credential Community Language (CCL)",
  testimonials = [
    {
      customerName: "David Hanson",
      customerProfile: "CEO, Koalify",
      imageSrc:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.85&w=256&h=256&q=80",
      quote:
        "We have been using servana for about 2 years. And in that time we have had no problem at all. The user interface is really simple to use. Our services scale automatically and we never have to worry about downtimes. is as described."
    },
  ]
}) => {
  

  return (
    <PrimaryBackgroundContainer>
      <ContainerInfo>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          <Description>{description}</Description>
        </HeadingContainer>
        <Testimonial>
          <img src={InfoSection} alt="CCLOverviewInforgraphic" />
        </Testimonial>
      </ContainerInfo>
    </PrimaryBackgroundContainer>
  );
};
