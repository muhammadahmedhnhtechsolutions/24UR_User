import React, { useEffect } from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeHeaderThree from '../HomeThree/HomeThreeNavBar/HomeThreeNavBar';
import ContactArea from './ContactArea/ContactArea';
import ProfileArea from './ProfileArea/ProfileArea';
import ContactMap from './ContactMap/ContactMap';
import { useNavigate } from 'react-router-dom';
import gloal from '../../hooks/useGlobalContext'

const Contact = () => {

    const contextapiData =gloal()

    console.log("contextApi==>",contextapiData)

    const navigate =useNavigate()


    // useEffect(()=>{
    //     const Token =localStorage.getItem('token')

    //     if(Token == null){
    //         navigate('/login')
    //     }

    // },[])
    // subtitle={ahmed.ahmed}

    return (
        <>
            <HomeHeaderThree/>
            <CommonPageHeader title="Profile" subtitle="Profile"  />
            <ContactArea/>
            <ProfileArea/>
            {/* <ContactMap/> */}
            <Footer/>
        </>
    );
};

export default Contact;