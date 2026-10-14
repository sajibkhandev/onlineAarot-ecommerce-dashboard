import React, { useEffect } from 'react'
import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react';

const OtpVerification = () => {
  let [message,setMessage]=useState("Verification Procceing..........")
     const prams= useParams()
     console.log(prams.email);
     console.log(prams.otp);
     
     const navigate=useNavigate()

     useEffect(()=>{
     async  function mydata(){
        let data = await axios.post('http://localhost:3000/api/v1/authentication/otp', {
      email: prams.email,
      otp: prams.otp,
       })
       if(data.data.success=="Otp match"){
        setMessage("Verification Procceing Success")
        setTimeout(() => {
          navigate('/login')
          
        }, 2000);
       }else if(data.data.error=="Invaild Code"){
        setMessage("Verification Procceing Failded")
        

       }
       console.log(data.data);
       
       }
       mydata()

     },[])

   
 
  
  return (
   <div>
    <h1 className='text-5xl text-center mt-2'>{message}</h1>
   </div>
  )
}

export default OtpVerification