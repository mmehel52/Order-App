import React from "react";
import {
  SearchOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  CopyOutlined,
  UserOutlined,
  BarChartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
const Header = () => {
  return (
    <div className="border-b mb-6">
      <header className="py-4 px-6 flex justify-between items-center gap-10">
        <div className="logo">
          <a href={"/"}>
            <h5 className="text-2x1 font-bold md:text-4x1">LOGO</h5>
          </a>
        </div>
        <div className="header-search flex-1">
          <Input
            size="large"
            placeholder="Search product"
            prefix={<SearchOutlined />}
            className="rounded-full max-w-[800px]"
          />
        </div>
        <div className="menu-links flex justify-between items-center gap-6">
          <a
            href={"/"}
            className="menu-link flex flex-col hover:text-[#40a9ff] transition-all"
          >
            <HomeOutlined className="md:text-2x1 text-x1" />
            <span className="md:text-xs text-[10px]">Home</span>
          </a>
          <a
            href={"/"}
            className="menu-link flex flex-col hover:text-[#40a9ff] transition-all"
          >
            <ShoppingCartOutlined className="md:text-2x1 text-x1" />
            <span className="md:text-xs text-[10px]">Box</span>
          </a>
          <a
            href={"/"}
            className="menu-link flex flex-col hover:text-[#40a9ff] transition-all"
          >
            <CopyOutlined className="md:text-2x1 text-x1" />
            <span className="md:text-xs text-[10px]">Doc</span>
          </a>
          <a
            href={"/"}
            className="menu-link flex flex-col hover:text-[#40a9ff] transition-all"
          >
            <UserOutlined className="md:text-2x1 text-x1" />
            <span className="md:text-xs text-[10px]">Customers</span>
          </a>

          <a
            href={"/"}
            className="menu-link flex flex-col hover:text-[#40a9ff] transition-all"
          >
            <BarChartOutlined className="md:text-2x1 text-x1" />
            <span className="md:text-xs text-[10px]">Statistics</span>
          </a>
          <a
            href={"/"}
            className="menu-link flex flex-col hover:text-[#40a9ff] transition-all"
          >
            <LogoutOutlined className="md:text-2x1 text-x1" />
            <span className="md:text-xs text-[10px]">Logout</span>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
