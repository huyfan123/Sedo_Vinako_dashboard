import React, { useState } from 'react'
import type { MenuProps } from 'antd';
import { Layout, Menu, Grid } from 'antd';
const { Sider } = Layout;
const { useBreakpoint } = Grid;
import area from '../../../assets/area.png'
import device from '../../../assets/device.png'
import machine from '../../../assets/machine.png'




type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Khu vực', '1', <img src={area} alt='area' style={{ width: 18, height: 18 }} />),
  getItem('Máy móc ', '2', <img src={machine} alt='machine' style={{ width: 18, height: 18 }} />),
  getItem('Thiết bị', '3', <img src={device} alt='device' style={{ width: 18, height: 18 }} />),
];

export const FieldTab = () => {
  const [collapsed, setCollapsed] = useState(false);
  const screens = useBreakpoint();
  const isMobile = !screens.lg;

  return (
    <Layout
      className={`flex-none rounded-md overflow-hidden ${isMobile ? 'w-full h-fit' : 'w-fit h-full'}`}
      style={{
        background: 'transparent',
        flex: 'none',
      }}
      >
      {isMobile ? (
        <Menu theme="light" defaultSelectedKeys={['1']} mode="horizontal" items={items}
        className='flex justify-center [&_.ant-menu-item]:flex [&_.ant-menu-item]:justify-center [&_.ant-menu-item]:items-center [&_.ant-menu-item]:gap-3 [&_.ant-menu-title-content]:m-0 w-full' />
      ) : (
        <Sider className='h-full overflow-hidden rounded-md' breakpoint="lg" collapsible theme='light' collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" items={items}
          className='[&_.ant-menu-item]:flex [&_.ant-menu-item]:justify-start [&_.ant-menu-item]:items-center [&_.ant-menu-item]:gap-3 [&_.ant-menu-title-content]:text-left [&_.ant-menu-title-content]:m-0' />
        </Sider>
      )}
    </Layout>
  )
}
