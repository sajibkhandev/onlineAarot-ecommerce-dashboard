import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from 'react-router-dom'

const ForgetPassword = () => {
     const navigate=useNavigate()


  const onFinish = async (values) => {
    let data = await axios.post(
      "http://localhost:3000/api/v1/authentication/forgetpassword",
      {
        findemail: values.findemail,
      },
    );


    if (data.data.success == "found data") {
      navigate(`/changepassword/${data.data.email}`)
    } else if (data.data.error == "not found") {
      toast.error("Your Account is not Found");
    }
    
    console.log(data.data);
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
            label="Find Your Account Email "
            name="findemail"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
               Coutinue
            </Button>
          </Form.Item>
          
           <p className="ml-28"><Link to="/login">Back to Login</Link></p>
        </Form>
  )
}

export default ForgetPassword