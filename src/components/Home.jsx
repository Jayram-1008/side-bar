import {Button, Layout, theme,Drawer} from 'antd';
import  { LogoLarge, LogoSmall } from './Logo';
import {MenuList, MenuListMobile} from './MenuList';
import ToggleThemeButton from './ToggleThemeButton';
import { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined, BarsOutlined } from '@ant-design/icons';
import Navbar from './Navbar';

const {Header, Sider} = Layout;

export function HomeLarge() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  const [open, setOpen] = useState(false);

  const toggleTheme = () =>{
    setDarkTheme(!darkTheme);
  }
  const showDrawer = () => {
    setOpen(true);
  };

  const toggleCollapse = () =>{
    setCollapsed(!collapsed);
  }

  const {
    token : {colorBgContainer},
  } =  theme.useToken();

  return (
    <>
      <Layout>
        <Sider 
          collapsed={collapsed}  
          // collapsible
          // trigger={null}
          className='sidebar' 
          theme={darkTheme ? "dark" : "light"}
        >
          <br/>
          <br/>
          {collapsed ? <LogoSmall/> : <LogoLarge/>}
          <br/>
          <br/>
          <MenuList darkTheme={darkTheme}/>
          <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme}/>
        </Sider>
        <Layout>
          <Header 
            style={{padding: 0, background: colorBgContainer, width:'100%'}}
          >
            <Navbar toggleCollapse={toggleCollapse}/>
          </Header>
        </Layout>
      </Layout>
    </>
     
  );
}

export const HomeSmall = () =>{

    const [open, setOpen] = useState(false);
    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };

    return (
    <>
    <Navbar showDrawer={showDrawer}/> 
        <Drawer
            placement="left"
            width={250}
            onClose={onClose}
            open={open}
        >
        <MenuList/>
        </Drawer>
    </>
    )
}



