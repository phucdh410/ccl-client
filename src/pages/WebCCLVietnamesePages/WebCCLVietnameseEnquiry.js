import React, { useRef, useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Footer from "components/footers/WebCCLVietnameseFooter.js";
import { ReactComponent as LoadingIcon } from "images/loading.svg";
import { Helmet } from "react-helmet";

//import { css } from "styled-components"; // /macro"; //eslint-disable-line
import { Content2Xl } from "components/misc/WebCCLVietnameseLayout.js";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";

import NavigationBar from "components/headers/WebCCLVietnameseNavBar.js";
import EmailIllustrationSrc from "images/email-illustration.svg";
import ReCAPTCHA from "react-google-recaptcha";

//Style and Layout of the page
const PrimaryBackgroundContainer = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-16`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const InputContainer = tw.div`relative py-3 lg:py-5 mt-6`;
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-base lg:text-lg`;
const TextContent = tw.div`lg:py-8 text-center md:text-left`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-7/12 lg:mt-16 mt-6`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-40 md:h-auto`;
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-40 md:h-full`,
]);

//Style on the title of the form
const Subheading = tw(
  SubheadingBase
)`mt-2 lg:text-xl mb-2 mx-auto text-gray-100 text-center md:text-left py-1 px-3 rounded-md w-[fit-content]`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-[#fbc52e] text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`leading-4 space-y-1 mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-gray-100`;
const TextEmphasizes = tw.span`font-bold text-primary-600 bg-white rounded-sm px-1 mx-1 text-sm inline-block leading-[1.5rem]`;
const TextRequired = tw.span`text-red-500 select-none ml-1`;

//Style on the input field elements
const Input = tw.input`border-2 rounded mt-6 first:mt-0 border-b-2 focus:outline-none font-medium transition duration-300 hocus:border-teal-500`;
const FormContainer = styled.div`
  ${tw`p-8 sm:p-4 md:p-8 bg-primary-900 text-gray-100 relative`}
  form {
    ${tw`mt-4`}
  }
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold`}
  }
  input {
    ${tw`w-full bg-transparent text-gray-100 text-base tracking-wide px-5 py-2`};

    ::placeholder {
      ${tw`text-gray-500`}3
    }
  }
`;

const SubmitButton = tw.button`mt-4 px-8 py-3 font-bold rounded flex flex-row gap-2 bg-primary-500 text-gray-100 hocus:bg-gray-100 hocus:text-primary-500 focus:shadow-outline focus:outline-none disabled:bg-primary-700 disabled:cursor-not-allowed transition duration-300`;
const SuccessMessage = tw.p`text-green-500 text-lg font-semibold mt-4`;
const ErrorMessage = tw.p`text-red-500 text-lg font-semibold mt-4`;

const API_ENDPOINT =
  "https://cclvietnamese-proxy-server.azurewebsites.net/api/cclvietnamese-enquiry-form-test";

export default ({
  subheading = "",
  heading = <>Khóa học tại CCL MASTER - cclvietnamese.com.au </>,
  description = (
    <>
      Vui lòng điền mẫu sau để nhận được thông tin
      <TextEmphasizes> KHÓA HỌC </TextEmphasizes>
      <wbr />
      và
      <TextEmphasizes> HỌC PHÍ </TextEmphasizes>
      <wbr />
      vào email của bạn
    </>
  ),
  submitButtonText = "Gửi thông tin",
  textOnLeft = true,
  seoHeading = "KHOÁ HỌC TẠI CCL MASTER - CCLVIETNAMESE.COM.AU ",
  seoDescription = "Hệ thống sẽ tự động gửi toàn bộ thông tin ngay sau khi bạn để lại thông tin liên lạc",
}) => {
  // Declare a ref for recaptcha plugin
  const recaptchaRef = useRef(null);

  //Declare the state variable, Initialise it with an empty string
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [facebookURL, setFacebookURL] = useState("");
  const [promoCode, setPromoCode] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSubmitting(true);

    const data = {
      firstName: firstName,
      emailAddress: emailAddress,
      phone: phone,
      facebookURL: facebookURL,
      promoCode: promoCode,
    };

    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(
          "Lỗi hệ thống! Thông tin chưa được chuyển đi. Vui lòng thử lại sau"
        );
      }

      // Set a success message
      setSuccessMessage(
        "Cảm ơn thông tin của bạn. Chi tiết đã được gửi vào email inbox (hoặc spam) của bạn rùi nhé <3"
      );

      // Clear the input fields after successful form submission
      setFirstName("");
      setPhone("");
      setEmailAddress("");
      setFacebookURL("");
      setPromoCode("");
    } catch (error) {
      // Show an error message
      setErrorMessage(
        "Có lỗi xảy ra! Vui lòng liên hệ trực tiếp với trung tâm"
      );
      setSuccessMessage(""); // Clear any previous success message
    }

    setSubmitting(false);
  };

  return (
    <PrimaryBackgroundContainer>
      <Helmet>
        <title>{`${seoHeading}`}</title>
        <meta name="description" content={seoDescription} />
      </Helmet>
      <FormContainer>
        <Content2Xl>
          <NavigationBar />
        </Content2Xl>
        <TwoColumn>
          <ImageColumn>
            <Image imageSrc={EmailIllustrationSrc} />
          </ImageColumn>
          <TextColumn textOnLeft={textOnLeft}>
            <TextContent>
              {subheading && <Subheading>{subheading}</Subheading>}
              <Heading>{heading}</Heading>
              {description && <Description>{description}</Description>}
              <Column>
                <form onSubmit={handleSubmit}>
                  <InputContainer>
                    <Label htmlFor="name-input">
                      Tên của bạn <TextRequired>*</TextRequired>
                    </Label>
                    <Input
                      id="name-input"
                      type="text"
                      name="name"
                      placeholder="E.g. Hoàng Sơn"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="phone-input">
                      Số điện thoại <TextRequired>*</TextRequired>
                    </Label>
                    <Input
                      id="phone-input"
                      type="tel"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Thêm mã quốc gia và bỏ số 0 đầu e.g + 61 412 345 678 "
                      required
                    />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="email-input">
                      Địa chỉ Email <TextRequired>*</TextRequired>
                    </Label>
                    <Input
                      id="email-input"
                      type="email"
                      name="email"
                      placeholder="E.g. your-email@mail.com"
                      value={emailAddress}
                      onChange={(e) => setEmailAddress(e.target.value)}
                      required
                    />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="fb-input">Facebook URL</Label>
                    <Input
                      id="fb-input"
                      type="text"
                      name="facebook"
                      placeholder="E.g. facebook.com/your-profile"
                      value={facebookURL}
                      onChange={(e) => setFacebookURL(e.target.value)}
                    />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="promocode-input">Mã giới thiệu</Label>
                    <Input
                      id="promocode-input"
                      type="text"
                      name="promocode"
                      placeholder="(Viết hoa hay thường đều được)"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                    />
                  </InputContainer>
                  {
                    <SubmitButton
                      type="submit"
                      value="Submit"
                      disabled={submitting}
                    >
                      {submitting ? <LoadingIcon /> : null}
                      Gửi thông tin
                    </SubmitButton>
                  }
                </form>
                {successMessage && (
                  <SuccessMessage>{successMessage}</SuccessMessage>
                )}
                {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
              </Column>
            </TextContent>
          </TextColumn>
        </TwoColumn>
        <Content2Xl>
          <Footer />
        </Content2Xl>
      </FormContainer>

      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={
          process.env.REACT_APP_RECAPTCHA_KEY ||
          "6LcVFbQpAAAAADTwS_1mmhWjOFStyKeZqPQnLn22"
        }
        size="invisible"
        badge="bottomright"
      />
    </PrimaryBackgroundContainer>
  );
};
