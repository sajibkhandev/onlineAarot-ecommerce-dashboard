import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Registration = () => {
     const onFinish = async values => {


    let data = await axios.post('http://localhost:3000/api/v1/authentication/registration', {
      username: values.username,
      email: values.email,
      password: values.password
    }
    ,
    {
      headers:{
        Authorization:"3454jlkdsfjkl34wjt6kl54j53kl24j5lkwsjdflkj"
      }

    }
  
  
  
  )
  if(data.data.success=="registration successfully"){
    toast.success("Registration Sussessfuly")

  }else if(data.data=="Data Already Existed"){
     toast.error("Data Already Existed")
     
    }else if(data.data=="valid email required"){
    toast.error("Valid Email Required")

  }
   
    console.log(data.data);



  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
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
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>



      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
       <p className='ml-28'>Already have a Account?<Link to="/login"> Login </Link></p>
    </Form>
  )
}

export default Registration