import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { components } from "WebCCLVietnameseCompRender.js";
import {Content2Xl, ContentWithVerticalPadding } from "components/misc/Layouts";
import { css } from "styled-components/macro";

import { SectionHeading as HeadingBase } from "components/misc/Headings";
import { SectionDescription as DescriptionBase } from "components/misc/Typography";

import { ReactComponent as CheckboxIcon } from "feather-icons/dist/icons/check-circle.svg";
import { ReactComponent as RadioIcon } from "feather-icons/dist/icons/radio.svg";

import AnchorLink from "react-anchor-link-smooth-scroll";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Features from "components/features/ThreeColSimple.js";
import Footer from "components/footers/WebCCLVietnameseFooter.js";

import NavigationBar from "components/hero/WebCCLVietnameseHero.js"
import heroScreenshotImageSrc from "images/results/An - 5 PR Points.png";

import tw from "twin.macro";

//TabGrid for studentResults
import TabGrid from "components/cards/WebCCLVietnameseTabCardGrid.js";

//TabGrid for whyUs?
import chefIconImageSrc from "images/chef-icon.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import shopIconImageSrc from "images/shop-icon.svg";

/* Hero */
const PrimaryBackgroundContainer = tw.div`-mx-8 px-8 -mt-8 pt-8 -mb-8 pb-8 min-h-screen bg-primary-900 text-gray-100`;
const Row = tw.div`flex`;
const HeroRow = tw(Row)`flex-col lg:flex-row justify-between items-center pt-8 lg:pt-12 pb-16 max-w-screen-2xl mx-auto flex-wrap`;
const Column = tw.div`flex-1`;
const UpdateNotice = tw(Column)`w-full flex-auto mb-4 sm:mb-8 rounded px-4 py-3 sm:px-5 sm:py-4 bg-orange-100 text-orange-800 flex items-center sm:items-start md:items-center justify-center lg:justify-start border border-orange-200 text-xs sm:text-sm text-center sm:text-left md:leading-none`;
const UpdateNoticeIcon = tw(RadioIcon)`w-0 sm:w-5 sm:mr-3`;
const TextColumn = tw(Column)`mx-auto lg:mr-0 max-w-2xl lg:max-w-xl xl:max-w-2xl flex-shrink-0`;
const Heading = tw(HeadingBase)`text-center lg:text-left max-w-3xl lg:max-w-4xl leading-snug`;
const Description = tw(
  DescriptionBase
)`mt-4 text-center lg:text-left lg:text-base text-gray-100 max-w-lg mx-auto lg:mx-0`;
const Actions = tw.div`flex flex-col sm:flex-row justify-center lg:justify-start`;

//Buttons on the <Actions> (Next to the photos)
const ActionButton = tw(
  AnchorLink
)`px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300 mt-12 inline-block tracking-wide text-center px-10 py-4 font-semibold tracking-normal`;

const OpenPageButton = tw(
  Link
)`px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300 mt-12 inline-block tracking-wide text-center px-10 py-4 font-semibold tracking-normal`;

const PrimaryButton = tw(
  OpenPageButton
)`mt-6 sm:mt-12 sm:mr-8`;
const SecondaryButton = tw(
  ActionButton
)`mt-6 sm:mt-12 sm:ml-12 bg-gray-300 text-gray-800 hocus:bg-gray-400 hocus:text-gray-900`;
const FeatureList = tw.ul`mt-6 leading-loose flex flex-wrap max-w-xl mx-auto lg:mx-0`;
const Feature = tw.li`mt-2 flex items-center flex-shrink-0 w-full sm:w-[50%] justify-center lg:justify-start`;
const FeatureIcon = tw(CheckboxIcon)`w-5 h-5 text-primary-100`;
const FeatureText = tw.p`ml-2 font-medium text-gray-100`;

//Top Landing page image and texts
const ImageColumn = tw(Column)`mx-auto lg:mr-0 relative mt-16 lg:mt-0 lg:ml-8`;
const ImageContainer = tw.div`flex justify-end`;
const Image = tw.img`max-w-full rounded-t sm:rounded w-full h-[40rem] md:w-[40rem] md:h-[40rem]`;
const SectionContainer = tw(ContentWithVerticalPadding)``;
//The student results tab
const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;

