import React from 'react';
import { Link } from 'react-router-dom';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeHeaderThree from '../HomeThree/HomeThreeNavBar/HomeThreeNavBar';

const NotFound = () => {
  return (
    <>
      <HomeHeaderThree />
      <CommonPageHeader title="Welcome to 24UR" subtitle="Sucess" />

      <div className='pt-120 pb-120'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-8 offset-xl-2'>
              <div className='error-404 not-found mb-20'>
                <div className='error-404-content text-center'>
                  <h1 className='error-404-title'> Welcome</h1>
                  <h2 className='error-title'>Best Care & Better Doctor.</h2>
                  {/* <p className='err-text'>Best Care & Better Doctor.</p> */}
                  {/* <Link to="/" className="primary_btn btn-icon ml-0"><span>+</span>BACK TO HOME</Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default NotFound;