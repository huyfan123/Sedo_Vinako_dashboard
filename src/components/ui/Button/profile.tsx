import React from 'react'
import { UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import {Dropdown, Avatar, Space } from 'antd';

const items: MenuProps['items'] = [
  {
 
  
  
    label: 'Settings',
    key: '0',
  },
  {
    type: 'divider',
  },
  {
    label: 'Log out',
    key: '1',
  },
];

export const Profile = () => {
  return (
    <Dropdown menu={{ items }} trigger={['click']}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
      <Avatar
          style={{
            backgroundColor: "#93D577"
          }} 
          icon={<UserOutlined />} 
        />
      </Space>
    </a>
  </Dropdown>
  )
}
