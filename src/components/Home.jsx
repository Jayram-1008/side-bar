import {Button, Layout, Menu, theme, Space,Drawer} from 'antd';
import Logo from './Logo';
import MenuList from './MenuList';
import ToggleThemeButton from './ToggleThemeButton';
import { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined, BarsOutlined } from '@ant-design/icons';

const {Header, Sider} = Layout;

export function HomeLarge() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  const toggleTheme = () =>{
    setDarkTheme(!darkTheme);
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
          <Logo/>
          <br/>
          <br/>
          <MenuList darkTheme={darkTheme}/>
          <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme}/>
        </Sider>
        <Layout>
          <Header 
            style={{padding: 0, background: colorBgContainer, width:'100%'}}
          >
            <Button 
              type='text' 
              onClick={()=> setCollapsed(!collapsed)}
              icon = {collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/> }/>
          </Header>
        </Layout>
      </Layout>
    </>
     
  );
}

export const HomeSmall = () =>{

    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('left');
    const showDrawer = () => {
      setOpen(true);
    };
    const onChange = (e) => {
      setPlacement(e.target.value);
    };
    const onClose = () => {
      setOpen(false);
    };

    return (
    <>
    <Button type="primary" onClick={showDrawer}>
          {<BarsOutlined />}
    </Button>
        <Drawer
            placement={placement}
            width={250}
            onClose={onClose}
            open={open}
            // extra={
            //     // <Space>
            //     //     <Button type="primary" onClick={onClose}>
            //     //         X
            //     //     </Button>
            //     // </Space>
            // }
        >
        <HomeLarge/>
        </Drawer>
    </>
    )
}



