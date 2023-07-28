import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line


import { ReactComponent as CloseVideoIconImport } from "feather-icons/dist/icons/x-circle.svg";

import logo from "images/WebCCLVietnameseLogo.svg";
import { LogoLink } from "components/headers/WebCCLVietnameseHeader.js";
import ReactModalAdapter from "helpers/WebCCLVietnameseReactModalAdapter.js";
import ResponsiveVideoEmbed from "helpers/WebCCLVietnameseResponsiveVideoEmbed.js";
import { MenuButton } from './MenuButton';

const CloseVideoIcon = tw(CloseVideoIconImport)`w-6 h-6`;

const MenuContainer = styled.div`
  ${tw`lg:flex flex-col lg:flex-row w-[100%] lg:w-[fit-content] bg-primary-800 lg:bg-transparent gap-y-4 absolute p-4  top-[60px] drop-shadow-md lg:justify-between lg:items-center lg:flex-shrink-0 lg:static lg:px-0 `}
  ${({ menuOpen }) => (menuOpen ? tw`flex` : tw`hidden`)}
`;
const MenuRow = tw.div`flex justify-between items-center w-full px-2 lg:px-0`;

const Row = tw.div`flex`;
const NavRow = tw(Row)`flex flex-col items-center justify-between -mx-8 -mt-8 px-2 md:px-0 md:mx-0 md:mt-0 lg:flex-row`;
const NavLink = tw.a`transition duration-300 font-medium pb-1 border-b-2 mr-0 lg:mr-8 text-gray-100 border-gray-400 hocus:border-gray-700 cursor-pointer`;
const PlatformButton = tw(
  NavLink
)`block lg:inline text-center text-gray-100 bg-primary-500 px-6 py-3 border-none rounded hocus:bg-primary-900 focus:shadow-outline mr-0 mt-0 lg:mt-6 md:mt-4 lg:mt-0`;

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
const LogoTitleSpan = tw.span`text-base lg:text-2xl`;

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

  // State to track whether the menu is open or not
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(state => !state);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const toggleModal = () => setModalIsOpen(state => !state);

  return (
    <NavRow>
      <MenuRow>
        <LogoLink href="/">
          <img
            src={logo}
            alt=""
          />
          <LogoTitleSpan>CCLVietnamese.COM.AU</LogoTitleSpan>
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
          onClick={toggleModal}
        >
          {navButton3Text}
        </NavLink>
        <NavLink
          target="_blank"
          href={navButton4Index}
        >
          {navButton4Text}
        </NavLink>
        <Link to={navButtonPlatformIndex}>
          <PlatformButton>{navButtonPlatformText}</PlatformButton>
        </Link>

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
