import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useForm } from "react-hook-form";
import BaseUrl from '../../BaseUrl/BaseUrl';
import { PostApi ,PostApiWithOutToken }  from '../../helper/helper'
import { toast } from 'react-toastify';
import { Loader } from 'react-overlay-loader';

const NewPassword = () => {
   // const { loginUser, passwordResetWithEmail, googleSignIn } = useAuth();

 const navigate = useNavigate()
//    console.log(PostApi)

  const location  = useLocation()

  console.log("locationNewpassword==>",location)

//    const [Email, setEmail] = useState('');
   const [Password, setPassword] = useState('');   
   const [confirm_password, setconfirm_password] = useState('');   

   const[loader,setLoader]=useState('')



   const { register, handleSubmit, reset ,watch ,formState: { errors } } = useForm();
   const onSubmit = data => {
      console.log("data==>",data)

      let formdata = new FormData();
      formdata.append("password", data.Password);
      formdata.append("adminid", location.state.userId);
      
      setLoader(true);
      PostApiWithOutToken(`${BaseUrl.BaseUrlVariable}/forgetConfirmation`, formdata,)
      .then(({ data }) => {
      console.log("result==>",data)
          if (data.status ) {
            //   localStorage.setItem("token", data.token)
            setLoader(false);
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
              navigate('/login')
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

 
      // var formdata = new FormData();
      //       formdata.append("email", data.Email);
      //       formdata.append("password", data.Password);


      //       PostApi
            
      //       PostApi('https://pyurelyecommerce.pythonanywhere.com/api/admin_login', formData,)
		// 	.then(({ data }) => {
		// 		setLoader(true);
		// 		if (data.status) {
		// 			localStorage.setItem("token", data.token)
		// 			notification.open({
		// 				key,
		// 				message: 'Success',
		// 				description: data.message,
		// 				duration: 3,
		// 				icon: <SmileOutlined style={{ color: '#108ee9' }} />,
		// 			});
		// 			Navigate('/')
		// 		}
		// 		else {
		// 			notification.info({
		// 				key,
		// 				message: 'Opps',
		// 				description: data.message,
		// 				duration: 3,
		// 			});
		// 		}
		// 	}).catch((err) => {
		// 		setLoader(false);
		// 		console.log('errrrr', err)
		// 	})

      // const email = data.email;
      // setEmail(email)
      // const password = data.password;

      // loginUser(email, password, reset)
   };
   return (
      <>
      {loader ? <Loader fullPage loading /> : null}
         <section className="login-area pt-100 pb-100">
            <div className="container">
               <div className="row">
                  <div className="col-lg-8 offset-lg-2">
                     <div className="basic-login">
                        <h3 className="text-center mb-60">New Password </h3>
                        <h5> We will send a OTP Code to reset your password</h5>
                        <br />

                        <form onSubmit={handleSubmit(onSubmit)}>
                           {/* <label htmlFor="name" className='mb-2'>Email Address <span>**</span></label>
                           <input  id="name" type="text"
                              placeholder="Enter Username or Email address..."
                              {...register('email', {
                                 required: "Email is required",
                                 pattern: {
                                     value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                     message: 'Please enter a valid Email like workingexample@email.com',
                                 },
                             })}
                              
                              />
                              <p style={{color:"red"}}>  {errors.email?.message}</p> */}

                           <label htmlFor="pass" className='mb-2'>New Password <span>**</span></label>
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
                            <p style={{color:"red"}}>  {errors.password?.message}</p>


                            <label htmlFor="pass" className='mb-2'>Confirm Password <span>**</span></label>
                           <input id="pass" type="password" placeholder="Enter password..." 
                           
                        //    {...register('newpassword', {
                        //       required: "Password is required",
                        //       minLength: {
                        //           value: 4,
                        //           message: "Password must be more than 4 Characters",
                        //       },
                        //       maxLength: {
                        //           value: 15,
                        //           message: "Password must be less than 15 Characters",
                        //       }

                        //   })}

                        {...register("confirm_password", {
                            required: true,
                            validate: (val: string) => {
                              if (watch('password') != val) {
                                return "Your passwords do no match";
                              }
                            },
                           })}
                           
                           />
                            <p style={{color:"red"}}>  {errors.confirm_password?.message}</p>

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

export default NewPassword;