import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { logout } from '../slices/userInfoSlice'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  let data= useSelector(state=>state.userinfo.value)
  let navigate=useNavigate()
  let dispatch=useDispatch()
  let handleLogOut=()=>{
    dispatch(logout(JSON.stringify(data.data)))
    navigate("/login")
  
    


  }
   useEffect(()=>{
    if(data==null){
      navigate("/login")
    }
  },[])
  
  return (
   <div className='flex justify-end mr-10 mt-10'>
     <div className='flex flex-col justify-center items-center gap-y-2 w-[300px] h-[200px] border border-gray-500 shadow-2xl rounded-xl'>
      <div className='w-14 h-14 bg-amber-100 rounded-full'></div>
    <h5>Name: SAjib khan</h5>
    <h5>Email: sajkibkhan@gmail.com</h5>
    <h4 onClick={handleLogOut} className='font-bold cursor-pointer'>Log Out</h4>

    </div>
   </div>
  )
}

export default Home