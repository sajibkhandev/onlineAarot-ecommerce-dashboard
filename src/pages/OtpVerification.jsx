import React from 'react'
import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from 'react-router-dom'

const OtpVerification = () => {
     const navigate=useNavigate()
      const onFinish = async (values) => {
    let data = await axios.post(
      "http://localhost:3000/api/v1/authentication/login",
      {
        email: values.email,
        password: values.password,
      },
    );

    // if (data.data.success == "login successfully") {
    //   toast.success("Login Sussessfuly");
    //   navigate("/home")
    // } else if (data.data.error == "Invaild Creadiential") {
    //   toast.error("Invaild Creadiential");
    // } else{

    // }
    // console.log(data.data);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
   <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Toaster />
      <Form.Item
        label="Otp"
        name="otp"
        rules={[{ required: true, message: "Please input your otp!" }]}
      >
        <Input />
      </Form.Item>

      
      <div className='flex ml-36'>
        <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Send
        </Button>
      </Form.Item>
      <Form.Item >
        <Button className='ml-10' type="primary" >
         <Link to="/login"> Back to Login</Link>
        </Button>
      </Form.Item>
      </div>
       
    </Form>
  )
}

export default OtpVerification