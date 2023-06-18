import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line

import { ReactComponent as MenuIconImport } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIconImport } from "feather-icons/dist/icons/x.svg";
import { ReactComponent as CloseVideoIconImport } from "feather-icons/dist/icons/x-circle.svg";

import logo from "images/WebCCLVietnameseLogo.svg";
import { LogoLink } from "components/headers/WebCCLVietnameseHeader.js";
import ReactModalAdapter from "helpers/WebCCLVietnameseReactModalAdapter.js";
import ResponsiveVideoEmbed from "helpers/WebCCLVietnameseResponsiveVideoEmbed.js";

const MenuIcon = tw(
  MenuIconImport
)`lg:hidden w-6 h-6`;
const CloseIcon = tw(
  CloseIconImport
)`lg:hidden w-6 h-6`;
const CloseVideoIcon = tw(
  CloseVideoIconImport
)`w-6 h-6`;

const MenuContainer = styled.div`
  ${tw`lg:flex lg:justify-between items-center`}
  ${({ menuOpen }) => menuOpen ? tw`flex` : tw`hidden`}
`;
const MenuRow = tw.div`flex justify-between items-center`;

const Row = tw.div`flex`;
const NavRow = tw(Row)`flex flex-col lg:flex-row items-center justify-between`;
const NavLink = tw.a`mt-4 lg:mt-0 transition duration-300 font-medium pb-1 border-b-2 mr-8 text-gray-100 border-gray-400 hocus:border-gray-700 cursor-pointer`;
const PlatformButton = tw(
  NavLink
)`text-gray-100 bg-primary-500 px-6 py-3 border-none rounded hocus:bg-primary-900 focus:shadow-outline mr-0 mt-6 md:mt-4 lg:mt-0`;



const StyledModal = styled(ReactModalAdapter)`
  &.mainHeroModal__overlay {
    ${tw`fixed inset-0`}
  }
  &.mainHeroModal__content {
    ${tw`xl:mx-auto m-4 sm:m-16 max-w-screen-xl absolute inset-0 flex justify-center items-center rounded-lg bg-transparent outline-none`}
  }
  .content {
    ${tw`w-full lg:p-16`}
  }
`;

const CloseModalButton = tw.button`top-0 mt-8 left-1/2 transform -translate-x-1/2 text-gray-100 hocus:border-gray-700 z-50`;
const VideoEmbedContainer = tw.div`w-full`;


export default ({
  navButton1Index = "#studentResults",
  navButton1Text = "About Us",

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
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const toggleModal = () => setModalIsOpen(!modalIsOpen);



  return (
    <NavRow>
      <MenuRow>
        <LogoLink href="/">
          <img src={logo} alt="" />
          cclVietnamese.com.au
        </LogoLink>      
      </MenuRow> 
      
      <MenuContainer  menuOpen={menuOpen}>
        <NavLink href={navButton1Index}>{navButton1Text}</NavLink>
        <NavLink target="_blank" href={navButton2Index}>
          {navButton2Text}
        </NavLink>
        <NavLink target="_self" onClick={toggleModal}>
          {navButton3Text}
        </NavLink>
        <NavLink target="_blank" href={navButton4Index}>
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
            <CloseVideoIcon/>
          </CloseModalButton>
          <VideoEmbedContainer>
            <ResponsiveVideoEmbed url={navButton3Index} />
          </VideoEmbedContainer>
        </StyledModal>
      </MenuContainer>
      <MenuIcon onClick={toggleMenu}>
          {/* This will show three lines if menu is closed and an X if it's open */}
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
      </MenuIcon>

    </NavRow>        
  );
};