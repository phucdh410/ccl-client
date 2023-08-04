import React, { useState, useEffect } from "react";

import styled from "styled-components";
import tw from "twin.macro";
//import { css } from "styled-components/macro"; //eslint-disable-line
//import { Link } from "react-router-dom";

import { Analytics } from '@vercel/analytics/react';
import { ReactComponent as CloseVideoIconImport } from "feather-icons/dist/icons/x-circle.svg";

import logo from "images/WebCCLVietnameseLogo.webp";
import ReactModalAdapter from "helpers/WebCCLVietnameseReactModalAdapter.js";
import ResponsiveVideoEmbed from "helpers/WebCCLVietnameseResponsiveVideoEmbed.js";
import { MenuButton } from './MenuButton';

const CloseVideoIcon = tw(CloseVideoIconImport)`w-12 h-12`;

const MenuContainer = styled.div`
  ${tw`lg:flex flex-col lg:flex-row w-[95%] lg:w-[fit-content] bg-primary-600 lg:bg-transparent gap-y-4 absolute p-4 top-[60px] drop-shadow-md lg:justify-between lg:items-center lg:flex-shrink-0 lg:static lg:px-0 z-50`}
  ${({ menuOpen }) => (menuOpen ? tw`flex` : tw`hidden`)}
`;
const MenuRow = tw.div`flex justify-between items-center w-full px-2 lg:px-0`;

const Row = tw.div`flex`;
const NavRow = tw(Row)`flex flex-col items-center justify-between -mx-8 -mt-8 px-2 md:px-0 md:mx-0 md:mt-0 lg:flex-row`;
const NavLink = tw.a`transition duration-100 font-medium pb-1 border-b-2 mr-0 lg:mr-8 text-gray-100 border-gray-100 lg:border-gray-400 hocus:border-primary-500 cursor-pointer`;
const PlatformButton = tw(
  NavLink
)`block lg:inline text-center text-primary-500 lg:text-gray-100 bg-gray-100 lg:bg-primary-500 px-6 py-3 border-none rounded hocus:bg-primary-800 lg:hocus:bg-gray-100 hocus:text-gray-100 lg:hocus:text-primary-500 focus:shadow-outline mr-0 mt-0 lg:mt-6 md:mt-4 lg:mt-0`;

//Change the style of the logo, ${tw`w-40 mr-3`} defines the size of the logo
export const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 md:text-2xl! ml-0!  gap-x-2 lg:gap-x-0`};

  img {
    ${tw`w-10 h-10 md:w-24 md:mr-3 lg:w-24 lg:h-24`};
  }
`;

const StyledModal = styled(ReactModalAdapter)`
  &.mainHeroModal__overlay {
    ${tw`fixed inset-0`}
    background-color: rgba(0,0,0,.8);
  }
  &.mainHeroModal__content {
    ${tw`flex-col gap-y-8 xl:mx-auto m-4 sm:m-16 max-w-screen-xl absolute inset-0 flex justify-center items-center rounded-lg bg-transparent outline-none`}
  }
  .content {
    ${tw`w-full lg:p-16`}
  }
`;



const CloseModalButton = tw.button`hover:opacity-75 scale-125 ml-6 transition-all top-0 mt-8 left-1/2 transform -translate-x-1/2 text-gray-100 hocus:border-gray-700 z-50`;
const VideoEmbedContainer = tw.div`w-full`;
const LogoTitleSpan = tw.span`text-base lg:text-2xl text-gray-100`;

export default ({
  navButton1Index = "/",
  navButton1Text = "Giới thiệu",

  navButton2Index = "/info",
  navButton2Text = "Thi CCL",

  navButton3Index = "https://www.youtube.com/embed/aMM00ItsPO0",
  navButton3Text = "Hướng dẫn đăng ký thi",

  navButton4Index = "/enquiry",
  navButton4Text = "Khóa học",

  navButtonPlatformIndex = "/login",
  navButtonPlatformText = "PLATFORM",
}) => {
  useEffect(() => {
    window.gtag("js", new Date());
    window.gtag("config", "G-B7N1H5S8N6");
  }, []);

  const defaultLogoLink = (
    <LogoLink href="/">
      <img src={logo} alt="logo" />
      CCL Vietnamese
    </LogoLink>
  );

  // State to track whether the menu is open or not
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(state => !state);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const toggleModal = () => setModalIsOpen(state => !state);

  return (
    <NavRow>
      <Analytics />
      <MenuRow>
        <LogoLink href="/">
          <img
            src={logo}
            alt=""
          />
          <LogoTitleSpan>cclvietnamese.com.au</LogoTitleSpan>
        </LogoLink>
        <MenuButton onToggle={toggleMenu} isOpen={menuOpen}/>
      </MenuRow>

      <MenuContainer menuOpen={menuOpen}>
        <NavLink href={navButton1Index}>{navButton1Text}</NavLink>
        <NavLink
          target="_blank"
          href={navButton2Index}
        >
          {navButton2Text}
        </NavLink>
        <NavLink
          target="_self"
          onClick={() => {
            toggleModal();
            setMenuOpen(false); // close the menu bar (in small screen)
          }}
        >
          {navButton3Text}
        </NavLink>
        <NavLink
          target="_blank"
          href={navButton4Index}
        >
          {navButton4Text}
        </NavLink>
        {/*<Link to={navButtonPlatformIndex}></Link>*/}
          <PlatformButton onClick={() => alert("PLATFORM vẫn đang trong giai đoạn hoàn thiện")}>
            {navButtonPlatformText}
          </PlatformButton>
        
        <StyledModal
          closeTimeoutMS={300}
          className="mainHeroModal"
          isOpen={modalIsOpen}
          onRequestClose={toggleModal}
          shouldCloseOnOverlayClick={true}
        >
          <CloseModalButton onClick={toggleModal}>
            <CloseVideoIcon />
          </CloseModalButton>
          <VideoEmbedContainer>
            <ResponsiveVideoEmbed url={navButton3Index} />
          </VideoEmbedContainer>
        </StyledModal>
      </MenuContainer>
     
    </NavRow>
  );
};
