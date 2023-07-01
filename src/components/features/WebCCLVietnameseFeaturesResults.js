import { ContentWithVerticalPadding } from "components/misc/Layouts";

//TabGrid for studentResults
import TabGrid from "components/cards/WebCCLVietnameseTabCardGrid.js";
import Features from "components/pricing/WebCCLVietnameseFeaturesCourses.js";
import tw from "twin.macro";

//The student results tab
const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
const SectionContainer = tw(ContentWithVerticalPadding)``;

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
      />

      <Features
        heading={
          <>
            Khóa học được thiết kế{" "}
            <HighlightedText> BÀI BẢN</HighlightedText>
          </>
        }
        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />
    </SectionContainer>
  );
};
