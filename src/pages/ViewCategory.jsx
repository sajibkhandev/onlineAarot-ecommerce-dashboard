import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Form, Input, Modal, Popconfirm, Space, Table } from 'antd';
import toast, { Toaster } from 'react-hot-toast'

const ViewCategory = () => {
  const [data, setData] = useState([])
  const [deletingCategoryId, setDeletingCategoryId] = useState(null)
  const [editingCategory, setEditingCategory] = useState(null)
  const [updatingCategory, setUpdatingCategory] = useState(false)
  const [editForm] = Form.useForm()

  const handleEdit = (category) => {
    setEditingCategory(category)
    editForm.setFieldsValue({ categoryname: category.name })
  }

  const handleUpdate = async (values) => {
    if (!editingCategory) return

    setUpdatingCategory(true)
    try {
      const response = await axios.put(
        `http://localhost:3000/api/v1/product/updatecategory/${editingCategory.key}`,
        { categoryname: values.categoryname.trim() }
      )

      if (response.data.success === 'Category Updated') {
        setData(currentData => currentData.map(item =>
          item.key === editingCategory.key
            ? { ...item, name: response.data.category.categoryname }
            : item
        ))
        toast.success('Category Updated')
        setEditingCategory(null)
        editForm.resetFields()
      }
    } catch (error) {
      toast.error(error.response?.data?.error || 'Failed to update category')
    } finally {
      setUpdatingCategory(false)
    }
  }

  const handleDelete = async (id) => {
    setDeletingCategoryId(id)
     const data = await axios.delete(
        `http://localhost:3000/api/v1/product/deletecategory/${id}`,
      )

      if (data.data.success === 'Category Deleted') {
        setData(currentData => currentData.filter(item => item.key !== id))
        toast.success('Category Deleted')
      }
  }

  const columns = [
    {
      title: 'Serial',
      dataIndex: 'serial',
      render: (item,arr,index) => <a>{index+1}</a>,
    },
    {
      title: 'Owername',
      dataIndex: 'owername',
     
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
          <a onClick={() => handleEdit(record)}>Edit</a>
          <Popconfirm
            title="Delete this category?"
            description="This action cannot be undone."
            onConfirm={() => handleDelete(record.key)}
            okText="Delete"
            cancelText="Cancel"
            disabled={deletingCategoryId === record.key}
          >
            <a>
              {deletingCategoryId === record.key ? 'Deleting...' : 'Delete'}
            </a>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    async function allcategory() {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/product/viewcategory")
        const categories = response.data.map(item => ({
          key: item._id,
          owername: item.categoryowerid?.username || '',
          name: item.categoryname,
        }))
        setData(categories)
      } catch (error) {
        toast.error(error.response?.data?.error || 'Failed to load categories')
      }
    }
    allcategory()
  }, [])
  return (
    <div className='mr-10'>
      <h1 className='text-center text-3xl font-bold py-3'>All Categories</h1>
      <Table columns={columns} dataSource={data} />
      <Modal
        title="Edit Category"
        open={Boolean(editingCategory)}
        onCancel={() => {
          setEditingCategory(null)
          editForm.resetFields()
        }}
        onOk={() => editForm.submit()}
        confirmLoading={updatingCategory}
        okText="Update"
        cancelText="Cancel"
      >
        <Form form={editForm} layout="vertical" onFinish={handleUpdate}>
          <Form.Item
            label="Category Name"
            name="categoryname"
            rules={[{ required: true, whitespace: true, message: 'Please enter a category name' }]}
          >
            <Input maxLength={100} />
          </Form.Item>
        </Form>
      </Modal>
      <Toaster position="bottom-center" />
    </div>
  )
}

export default ViewCategory