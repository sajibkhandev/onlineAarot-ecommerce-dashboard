import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate, useParams } from 'react-router-dom'

const ChangePassword = () => {
       const navigate=useNavigate()
       const param=useParams()
      //  console.log(param.email);
       
  const onFinish = async (values) => {
    let data = await axios.post(
      "http://localhost:3000/api/v1/authentication/changepassword",
      {
        newpassword: values.newpassword,
        email:param.email
      },
    );

    // if (data.data.success == "login successfully") {
    //   toast.success("Login Sussessfuly");
    //   navigate("/home")
    // } else if (data.data.error == "Invaild Creadiential") {
    //   toast.error("Invaild Creadiential");
    // }else if(data.data.error=="Email Verification Failed"){
    //   toast.error("Email Verification Failed")
    // }
    
    // else{

    // }
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
                label="New Password "
                name="newpassword"
                rules={[{ required: true, message: "Please input your new password!" }]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item label={null}>
                <Button type="primary" htmlType="submit">
                   Reset
                </Button>
              </Form.Item>
              
               <p className="ml-28"><Link to="/login">Back to Login</Link></p>
            </Form>
  )
}

export default ChangePassword