import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useForm } from "react-hook-form";
import BaseUrl from '../../BaseUrl/BaseUrl';
import { PostApi ,PostApiWithOutToken }  from '../../helper/helper'
import { toast } from 'react-toastify';
import { Loader } from 'react-overlay-loader';

const ForgetArea = () => {
   // const { loginUser, passwordResetWithEmail, googleSignIn } = useAuth();

 const navigate = useNavigate()
   console.log(PostApi)

   const [Email, setEmail] = useState('');
//    const [Password, setPassword] = useState('');   

const [loader,setLoader]=useState(false)



   const { register, handleSubmit, reset ,formState: { errors } } = useForm();
   const onSubmit = data => {
      console.log("data==>",data)

    //   navigate('/welcome')

 
      let formdata = new FormData();
      formdata.append("email", data.Email);
    //   formdata.append("password", data.Password);
    setLoader(true);
      PostApiWithOutToken(`${BaseUrl.BaseUrlVariable}/forgotPasswordlinkSend`, formdata,)
      .then(({ data }) => {
      console.log("result==>",data)
      if (data.status ) {
             setLoader(false);
            //   localStorage.setItem("token", data.token)
         toast.success(data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
              navigate('/verifycode', { state: { userId: data.id } } )
          }
          else {
            setLoader(false);
         console.log("else-error==>",data)
         toast.error(data?.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
          }
      }).catch((err) => {
      // ab catch me humein else wala error mileyga
          setLoader(false);
          console.log('catch==>', err?.message)

      toast.error(err.message, {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "light",
         });
      })
   };
   return (
      <>
      {loader == true ?
            <Loader fullPage loading />:null
        }
         <section className="login-area pt-100 pb-100">
            <div className="container">
               <div className="row">
                  <div className="col-lg-8 offset-lg-2">
                     <div className="basic-login">
                        <h3 className="text-center mb-60">ForgetPassword </h3>
                        <h5> We will send a OTP Code to reset your password</h5>
                        <br />

                        <form onSubmit={handleSubmit(onSubmit)}>
                           <label htmlFor="name" className='mb-2'>Email Address <span>**</span></label>
                           <input  id="name" type="text"
                              placeholder="Enter Username or Email address..."
                              {...register('Email', {
                                 required: "Email is required",
                                 pattern: {
                                     value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                     message: 'Please enter a valid Email like workingexample@email.com',
                                 },
                             })}
                              
                              />
                              <p style={{color:"red"}}>  {errors.email?.message}</p>

                           {/* <label htmlFor="pass" className='mb-2'>Password <span>**</span></label>
                           <input id="pass" type="password" placeholder="Enter password..." 
                           
                           {...register('password', {
                              required: "Password is required",
                              minLength: {
                                  value: 4,
                                  message: "Password must be more than 4 Characters",
                              },
                              maxLength: {
                                  value: 15,
                                  message: "Password must be less than 15 Characters",
                              }

                          })}
                           
                           />
                            <p style={{color:"red"}}>  {errors.password?.message}</p> */}

                           {/* <div className="login-action mb-20 fix"> */}
                              {/* <span className="log-rem f-left">
                                 <input id="remember" type="checkbox" />
                                 <label htmlFor="remember">Remember me!</label>
                              </span> */}
                              {/* <span onClick={() =>alert("hello")} className="forgot-login f-right">
                                 <span >Lost your password?</span>
                              </span>
                           </div> */}
                           <button type="submit" className="primary_btn btn-icon-green w-100">Send Email</button>
                           {/* <div className="or-divide"><span>or</span></div>
                           <Link to="/register"><button className="primary_btn theme-btn w-100">Register Now</button></Link> */}
                        </form>
                        {/* <div className="or-divide or-login"><span>or login with </span></div>
                        <button onClick={() => googleSignIn()} className="login_btn">
                           <img src="img/icon/google_icon.svg" alt="" />
                        </button> */}
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default ForgetArea;