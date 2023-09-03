import React from "react";
import GlobalStyles from 'styles/GlobalStyles';
import { css } from "styled-components/macro"; //eslint-disable-line
import WebCCLVietnameseLandingPage from "./WebCCLVietnameseLandingPage.js";

/* Inner Pages */
import TestInfoPage from "pages/WebCCLVietnamesePages/WebCCLVietnameseTestInfo.js";
import EnquiryPage from "pages/WebCCLVietnamesePages/WebCCLVietnameseEnquiry.js";
import GetUpdatePage from "pages/WebCCLVietnamesePages/WebCCLVietnameseGetUpdatePage.js";


//import ComponentRenderer from "WebCCLVietnameseCompRender.js";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {


  return (

    <>
      <GlobalStyles />
      <Router>
        <Routes>        
            <Route path="/" element={<WebCCLVietnameseLandingPage />} /> 
            <Route path="/info" element={<TestInfoPage />} />   
            <Route path="/enquiry" element={<EnquiryPage />} />          
            <Route path="/getupdates" element={<GetUpdatePage />} />          
        </Routes>
      </Router>
    </>
  );
}
