import React, { useEffect } from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeHeader from '../HomeThree/HomeThreeNavBar/HomeThreeNavBar';
import PaymentWork from './PaymentsArea/PaymentWork';
import CheckoutCouponArea from './CheckoutCouponArea/CheckoutCouponArea';
import { Navigate, useNavigate } from 'react-router-dom';



const Payment = () => {


  const  navigate = useNavigate()

   //  useEffect(()=>{
   //      const Token =localStorage.getItem('token')

   //      if(Token == null){
   //          navigate('/login')
   //      }

   //  },[])



   return (
      <>
         <HomeHeader/>
         <CommonPageHeader title="Payment" subtitle="Payment" />
         {/* <CheckoutCouponArea/> */}
         <PaymentWork/>
         <Footer/>
      </>
   );
};

export default Payment;