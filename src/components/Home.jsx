import { Layout, Drawer} from 'antd';
import  { LogoLarge, LogoSmall } from './Logo';
import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const { Sider} = Layout;

export function HomeLarge() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () =>{
    setCollapsed(!collapsed);
  }

  return (
    <>
      <Layout>
        <Sider 
          collapsed={collapsed}  
          collapsible
          trigger={null}
          className='sidebar' 
          theme='light'
        >
          <br/>
          <br/>
          {collapsed ? <LogoSmall/> : <LogoLarge/>}
          <br/>
          <br/>
          <Sidebar collapsed={collapsed}/>
        </Sider>
        <Layout>
            <Header toggleCollapse={toggleCollapse}/>
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
    <Header showDrawer={showDrawer}/> 
        <Drawer
            placement="left"
            width={250}
            onClose={onClose}
            open={open}
        >
        <Sidebar />
        </Drawer>
    </>
    )
}



