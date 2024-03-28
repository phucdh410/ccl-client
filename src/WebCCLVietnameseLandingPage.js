import React, { useEffect } from "react";
import { Analytics } from '@vercel/analytics/react';
//import { useState } from "react";
import { Content2Xl } from "components/misc/Layouts";
//import { Link } from 'react-router-dom';
//import { motion } from "framer-motion";
//import { css } from "styled-components"; // /macro";

import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Footer from "components/footers/WebCCLVietnameseFooter.js";
import NavigationBar from "components/headers/WebCCLVietnameseNavBar.js"
import Hero from "components/hero/WebCCLVietnameseHero.js"
import Feature from "components/features/WebCCLVietnameseFeaturesResults.js"

import tw from "twin.macro";

//Page styling
const PrimaryBackgroundContainer = tw.div`-mx-8 px-8 -mt-8 pt-8 -mb-8 pb-8 min-h-screen bg-primary-900 text-gray-100`;


export default () => {
  /*
   * Using gtag like this because we only want to use Google Analytics when Main Landing Page is rendered
   * Remove this part and the the gtag script inside public/index.html if you dont need google analytics
   */
  useEffect(() => {
    window.gtag("js", new Date());
    window.gtag("config", "G-B7N1H5S8N6");
  }, [])


  return (
    <AnimationRevealPage disabled>
        <PrimaryBackgroundContainer>
          <Analytics />
          <Content2Xl>
            <NavigationBar />
            <Hero/>
            <Feature/>
            <Footer />
          </Content2Xl>
          </PrimaryBackgroundContainer>

      </AnimationRevealPage>
  );
};
