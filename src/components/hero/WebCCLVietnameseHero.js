import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { components } from "WebCCLVietnameseCompRender.js";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading as HeadingBase } from "components/misc/Headings";
import { SectionDescription as DescriptionBase } from "components/misc/Typography";
import { ReactComponent as CheckboxIcon } from "feather-icons/dist/icons/check-circle.svg";
import { ReactComponent as RadioIcon } from "feather-icons/dist/icons/radio.svg";

import AnchorLink from "react-anchor-link-smooth-scroll";
import styled from "styled-components";
import tw from "twin.macro";

import HeroSlider from "components/hero/WebCCLVietnameseHeroSlider.js"
import heroScreenshotImageSrc from "images/results/An - 5 PR Points.png";

/* Hero */
const Row = tw.div`flex`;
const HeroRow = tw(
  Row
)`flex-col lg:flex-row justify-start items-center pt-8 lg:pt-12 pb-16 max-w-screen-2xl mx-auto flex-wrap`;

const Column = tw.div`flex-1`;
const TwoColumn = tw.div`max-w-md lg:max-w-none mx-auto lg:mx-0 flex flex-col items-center lg:items-stretch lg:flex-row overflow-hidden`;
const UpdateNotice = tw(
  Column
)`w-full flex-auto mb-4 sm:mb-8 rounded px-4 py-3 sm:px-5 sm:py-4 bg-orange-100 text-orange-800 flex items-center sm:items-start md:items-center justify-center lg:justify-start border border-orange-200 text-xs sm:text-sm text-center sm:text-left md:leading-none overflow-hidden`;
const UpdateNoticeIcon = tw(RadioIcon)`w-0 sm:w-5 sm:mr-3`;
const TextColumn = tw(
  Column
)`flex flex-col w-full lg:w-7/12`;
const Heading = tw(
  HeadingBase
)`max-w-3xl lg:max-w-4xl lg:text-left leading-tight`;
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

const PrimaryButton = tw(OpenPageButton)`mt-6 sm:mt-12 sm:mr-8`;
const SecondaryButton = tw(
  ActionButton
)`mt-6 sm:mt-12 sm:ml-12 bg-gray-300 text-gray-800 hocus:bg-gray-400 hocus:text-gray-900`;
const FeatureList = tw.ul`mt-6 leading-loose flex flex-wrap max-w-xl mx-auto lg:mx-0`;
const Feature = tw.li`mt-2 flex items-center flex-shrink-0 w-full sm:w-[50%] justify-center lg:justify-start`;
const FeatureIcon = tw(CheckboxIcon)`w-5 h-5 text-primary-100`;
const FeatureText = tw.p`ml-2 font-medium text-gray-100`;

const HeroSliderImages = tw.div(
  HeroSlider
)`w-full`;

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
  description = "Với hệ thống giáo trình được xây dựng sát với tiêu chí chấm điểm của NAATI, CCLVietnamese.com.au đã trở thành trung tâm đầu tiên đạt được thành tích 100% đậu. Với kinh nghiệm đào tạo thực tế và gọn gàng, CCLVietnamese có khóa học rất ngắn nhưng số lượng bảng điểm 80+ vượt trội",
}) => {
  const noOfLandingPages = Object.keys(landingPages).length;
  const noOfInnerPages = Object.keys(innerPages).length;
  const noOfComponentBlocks = Object.values(blocks).reduce(
    (acc, block) => acc + Object.keys(block.elements).length,
    0
  );

  features = features || [
    `Khóa học ngắn, chỉ từ ${noOfLandingPages} tuần`,
    `Nhiều ưu đãi khi đăng ký trước ${noOfInnerPages}`,
    `Tỷ lệ đậu đạt ${noOfComponentBlocks} `,
    `Discount khi đăng ký các combo`,
  ];
  return (
    <HeroRow>
      <UpdateNotice>
        <UpdateNoticeIcon />
        Trang web vẫn đang trong giai đoạn hoàn thiện.
      </UpdateNotice>
      <TwoColumn>
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
        <HeroSliderImages />
      </TwoColumn>
    </HeroRow>
  );
};
