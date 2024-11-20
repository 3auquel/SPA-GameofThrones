import React from "react";
import './errorMessage.css';
const ErrorMessage =()=>{
    return( 
        <>
        
    <img src={process.env.PUBLIC_URL + 'img/error.jpg'} alt="error"></img>
    <span>Что-то пошло не так</span>
    </>)
}

export default ErrorMessage;