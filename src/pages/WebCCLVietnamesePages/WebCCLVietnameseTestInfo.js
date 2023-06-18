import React from "react";
import tw from "twin.macro";
import styled, { css } from "styled-components/macro"; //eslint-disable-line
import {Content2Xl, ContentRow as  ContainerInfo} from "components/misc/WebCCLVietnameseLayout.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

import InfoSection from 'images/info/CCLOverviewInforgraphic.svg'; 
import NavigationBar from "components/headers/WebCCLVietnameseNavBar.js"
import "slick-carousel/slick/slick.css";

//The foundation layout
const PrimaryBackgroundContainer = tw.div`-mx-8 px-8 -mt-8 pt-8 -mb-8 pb-8 min-h-screen bg-primary-900 text-gray-100`;
const PrimaryPadding = tw.div`font-display min-h-screen p-8 overflow-hidden`;

//The content layourt

const HeadingContainer = tw.div``;
const Subheading = tw(SubheadingBase)`text-center text-gray-100 mb-4`;
const Heading = tw(SectionHeading)``;
const Description = tw(SectionDescription)`mx-auto text-center text-gray-300 max-w-4xl`;
const Testimonial = tw.div`px-4 py-8 sm:px-1 sm:py-8 focus:outline-none flex! flex-col justify-between h-full`

export default ({
  subheading = "",
  heading = "THÔNG TIN VỀ KỲ THI",
  description = "Những chi tiết bạn nên biết về kỳ thi Credential Community Language (CCL)",
}) => {
  return (
    <PrimaryBackgroundContainer>
      <PrimaryPadding>
        <Content2Xl>
          <NavigationBar />
        </Content2Xl>

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
      </PrimaryPadding>
    </PrimaryBackgroundContainer>
  );
};
