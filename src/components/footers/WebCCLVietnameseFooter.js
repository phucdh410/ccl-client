import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Analytics } from '@vercel/analytics/react';
//import { css } from "styled-components/macro"; //eslint-disable-line

import LogoImage from "../../images/logo/WebCCLVietnameseLogo.svg";
import { ReactComponent as FacebookIcon } from "images/facebook-icon.svg";
//import { ReactComponent as TwitterIcon } from "images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "images/youtube-icon.svg";

const Container = tw.div`relative bg-gray-900 text-gray-100 -mx-8 -mb-8 px-8`;
const Content = tw.div`max-w-screen-xl mx-auto pt-16 pb-8`
const NoOfColumns = tw.div`flex flex-wrap justify-between`;

const Column = tw.div`w-full md:w-1/6 mb-8 md:mb-0 text-sm sm:text-base text-center md:text-left`;
const CompanyColumn = tw.div`text-center md:text-left mb-16 lg:mb-0 w-full lg:w-1/5`;

const ColumnHeading = tw.h5`font-bold uppercase`;

const LinkList = tw.ul`mt-4 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-100 pb-1 transition duration-300`;

const LogoContainer = tw.div`flex items-center justify-center lg:justify-start`;
const LogoImg = tw.img`w-8 mr-2`;
const LogoText = tw.h5`text-xl font-black`;

const CompanyAddress = tw.p`mt-4 max-w-xs font-medium text-sm mx-auto lg:mx-0 lg:mr-4 leading-loose text-center lg:text-left`;

const SocialLinksContainer = tw.div`mt-4 text-center lg:text-left`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block p-2 rounded-full bg-gray-100 text-gray-900 hover:bg-gray-500 transition duration-300 mr-4 last:mr-0`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

const CopyrightAndCompanyInfoRow = tw.div`pb-0 text-sm font-normal flex flex-col sm:flex-row items-center justify-between`
const CopyrightNotice = tw.div`flex items-center justify-center`;
const CompanyInfo = tw.div`justify-end`

const Divider = tw.div`my-8 border-b-2 border-gray-800`
export default () => {
  return (
    <Container>
      <Analytics />
      <Content>
        <NoOfColumns>
          <CompanyColumn>
            <LogoContainer>
              <LogoText>cclvietnamese.com.au</LogoText>
            </LogoContainer>
            <CompanyAddress>
              Sydney, 
              New South Wales,
              Australia 2000
            </CompanyAddress>
            <SocialLinksContainer>
              <SocialLink href="https://www.facebook.com/cclmaster/">
                <FacebookIcon />
              </SocialLink>

              <SocialLink href="https://www.youtube.com/@cclvietnamese">
                <YoutubeIcon />
              </SocialLink>
            </SocialLinksContainer>
          </CompanyColumn>
          {/* <Column>
            <ColumnHeading>Quick Links</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="#">Blog</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">FAQs</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Support</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">About Us</Link>
              </LinkListItem>
            </LinkList>
          </Column> 
          
          <Column>
            <ColumnHeading>Legal</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="#">GDPR</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Privacy Policy</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Terms of Service</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Disclaimer</Link>
              </LinkListItem>
            </LinkList>
          </Column>
          
          */}

          <Column>
            <ColumnHeading>Contact</ColumnHeading>
            <LinkList>
              <LinkListItem>
                (+61) 415-608-868
              </LinkListItem>
              <LinkListItem>
                <Link href="mailto:support@cclvietnamese.com.au">support@cclvietnamese.com.au</Link>
              </LinkListItem>
              <LinkListItem>
                ABN: 76667428864
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Home Page</Link>
              </LinkListItem>
            </LinkList>
          </Column>

          

        </NoOfColumns>

        <Divider/>

        <CopyrightAndCompanyInfoRow>
          <CopyrightNotice>
            <LogoImg src={LogoImage} /> Syndikates Education Pty Ltd ACN 667 428 864
          </CopyrightNotice>
          <CompanyInfo>
            Built with {'\u2764\uFE0F'} &copy; 2023 
          </CompanyInfo>
        </CopyrightAndCompanyInfoRow>

      </Content>
    </Container>
  );
};
