import React, { useEffect } from "react";
import tw from "twin.macro";
// eslint-disable-next-line
import styled, { css } from "styled-components";
import {Content2Xl, ContentRow as  ContainerInfo} from "components/misc/WebCCLVietnameseLayout.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { Helmet } from "react-helmet";

// import InfoSection from 'images/info/CCLOverviewInforgraphic.svg';
import InfoSection1 from 'images/info/CCLOverviewInforgraphic-artboards-01.svg';
import InfoSection2 from 'images/info/CCLOverviewInforgraphic-artboards-02.svg';
import InfoSection3 from 'images/info/CCLOverviewInforgraphic-artboards-03.svg';
import InfoSection4 from 'images/info/CCLOverviewInforgraphic-artboards-04.svg';

import NavigationBar from "components/headers/WebCCLVietnameseNavBar.js"
import Footer from "components/footers/WebCCLVietnameseFooter.js";
import "slick-carousel/slick/slick.css";


//The foundation layout
const PrimaryBackgroundContainer = tw.div` min-h-screen bg-primary-900 text-gray-100`;
const PrimaryPadding = tw.div`font-display min-h-screen p-8 overflow-hidden`;

//The content layout

const HeadingContainer = tw.div``;
const Subheading = tw(SubheadingBase)`text-center text-xl mb-4`;
const Heading = tw(SectionHeading)`text-[#fbc52e]`;
const Description = tw(SectionDescription)`mx-auto text-center text-gray-300 max-w-4xl`;
// const Testimonial = tw.div`px-4 py-8 sm:px-1 sm:py-8 focus:outline-none flex! flex-col justify-between h-full`

//The info section layout
const InfoSectionContainer = tw.div`mt-8 flex flex-col items-center py-4 bg-[#001430] lg:p-12 border border-gray-800`
const InfoSectionGrid = tw.div`w-full px-4 md:px-16 py-12 grid grid-cols-1 md:grid-cols-2 gap-16 gap-x-40`
const InfoSectionImage = tw.img`w-full`

export default ({
  subheading = "",
  heading = "THÔNG TIN VỀ KỲ THI",
  description = "Những chi tiết bạn nên biết về kỳ thi Credential Community Language (CCL)",
  seoHeading = "Thông tin về kỳ thi CCL",
  seoDescription = "Những chi tiết bạn nên biết về kỳ thi Credential Community Language (CCL)"
}) => {

    /*
 * Using gtag like this because we only want to use Google Analytics when Main Landing Page is rendered
 * Remove this part and the the gtag script inside public/index.html if you dont need google analytics
 */
  useEffect(() => {
    window.gtag("js", new Date());
    window.gtag("config", "G-B7N1H5S8N6");
  }, []);
  return (
    <PrimaryBackgroundContainer>
      <Helmet>
        <title>{`${seoHeading}`}</title>
        <meta name="description" content={seoDescription} />
      </Helmet>
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
            <InfoSectionGrid>
              <InfoSectionImage src={InfoSection1} alt="CCLOverviewInforgraphic1" />
              <InfoSectionImage src={InfoSection2} alt="CCLOverviewInforgraphic2" />
              <InfoSectionImage src={InfoSection3} alt="CCLOverviewInforgraphic3" />
              <InfoSectionImage src={InfoSection4} alt="CCLOverviewInforgraphic4" />
            </InfoSectionGrid>
          </InfoSectionContainer>
        </ContainerInfo>
        <Content2Xl>
          <Footer />
        </Content2Xl>
      </PrimaryPadding>
    </PrimaryBackgroundContainer>
  );
};
