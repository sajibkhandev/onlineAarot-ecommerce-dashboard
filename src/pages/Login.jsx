import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate=useNavigate()
  const onFinish = async (values) => {
    let data = await axios.post(
      "http://localhost:3000/api/v1/authentication/login",
      {
        email: values.email,
        password: values.password,
      },
    );

    if (data.data.success == "login successfully") {
      toast.success("Login Sussessfuly");
      navigate("/home")
    } else if (data.data.error == "Invaild Creadiential") {
      toast.error("Invaild Creadiential");
    } else{

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
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
       <p className="ml-28">Don't you have Account?<Link to="/"> SignUp </Link></p>
    </Form>
  );
};

export default Login;
