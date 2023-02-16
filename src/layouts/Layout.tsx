import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import { SideNavbar } from '../components/navbar/SideNavbar';

const Layout = () => {
  return (
    <>
      <Header />
      <div className="grid grid-cols-7">
        <div className="col-span-1">
          <SideNavbar />
        </div>
        <div className="col-span-6">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
