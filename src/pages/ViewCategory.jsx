import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Flex, Space, Table, Tag } from 'antd';

const ViewCategory = () => {
  let [data, setData] = useState([])
  const columns = [
    {
      title: 'Serial',
      dataIndex: 'serial',
      render: (item,arr,index) => <a>{index+1}</a>,
    },
    {
      title: 'Ower',
      dataIndex: 'key',
     
      render: (item,arr,index) => <a>{item}</a>,
    },
   
    {
      title: 'Name',
      dataIndex: 'name',
      render: text => <a>{text}</a>,
    },


    {
      title: 'Action',
      render: (_, record) => (
        <Space size="medium">
          <a>Edit</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];








  useEffect(() => {
    async function allcategory() {
      let data = await axios.get("http://localhost:3000/api/v1/product/viewcategory")
      let arr = []
      data.data.map(item => {
        arr.push(
          {
            key: item.categoryowerid.username,
            name: item.categoryname,
          },
          
          
         
          
        )
        setData(arr)
      })
    }
    allcategory()

  }, [])
  return (
    <div className='mr-10'>
      <h1 className='text-center text-3xl font-bold py-3'>All Categories</h1>
      <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default ViewCategory