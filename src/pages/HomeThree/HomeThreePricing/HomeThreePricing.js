import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HomeThreeSinglePricing from '../../../components/HomeThreeSinglePricing/HomeThreeSinglePricing';
import BaseUrl from '../../BaseUrl/BaseUrl'
import { getApiWithToken } from '../../helper/helper'


const HomeThreePricing = () => {


   const [GetPackages,setGetPackages] = useState([])
   const Token =localStorage.getItem("token")

   const [loader,setloader]=useState(false)
   
   const navigate = useNavigate()


   useEffect(()=>{
      ProfileGetData()

  },[])

  const ProfileGetData = () =>{

   setloader(true)

      getApiWithToken(`${BaseUrl.imgUrl}packages`," ",Token)
      .then(({ data }) => {
         if (data.status ) {
             setloader(false);
              
              console.log("result==>",data.data)

              setGetPackages(data.data)

           
              // setValue("firstName", data.fname)

            //   console.log("profile",data.data.profile)
              
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
         console.log("else-error==>",data)
         setloader(false);
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
      setloader(false);
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

  const navtopay = (a) =>{


   if(Token != null){
       
      
      navigate("/payment" , {state: {PaymentDetail:a} } )
   }
   else{

      navigate('/login')

   }



  }








   return (
      <>
         <section id="pricing" className="pricing-area theme-bg pos-rel pt-140 pb-60">
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 col-lg-7 col-md-12">
                     <div className="section-title section-title-m-0 pos-rel mb-75">
                        <div className="section-icon">
                           <img className="section-back-icon back-icon-left" src="img/section/section-back-icon-blue.png" alt="" />
                        </div>
                        <div className="section-text pos-rel">
                           <h5>Our Plans</h5>
                           <h1 className="white-color">Buy Package</h1>
                        </div>
                        <div className="section-line pos-rel">
                           <img src="img/shape/section-title-line.png" alt="" />
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-4 col-lg-5 col-md-12">
                     {/* <nav className="pricing-nav mb-70">
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                           <a className="nav-item nav-link active" id="nav-home-tab" data-bs-toggle="tab" href="#nav-home"
                              role="tab" aria-controls="nav-home" aria-selected="true">Monthly</a>
                           <a className="nav-item nav-link" id="nav-profile-tab" data-bs-toggle="tab" href="#nav-profile"
                              role="tab" aria-controls="nav-profile" aria-selected="false">Yearly</a>
                        </div>
                     </nav> */}
                  </div>
               </div>
               <div className="row">
                  <div className="col-xl-12">
                     <div className="pricing-tab wow fadeInUp mb-30" data-wow-delay="0.3s">
                        <div className="tab-content" id="nav-tabContent">
                           {/* yeh month wala */}
                           <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                              <div className="row">
                                 {

                     GetPackages.map((datas,index)=>{
                        return(
                           <>
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="price-box-flat mb-30">
                                       <div className="pricing-title">
                                          <h6 className={`green-color text-up-case letter-spacing green`}> {datas.name}</h6>
                                       </div>
                                       <div className="price-content">
                                          <div className="price-heading">
                                             <h2><span className="pink-color">$</span>{datas.price}</h2>
                                          </div>
                                          <div className="pricing-list">
                                             <ul>
                                                <li><i className="fas fa-check"></i>{datas.description}</li>
                                                {/* <li><i className="fas fa-check"></i>Annual Sexual Harassment Training</li>
                                                <li><i className="fas fa-check"></i>Monthly Newsletter</li> */}
                                                {/* <><li className="price-del"><i className="fas fa-check"></i><del>Safety Training Topics</del></li>
                                                   <li className="price-del"><i className="fas fa-check"></i><del>Monthly health check-ups</del></li>
                                                   <li className="price-del"><i className="fas fa-check"></i><del>Early illness diagnoses</del></li></> */}
                                                   
                                                   
                                                {/* {
                                                   conditionTwo && <><li><i className="fas fa-check"></i>Safety Training Topics</li>
                                                      <li className="price-del"><i className="fas fa-check"></i><del>Monthly health check-ups</del></li>
                                                      <li className="price-del"><i className="fas fa-check"></i><del>Early illness diagnoses</del></li></>
                                                }
                                                {
                                                   conditionThree && <>
                                                      <li><i className="fas fa-check"></i>Safety Training Topics</li>
                                                      <li><i className="fas fa-check"></i>Monthly health check-ups</li>
                                                      <li><i className="fas fa-check"></i>Early illness diagnoses</li>
                                                   </>
                                                } */}
                                             </ul>
                                          </div>
                                       </div>
                                       <div className="price-btn-2" onClick={()=>navtopay(
                                          
                                          {
                                             uid: datas.id
                                             , name: datas.name
                                             , price: datas.price
                                          }
                                          
                                          )} >
                                          <Link to="" className={`primary_btn green`}>Buy Packge</Link>
                                       </div>
                                    </div>
                                 </div>
                           
                           </>
                        )

                     })
                                    


                                 }

                                


                                 {/* <HomeThreeSinglePricing title="Basic Plan" price="57.89" conditionOne={true}  /> */}
                                 {/* <HomeThreeSinglePricing title="Advance Plan" price="88.90" pink_bg="pink-bg white-color" green_bg_color="green-bg white-color" conditionTwo={true} />
                                 <HomeThreeSinglePricing title="Team Plan" price="350.89" conditionThree={true} /> */}

                              </div>
                           </div>
                           {/* yeh year wala hai  */}
                           {/* <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                              <div className="row">
                                 <HomeThreeSinglePricing title="Basic Plan" price="75.89" conditionOne={true} />
                                 <HomeThreeSinglePricing title="Advance Plan" price="95.90" pink_bg="pink-bg white-color" green_bg_color="green-bg white-color" conditionTwo={true} />
                                 <HomeThreeSinglePricing title="Team Plan" price="450.89" conditionThree={true} />
                              </div>
                           </div> */}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeThreePricing;