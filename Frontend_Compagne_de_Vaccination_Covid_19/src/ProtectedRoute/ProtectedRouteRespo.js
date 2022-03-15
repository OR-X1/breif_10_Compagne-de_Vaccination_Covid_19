import React from "react";
// import { Redirect, Route } from "react-router-dom";
import { Navigate, Route } from "react-router-dom";

import jwt_decode from "jwt-decode";

function ProtectedRouteRespo({children}) {
    const token = localStorage.getItem('auth_token');

    var decoded = jwt_decode(token);

    console.log(token);
    console.log(decoded);
    
    if( decoded.role === "respo_region")return   children
    return  <Navigate to="/loginregion"/>

}

export default ProtectedRouteRespo;