import React, { useEffect, useState, useCallback } from "react";
import { Analytics } from "@vercel/analytics/react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled, { css } from "styled-components";
import {
  Container,
  ContentWithPaddingResult,
} from "components/misc/Layouts.js";
import { useMediaQuery } from "react-responsive";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as StarIcon } from "images/star-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";
import { ReactComponent as CloseIconImport } from "feather-icons/dist/icons/x-circle.svg";

import fetchCourseResults from "components/cards/resultCardData/WebCCLVietnameseResultsCardData.js";
import ReactModalAdapter from "helpers/WebCCLVietnameseReactModalAdapter.js";
import GallerySlider from "components/testimonials/WebCCLVietnameseTestimonials.js";

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;

const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;

const TestimonialPopupBackground = styled.div`
  ${tw`drop-shadow-xl absolute flex items-center justify-center p-4 bg-gray-300 rounded-lg w-[calc(100vw-2rem)] h-[fit-content] lg:w-[fit-content]`}
`;

const CardResultContainer = tw.div`mt-4 flex items-center justify-between`;
const CardResultMoreDetail = tw.div`flex lg:hidden font-bold gap-x-1 items-center mt-4 text-sm text-primary-500 hover:scale-125 cursor-pointer`;

const TestimonialPopupCloseButton = tw.button`absolute top-0 right-0 mt-4 mr-4 text-gray-800 hover:text-primary-500 hover:scale-125 cursor-pointer transition duration-300 focus:outline-none z-50`;
const CloseIcon = tw(CloseIconImport)`w-8 h-8`;

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

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;

const CardRating = styled.div`
  ${tw`mr-1 text-sm font-bold flex items-end text-gray-900`}
  svg {
    ${tw`w-4 h-4 fill-current text-orange-400 mr-1`}
  }
`;

const TestimonialPopupArea = styled(ReactModalAdapter)`
  ${tw`bg-gray-900 bg-opacity-25`}

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

const sortDesScore = (arrayData) => {
  return arrayData.sort((a, b) => {
    let scoreA = parseInt(a?.result?.split("/")[0]);
    let scoreB = parseInt(b?.result?.split("/")[0]);
    return scoreB - scoreA;
  });
};

export default ({ heading = "Checkout the Menu" }) => {
  const [dateDisplay, setDateDisplay] = useState([]);
  const [cardData, setCardData] = useState([]);
  const [tabsData, setTabsData] = useState([]);
  const [tabNames, setTabNames] = useState([]);

  const loadData = async () => {
    try {
      const cardData = await fetchCourseResults();
      setCardData(cardData?.courseResults);
      setDateDisplay(cardData?.dateDisplay);
    } catch (error) {
      console.error("loadData::", error);
    }
  };

  const getCardData = useCallback(() => {
    if (Array.isArray(cardData) && cardData.length > 0) {
      let data = {};
      const testYears = cardData.map((item) => item.TestYear);
      testYears.forEach((year) => {
        data[year] = cardData.filter((item) => item.TestYear === year);
      });
      return data;
    } else {
      return null;
    }
  }, [cardData]);

  const prepareTabData = useCallback(() => {
    const CARD_DATA_POPUP = getCardData();
    if (!CARD_DATA_POPUP) return;

    dateDisplay.forEach(function (dateTime) {
      const yearKey = `Results${dateTime.year}`;
      let tabData = CARD_DATA_POPUP[yearKey];

      if (tabData) {
        tabData.label = dateTime.label;
      } else {
        tabData = [];
        console.log(`No data found for year: ${dateTime.year}`);
      }

      setTabsData(function (prevTabsData) {
        return prevTabsData.concat(tabData);
      });

      setTabNames(function (prevTabNames) {
        return prevTabNames.concat(dateTime.label);
      });
    });
  }, [dateDisplay, getCardData]);

  const getTabData = (key) => {
    const year = key.slice(3, key.length);
    const quarter = key.slice(0, 2);
    // const month = key.slice(0, 2);
    //  return tabsData.filter(
    //    (item) => item.TestYear === `Results${year}` && item.TestMonth === month
    //  );
    return sortDesScore(
      tabsData.filter(
        (item) =>
          item.TestYear === `Results${year}` && item.TestTime === quarter
      )
    );
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    prepareTabData();
  }, [dateDisplay, prepareTabData]);

  useEffect(() => {
    setActiveTab(tabNames[0]);
  }, [tabNames]);

  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   *
   * setSelectedCardData(cardData);
   */
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1023px)" });

  //Define the const variable that handles the pop-up when click the "Xem thêm Button"
  const [activeTab, setActiveTab] = useState();
  const [selectedCardData, setSelectedCardData] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = (e, cardData) => {
    e.preventDefault();

    setSelectedCardData(cardData);
    setIsModalOpen(!isModalOpen);
  };
  return (
    <Container>
      <ContentWithPaddingResult>
        <Analytics />
        <HeaderRow>
          <Header>{heading}</Header>
          <TabsControl>
            {tabNames.map((tabName, index) => (
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

        {tabNames.map((tabKey, index) => (
          <TabContent
            key={index}
            variants={{
              current: {
                position: "relative",
                opacity: 1,
                scale: 1,
                display: "flex",
              },
              hidden: {
                position: "absolute",
                opacity: 0,
                scale: 0.8,
                transitionEnd: {
                  display: "none",
                },
              },
            }}
            transition={{ duration: 0.3 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            {getTabData(tabKey).map((card, index) => (
              <CardContainer key={index}>
                <Card
                  className="group"
                  initial="rest"
                  whileHover={!isSmallScreen ? "hover" : "rest"}
                  animate="rest"
                  href="#"
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
                          scale: 1,
                        },
                        rest: {
                          opacity: 0,
                          scale: 0,
                        },
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <CardButton onClick={(e) => toggleModal(e, card)}>
                        Xem thêm
                      </CardButton>
                    </CardHoverOverlay>
                  </CardImageContainer>
                  <CardText>
                    <CardStudentName>{card.studentName}</CardStudentName>
                    <CardOccupation>{card.occupation}</CardOccupation>
                    <CardResultContainer>
                      <CardResult>{card.result}</CardResult>
                      <CardResultMoreDetail
                        onClick={(e) => toggleModal(e, card)}
                      >
                        {"Xem thêm =>"}
                      </CardResultMoreDetail>
                    </CardResultContainer>
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
            <TestimonialPopupCloseButton onClick={toggleModal}>
              <CloseIcon />
            </TestimonialPopupCloseButton>
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
