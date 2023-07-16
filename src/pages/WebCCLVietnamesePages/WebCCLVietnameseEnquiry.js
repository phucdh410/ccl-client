import React, { useState }  from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {Content2Xl} from "components/misc/WebCCLVietnameseLayout.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { ReactComponent as CheckedMark } from "feather-icons/dist/icons/check-circle.svg";

import NavigationBar from "components/headers/WebCCLVietnameseNavBar.js"
import EmailIllustrationSrc from "images/email-illustration.svg";


//Style and Layout of the page
const PrimaryBackgroundContainer = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const InputContainer = tw.div`relative py-5 mt-6`;
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-lg`;
const TextContent = tw.div`lg:py-8 text-center md:text-left`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);


//Style on the title of the form
const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-200`
const TextEmphasizes = tw.span`text-white`;

//Style on the input field elements
const Input = tw.input`border-2 rounded mt-6 first:mt-0 border-b-2 focus:outline-none font-medium transition duration-300 hocus:border-teal-500`
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

const SubmitButton = tw.button`px-8 py-3 font-bold rounded bg-primary-700 text-gray-100 hocus:bg-primary-900 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300`;
const SuccessMessage = tw.p`text-green-500 text-lg font-semibold mt-4`;
const ErrorMessage = tw.p`text-red-500 text-lg font-semibold mt-4`;

const API_ENDPOINT = "https://cclvietnamese-proxy-server.azurewebsites.net/api/cclvietnamese-enquiry-form-test";

export default ({
  subheading = "THÔNG TIN HỌC PHÍ",
  heading = <>Tư vấn khóa học </>,
  description = <>Vui lòng điền mẫu sau để nhận được thông tin
                <TextEmphasizes> khóa học </TextEmphasizes>
                <wbr/> 
                và 
                <TextEmphasizes> học phí </TextEmphasizes>
                <wbr/> 
                vào email của bạn
                </>,
  submitButtonText = "Gửi thông tin",
  textOnLeft = true,
}) => {
  //Declare the state variable, Initialise it with an empty string
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState(""); 
  const [emailAddress, setEmailAddress] = useState("");
  const [facebookURL, setFacebookURL] = useState("");
  const [promoCode, setPromoCode] = useState("");
  
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Declare a state variable to track whether each input field has been filled.
  // Initialize it as false, indicating that the field has not yet been filled.
  const [isFirstNameFilled, setFirstNameFilled] = useState(false);
  const [isPhoneFilled, setPhoneFilled] = useState(false);
  const [isEmailFilled, setEmailFilled] = useState(false);
  const [isFacebookURLFilled, setFacebookURLFilled] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      firstName: firstName,
      emailAddress: emailAddress,
      phone: phone,
      facebookURL: facebookURL,
      promoCode: promoCode
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
        throw new Error("Lỗi hệ thống! Thông tin chưa được chuyển đi. Vui lòng thử lại sau");
      }
  
       // Clear the input fields after successful form submission
      setFirstName("");
      setPhone("");
      setEmailAddress("");
      setFacebookURL("");
      setPromoCode("");


      // Clear the input fields after successful form submission
      setFirstName("");
      setEmailAddress("");
    } catch (error) {
      // Show an error message
      setErrorMessage("Có lỗi xảy ra! Vui lòng liên hệ trực tiếp với trung tâm");
      setSuccessMessage(""); // Clear any previous success message
    }
  };

  return (
    <PrimaryBackgroundContainer>
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
                    <Label htmlFor="name-input">Tên của bạn: </Label>
                    <Input
                        id="name-input"
                        type="text"
                        name="name"
                        placeholder="E.g. Hoàng Sơn"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        onBlur={(e) => setFirstNameFilled(Boolean(e.target.value))}
                        required
                        className={`${isFirstNameFilled ? 'border-4 border-green-500 focus:border-green-500' : ''}`}
                    />
                  </InputContainer>
                    <InputContainer>
                      <Label htmlFor="phone-input">Số điện thoại</Label>
                      <Input
                        id="phone-input"
                        country={'au'}
                        name="phone"
                        value={phone} // replace 'this.state.phone' with 'phone'
                        onChange={setPhone} // replace 'phone => this.setState({ phone })' with 'setPhone'
                        placeholder="Thêm mã quốc gia và bỏ số 0 e.g (+61) 0415 666 888 thành 61 415 666 888"
                        required
                      />      
                    </InputContainer>
                    <InputContainer>
                      <Label htmlFor="email-input">Địa chỉ Email</Label>
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
                      submitButtonText && <SubmitButton type="submit" value="Submit">
                      {submitButtonText}
                      </SubmitButton>
                    }
                  </form>
                  {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
                  {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
                </Column>
              </TextContent>
            </TextColumn>
          </TwoColumn>
        </FormContainer>
      </PrimaryBackgroundContainer>
  );
};

