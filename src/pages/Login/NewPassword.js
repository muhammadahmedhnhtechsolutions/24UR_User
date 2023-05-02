import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import ForgetArea from './NewPassword/NewPassword';

const NewPassword = () => {
    return (
        <>
           {/* <HomeHeader/> */}
           {/* <CommonPageHeader title="NewPassword Page" subtitle="Login" /> */}
           <ForgetArea/>
           {/* <Footer/> */}
        </>
    );
};

export default NewPassword;