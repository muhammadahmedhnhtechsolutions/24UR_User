import React from 'react'
import { Route, Navigate } from 'react-router-dom'

const ProtectedRoutes = (props) => {
     
    console.log("ProtectedRoutes",props)

    const { Component } = props

    console.log(" Components==>",Component)

    const Token = localStorage.getItem("token")



return    Token ? <Component  /> : <Navigate to="/login" />


//   return (
    // <Route 
    // {...rest}
    // render={(props) => {
    //   if(Token) return <Component {...props} />
    //   if(!Token)
    //   return(
    //     <Redirect to={{path="/"}}
    //   )
    // }}
    
    // />
//     <Route
//       {...rest}
//       render={(props) => {
//         if (Token) return <Component {...props} />;
//         if (!Token)
//           return (
//             <>

//             <Navigate replace={true} to={{ path: "/login" }} />
//             </>
//           );
//       }}
//     />
//   );
};

export default ProtectedRoutes;