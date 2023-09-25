import React, { useState } from "react";
import {
  AppstoreOutlined,
  ProjectOutlined,
  UserAddOutlined,
  UsergroupAddOutlined,
  DashboardOutlined,
  CustomerServiceOutlined,
  SettingOutlined

} from "@ant-design/icons";
import { Button, Menu, ConfigProvider } from "antd";
const items = [
  {
    key: "grp1",
    icon: null,
    children: [
      {
        key: "0",
        icon: <AppstoreOutlined />,
        children: null,
        label: "Dashboard",
        type: undefined
      },
      {
        key: "sub1",
        icon: <ProjectOutlined />,
        children: [
          {
            key: "1",
            icon: null,
            children: null,
            label: "Add Project",
            type: undefined
          },
          {
            key: "2",
            icon: null,
            children: null,
            label: "Edit Project",
            type: undefined
          },
          {
            key: "3",
            icon: null,
            children: null,
            label: "View",
            type: undefined
          },
        ],
        label: "Project",
        type: undefined
      },
      {
        key: "sub2",
        icon: <UserAddOutlined />,
        children: [
          {
            key: "5",
            icon: null,
            children: null,
            label: "Add Executive",
            type: undefined
          },
          {
            key: "6",
            icon: null,
            children: null,
            label: "Edit Executive",
            type: undefined
          },
          {
            key: "7",
            icon: null,
            children: null,
            label: "View",
            type: undefined
          }
        ],
        label: "Executive",
        type: undefined
      },
      {
        key: "sub4",
        icon: <UsergroupAddOutlined />,
        children: [
          {
            key: "9",
            icon: null,
            children: null,
            label: "Add Customer",
            type: undefined
          },
          {
            key: "10",
            icon: null,
            children: null,
            label: "Edit Customer",
            type: undefined
          },
          {
            key: "11",
            icon: null,
            children: null,
            label: "View",
            type: undefined
          },
        ],
        label: "Customer",
        type: undefined
      },
      {
        key: "13",
        icon: <DashboardOutlined />,
        children: null,
        label: "Booking",
        type: undefined
      }
    ],
    label: "MAIN MENU",
    type: "group"
  },
  {
    type: "divider"
  },
  {
    key: "grp2",
    icon: null,
    children: [
      {
        key: "14",
        icon: <CustomerServiceOutlined/>,
        children: null,
        label: "Support",
        type: undefined
      },
      {
        key: "15",
        icon: <SettingOutlined/>,
        children: null,
        label: "Setting",
        type: undefined
      }
    ],
    label: "OTHER",
    type: "group"
  }
];

// submenu keys of first level
const rootSubmenuKeys = ["sub1", "sub2", "sub4"];
const Sidebar = ({collapsed}) => {
  const [openKeys, setOpenKeys] = useState([""]);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <>
      <ConfigProvider>
        <Menu
          mode="inline"
          defaultSelectedKeys={["0"]}
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          onClick={(event) => {
            console.log(event.key);
          }}
          inlineCollapsed={collapsed}
          style={{
            width: !collapsed ? 200 : 80,
            height: "100vh"
          }}
          items={items}
        />
      </ConfigProvider>
    </>
  );
};
export default Sidebar;
