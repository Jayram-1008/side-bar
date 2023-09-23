import { 
    AppstoreOutlined, 
    ProjectOutlined,
    UserAddOutlined,
    UsergroupAddOutlined,
    DashboardOutlined,
    CustomerServiceOutlined,
    SettingOutlined

}from '@ant-design/icons'

import { Menu } from 'antd'
import React from 'react'

export const MenuList = ({darkTheme}) => {
  return (
    <>
        <Menu theme={darkTheme ? "dark" : "light" } mode='inline' className='menu-bar'>
            <div className="menu-title"><span>MAIN</span> <span> MENU</span></div>
            <Menu.Item key="dashboard" icon={<AppstoreOutlined />}> Dashboard </Menu.Item>
            <Menu.SubMenu key="project" icon={<ProjectOutlined /> } title="Project">
                <Menu.Item key="addproject">Add Project</Menu.Item>
                <Menu.Item key="editproject">Edit Project</Menu.Item>
                <Menu.Item key="viewproject">View</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="executive" icon={<UserAddOutlined /> } title="Executive">
                <Menu.Item key="addexecutive">Add Executive</Menu.Item>
                <Menu.Item key="editexecutive">Edit Executive</Menu.Item>
                <Menu.Item key="viewexecutive">View</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="customer" icon={<UsergroupAddOutlined /> } title="Customer">
                <Menu.Item key="addcustomer">Add Customer</Menu.Item>
                <Menu.Item key="editcustomer">Edit Customer</Menu.Item>
                <Menu.Item key="viewcustomer">View</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="booking" icon={<DashboardOutlined /> } title="Booking">
                {/* <Menu.Item key="addcustomer">Add Customer</Menu.Item>
                <Menu.Item key="editcustomer">Edit Customer</Menu.Item>
                <Menu.Item key="viewcustomer">View</Menu.Item> */}
            </Menu.SubMenu>
            <div className='menu-title'>OTHER</div>
            <Menu.Item key="support" icon={<CustomerServiceOutlined />}> Support </Menu.Item>
            <Menu.Item key="setting" icon={<SettingOutlined />}> Setting </Menu.Item>
        </Menu>
    </>
  )
}

export const MenuListMobile = ({darkTheme}) =>{
    return (
        <Menu theme={darkTheme ? "dark" : "light" } mode='inline' className='menu-bar'>
            <div className="menu-title"><span>MAIN</span> <span> MENU</span></div>
            <Menu.Item key="dashboard" icon={<AppstoreOutlined />}> Dashboard </Menu.Item>
            <Menu.SubMenu key="project" icon={<ProjectOutlined /> } title="Project">
                <Menu.Item key="addproject">Add Project</Menu.Item>
                <Menu.Item key="editproject">Edit Project</Menu.Item>
                <Menu.Item key="viewproject">View</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="executive" icon={<UserAddOutlined /> } title="Executive">
                <Menu.Item key="addexecutive">Add Executive</Menu.Item>
                <Menu.Item key="editexecutive">Edit Executive</Menu.Item>
                <Menu.Item key="viewexecutive">View</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="customer" icon={<UsergroupAddOutlined /> } title="Customer">
                <Menu.Item key="addcustomer">Add Customer</Menu.Item>
                <Menu.Item key="editcustomer">Edit Customer</Menu.Item>
                <Menu.Item key="viewcustomer">View</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="booking" icon={<DashboardOutlined /> } title="Booking">
                {/* <Menu.Item key="addcustomer">Add Customer</Menu.Item>
                <Menu.Item key="editcustomer">Edit Customer</Menu.Item>
                <Menu.Item key="viewcustomer">View</Menu.Item> */}
            </Menu.SubMenu>
            <div className='menu-title'>OTHER</div>
            <Menu.Item key="support" icon={<CustomerServiceOutlined />}> Support </Menu.Item>
            <Menu.Item key="setting" icon={<SettingOutlined />}> Setting </Menu.Item>
        </Menu>
    )
}
