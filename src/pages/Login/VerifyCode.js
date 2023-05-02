import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import ForgetArea from './VerifyCode/VerifyCode';

const VerifyCode = () => {
    return (
        <>
           {/* <HomeHeader/> */}
           {/* <CommonPageHeader title="VerifyCode Page" subtitle="Login" /> */}
           <ForgetArea/>
           {/* <Footer/> */}
        </>
    );
};

export default VerifyCode;