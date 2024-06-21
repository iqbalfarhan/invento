import { LogOut, UserCircle, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { cloneElement } from "react";

const Item = ({ label = "Menu label", href = "/", icon }) => {
    const newicon = cloneElement(icon, { className: "size-5" });
    return (
        <li>
            <Link href={href} className="font-bold">
                {newicon}
                <span>{label}</span>
            </Link>
        </li>
    );
};

const Group = ({ title = "Menu label", children }) => {
    return (
        <li>
            <h2 className="menu-title">{title}</h2>
            <ul>{children}</ul>
        </li>
    );
};

const Sidebar = () => {
    return (
        <ul className="menu p-4 w-80 min-h-full bg-pink-200 text-base-content space-y-6 rounded-3xl shadow-xl">
            <Group title="Dashboard">
                <Item label="Dashboard" href="/" icon={<LayoutDashboard />} />
            </Group>
            <Group title="Edit Profile">
                <Item label="Tentang Aplikasi" href="/" icon={<UserCircle />} />
                <Item label="Keluar Aplikasi" href="/" icon={<LogOut />} />
            </Group>
        </ul>
    );
};

export default Sidebar;
