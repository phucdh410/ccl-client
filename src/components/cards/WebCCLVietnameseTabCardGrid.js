import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  Container,
  ContentWithPaddingResult,
} from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as StarIcon } from "images/star-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";

import CARD_DATA from "components/cards/resultCardData/WebCCLVietnameseResultsCardData.js";
import ReactModalAdapter from "helpers/WebCCLVietnameseReactModalAdapter.js";
import GallerySlider from "components/testimonials/WebCCLVietnameseTestimonials.js";

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${(props) => props.active && tw`bg-primary-500! text-gray-100!`}
  }
`;

const TabContent = tw(
  motion.div
)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(
  motion.a
)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;
const CardRatingContainer = tw.div`leading-none absolute inline-flex bg-gray-100 bottom-0 left-0 ml-4 mb-4 rounded-full px-5 py-2 items-end`;
const CardRating = styled.div`
  ${tw`mr-1 text-sm font-bold flex items-end text-gray-900`}
  svg {
    ${tw`w-4 h-4 fill-current text-orange-400 mr-1`}
  }
`;

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;

//Define the const variable Button's design "Xem thêm" when hover the house over the Card
const CardButton = tw(PrimaryButtonBase)`text-sm`;

const CardReview = tw.div`font-medium text-xs text-gray-600`;

const CardText = tw.div`p-4 text-gray-900`;
const CardStudentName = tw.h5`text-lg font-semibold group-hover:text-primary-500`;
const CardOccupation = tw.p`mt-1 text-sm font-medium text-gray-600`;
const CardResult = tw.p`mt-4 text-xl font-bold`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

const TestimonialPopupArea = styled(ReactModalAdapter)`
  &.mainHeroModal__overlay {
    ${tw`fixed inset-0 z-50`}
  }
  &.mainHeroModal__content {
    ${tw`xl:mx-auto m-4 sm:m-16 max-w-screen-xl absolute inset-0 flex justify-center items-center rounded-lg bg-transparent outline-none`}
  }
  .content {
    ${tw`w-full lg:p-16`}
  }
`;


const TestimonialPopupBackground = styled.div`
${tw`absolute flex items-center justify-center p-4 bg-gray-300 rounded-lg`}
`;

//Tab names
const tabNames = ["04.2023", "02.2023", "11.2022", "07.2022"];

// Prepare data for each tab
//Declare the values that this program will grab from the CARD_DATA array.
//This array contains the TestYears which are the array names in CARD_DATA
const TestYears = ["2023", "2022"];
const TestMonths = ["04", "02"];

console.log(CARD_DATA);

//Filter by corresponding each year to get the data then filter again to get the Month
const CARD_DATA_POPUP = {
  Results2023: CARD_DATA.filter((item) => item.TestYear === "Results2023"),
  Results2022: CARD_DATA.filter((item) => item.TestYear === "Results2022"),
};

const TAB1_DATA = CARD_DATA_POPUP[`Results${TestYears[0]}`].filter(
  (item) => item.TestMonth === TestMonths[0]
);
const TAB2_DATA = CARD_DATA_POPUP[`Results${TestYears[0]}`].filter(
  (item) => item.TestMonth === TestMonths[1]
);
const TAB3_DATA = CARD_DATA_POPUP[`Results${TestYears[1]}`].filter(
  (item) => item.TestMonth === TestMonths[0]
);
const TAB4_DATA = CARD_DATA_POPUP[`Results${TestYears[1]}`].filter(
  (item) => item.TestMonth === TestMonths[1]
);

export default ({
  heading = "Checkout the Menu",
  tabs = {
    [tabNames[0]]: TAB1_DATA,
    [tabNames[1]]: TAB2_DATA,
    [tabNames[2]]: TAB3_DATA,
    [tabNames[3]]: TAB4_DATA,
  },
}) => {
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   *
   * setSelectedCardData(cardData);
   */

  //Define the const variable that handles the pop-up when click the "Xem thêm Button"
  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);
  const [selectedCardData, setSelectedCardData] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = (cardData) => {
    setSelectedCardData(cardData);
    setIsModalOpen(!isModalOpen);
  };
  return (
    <Container>
      <ContentWithPaddingResult>
        <HeaderRow>
          <Header>{heading}</Header>
          <TabsControl>
            {Object.keys(tabs).map((tabName, index) => (
              <TabControl
                key={index}
                active={activeTab === tabName}
                onClick={() => setActiveTab(tabName)}
              >
                {tabName}
              </TabControl>
            ))}
          </TabsControl>
        </HeaderRow>

        {tabsKeys.map((tabKey, index) => (
          <TabContent
            key={index}
            variants={{
              current: {
                opacity: 1,
                scale: 1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                scale: 0.8,
                display: "none",
              },
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            {tabs[tabKey].map((card, index) => (
              <CardContainer key={index}>
                <Card
                  className="group"
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  <CardImageContainer imageSrc={card.imageSrc}>
                    <CardRatingContainer>
                      <CardRating>
                        <StarIcon />
                        {card.resultGroup}
                      </CardRating>
                      <CardReview>{card.resultComment}</CardReview>
                    </CardRatingContainer>
                    <CardHoverOverlay
                      variants={{
                        hover: {
                          opacity: 1,
                          height: "auto",
                        },
                        rest: {
                          opacity: 0,
                          height: 0,
                        },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardButton onClick={() => toggleModal(card)}>
                        Xem thêm
                      </CardButton>
                    </CardHoverOverlay>
                  </CardImageContainer>
                  <CardText>
                    <CardStudentName>{card.studentName}</CardStudentName>
                    <CardOccupation>{card.occupation}</CardOccupation>
                    <CardResult>{card.result}</CardResult>
                  </CardText>
                </Card>
              </CardContainer>
            ))}
          </TabContent>
        ))}
      </ContentWithPaddingResult>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
      <TestimonialPopupArea
        closeTimeoutMS={50}
        className="mainHeroModal"
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
        shouldCloseOnOverlayClick={true}
      >
        <TestimonialPopupBackground>
          <div className="testimonial" tw="w-full">
            <GallerySlider
              testimonials={selectedCardData ? [selectedCardData] : []}
              card={selectedCardData}
            />
          </div>
        </TestimonialPopupBackground>

      </TestimonialPopupArea>
    </Container>
  );
};
