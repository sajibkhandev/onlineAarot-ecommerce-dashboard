import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { Col, Row } from 'antd';
import Sideber from '../componets/Sideber';

const Dashboard = () => {
  let data= useSelector(state=>state.userinfo.value)
  let navigate=useNavigate()
 
   useEffect(()=>{
    if(data==null){
      navigate("/login")
    }
  },[])
  
  return (
    <Row>
      <Col span={6}><Sideber/></Col>
      <Col span={18}>
        <Outlet/>
      </Col>
    </Row>
  )
}

export default Dashboard