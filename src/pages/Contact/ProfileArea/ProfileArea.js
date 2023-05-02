import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import IconButton from "@material-ui/core/IconButton";
import BaseUrl from '../../BaseUrl/BaseUrl';
import { getApiWithToken ,PutApi } from '../../helper/helper'
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import {Loader} from 'react-overlay-loader';
import contextApidata from '../../../hooks/useGlobalContext'
// import AllContext from '../../../context/AllContext'



const ProfileArea = () => {


    const { counter ,setcounter } = contextApidata()

    console.log("GetData",counter)

    


    // console.log("getApiWithToken",getApiWithToken)

    // console.log("ahmed",BaseUrl.imgUrl)
    const { register, handleSubmit, reset, formState: { errors } , setValue } = useForm({defaultValues:{ProfileImage:null}});

    const Token =localStorage.getItem("token")

    // console.log("Token==>",Token)
    const [loader,setloader]=useState(false)

    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [address, setaddress] = useState("");
    const [contactno, setcontactno] = useState("");

    // link aae jo phle profile higi
    const [ProfileImage, setProfileImage] = useState(null);
    // yeh selected image show krne k lye
    const [SelectProfileImage, setSelectProfileImage] = useState(null);
    // yeh wali binary object ,imge obj me convert hoge
    const [UpdateProfileImage, setUpdateProfileImage] = useState("null");


    const myconvert = (a) =>{

   console.log("shakeeb==>",a)


}

// function myFunction(a) {

//     console.log("myFunction running",a)

//                     // Convert base64 string to a byte array
// const byteArray = new Uint8Array(atob(a.toString() ).map(char => char.charCodeAt(0)));

// // Create a blob from the byte array
// const blob = new Blob([byteArray], {type: 'image/jpeg'});

// // Create an object URL from the blob
// const objectURL = URL.createObjectURL(blob);

// // Create an image element
// const img = document.createElement('img')

// console.log("converted==>",img)

// return img

//   }

    const handleInputFileChange = (event, func) => {

    //  alert("running handleinput")

        var file = event.target.files[0];
        var reader = new FileReader();
        console.log("file==>",file);
        const filesize = file.size
        const filesizeround = Math.round((filesize / 1024))
        if (filesizeround > 1024) {
            // setupdateProfileImage(null)
            // setselectProfileImage(null)
            // setError2(true)
            // setMessage3("plz select your image less then and equals to 1mb ")

        } else {

            // alert("running else")
            // setDisable(false);
            var url = reader.readAsDataURL(file);
            console.log("url==>",url)
            reader.onloadend = function (e) {

                console.log("e==>",e)
                // base64
                console.log("reader.result==>",reader.result)

                // let ahmed = myFunction(reader.result)
                // console.log("actual img==>",ahmed)

                console.log("File==>",file)

                setValue("ProfileImage",reader.result)
                setSelectProfileImage(reader.result);
                
                setUpdateProfileImage(file);
                // setValue("UpdateProfileImage",file)

                // console.log("data-======>",reader.result)
            };
            // console.log(selectProfileImage)
            func(event.target.files[0])
            // setdisable(false)
        }
    }

    useEffect(()=>{
        ProfileGetData()

    },[])

    const ProfileGetData = () =>{

        getApiWithToken(`${BaseUrl.BaseUrlVariable}/profile`," ",Token)
        .then(({ data }) => {
            // setLoader(true);
            setloader(true)
            if (data.status ) {

                setloader(false)
                
                console.log("result==>",data)

                setValue("firstname", data.data.fname)
                setValue("lastname", data.data.lname)
                setValue("address", data.data.address)
                setValue("contactno", data.data.contact)
                setValue("ProfileImage", data.data.profile)
                setProfileImage(data.data.profile)
                // setValue("firstName", data.fname)

                console.log("profile",data.data.profile)
                
        //    toast.success(data.message, {
        //       position: "top-right",
        //       autoClose: 5000,
        //       hideProgressBar: false,
        //       closeOnClick: true,
        //       pauseOnHover: true,
        //       draggable: true,
        //       progress: undefined,
        //       theme: "light",
        //       });
                // navigate('/')
            }
            else {
                setloader(false)
           console.log("else-error==>",data)
        //    toast.error(data?.message, {
        //       position: "top-right",
        //       autoClose: 5000,
        //       hideProgressBar: false,
        //       closeOnClick: true,
        //       pauseOnHover: true,
        //       draggable: true,
        //       progress: undefined,
        //       theme: "light",
        //       });
            }
        }).catch((err) => {
        // ab catch me humein else wala error mileyga
            // setLoader(false);
            setloader(false)
            console.log('catch==>', err?.message)

        // toast.error(err.message, {
        //    position: "top-right",
        //    autoClose: 5000,
        //    hideProgressBar: false,
        //    closeOnClick: true,
        //    pauseOnHover: true,
        //    draggable: true,
        //    progress: undefined,
        //    theme: "light",
        //    });
        })

    }


    // const ContextFunction = () =>{

    //     alert("hello")

        

    //     setcounter(counter+1)

    //     console.log("running",counter)



    // }

    const onSubmit = data =>{
        // getApiWithToken

        
        
        console.log("onsubmit Form DATA ==>", data)

        if(data.ProfileImage === null){
            // alert("kindly add image")
            toast.error('kindly add image', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
             
            return
        }




  
        let formdata = new FormData();
        formdata.append("fname", data.firstname);
        formdata.append("lname", data.lastname);
        formdata.append("address", data.address);
        formdata.append("contact", data.contactno);
        formdata.append("img", UpdateProfileImage);
        // formdata.append("img", UpdateProfileImage ? UpdateProfileImage : null );
        // if we send null 
        // UpdateProfileImage ? UpdateProfileImage : ProfileImage 
        // setloader(false)
        
        setloader(true);
        PutApi(`${BaseUrl.BaseUrlVariable}/profile`, formdata,Token)
        .then(({ data }) => {
            // setloader(true)
            if (data.status ) {
                setloader(false)
                
                console.log("fname==>",data)
                console.log("result==>",data)

                // setfirstname(data.fname)



                console.log("data",data)
                
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
                // navigate('/')
            }
            else {
                setloader(false)
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
            // setLoader(false);
            setloader(false)
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




    }




    return (
        <>
               {loader == true ?
            <Loader fullPage loading />:null
        }
         

            <section className="contact-form-area gray-bg pt-100 pb-100">
                <div className="container">
                    <div className="form-wrapper">
                        <div className="row align-items-center">
                            <div className="col-xl-8 col-lg-8">
                                <div className="section-title mb-55">
                                    {/* <p><span></span> Anything On your Mind</p> */}
                                    <h3>Update Profile</h3>
                                    {/* <div className="contact-btn text-center">
                                            <button className="primary_btn btn-icon ml-0"  onClick={()=>ContextFunction()} >Update Counter</button>
                                        </div> */}
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-3 d-none d-xl-block ">
                                <div className="section-link mb-80 text-end">
                                    {/* <Link to="/appoinment" */}
                                    {/* <Link to="#"
                                        className="primary_btn btn-icon ml-0"><span>+</span>Make
                                        Appointment</Link> */}
                                </div>
                            </div>
                        </div>
                        <div className="contact-form">
                            {/* id="contact-form" */}
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="contact text-center mb-30">
                                            {/* <img src='https://cdn-icons-png.flaticon.com/512/147/147142.png' /> */}

                                            <input
                                                accept="image/*"
                                                style={{ display: "none" }}
                                                id="icon-button-file"
                                                type="file"
                                                onChange={(e) => handleInputFileChange(e, setProfileImage)}
                                                name="ProfileImage"

                                                // {...register('ProfileImage', {
                                                //     required: "ProfileImage is required",
                      
                                                // })}
                                            />
                                            <label htmlFor="icon-button-file">
                                                <div
                                                    color="#414141"
                                                    aria-label="upload picture"
                                                    component="span"
                                                    className="upload_photo_main"

                                                >
                                                    <img style={{ minWidth: "155px", maxWidth: "100px", borderRadius: "94%", height: "200px", border: "2px solid #000" }}
                                                        src={SelectProfileImage ? SelectProfileImage : BaseUrl.imgUrl + ProfileImage}

                                                        className="upload_photo_main" alt="" />
                                                </div>
                                            </label>

                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-box user-icon mb-30">
                                            <input type="text"
                                            
                                            name="firstname" placeholder="Your Name"
                                             {...register('firstname', {
                                                required: "First Name is required",
                  
                                            })
                                        }
                                            />
                                               <p style={{color:"red"}}> {errors.firstname?.message}</p>

                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-box email-icon mb-30">
                                            <input type="text" name="lastname" placeholder="Your Last Name"
                                            
                                            {...register('lastname', {
                                                required: "Last Name is required",
                  
                                            })}
                                            
                                            />
                                            <p style={{color:"red"}}>  {errors.lastname?.message}</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-box phone-icon mb-30">
                                            <input type="text" name="contactno" placeholder="Your Phone"
                                            
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
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-box subject-icon mb-30">
                                            <input type="text" name="address" placeholder="Your Address"
                                            
                                            {...register('address', {
                                                required: "Address is required",
                  
                                            })}
                                            />
                                            <p style={{color:"red"}}>  {errors.address?.message}</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        {/* <div className="form-box message-icon mb-30">
                                 <textarea name="message" id="message" cols="30" rows="10"
                                    placeholder="Your Message"></textarea>
                              </div> */}
                                        <div className="contact-btn text-center">
                                            <button className="primary_btn btn-icon ml-0" type="submit" >Update Profile</button>
                                            {/* <button type="submit" className="primary_btn btn-icon-green w-100">Update Profile</button> */}
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <p className="ajax-response text-center"></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProfileArea;