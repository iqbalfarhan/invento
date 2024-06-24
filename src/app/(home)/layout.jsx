import Navbar from '@/components/navbar';
import Sidebar from '@/components/sidebar';
import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div className="drawer lg:drawer-open bg-base-200">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="">
          <Navbar />
        </div>
        <div className="page-wrapper">{children}</div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <Sidebar />
      </div>
    </div>
  );
};

export default MainLayout;
