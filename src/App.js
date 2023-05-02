import { lazy,Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// toastContainer
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import ScrollTop from './components/ScrollTop';
import AllContext from './context/AllContext';

import Appointment from './pages/Appointment/Appointment';
import BlogDetails from './pages/BlogDetails/BlogDetails';  
import BlogLeftSideBar from './pages/BlogLeftSideBar/BlogLeftSideBar';
import BlogNoSideBar from './pages/BlogNoSideBar/BlogNoSideBar';
import Blogs from './pages/Blogs/Blogs';
import BlogThreeColMasonry from './pages/BlogThreeColMasonry/BlogThreeColMasonry';
import BlogThreeColumn from './pages/BlogThreeColumn/BlogThreeColumn';
import BlogTwoColumn from './pages/BlogTwoColumn/BlogTwoColumn';
import BlogTwoColumnMasonry from './pages/BlogTwoColumnMasonry/BlogTwoColumnMasonry';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import DetailsAudio from './pages/DetailsAudio/DetailsAudio';
import DetailsGallery from './pages/DetailsGallery/DetailsGallery';
import DetailsLeftSideBar from './pages/DetailsLeftSideBar/DetailsLeftSideBar';
import DetailsVideo from './pages/DetailsVideo/DetailsVideo';
import DoctorDetails from './pages/Doctors/DoctorDetails/DoctorDetails';
import DoctorsOne from './pages/Doctors/DoctorsOne/DoctorsOne';
import DoctorsTwo from './pages/Doctors/DoctorsTwo/DoctorsTwo';
import Home from './pages/Home/Home/Home';

import HomeTwo from './pages/HomeTwo/HomeTwo';
import HomeFour from './pages/HomeFour/HomeFour';
import PortfolioSlider from './pages/PortfolioSlider/PortfolioSlider';
import PortfolioThreeCol from './pages/PortfolioThreeCol/PortfolioThreeCol';
import PortfolioTwoColumn from './pages/PortfolioTwoColumn/PortfolioTwoColumn';
import Register from './pages/Register/Register';


import ServicesOne from './pages/Services/ServicesOne/ServicesOne';
import ServicesTwo from './pages/Services/ServicesTwo/ServicesTwo';
import ShopDetails from './pages/ShopDetails/ShopDetails/ShopDetails';
import ShopPage from './pages/ShopPage/ShopPage/ShopPage';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import WishList from './pages/wishList/WishList';
import HomeFive from './pages/HomeFive/HomeFive';
import './App.css';
import NotFound from './pages/NotFound/NotFound';
import SuccessPage from './pages/NotFound/SuccessPage';
import PackagesFront from './pages/HomeThree/PackagesFront';
// import Login from './pages/Login/Login';
// import ForgetArea from './pages/Login/ForgetPassword';
// import VerifyCode from './pages/Login/VerifyCode';
// import NewPassword from './pages/Login/NewPassword';
// import HomeThree from './pages/HomeThree/HomeThree';
// import ServicesDetails from './pages/Services/ServicesDetails/ServicesDetails';
// import AboutUs from './pages/AboutUs/AboutUs';
// import Contact from './pages/Contact/Contact';

// import ProfileArea from './pages/Contact/Profile';
// import Payment from './pages/CheckoutPage/Payment';
import {Loader} from 'react-overlay-loader';

import ProtectedRoute from './ProtectedRoutes'
const Login = lazy (()=>import('./pages/Login/Login')) ;
const ForgetArea = lazy (()=>import('./pages/Login/ForgetPassword')) ;
const VerifyCode = lazy(()=>import('./pages/Login/VerifyCode')) ;
const NewPassword = lazy(()=>import('./pages/Login/NewPassword')) ;

const HomeThree = lazy ( () => import('./pages/HomeThree/HomeThree'));
const ServicesDetails = lazy ( () => import('./pages/Services/ServicesDetails/ServicesDetails'));
const AboutUs = lazy(()=>import ('./pages/AboutUs/AboutUs'));
const  Contact = lazy(()=>import('./pages/Contact/Contact'));
const ProfileArea = lazy ( () => import('./pages/Contact/Profile'));
const Payment = lazy (()=>import('./pages/CheckoutPage/Payment'));
// const ProtectedRoute = lazy (()=>('./ProtectedRoutes'))

function App() {
  return (
    <>
      <AllContext>
        {/* <Suspense fallback={<Loader fullPage loading />} > */}
        <BrowserRouter>
          <ScrollTop />
          <ToastContainer />
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            {/* <Route path="/home" element={<Home />} /> */}
            {/* <Route path="/homeTwo" element={<HomeTwo />} /> */}
            {/* my homethree */}
            {/* <Route path="/" element={<PackagesFront />} /> */}
            {/* <Route path="/homeThree" element={<HomeThree />} /> */}
            {/* <Route path="/" element={<HomeThree /> } />
            <Route path="/servicesDetails" element={<ServicesDetails />} />
            <Route path="/about" element={ <AboutUs />} />
            <Route path="/contact" element={<Contact />} /> */}
            
            <Route path="/" element={<Suspense fallback={<Loader fullPage loading />} ><HomeThree /></Suspense> } />
            <Route path="/servicesDetails" element={<Suspense fallback={<Loader fullPage loading />} ><ServicesDetails /></Suspense>} />
            <Route path="/about" element={<Suspense fallback={<Loader fullPage loading />}> <AboutUs /></Suspense>} />
            <Route path="/contact" element={<Suspense fallback={<Loader fullPage loading />}><Contact /></Suspense> }  />
            {/* <Route path="/homeFour" element={<HomeFour />} />
            <Route path="/homeFive" element={<HomeFive />} />
            <Route path="/services" element={<ServicesOne />} />
            <Route path="/servicesTwo" element={<ServicesTwo />} />
            <Route path="/doctors" element={<DoctorsOne />} />
            <Route path="/doctorsTwo" element={<DoctorsTwo />} />
            <Route path="/doctorDetails" element={<DoctorDetails />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/shopDetails" element={<ShopDetails />} />
            <Route path="/shoppingCart" element={<ShoppingCart />} />
            <Route path="/checkout" element={<CheckoutPage />} /> */}
               

            {/* <Route path="/wishList" element={<WishList />} /> */}
            {/* auth routes start */}

            {/* <Route path="/payment" element={<Suspense fallback={<Loader fullPage loading />} ><Payment /></Suspense>} /> */}
            <Route path="/login" element={<Suspense fallback={<Loader fullPage loading />} ><Login /></Suspense>} />
            <Route path="/forgetpassword" element={<Suspense fallback={<Loader fullPage loading />} ><ForgetArea /></Suspense>} />  
            <Route path="/verifycode" element={<Suspense fallback={<Loader fullPage loading />} ><VerifyCode /></Suspense>} />  
            <Route path="/newpassword" element={<Suspense fallback={<Loader fullPage loading />} ><NewPassword /></Suspense>} />  


            {/* <Route path="/profile" element={<Suspense fallback={<Loader fullPage loading />} ><ProfileArea /></Suspense>} />   */}

            {/* <Route   auth={true} path="/profile" element={<Suspense fallback={<Loader fullPage loading />} > <ProtectedRoute Component={ProfileArea} />  </Suspense>} />   */}


            <Route path="/register" element={<Suspense fallback={<Loader fullPage loading />} ><Register /></Suspense>} />
            {/* <Route path="/register" element={<Suspense fallback={<Loader fullPage loading />} ><ProtectedRoute  Component={Register} /></Suspense>} /> */}


{/* protected Routes */}
            {/* <Route path="/checkout" element={<ProtectedRoute  Component={CheckoutPage} />} /> */}

            <Route path="/profile" element={<Suspense fallback={<Loader fullPage loading />} ><ProtectedRoute  Component={ProfileArea}  /></Suspense>} />  
            <Route path="/payment" element={<Suspense fallback={<Loader fullPage loading />} ><ProtectedRoute  Component={Payment}  /></Suspense>} />

            {/* auth routes end */}
            {/* <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogLeftSideBar" element={<BlogLeftSideBar />} />
            <Route path="/blogNoSideBar" element={<BlogNoSideBar />} />
            <Route path="/blogTwoColumn" element={<BlogTwoColumn />} />
            <Route path="/blogTwoMasonry" element={<BlogTwoColumnMasonry/>} />
            <Route path="/blogThreeColumn" element={<BlogThreeColumn />} />
            <Route path="/blogThreeColMasonry" element={<BlogThreeColMasonry />} />
            <Route path="/blogDetails" element={<BlogDetails />} />
            <Route path="/blogDetailsLeftSidebar" element={<DetailsLeftSideBar />} />
            <Route path="/blogDetailsAudio" element={<DetailsAudio />} />
            <Route path="/blogDetailsVideo" element={<DetailsVideo />} />
            <Route path="/blogDetailsGallery" element={<DetailsGallery />} />
            <Route path="/appoinment" element={<Appointment />} />
            <Route path="/portfolioTwoColumn" element={<PortfolioTwoColumn />} />
            <Route path="/portfolioThreeColumn" element={<PortfolioThreeCol />} />
            <Route path="/portfolioSlider" element={<PortfolioSlider />} /> */}
            <Route path="/notMatch" element={<NotFound />} />
            <Route path="/welcome" element={<SuccessPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      {/* </Suspense> */}
      </AllContext>
    </>
  );
}

export default App;
