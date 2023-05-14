import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line

import HeaderBase, { NavLinks, NavLink, PrimaryLink } from "components/headers/WebCCLVietnameseHeader.js";

import { SectionHeading } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { Container, ContentWithVerticalPadding, Content2Xl } from "components/misc/Layouts.js";
import { ReactComponent as CheckboxIcon } from "feather-icons/dist/icons/check-circle.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/dot-pattern.svg"

const PrimaryBackgroundContainer = tw.div`-mx-8 px-8 bg-primary-900 text-gray-100`;
const Header = tw(HeaderBase)`max-w-none -mt-8 py-8 -mx-8 px-8`;
const Row = tw.div`flex flex-col lg:flex-row justify-between items-center lg:pt-16 max-w-screen-2xl mx-auto sm:px-8`;
const Column = tw.div``;
const TextColumn = tw(Column)`mr-auto lg:mr-0 max-w-lg lg:max-w-xl xl:max-w-2xl`;
const Heading = tw(SectionHeading)`max-w-3xl lg:max-w-4xl lg:text-left leading-tight`;
const Description = tw(SectionDescription)`mt-4 max-w-2xl text-gray-100 lg:text-base mx-auto lg:mx-0`;;
const PrimaryButton = tw(PrimaryButtonBase)`mt-8 inline-block w-56 tracking-wide text-center py-5`;
const FeatureList = tw.ul`mt-12 leading-loose`;
const Feature = tw.li`flex items-center`;
const FeatureIcon = tw(CheckboxIcon)`w-5 h-5 text-primary-500`;
const FeatureText = tw.p`ml-2 font-medium`;
const ImageColumn = tw(Column)`ml-auto lg:mr-0 relative mt-16 lg:mt-0 lg:ml-32`;
const ImageContainer = tw.div`relative z-40 transform xl:-translate-x-24`;
const Image = tw.img`max-w-full w-96 rounded-t sm:rounded relative z-20`;
const ImageDecoratorBlob = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none z-10 absolute right-0 bottom-0 transform translate-x-10 translate-y-10 h-32 w-32 opacity-25 text-gray-900 fill-current`}
`;

export default ({
  heading = "Nơi hội tụ những bảng điểm kỷ lục",
  description = "CCL Vietnamese is so good",
  imageSrc = "https://cclvietnamese.com.au/images/2022.11.12%20-%20An.jpg",
  imageDecoratorBlob = false,
  primaryButtonUrl = "cclvietnamese.com.au/enquiry.html",
  primaryButtonText = "Nhận thông tin",
  buttonRounded = true,
  features = ["Thời gian học ngắn", "Tài liệu phong phú", "Trung tâm đầu tiên đạt 100% đậu"],
  testimonial = {
    quote: "Anh Sơn dạy hay vãi beep",
    customerName: "Bạn Kh",
    customerCompany: "190 NSW - 85 + 5 điểm - External Auditor."
  }
}) => {
  const buttonRoundedCss = buttonRounded && tw`rounded-full`;
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="/#">About</NavLink>
      <NavLink href="/#">Kỳ thi CCL</NavLink>
      <NavLink href="/#">Hướng dẫn đăng ký CCL</NavLink>
      <NavLink href="/#">Tư vấn khóa học</NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <NavLink href="/#" tw="lg:ml-12!">
        Đăng Nhập Platform
      </NavLink>
      <PrimaryLink css={buttonRoundedCss} href="/#">
        Đăng Ký Platform
      </PrimaryLink>
    </NavLinks>
  ];
  return (
  <PrimaryBackgroundContainer>
    <Content2Xl>
      <Header links={navLinks} />
      <Container>
        <ContentWithVerticalPadding>
          <Row>
            <TextColumn>
              <Heading>{heading}</Heading>
              <Description>{description}</Description>
              <PrimaryButton as="a" href={primaryButtonUrl} css={buttonRoundedCss}>
                {primaryButtonText}
              </PrimaryButton>
              <FeatureList>
                {features.map((feature, index) => (
                  <Feature key={index}>
                    <FeatureIcon />
                    <FeatureText>{feature}</FeatureText>
                  </Feature>
                ))}
              </FeatureList>
            </TextColumn>
            <ImageColumn>
              <ImageContainer>
                <Image src={imageSrc} />
                {imageDecoratorBlob && <ImageDecoratorBlob />}
              </ImageContainer>
            </ImageColumn>
          </Row>
        </ContentWithVerticalPadding>
      </Container>
    </Content2Xl>
  </PrimaryBackgroundContainer>
  );
};
/*
<Testimonial>
                  <QuotesLeftIcon/>
                  <Quote>{testimonial.quote}</Quote>
                  <CustomerName>{testimonial.customerName}</CustomerName>
                  <CustomerCompany>{testimonial.customerCompany}</CustomerCompany>
                </Testimonial> */