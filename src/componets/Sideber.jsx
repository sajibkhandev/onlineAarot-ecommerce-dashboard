
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../slices/userInfoSlice'
import { useNavigate } from 'react-router-dom'




const items = [
  {

    label: 'Dashboard',
    icon: <AppstoreOutlined />,

  },
  {
    key: 'sub2',
    label: 'Product',
    icon: <MailOutlined />,
    children: [
      { key: '/dashboard/createproduct', label: 'Create Product' },
      { key: '/dashboard/viewproduct', label: 'View Product' },

    ],
  },
  {
    type: 'divider',
  },
  {
    key: 'sub3',
    label: 'Varient',
    icon: <SettingOutlined />,
    children: [
      { key: '/dashboard/createvarient', label: 'Create Varient' },
      { key: '/dashboard/viewvarient', label: 'View Varient' },
    ],
  },
  {
    type: 'divider',
  },
  {
    key: 'sub4',
    label: 'Category',
    icon: <SettingOutlined />,
    children: [
      { key: '/dashboard/createcategory', label: 'Create Category' },
      { key: '/dashboard/viewcategory', label: 'View Category' },
    ],
  },
  {
    type: 'divider',
  },

  {
    key: 'sub5',
    label: 'Sub Category',
    icon: <SettingOutlined />,
    children: [
      { key: '/dashboard/createsubcategory', label: 'Create SubCategory' },
      { key: '/dashboard/viewsubcategory', label: 'View SubCategory' },
    ],
  },
  {
    type: 'divider',
  },
  {
    key: 'sub6',
    label: 'Discount',
    icon: <SettingOutlined />,
    children: [
      { key: '/dashboard/creatediscount', label: 'Create Discount' },
      { key: '/dashboard/viewdiscount', label: 'View Discount' },
    ],
  },


];
const Sideber = () => {
  let navigate = useNavigate()
    let dispatch=useDispatch()
  let data = useSelector(state => state.userinfo.value)

  let handleLogOut = () => {
    dispatch(logout(JSON.stringify(data.data)))
    navigate("/login")

  }

  const onClick = e => {
    // console.log(e.key);
    navigate(e.key)
  };


  return (
    <div className='flex flex-col justify-between h-screen'>
      <Menu
        onClick={onClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={items}
      />
      <div className='mx-4 my-4'>
        <div className='flex items-center gap-x-2'>
          <div className='w-11  h-11 border border-red-300 rounded-full'></div>
          <div>
            <h3 className=' font-semibold'>Sajib Khan</h3>
            <p>User</p>
          </div>

        </div>
        <h4 onClick={handleLogOut} className='px-10 py-3 text-lg font-bold cursor-pointer'>LogOut</h4>
      </div>
    </div>
  )
}

export default Sideber