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
import { Badge, Input } from "antd";
const Header = () => {
  return (
    <div className="border-b mb-6">
      <header className="py-4 px-6 flex justify-between items-center gap-10">
        <div className="logo">
          <a href={"/"}>
            <h5 className="text-2x1 font-bold md:text-4x1">LOGO</h5>
          </a>
        </div>
        <div className="header-search flex-1 flex justify-center">
          <Input
            size="large"
            placeholder="Search product..."
            prefix={<SearchOutlined />}
            className="rounded-full max-w-[800px]"
          />
        </div>
        <div className="menu-links flex justify-between items-center gap-6 md:static fixed z-50 bottom-0 md:w-auto w-screen md:bg-transparent bg-white left-0 md:border-t-0 border-t md:px-0 px-4 py-1">
          <a
            href={"/"}
            className="menu-link flex flex-col hover:text-[#40a9ff] transition-all"
          >
            <HomeOutlined className="md:text-2x1 text-x1" />
            <span className="md:text-xs text-[10px]">Home</span>
          </a>
          <Badge count={5} offset={[6, -3]} className="md:flex hidden">
            <a
              href={"/"}
              className="menu-link flex flex-col hover:text-[#40a9ff] transition-all"
            >
              <ShoppingCartOutlined className="md:text-2x1 text-x1" />

              <span className="md:text-xs text-[10px]">Box</span>
            </a>
          </Badge>
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
        <Badge count={5} offset={[6, -3]} className="md:hidden flex">
          <a
            href={"/"}
            className="menu-link flex flex-col hover:text-[#40a9ff] transition-all"
          >
            <ShoppingCartOutlined className="text-2x1 text-x1" />

            <span className="md:text-xs text-[10px]">Box</span>
          </a>
        </Badge>
      </header>
    </div>
  );
};

export default Header;
