import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form, Input } from "antd";
import axios from 'axios'
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from 'react-redux'
import { Select } from 'antd';

const CreateSubCategory = () => {
  let userinfo = useSelector(state => state.userinfo.value)
  let [allCategory, setAllCategory] = useState([])
  let [categoryid, setCategoryId] = useState("")
  const onFinish = async (values) => {
    let data = await axios.post("http://localhost:3000/api/v1/product/createsubcategory", {
      subcategoryname: values.subcategoryname,
      subcategoryowerid:userinfo.id,
      categoryid:categoryid,

      

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


  const onChange = value => {
    setCategoryId(value);
  };
  const onSearch = value => {
    console.log('search:', value);
  };


  useEffect(() => {
    async function allCategory() {
      const data = await axios.get("http://localhost:3000/api/v1/product/viewcategory")

      let arr = []
      data.data.map(item => {
        arr.push(
          {
            value: item._id,
            label: item.categoryname,
          }
        )
        
        
      })
      setAllCategory(arr)

    }
    allCategory()


  }, [])




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
        label="SubCategory Name"
        name="subcategoryname"
        rules={[{ required: true, message: "Please input your SubCategory Name!" }]}
      >
        <Input />
      </Form.Item>

      <label className='ml-20 ' htmlFor="">Category Name:

        <Select
          className='ml-5! mb-6!'
          showSearch={{ optionFilterProp: 'label', onSearch }}
          placeholder="Select a person"
          onChange={onChange}
          options={allCategory}
        />
      </label>


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
          className: '',
          duration: 5000,
          removeDelay: 1000,
          style: {
            background: '#363636',
            color: '#fff',
          },


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

export default CreateSubCategory