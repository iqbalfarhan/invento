import { env } from '@/utils/helper';
import { Bell } from 'lucide-react';
import { Search } from 'lucide-react';
import { Menu } from 'lucide-react';
import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar partial border-b-2">
      <div className="navbar-start">
        <button className="btn btn-square btn-ghost btn-circle">
          <Menu className="size-5" />
        </button>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">{env('APP_NAME')}</a>
      </div>
      <div className="navbar-end">
        <button className="btn btn-square btn-ghost btn-circle">
          <Search className="size-5" />
        </button>
        <button className="btn btn-square btn-ghost btn-circle">
          <Bell className="size-5" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
