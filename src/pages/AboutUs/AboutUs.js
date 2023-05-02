import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeFact from '../Home/Home/HomeFact/HomeFact';
import HomeHeaderThree from '../HomeThree/HomeThreeNavBar/HomeThreeNavBar';
import HomeOurTeam from '../Home/Home/HomeOurTeam/HomeOurTeam';
import AboutAnalysis from './AboutAnalysis/AboutAnalysis';
import AboutAppoinment from './AboutAppoinment/AboutAppoinment';
import AboutArea from './AboutArea/AboutArea';
import AboutCounter from './AboutCounter/AboutCounter';
import AboutTestimonial from './AboutTestimonial/AboutTestimonial';

const AboutUs = () => {
   return (
      <>
         <HomeHeaderThree/>
         <CommonPageHeader title="About Us" subtitle="About" />
         {/* <AboutArea/> */}
         <AboutCounter/>
         {/* <AboutAppoinment/> */}
         <HomeOurTeam/>
         <HomeFact/>
         <AboutTestimonial/>
         {/* <AboutAnalysis/> */}
         <Footer/>
      </>
   );
};

export default AboutUs;