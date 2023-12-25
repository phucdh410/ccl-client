import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { Container as ContainerBase, ContentWithPaddingXl as ContentBase } from "components/misc/Layouts.js";
import { ReactComponent as CheckboxIcon } from "images/checkbox-circle.svg";

const Container = tw(ContainerBase)`bg-primary-900 text-gray-100 -mx-8 px-8`;
const ContentWithPaddingXl = tw(
  ContentBase
)`relative z-10 mx-auto px-0 py-10 sm:px-6 md:px-8 lg:px-12 xl:px-24 sm:py-20 flex flex-col max-w-screen-xl`;
const HeaderContainer = tw.div`mt-10 w-full flex flex-col items-center`;
const Subheading = tw(SubheadingBase)`mb-4 text-gray-100`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-gray-300 text-center`;

const PlansContainer = tw.div`mt-4 lg:mt-16 flex flex-col items-center lg:flex-row lg:items-stretch lg:justify-between text-gray-900 font-medium`;
const Plan = styled.div`
  ${tw`w-full max-w-sm bg-white rounded-lg shadow-sm py-10 px-6 sm:px-10 lg:px-6 lg:py-10 xl:p-10 mx-3 lg:flex flex-col justify-between mt-0 lg:mt-16 first:mt-0 lg:mt-0 shadow-raised`}
  ${props => props.active? tw`flex`:tw`hidden`}
  `;

const PlanHeader = styled.div`
  .nameAndFeaturedContainer {
    ${tw`flex flex-wrap flex-col sm:flex-row justify-between items-center`}
  }
  .name {
    ${tw`lg:text-lg xl:text-xl font-bold uppercase tracking-wider mr-3`}
  }
  .featuredText {
    ${tw`text-xs font-bold px-3 rounded py-2 uppercase bg-green-300 text-green-900 leading-none mt-4 sm:mt-0 w-full sm:w-auto text-center`}
  }
  
  .courseFeatureContainer {
    ${tw`mt-6 flex items-end justify-between`}
    .courseFeature {
      ${tw`text-lg font-bold leading-none`}
      .bigText {
        ${tw`text-3xl font-bold`}
      }
    }
  }
  .description {
    ${tw`mt-8 font-medium text-gray-700 lg:text-sm xl:text-base`}
  }
`;
const PlanFeatures = styled.ul`
  ${tw`mt-10 flex-1 border-t lg:-mx-6 -mx-6 sm:-mx-10 py-10 px-6 sm:px-10 lg:p-6 xl:-mx-10 xl:p-10`}
  .feature {
    ${tw`flex items-start mt-6 first:mt-0`}
    .icon {
      ${tw`w-6 h-6 text-primary-500 flex-shrink-0`}
    }
    .icon-noBS {
      ${tw`w-6 h-6 text-gray-500 flex-shrink-0`}
    }
    .text {
      ${tw`font-semibold text-primary-900 tracking-wide ml-3`}
    }
    .noBS {
      ${tw`text-gray-500 line-through`}
    }
  }
`;

const PlanAction = tw.div`mt-4`;
const ActionButton = styled(PrimaryButtonBase)`
  ${tw`block text-center text-sm font-semibold tracking-wider w-full text-gray-100 bg-primary-500 px-6 py-4 rounded hover:bg-primary-700 focus:shadow-outline focus:outline-none transition-colors duration-300`}
