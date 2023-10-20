"use client"

import React, { useState } from 'react';
import { SettingOutlined } from "@ant-design/icons";

import { Layout, Menu } from "antd";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface PropsType {
  collapsed: boolean;
}
const { Sider } = Layout;

const Sidebar: React.FC<PropsType> = ({ collapsed }) => {

  const pathname = usePathname()
  const [isBroken, seIsBroken] = useState(false)

  return (
    <Sider
      width={300}
      trigger={null}
      collapsible
      collapsed={collapsed}
      breakpoint="md"
      collapsedWidth={isBroken ? "0" : "100"}
      onBreakpoint={(broken) => {
        seIsBroken(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      style={isBroken ? {
        background: "white",
        overflow: 'auto',
        height: '90vh',
        position: 'fixed',
        left: 0,
        top: 60,
        bottom: 0,
      } : { background: "white" }
      }
    >
      <div className="demo-logo-vertical" />

      <Menu
        defaultSelectedKeys={[pathname.substring(1)]}
        mode="inline"
        style={{padding: "26px 20px", position: "sticky", top: "65px"}}
      >
        <div className='flex md:hidden items-center ml-6 pt-4 pb-7'>
          <button className='text-xl'>
            <i className='icon-Search'></i>
          </button>
          <input type="search" className={`w-52 placeholder-[#C8C8C8] text-base ml-2.5 -mt-2.5 py-2 border border-b border-t-0 border-l-0 border-r-0 border-sub-text-200 transition ease-in-out duration-300`} placeholder='Search ...' />
        </div>

        <Menu.Item key="" icon={<SettingOutlined />}>
          <Link href="/">
            Dashboard
          </Link>
        </Menu.Item>

        <Menu.ItemGroup key="list" title="List">

          <Menu.SubMenu title="Order" icon={<SettingOutlined />}>
            <Menu.Item key="order">
              <Link href="/order">
                Order List
              </Link>
            </Menu.Item>
          </Menu.SubMenu>

          <Menu.SubMenu title="Clients" icon={<SettingOutlined />}>
            <Menu.Item key="clients">
              <Link href="/clients">
                Client List
              </Link>
            </Menu.Item>
          </Menu.SubMenu>

          <Menu.SubMenu title="Patient" icon={<SettingOutlined />}>
            <Menu.Item key="patient">
              <Link href="/patient">
                Patient List
              </Link>
            </Menu.Item>
          </Menu.SubMenu>

        </Menu.ItemGroup>

        <Menu.ItemGroup key="documents" title="Documents">
          <Menu.Item key="report" icon={<SettingOutlined />}>
            <Link href="/report">
              Report
            </Link>
          </Menu.Item>
        </Menu.ItemGroup>

        <Menu.ItemGroup key="customs" title="Customs">
          <Menu.Item key="settings" icon={<SettingOutlined />}>
            <Link href="/settings">
              Report
            </Link>
          </Menu.Item>
        </Menu.ItemGroup>

      </Menu>
    </Sider>
  );
};

export default Sidebar;