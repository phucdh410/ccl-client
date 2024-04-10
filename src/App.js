import React from "react";
import GlobalStyles from "styles/GlobalStyles";
// eslint-disable-next-line
import { css } from "styled-components";
import WebCCLVietnameseLandingPage from "./WebCCLVietnameseLandingPage.js";

/* Inner Pages */
import TestInfoPage from "pages/WebCCLVietnamesePages/WebCCLVietnameseTestInfo.js";
import EnquiryPage from "pages/WebCCLVietnamesePages/WebCCLVietnameseEnquiry.js";
import GetUpdatePage from "pages/WebCCLVietnamesePages/WebCCLVietnameseGetUpdatePage.js";

//import ComponentRenderer from "WebCCLVietnameseCompRender.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MessengerChat } from "react-messenger-chat-plugin";

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
      <MessengerChat
        pageId={process.env.REACT_APP_MESSENGER_PAGE_ID || "105589745947012"}
      />
    </>
  );
}
