import React from 'react';
import CommonPageHeader from '../../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../../components/Shared/Footer';
import HomeHeaderThree from '../../HomeThree/HomeThreeNavBar/HomeThreeNavBar';
import ServicesDetailsArea from './ServicesDetailsArea/ServicesDetailsArea';

const ServicesDetails = () => {
    return (
        <>
            <HomeHeaderThree/>
            <CommonPageHeader title="Our Services" subtitle="Details" />
            <ServicesDetailsArea/>
            <Footer/>
        </>
    );
};

export default ServicesDetails;