import { AppShell } from "@mantine/core";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
// import CommonHeader from "./componants/CommonHeader";
import Navbar from "@/_app/components/global/Navbar";

interface Prop {}

const DashboardLayout: React.FC<Prop> = () => {

  const [collapsed, setCollapsed] = useState(true);

  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      header={<Navbar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />}
      // navbar={
      //   <Navbar
      //     collapsed={collapsed}
      //     setCollapsed={setCollapsed}
      //   />
      // }
    >
      <Outlet />
    </AppShell>
  );
};

export default DashboardLayout;
