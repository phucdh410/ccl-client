import React, { useState }  from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {Content2Xl} from "components/misc/WebCCLVietnameseLayout.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";

import NavigationBar from "components/headers/WebCCLVietnameseNavBar.js"
//import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import EmailIllustrationSrc from "images/email-illustration.svg";


const PrimaryBackgroundContainer = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const InputContainer = tw.div`relative py-5 mt-6`;
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-200`
const TextEmphasizes = tw.span`text-white`;

const Select = styled.select``;
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
const FormContainer = styled.div`
  ${tw`p-8 sm:p-4 md:p-8 bg-primary-900 text-gray-100 relative`}
  form {
    ${tw`mt-4`}
  }
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold`}
  }
  input,textarea {
    ${tw`w-full bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2 text-gray-100 hocus:border-pink-400 focus:outline-none transition duration-200`};

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
  subheading = "Contact Us",
  heading = <>Tư vấn khóa học </>,
  description = <>Vui lòng điền mẫu sau để nhận được thông tin
                <TextEmphasizes> khóa học </TextEmphasizes>
                <wbr/> 
                và 
                <TextEmphasizes> học phí </TextEmphasizes>
                <wbr/> 
                vào email của bạn
                </>,
  submitButtonText = "Send",
  formAction = "#",
  formMethod = "get",
  textOnLeft = true,
}) => {
  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      firstName: firstName,
      emailAddress: emailAddress
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
        throw new Error("An error occurred while submitting the form.");
      }
  
      // Show a success message
      setSuccessMessage("Form submitted successfully!");
      setErrorMessage(""); // Clear any previous error message

      // Clear the input fields after successful form submission
      setFirstName("");
      setEmailAddress("");
    } catch (error) {
      // Show an error message
      setErrorMessage("An error occurred while submitting the form.");
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
                      <Label htmlFor="name-input">Your Name</Label>
                      <Input
                        id="name-input"
                        type="text"
                        name="name"
                        placeholder="E.g. John Doe"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </InputContainer>
                    <InputContainer>
                      <Label htmlFor="email-input">Email Address</Label>
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
                    <SubmitButton type="submit" value="Submit">
                      Submit
                    </SubmitButton>
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

