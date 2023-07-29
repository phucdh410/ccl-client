import React from "react";
//import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading as HeadingBase } from "components/misc/Headings";
import { SectionDescription as DescriptionBase } from "components/misc/Typography";
import { ReactComponent as CheckboxIcon } from "feather-icons/dist/icons/check-circle.svg";
import { ReactComponent as RadioIcon } from "feather-icons/dist/icons/radio.svg";

import AnchorLink from "react-anchor-link-smooth-scroll";
//import styled from "styled-components";
import tw from "twin.macro";

import HeroSlider from "components/hero/WebCCLVietnameseHeroSlider.js"


/* Hero */
const Row = tw.div`flex`;
const HeroRow = tw(
  Row
)`flex-col lg:flex-row justify-start items-center pt-8 lg:pt-12 pb-0 lg:pb-16 lg:max-w-screen-2xl mx-auto flex-wrap`;

const Column = tw.div`flex-1`;
const TwoColumn = tw.div`max-w-md lg:max-w-none mx-auto lg:mx-0 flex flex-col items-center lg:items-stretch lg:flex-row overflow-hidden`;
const UpdateNotice = tw(
  Column
)`w-full flex-auto mb-4 sm:mb-8 rounded px-4 py-3 sm:px-5 sm:py-4 bg-orange-100 text-orange-800 flex items-center sm:items-start md:items-center justify-center lg:justify-start border border-orange-200 text-xs sm:text-sm text-center sm:text-left md:leading-none overflow-hidden`;
const UpdateNoticeIcon = tw(RadioIcon)`w-0 sm:w-5 sm:mr-3`;
const TextColumn = tw(
  Column
)`flex flex-col w-full`;
const TextColumnContent = tw.div`lg:w-9/12`;
const Heading = tw(
  HeadingBase
)`max-w-3xl lg:max-w-4xl lg:text-left`;
const Description = tw(
  DescriptionBase
)` mt-4 text-justify lg:text-base text-gray-100 mx-auto lg:mx-0`;
const Actions = tw.div`gap-x-6 grid grid-cols-1 lg:grid-cols-2`;

//Buttons on the <Actions> (Next to the photos)
const ActionButton = tw(
  AnchorLink
)` px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300 mt-12 inline-block tracking-wide text-center px-10 py-4 font-semibold tracking-normal`;

const OpenPageButton = tw(
  Link
)`px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-gray-100 hocus:text-primary-500 focus:shadow-outline focus:outline-none transition duration-300 mt-12 inline-block tracking-wide text-center px-10 py-4 font-semibold tracking-normal`;

const PrimaryButton = tw(OpenPageButton)`mt-6 sm:mt-12 w-full lg:max-w-56 `;
const SecondaryButton = tw(
  ActionButton
)`mt-6 sm:mt-12 bg-gray-100 text-primary-500 hocus:bg-primary-500 hocus:text-gray-100 w-full lg:max-w-64`;
const FeatureList = tw.ul`mt-6 gap-x-6 leading-loose grid grid-cols-1 lg:grid-cols-2`;
const Feature = tw.li`mt-2 gap-x-2 flex justify-start items-center flex-shrink-0 w-full lg:justify-start`;
const FeatureIcon = tw(CheckboxIcon)`w-5 h-5 text-primary-100 flex-shrink-0`;
const FeatureText = tw.p`ml-2 font-medium text-gray-100`;

const HeroSliderImages = tw.div(
  HeroSlider
)`w-full`;
const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
export default ({
  features = null,
  primaryButtonUrl = "/enquiry",
  primaryButtonText = "ĐĂNG KÝ HỌC",
  secondaryButtonUrl = "#studentResults",
  secondaryButtonText = "Đánh giá của học viên",
  buttonRoundedCss = "",

  heading1 = "Nơi hội tụ những",
  heading2 = "bảng điểm",
  description = "Với hệ thống giáo trình được xây dựng sát với tiêu chí chấm điểm của NAATI, cclvietnamese.com.au đã trở thành trung tâm đầu tiên đạt được thành tích 100% đậu. Với kinh nghiệm đào tạo thực tế và gọn gàng, cclvietnamese.com.au cũng có số lượng bảng điểm 80+ vượt trội",
}) => {

  features = features || [
    `Tỷ lệ đậu đã đạt 100%`,
    `Khóa học ngắn, chỉ từ 5 tuần`,
    `Nhiều ưu đãi khi đăng ký sớm`,
    `Lớp học unlimited`,
  ];
  return (
    <HeroRow>
      <UpdateNotice>
        <UpdateNoticeIcon />
        Trang web vẫn đang trong giai đoạn hoàn thiện.
      </UpdateNotice>
      <TwoColumn>
        <TextColumn>
          <TextColumnContent>
            <Heading as="h1">{heading1}</Heading>
            <Heading as="h1">
              {heading2} <HighlightedText>Kỷ Lục</HighlightedText>
            </Heading>
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
          </TextColumnContent>
          
        </TextColumn>
        <HeroSliderImages />
      </TwoColumn>
    </HeroRow>
  );
};
