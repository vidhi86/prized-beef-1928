import React, { useContext } from 'react'
import {  useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContextProvider'

function PrivateRoute({children}) {
 const {isAuth } = useContext(AuthContext);
 const navigate = useNavigate();
 if(isAuth===false){
    navigate("/login")
 }else{
    return children;
 }
 
}

export default PrivateRoute