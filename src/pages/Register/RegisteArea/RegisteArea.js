import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import BaseUrl from '../../BaseUrl/BaseUrl';
import { toast } from 'react-toastify';
import { PostApi, PostApiWithOutToken } from '../../helper/helper'
import {Loader} from 'react-overlay-loader';

const RegisteArea = () => {
   // const { registerUser, googleSignIn } = useAuth();

   const navigate = useNavigate()
   const [loader,setloader]=useState(false)

   const [firstname, setfirstname] = useState("");
   const [lastname, setlastname] = useState("");
   const [contactno, setcontactno] = useState("");
   const [email, setemail] = useState('');
   const [password, setpassword] = useState('');   

   const [address, setaddress] = useState("");
   
   const { register, handleSubmit, reset ,formState: { errors } } = useForm();

   const onSubmit = data => {
      console.log("data==>", data)

      // navigate('/welcome')


      let formdata = new FormData();
      formdata.append("address", data.address);
      formdata.append("fname", data.firstname);
      formdata.append("lname", data.lastname);

      formdata.append("contact", data.contactno);

      formdata.append("email", data.email);


      formdata.append("password", data.password);
      
      setloader(true);
      PostApiWithOutToken(`${BaseUrl.BaseUrlVariable}/registration`, formdata,)
         .then(({ data }) => {
            console.log("result==>", data)
            if (data.status) {
               // localStorage.setItem("token", data.token)
               setloader(false);
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
               console.log("else-error==>", data)
               setloader(false);
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
            // setLoader(false);
            console.log('catch==>', err?.message)
            setloader(false);

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
         <section className="login-area pt-120 pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-lg-8 offset-lg-2">
                     <div className="basic-login">
                        <h3 className="text-center mb-60">Signup With 24UR</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                     
                           <label htmlFor="name" className='mb-2' >First Name <span>**</span></label>
                           <input
                              required id="name" type="text" placeholder="Enter First Name..."
                              {...register('firstname', {
                                 required: "First Name is required",

                              })
                              }

                           />
                           <p style={{ color: "red" }}>  {errors.firstname?.message}</p>
                           <label htmlFor="name" className='mb-2' >Last Name <span>**</span></label>
                           <input
                              // {...register("fname")}

                              required id="name" type="text" placeholder="Enter Last Name..."
                              {...register('lastname', {
                                 required: "Last Name is required",

                              })
                              }

                           />
                           <p style={{ color: "red" }}>  {errors.lastname?.message}</p>

                           <label htmlFor="email-id" className='mb-2'>Email Address <span>**</span></label>
                           <input
                              required id="email-id" name="email" type="text"
                              placeholder="Email address"

                              {...register('email', {
                                 required: "email is required",
                                 pattern: {
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: 'Please enter a valid Email like workingexample@email.com',
                                 },
                              })}

                           />

                           <p style={{ color: "red" }}>  {errors.email?.message}</p>

                           <label htmlFor="pass" className='mb-2'>Password <span>**</span></label>
                           <input  required id="pass" name="password" type="password"
                              placeholder="Enter password..."
                              
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
                              <p style={{ color: "red" }}>  {errors.password?.message}</p>

                              <label htmlFor="name" className='mb-2' >Address <span>**</span></label>
                           <input
                              required id="name" type="text" placeholder="Enter Address..."
                              {...register('address', {
                                 required: "Address is required",

                              })
                              }

                           />
                           <p style={{ color: "red" }}>  {errors.address?.message}</p>

                              <label htmlFor="contact" className='mb-2'>Contact Number <span>**</span></label>
                              <input type="text" name="contactno" placeholder="Your Contact No"
                                            
                                            {...register('contactno', {
                                                required: "Contact No is required",
                                                minLength: {
                                                    value: 11,
                                                    message: "Contactno must be Equal to 11 Characters",
                                                },
                                                maxLength: {
                                                    value: 11,
                                                    message: "Contactno must be Equal to 11 Characters",
                                                }
                  
                                            })}
                                            
                                            />
                                            <p style={{color:"red"}}>  {errors.contactno?.message}</p>

                           <div className="mt-10"></div>
                           <button type='submit' className="primary_btn theme-btn-2 w-100">Register Now</button>
                           <div className="or-divide"><span>or</span></div>
                           <Link to="/login"><button className="primary_btn btn-icon-green w-100">login Now</button></Link>
                        </form>
                        {/* comment login with googleSignIn */}
                        {/* <div className="or-divide or-login"><span>or login with </span></div>
                        <button onClick={() => googleSignIn()} className="login_btn">
                           <img src="img/icon/google_icon.svg" alt="" /> </button> */}
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default RegisteArea;