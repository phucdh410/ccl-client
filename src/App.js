import React from "react";
import GlobalStyles from 'styles/GlobalStyles';
import { css } from "styled-components/macro"; //eslint-disable-line
import WebCCLVietnameseLandingPage from "./WebCCLVietnameseLandingPage.js";
import { Analytics } from '@vercel/analytics/react';

/* Inner Pages */
import LoginPage from "pages/WebCCLVietnamesePages/WebCCLVietnameseSignIn.js";
import TestInfoPage from "pages/WebCCLVietnamesePages/WebCCLVietnameseTestInfo.js";
import EnquiryPage from "pages/WebCCLVietnamesePages/WebCCLVietnameseEnquiry.js";


//import ComponentRenderer from "WebCCLVietnameseCompRender.js";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {


  return (

    <>
      <GlobalStyles />
      <Analytics />
      <Router>
        <Routes>        
            <Route path="/" element={<WebCCLVietnameseLandingPage />} />
            <Route path="/login" element={<LoginPage />} />  
            <Route path="/info" element={<TestInfoPage />} />   
            <Route path="/enquiry" element={<EnquiryPage />} />          
        </Routes>
      </Router>
    </>
  );
}
