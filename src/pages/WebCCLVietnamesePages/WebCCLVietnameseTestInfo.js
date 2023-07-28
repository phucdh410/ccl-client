import React from "react";
import tw from "twin.macro";
import styled, { css } from "styled-components/macro"; //eslint-disable-line
import {Content2Xl, ContentRow as  ContainerInfo} from "components/misc/WebCCLVietnameseLayout.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

// import InfoSection from 'images/info/CCLOverviewInforgraphic.svg'; 
import InfoSection1 from 'images/info/CCLOverviewInforgraphic-artboards-01.svg'; 
import InfoSection2 from 'images/info/CCLOverviewInforgraphic-artboards-02.svg'; 
import InfoSection3 from 'images/info/CCLOverviewInforgraphic-artboards-03.svg'; 
import InfoSection4 from 'images/info/CCLOverviewInforgraphic-artboards-04.svg'; 

import NavigationBar from "components/headers/WebCCLVietnameseNavBar.js"
import "slick-carousel/slick/slick.css";

//The foundation layout
const PrimaryBackgroundContainer = tw.div` min-h-screen bg-primary-900 text-gray-100`;
const PrimaryPadding = tw.div`font-display min-h-screen p-8 overflow-hidden`;

//The content layout

const HeadingContainer = tw.div``;
const Subheading = tw(SubheadingBase)`text-center text-gray-100 mb-4`;
const Heading = tw(SectionHeading)``;
const Description = tw(SectionDescription)`mx-auto text-center text-gray-300 max-w-4xl`;
// const Testimonial = tw.div`px-4 py-8 sm:px-1 sm:py-8 focus:outline-none flex! flex-col justify-between h-full`

//The info section layout
const InfoSectionContainer = tw.div`mt-8 flex flex-col items-center py-4 bg-[#001430] lg:p-12 border border-gray-800`
const InfoSectionHeading = tw.h1`uppercase text-xl lg:text-3xl font-bold text-center`
const InfoSectionDescription = tw.p`text-center text-gray-200 text-sm`
const InfoSectionTheCCL = tw.span`text-2xl w-full text-center text-[#fbc52e] font-bold lg:text-5xl`
const InfoSectionGrid = tw.div`w-full px-4 md:px-16 py-12 grid grid-cols-1 md:grid-cols-2 gap-16 gap-x-40`
const InfoSectionImage = tw.img`w-full`

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
          {/* <Testimonial>
            <img src={InfoSection} alt="CCLOverviewInforgraphic" />

          </Testimonial> */}
          <InfoSectionContainer>
            <InfoSectionHeading>Tổng quan kỳ thi</InfoSectionHeading>
            <InfoSectionTheCCL>CCL</InfoSectionTheCCL>
            <InfoSectionDescription>CREDENTIAL COMMUNITY LANGUAGE</InfoSectionDescription>
            <InfoSectionGrid>
              <InfoSectionImage src={InfoSection1} alt="CCLOverviewInforgraphic1" />
              <InfoSectionImage src={InfoSection2} alt="CCLOverviewInforgraphic2" />
              <InfoSectionImage src={InfoSection3} alt="CCLOverviewInforgraphic3" />
              <InfoSectionImage src={InfoSection4} alt="CCLOverviewInforgraphic4" />
            </InfoSectionGrid>
          </InfoSectionContainer>
        </ContainerInfo>
      </PrimaryPadding>
    </PrimaryBackgroundContainer>
  );
};
