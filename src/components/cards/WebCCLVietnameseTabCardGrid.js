import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingResult } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as StarIcon } from "images/star-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";
import ReactModalAdapter from "helpers/WebCCLVietnameseReactModalAdapter.js";
import TestimonialPopup from "components/testimonials/TwoColumnWithImage.js";

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${props => props.active && tw`bg-primary-500! text-gray-100!`}
  }
`;

const TabContent = tw(motion.div)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(motion.a)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
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

const TestimonialPopupBackground = styled.div`
  ${tw`absolute flex items-center justify-center p-4 bg-gray-300 rounded-lg`}
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


export default ({
  heading = "Checkout the Menu",
  tabs = {
    "04.2023": result1stTab(),
    "02.2023": result2ndTab(),
    "11.2022": result3rdTab(),
    "07.2022": result4thTab()
  }
}) => {
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */

  //Define the const variable that handles the pop-up when click the "Xem thêm Button"
  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const toggleModal = () => setIsModalOpen(!isModalOpen); 

  return (
    <Container>
      <ContentWithPaddingResult>
        <HeaderRow>
          <Header>{heading}</Header>
          <TabsControl>
            {Object.keys(tabs).map((tabName, index) => (
              <TabControl key={index} active={activeTab === tabName} onClick={() => setActiveTab(tabName)}>
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
                scale:1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                scale:0.8,
                display: "none",
              }
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            {tabs[tabKey].map((card, index) => (
              <CardContainer key={index}>
                <Card className="group" initial="rest" whileHover="hover" animate="rest">
                  <CardImageContainer imageSrc={card.imageSrc}>
                    <CardRatingContainer>
                      <CardRating>
                        <StarIcon />
                        {card.resultGroup}
                      </CardRating>
                      <CardReview>
                        {card.resultComment}
                      </CardReview>
                    </CardRatingContainer>
                    <CardHoverOverlay
                      variants={{
                        hover: {
                          opacity: 1,
                          height: "auto"
                        },
                        rest: {
                          opacity: 0,
                          height: 0
                        }
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardButton onClick={toggleModal}>Xem thêm</CardButton>
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
        closeTimeoutMS={300}
        className="mainHeroModal"
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
        shouldCloseOnOverlayClick={true}
      >
          <TestimonialPopupBackground>
            <div className="testimonial">
              <TestimonialPopup tw="w-full" />
            </div>
          </TestimonialPopupBackground>
      </TestimonialPopupArea>
    </Container>
  );
};

/* This function is only there for demo purposes. It populates placeholder cards */
const result1stTab = () => {
  const cards = [
    {
      imageSrc:
        "https://cclvietnamese-results-2023.s3.ap-southeast-2.amazonaws.com/04.2023/87T.jpg",
      studentName: "Th Nguyen",
      occupation: "Accountant and External Auditor",
      result: "87/90",
      resultGroup: "80+",
      resultComment: "(History Record)",
      url: "#"
    },
    {
      imageSrc:
        "https://cclvietnamese-results-2023.s3.ap-southeast-2.amazonaws.com/04.2023/83.5H.jpg",
      studentName: "H Huynh",
      occupation: "Pastry Chef",
      result: "83.5/90",
      resultGroup: "80+",
      //resultComment: "History Record",
      url: "#"
    },
    {
      imageSrc:
        "https://cclvietnamese-results-2023.s3.ap-southeast-2.amazonaws.com/04.2023/83.5C.jpg",
      studentName: "Ch Nguyen",
      occupation: "Occupational Therapist",
      result: "83.5/90",
      resultGroup: "80+",
      //resultComment: "History Record",
      url: "#"
    },
    {
      imageSrc:
        "https://cclvietnamese-results-2023.s3.ap-southeast-2.amazonaws.com/04.2023/83T.jpg",
      studentName: "Ph Nguyen",
      occupation: "Marketing Specialist",
      result: "83/90",
      resultGroup: "80+",
      //resultComment: "History Record",
      url: "#"
    },
    {
      imageSrc:
        "https://cclvietnamese-results-2023.s3.ap-southeast-2.amazonaws.com/04.2023/82.5H.jpg",
      studentName: "H Nguyen",
      occupation: "Marketing Specialist",
      result: "82.5/90",
      resultGroup: "80+",
      //resultComment: "History Record",
      url: "#"
    },
    {
      imageSrc:
        "https://cclvietnamese-results-2023.s3.ap-southeast-2.amazonaws.com/04.2023/82H.jpg",
      studentName: "H Nguyen",
      occupation: "IT Specialist",
      result: "82/90",
      resultGroup: "80+",
      //resultComment: "History Record",
      url: "#"
    },
    {
      imageSrc:
        "https://cclvietnamese-results-2023.s3.ap-southeast-2.amazonaws.com/04.2023/81.5H.jpg",
      studentName: "H Dao",
      occupation: "Marketing Specialist",
      result: "81.5/90",
      resultGroup: "80+",
      //resultComment: "History Record",
      url: "#"
    },
    {
      imageSrc:
        "https://cclvietnamese-results-2023.s3.ap-southeast-2.amazonaws.com/04.2023/81.5G.jpg",
      studentName: "Gi Nguyen",
      occupation: "Entrepreuner",
      result: "81.5/90",
      resultGroup: "80+",
      //resultComment: "History Record",
      url: "#"
    },
    {
      imageSrc:
        "https://cclvietnamese-results-2023.s3.ap-southeast-2.amazonaws.com/04.2023/81.5P.jpg",
      studentName: "Ph Vo",
      occupation: "Student",
      result: "81.5/90",
      resultGroup: "80+",
      //resultComment: "History Record",
      url: "#"
    },
    {
      imageSrc:
        "https://cclvietnamese-results-2023.s3.ap-southeast-2.amazonaws.com/04.2023/79.5T.jpg",
      studentName: "Nh Nguyen",
      occupation: "Software Development Specialist",
      result: "79.5/90",
      resultGroup: "70+",
      //resultComment: "History Record",
      url: "#"
    },
    {
      imageSrc:
        "https://cclvietnamese-results-2023.s3.ap-southeast-2.amazonaws.com/04.2023/76D.jpg",
      studentName: "Ph Nghiem",
      occupation: "Civil Engineer",
      result: "76/90",
      resultGroup: "70+",
      //resultComment: "History Record",
      url: "#"
    },
    {
      imageSrc:
        "https://cclvietnamese-results-2023.s3.ap-southeast-2.amazonaws.com/04.2023/74H.jpg",
      studentName: "H Nguyen",
      occupation: "Marketing Specialist",
      result: "74/90",
      resultGroup: "70+",
      resultComment: "(One-day learner)",
      url: "#"
    },
    {
      imageSrc:
        "https://cclvietnamese-results-2023.s3.ap-southeast-2.amazonaws.com/04.2023/71K.jpg",
      studentName: "K Ngo",
      occupation: "Chemical Engineer",
      result: "71/90",
      resultGroup: "70+",
      //resultComment: "History Record",
      url: "#"
    },
  ];
  return cards; // Add this line
};

const result2ndTab = () => {
  const cards = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Chicken Chilled",
      content: "Chicken Main Course",
      price: "$5.99",
      rating: "5.0",
      reviews: "87",
      url: "#"
    },
  ];
  return cards; // Add this line
};

const result3rdTab = () => {
  const cards = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Chicken Chilled",
      content: "Chicken Main Course",
      price: "$5.99",
      rating: "5.0",
      reviews: "87",
      url: "#"
    },
  ];
  return cards; // Add this line
};

const result4thTab = () => {
  const cards = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Chicken Chilled",
      content: "Chicken Main Course",
      price: "$5.99",
      rating: "5.0",
      reviews: "87",
      url: "#"
    },
  ];
  return cards; // Add this line
};

