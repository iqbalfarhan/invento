import { BoxIcon } from 'lucide-react';
import { List } from 'lucide-react';
import { Book } from 'lucide-react';
import { LogOut, UserCircle, LayoutDashboard } from 'lucide-react';
import Link from 'next/link';
import { cloneElement } from 'react';

const Item = ({ label = 'Menu label', href = '/', icon }) => {
  const newicon = cloneElement(icon, { className: 'size-5' });
  return (
    <li>
      <Link href={href} className="font-bold">
        {newicon}
        <span>{label}</span>
      </Link>
    </li>
  );
};

const Group = ({ title = 'Menu label', children }) => {
  return (
    <li>
      <h2 className="menu-title">{title}</h2>
      <ul>{children}</ul>
    </li>
  );
};

const Sidebar = () => {
  return (
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content space-y-6">
      <Group title="Dashboard">
        <Item label="Dashboard" href="/" icon={<LayoutDashboard />} />
        <Item label="Kategori" href="/kategori" icon={<List />} />
        <Item label="Inventory" href="/barang" icon={<BoxIcon />} />
      </Group>
      <Group title="Edit Profile">
        <Item label="Edit Profile" href="/profile" icon={<UserCircle />} />
        <Item label="Tentang Aplikasi" href="/about" icon={<Book />} />
        <Item label="Keluar Aplikasi" href="/" icon={<LogOut />} />
      </Group>
    </ul>
  );
};

export default Sidebar;
