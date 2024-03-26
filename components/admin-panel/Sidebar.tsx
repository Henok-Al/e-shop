"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GrTransaction } from "react-icons/gr";
import { IoAnalytics, IoSettings } from "react-icons/io5";
import { MdDashboard, MdManageAccounts } from "react-icons/md";
import { RiShoppingCartLine } from "react-icons/ri";

const menus = [
  {
    title: "Dashboard",
    icon: <MdDashboard />,
    href: "/admin/dashboard",
  },
  {
    title: "Products",
    icon: <RiShoppingCartLine />,
    href: "/admin/products",
  },
  {
    title: "Accounts",
    icon: <MdManageAccounts />,
    href: "#",
  },
  {
    title: "Transaction",
    icon: <GrTransaction />,
    href: "#",
  },
  {
    title: "Analytics",
    icon: <IoAnalytics />,
    href: "#",
  },
  {
    title: "Settings",
    icon: <IoSettings />,
    href: "#",
  },
];

export const Sidebar = () => {
  const pathName = usePathname();

  return (
    <div className="bg-white w-[300px] p-4 shrink-0">
      <div className="flex items-center gap-4">
        <img src="/logo.png" className="size-12 rounded-lg" alt="logo" />
        <h2 className="text-[20px] font-semibold">HnkShop</h2>
      </div>
      <ul className="space-y-4 mt-6">
        {menus.map((menu) => (
          <Link
            key={menu.title}
            href={menu.href}
            className={`flex gap-2 items-center p-4 rounded-lg cursor-pointer hover:bg-pink hover:text-white ${
              pathName === menu.href ? "bg-pink text-white" : "bg-gray-200"
            }`}
          >
            <div className="text-[20px]">{menu.icon}</div>
            <p>{menu.title}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