export default ({
  features = null,
  primaryButtonUrl = "/enquiry",
  primaryButtonText = "ĐĂNG KÝ HỌC",
  secondaryButtonUrl = "#studentResults",
  secondaryButtonText = "Đánh giá của học viên",
  buttonRoundedCss = "",

  landingPages = components.landingPages,
  innerPages = components.innerPages,
  blocks = components.blocks,
  heading = "Nơi hội tụ những bảng điểm kỷ lục",
  description = "Với hệ thống giáo trình được xây dựng sát với tiêu chí chấm điểm của NAATI, CCLVietnamese.com.au đã trở thành trung tâm đầu tiên đạt được thành tích 100% đậu. Với kinh nghiệm đào tạo thực tế và gọn gàng, CCLVietnamese có khóa học rất ngắn nhưng số lượng bảng điểm 80+ vượt trội"
}) => {
  /*
   * Using gtag like this because we only want to use Google Analytics when Main Landing Page is rendered
   * Remove this part and the the gtag script inside public/index.html if you dont need google analytics
   */
  useEffect(() => {
    window.gtag("js", new Date());
    window.gtag("config", "G-B7N1H5S8N6");
  }, [])

  const noOfLandingPages = Object.keys(landingPages).length;
  const noOfInnerPages = Object.keys(innerPages).length;
  const noOfComponentBlocks = Object.values(blocks).reduce((acc, block) => acc + Object.keys(block.elements).length, 0);

  features = features || [
    `Khóa học ngắn, chỉ từ ${noOfLandingPages} tuần`,
    `Nhiều ưu đãi khi đăng ký trước ${noOfInnerPages}`,
    `Tỷ lệ đậu đạt ${noOfComponentBlocks} `,
    `Discount khi đăng ký các combo`
  ];
  return (
    <AnimationRevealPage disabled>
        <PrimaryBackgroundContainer>
          <Content2Xl>
            <NavigationBar />
              
            <HeroRow>
              <UpdateNotice>
                <UpdateNoticeIcon />
                Trang web vẫn đang trong giai đoạn hoàn thiện.
              </UpdateNotice>
              <TextColumn>
                <Heading as="h1">{heading}</Heading>
                <Description>{description}</Description>
                <FeatureList>
                  {features.map((feature, index) => (
                    <Feature key={index}>
                      <FeatureIcon />
                      <FeatureText>{feature}</FeatureText>
                    </Feature>
                  ))}
                </FeatureList>
                <Actions>
                  <PrimaryButton to={primaryButtonUrl} css={buttonRoundedCss}>
                    {primaryButtonText}
                  </PrimaryButton>
                  <SecondaryButton href={secondaryButtonUrl} css={buttonRoundedCss}>
                    {secondaryButtonText}
                  </SecondaryButton>
                </Actions>
              </TextColumn>
              <ImageColumn>
                <ImageContainer>
                  <Image src={heroScreenshotImageSrc} />
                </ImageContainer>
              </ImageColumn>
            </HeroRow>

            <SectionContainer id="studentResults">
              {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
              <TabGrid
                heading={
                  <>
                    Kết quả xuất sắc <HighlightedText>2023</HighlightedText>
                  </>
                }
              />
              <Features
                heading={
                  <>
                    Nội dung được thiết kế theo <HighlightedText> NGHIÊN CỨU</HighlightedText>
                  </>
                }
                cards={[
                  {
                    imageSrc: shopIconImageSrc,
                    title: "Chất lượng tiên phong",
                    description: "Nơi đầu tiên ra đời khóa CCL Intensive và đạt tỷ lệ đậu 100%",
                    url: "https://google.com"
                  },
                  {
                    imageSrc: chefIconImageSrc,
                    title: "Thời gian học ngắn",
                    description: "Khóa học tiêu chuẩn chỉ cần 6 tuần, tuy nhiên đã từng có bạn học chỉ 1 ngày",
                    url: "https://facebook.com"
                  },
                  {
                    imageSrc: celebrationIconImageSrc,
                    title: "Chi phí hợp lý",
                    description: "Vô cùng nhiều ưu đã dành cho các bạn đã thi PTE hoặc học các khóa của Master Group",
                    url: "https://reddit.com"
                  }
                ]}

                imageContainerCss={tw`p-2!`}
                imageCss={tw`w-20! h-20!`}
              />
            </SectionContainer>
            <Footer />
          </Content2Xl>
          </PrimaryBackgroundContainer>

      </AnimationRevealPage>
  );
};
