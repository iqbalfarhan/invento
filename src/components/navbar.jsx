import { Menu } from 'lucide-react';
import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar ">
      <div className="navbar-start">
        <button className="btn btn-square btn-ghost btn-circle">
          <Menu className="size-6" />
        </button>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default Navbar;
