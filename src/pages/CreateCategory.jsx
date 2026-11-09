import React from 'react'
import { Button, Checkbox, Form, Input } from "antd";
import axios from 'axios'
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from 'react-redux'

const CreateCategory = () => {

 let userinfo=useSelector(state=>state.userinfo.value)
 

 



  const onFinish = async (values) => {
    let data = await axios.post("http://localhost:3000/api/v1/product/createcategory", {
      categoryname: values.categoryname,
      categoryowerid:userinfo.id

    })
    if (data.data.success == "Category Created") {
      toast.success("Category Created")
    } else if (data.data.error == "Category Existed") {
      toast.error("Category Existed")

    }
    console.log(data.data);




  }

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


      <Form.Item
        label="Category Name"
        name="categoryname"
        rules={[{ required: true, message: "Please input your Category Name!" }]}
      >
        <Input />
      </Form.Item>


      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form.Item>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toasterId="default"
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
          removeDelay: 1000,
          style: {
            background: '#363636',
            color: '#fff',
          },

          // Default options for specific types
          success: {
            duration: 3000,
            iconTheme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />

    </Form>
  )
}

export default CreateCategory