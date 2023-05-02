import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeHeaderThree from '../HomeThree/HomeThreeNavBar/HomeThreeNavBar';
import ContactArea from './ContactArea/ContactArea';
import ContactFormArea from './ContactFormArea/ContactFormArea';
import ContactMap from './ContactMap/ContactMap';

const Contact = () => {
    return (
        <>
            <HomeHeaderThree/>
            <CommonPageHeader title="Contact Us" subtitle="Contact" />
            <ContactArea/>
            <ContactFormArea/>
            {/* <ContactMap/> */}
            <Footer/>
        </>
    );
};

export default Contact;