import { 
    AppstoreOutlined, 
    ProjectOutlined,
    UserAddOutlined,
    UsergroupAddOutlined,
    DashboardOutlined,
    CustomerServiceOutlined,
    SettingOutlined

}from '@ant-design/icons'

import { Box } from '@mui/material'

import { Menu } from 'antd'
import React, {useState} from 'react'

export const MenuList = ({darkTheme}) => {

    const [menuConfig, setMenuConfig] = useState({
        project:true,
        executive:false,
        customer:false,
    })

    const [collapsed, setCollapsed] = useState(true);

    function toggleSubMenu() {
      setCollapsed(!collapsed);
    }

  return (
    <>
        <Menu theme={darkTheme ? "dark" : "light" } mode='inline' style={{minHeight:'100vh',}}>
            <Box sx={{color:'gray', padding:'5px', margin:'20px 10px', display:'flex', flexWrap:'wrap', lineHeight:'1.5'}}>
                MAIN MENU
            </Box>
            <Menu.Item 
                key="dashboard" 
                icon={<AppstoreOutlined />}
                onClick={()=>setMenuConfig({
                    project:false,
                    executive:false,
                    customer:false,
                })}
            > 
                Dashboard 
            </Menu.Item>
            <Menu.SubMenu 
                key="project" 
                icon={<ProjectOutlined /> } 
                title="Project" 
                open={collapsed}
                onTitleClick={()=>{
                    setMenuConfig({
                        project:true,
                        executive:false,
                        customer:false,
                    });
                    }}
                >
                {menuConfig.project ? 
                <>
                    <Menu.Item key="addproject">Add Project</Menu.Item>
                    <Menu.Item key="editproject">Edit Project</Menu.Item>
                    <Menu.Item key="viewproject">View</Menu.Item>
                </>
                : 
                    <></>
                }
            </Menu.SubMenu>
            <Menu.SubMenu 
                key="executive" 
                icon={<UserAddOutlined /> } 
                title="Executive" 
                onTitleClick={()=>setMenuConfig({
                    project:false,
                    executive:true,
                    customer:false,
            })}>
                {menuConfig.executive ? 
                    <>
                        <Menu.Item key="addexecutive">Add Executive</Menu.Item>
                        <Menu.Item key="editexecutive">Edit Executive</Menu.Item>
                        <Menu.Item key="viewexecutive">View</Menu.Item>
                    </>
                    :
                        <></>
                }
            </Menu.SubMenu>
            <Menu.SubMenu 
                key="customer" 
                icon={<UsergroupAddOutlined /> } 
                title="Customer"
                onTitleClick={()=>setMenuConfig({
                    project:false,
                    executive:false,
                    customer:true,
                })}>
                    {menuConfig.customer ? 
                        <>
                            <Menu.Item key="addexecutive">Add Customer</Menu.Item>
                            <Menu.Item key="editexecutive">Edit Customer</Menu.Item>
                            <Menu.Item key="viewexecutive">View</Menu.Item>
                        </>
                        :
                            <></>
                    }
            </Menu.SubMenu>
            <Menu.Item 
                key="booking" 
                icon={<DashboardOutlined /> } 
                title="Booking" 
                onClick={()=>setMenuConfig({
                    project:false,
                    executive:false,
                    customer:false,
                })}
            >
                Booking 
            </Menu.Item>
            <Box sx={{color:'gray', padding:'5px', margin:'20px 10px', display:'flex', flexWrap:'wrap', lineHeight:'1.5'}}>
                OTHER
            </Box>
            <Menu.Item 
                key="support" 
                icon={<CustomerServiceOutlined />}
                onClick={()=>setMenuConfig({
                    project:false,
                    executive:false,
                    customer:false,
                })}
            > 
                Support 
            </Menu.Item>
            <Menu.Item 
                key="setting" 
                icon={<SettingOutlined />}
                onClick={()=>setMenuConfig({
                    project:false,
                    executive:false,
                    customer:false,
                })}> 
                Setting 
            </Menu.Item>
        </Menu>
    </>
  )
}



