import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import ForgetArea from './ForgetArea/ForgetArea';

const ForgetPassword = () => {
    return (
        <>
           {/* <HomeHeader/> */}
           {/* <CommonPageHeader title="ForgetPassword Page" subtitle="Login" /> */}
           <ForgetArea/>
           {/* <Footer/> */}
        </>
    );
};

export default ForgetPassword;