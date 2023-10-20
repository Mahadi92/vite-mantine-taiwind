"use client"

import { Avatar, Image, List, Popover } from '@mantine/core';
// import { Avatar, Button, Form, Layout, List, Popover } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface PropsType {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
}

const Navbar: React.FC<PropsType> = ({ collapsed, setCollapsed }) => {

  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <nav
      className='px-4 md:px-[43px]'
      style={{
        background: "white",
        boxShadow: "0px 4px 4px 0px #E7E7E740",
        position: "sticky",
        top: 0,
        zIndex: 999
      }}
    >
      <div className='w-full h-full flex items-center justify-between'>
        <div className='h-full flex items-center'>
          <div className='lg:w-[256px] flex items-center'>
            <span className='block md:hidden'>
              <button
                className={`menu-burger ${!collapsed && "menu-burger-opened"}`}
                onClick={() => setCollapsed(!collapsed)}
              >
                <svg width="24" height="24" viewBox="0 0 100 100">
                  <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                  <path className="line line2" d="M 20,50 H 80" />
                  <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                </svg>
              </button>
            </span>

            <Link to="/" className='relative block w-[134px] h-[40px] md:w-[153px] md:h-[43px] ml-2.5 md:ml-0'>
              <Image
                src="/assets/brand/epiqscripts-logo-full.svg"
                alt='epiqscripts' />
            </Link>
          </div>

          <span className='hidden md:block'>
            <button
              className={`menu-burger ${!collapsed && "menu-burger-opened"}`}
              onClick={() => setCollapsed(!collapsed)}
            >
              <svg width="30" height="30" viewBox="0 0 100 100">
                <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                <path className="line line2" d="M 20,50 H 80" />
                <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
              </svg>
            </button>
          </span>

          <div className='hidden md:flex items-center ml-6'>
            <button className='text-xl' onClick={(() => setIsSearchOpen(!isSearchOpen))}>
              <i className='icon-Search'></i>
            </button>
            <input type="search" className={`${isSearchOpen ? "w-52" : "w-0"} placeholder-[#C8C8C8] text-base ml-2.5 -mt-2.5 py-2 border border-b border-t-0 border-l-0 border-r-0 border-sub-text-200 transition ease-in-out duration-300`} placeholder='Search ...' />
          </div>
        </div>

        <div className='h-full flex items-center'>
          <button className='text-base mr-7'>
            <i className='icon-notifications'></i>
          </button>

          <button>
            <i className='text-base icon-Text'></i>
          </button>

          <div className='pl-7 md:pl-14'>
            {/* <Popover position="bottom-end" overlayInnerStyle={{ padding: 0, boxShadow: "0px 0px 4px 0px #00000040" }} content={ProfileContent} trigger="click"> */}
            <Popover position="bottom-end">

              <Popover.Target>
                <button className='flex items-center'>
                <Avatar src="/assets/images/avatar.png" className='w-8 h-8' />
                <span className='hidden md:block text-secondary text-base px-2.5'>Ada Lovelace</span>

                {/* <span className='text-xs'>
                  <i className='icon-Dropdown'></i>
                </span> */}
              </button>
              </Popover.Target>

              <Popover.Dropdown>
                <ProfileContent />
              </Popover.Dropdown>
            </Popover>

          </div>
        </div>

      </div>
    </nav>
  );
};

const ProfileContent = () => {
  return (
    <List size="small">
      <List.Item style={{ padding: 0 }}>
        <Link to={"/"} className='pl-5 pr-9 py-2.5'>My Profile</Link>
      </List.Item>

      <List.Item style={{ padding: 0 }}>
        <Link to={"/settings"} className='pl-5 pr-9 py-2.5'>Settings</Link>
      </List.Item>

      <List.Item style={{ padding: 0 }}>
        <button className='pl-5 pr-9 py-2.5 text-base text-[#FF0000]'>Logout</button>
      </List.Item>
    </List>
  )
}

export default Navbar;