`;
const CourseHighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
const FeatureHighlightedText = tw.span`bg-primary-500 font-semibold ml-3 text-gray-100 px-1 transform tracking-wide -skew-x-12 inline-block`;
const FeatureTabListContainer = tw.div`lg:hidden mt-4 bg-white rounded-md p-4 text-gray-600 grid grid-cols-3 gap-x-2 text-center`
const FeatureTabListItem = styled.span`
  ${tw`cursor-pointer text-gray-600 font-medium rounded-sm transition duration-300 text-sm py-2 text-center`}
  ${(props) => props.active && tw`bg-primary-500! text-gray-100!`}
}
`

export default ({
  heading = "",
  subheading = "",
  description = ["Nhiều ưu đãi và lựa chọn cho từng nhu cầu"],
  plans = null,
  primaryButtonText = "Nhận học phí vào email"
}) => {
  const [selectedFeatureIndex, setSelectedFeatureIndex] = useState(0)

  const defaultPlans = [
    {
      "name": "Standard",
      "numberOfStudents": ["Chỉ", "8", " bạn/lớp"],
      "description": "Chi phí rất hợp lý, phù hợp với các bạn đã có nền tảng tiếng Anh tốt",
      "features": [
        { "name": "Học tất cả về CCL chỉ trong 20 giờ" },
        { "name": "Khóa học không giới hạn" },
        { "name": "Truy cập toàn bộ tài liệu và audio" },
        { "name": "Review kỹ càng cuối khóa" },
        { "name": "Học 100% online" },
        { "name": "Lớp học quá đông", noBS: true },
        { "name": "Tài liệu hạn chế", noBS: true },
        { "name": "Thời gian học quá dài", noBS: true },
        { "name": "Platform thiếu chức năng", noBS: true },
      ],
       url: "/enquiry",
      "featured": "Phổ biến"
    },
    {
      "name": "Mentor",
      "numberOfStudents": ["Chỉ", "4", " bạn/lớp"],
      "description": "Có sự hỗ trợ của một mentor ngoài giờ lên lớp",
      "features": [
        { "name": "Toàn bộ quyền lợi của khóa STANDARD" },
        { "name": "Review với mentor 4 buổi/tuần theo lịch cá nhân" },
        { "name": "Hoàn tiền thi nếu kết quả không đạt yêu cầu" },
      ],
      url: "/enquiry",
      "featured": "HỖ TRỢ"
    },
    {
      name: "VIP",
      numberOfStudents: ["Toàn bộ", " 1 v 1"],
      description: "Một chi phí duy nhất và 100% cầm 5 điểm CCL trong tay",
      features: [
        { "name": "Toàn bộ quyền lợi của khóa MENTOR" },
        { "name": "Đảm bảo việc lấy 5 điểm CCL không phát sinh chi phí ngoài ý muốn" },
      ],
      url: "/enquiry",
      featured: "ĐẢM BẢO"
    }
  ];

  if (!plans) plans = defaultPlans;

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          {description && <Description>{description[0]}</Description>}
          {description && <Description>{description[1]}</Description>}
        </HeaderContainer>
        <FeatureTabListContainer>
        {plans.map((plan, index) => {
          const isActive = index === selectedFeatureIndex;
          return (
          <FeatureTabListItem
            key={index}
            active={isActive}
            onClick={() => setSelectedFeatureIndex(index)}
          >
            {plan.name}
          </FeatureTabListItem>
        )})}
        </FeatureTabListContainer>
        <PlansContainer>
          {plans.map((plan, index) => (
            <Plan key={index} featured={plan.featured} active={index === selectedFeatureIndex}>
              <PlanHeader>
                <span className="nameAndFeaturedContainer">
                  <CourseHighlightedText className="name">
                    {plan.name}
                  </CourseHighlightedText>
                  {plan.featured && <span className="featuredText">{plan.featured}</span>}
                </span>
                <div className="courseFeatureContainer">
                  <span className="courseFeature">
                    {plan.numberOfStudents[0]}{" "}
                    <span className="bigText">{plan.numberOfStudents[1]}</span>
                    {plan.numberOfStudents[2]}{" "}
                  </span>
                </div>
                <p className="description">{plan.description}</p>
              </PlanHeader>
              <PlanFeatures>
                {plan.features.map((feature, index) => {
                  const isSpecialFeature = feature.name.startsWith("Toàn bộ quyền lợi của khóa");
                  return (
                    <li className={`feature ${feature.noBS ? 'noBS' : ''}`} key={index}>
                      <CheckboxIcon className={`icon ${feature.noBS ? 'icon-noBS' : ''}`} />
                      {isSpecialFeature ? (
                        <div className="feature-special">
                          <span className={`text ${feature.noBS ? 'noBS' : ''}`}>
                            {"Toàn bộ quyền lợi của khóa "}
                          </span>
                          <FeatureHighlightedText>
                            {feature.name.split("khóa ")[1]}
                          </FeatureHighlightedText>
                        </div>
                      ) : (
                        <span className={`text ${feature.noBS ? 'noBS' : ''}`}>{feature.name}</span>
                      )}
                    </li>
                  );
                })}
              </PlanFeatures>
              <PlanAction>
                <ActionButton as="a" href={plan.url}>
                  {primaryButtonText}
                </ActionButton>
              </PlanAction>
            </Plan>
          ))}
        </PlansContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};
