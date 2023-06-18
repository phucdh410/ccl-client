import { ContentWithVerticalPadding } from "components/misc/Layouts";

//TabGrid for studentResults
import TabGrid from "components/cards/WebCCLVietnameseTabCardGrid.js";

import Features from "components/features/ThreeColSimple.js";

//TabGrid for whyUs?
import chefIconImageSrc from "images/chef-icon.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import shopIconImageSrc from "images/shop-icon.svg";

import tw from "twin.macro";

import CARD_DATA from "components/cards/resultCardData/WebCCLVietnameseResultsCardData.js";

//The student results tab
const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
const SectionContainer = tw(ContentWithVerticalPadding)``;

const CARD_DATA_POPUP = CARD_DATA[0];

export default () => {
  return (
    <SectionContainer id="studentResults">
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      <TabGrid
        heading={
          <>
            Kết quả xuất sắc <HighlightedText>2023</HighlightedText>
          </>
        }
        testimonials = {CARD_DATA_POPUP}
      />
      <Features
        heading={
          <>
            Nội dung được thiết kế theo{" "}
            <HighlightedText> NGHIÊN CỨU</HighlightedText>
          </>
        }
        cards={[
          {
            imageSrc: shopIconImageSrc,
            title: "Chất lượng tiên phong",
            description:
              "Nơi đầu tiên ra đời khóa CCL Intensive và đạt tỷ lệ đậu 100%",
            url: "https://google.com",
          },
          {
            imageSrc: chefIconImageSrc,
            title: "Thời gian học ngắn",
            description:
              "Khóa học tiêu chuẩn chỉ cần 6 tuần, tuy nhiên đã từng có bạn học chỉ 1 ngày",
            url: "https://facebook.com",
          },
          {
            imageSrc: celebrationIconImageSrc,
            title: "Chi phí hợp lý",
            description:
              "Vô cùng nhiều ưu đã dành cho các bạn đã thi PTE hoặc học các khóa của Master Group",
            url: "https://reddit.com",
          },
        ]}
        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />
    </SectionContainer>
  );
};
