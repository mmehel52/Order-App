import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  SearchOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  CopyOutlined,
  UserOutlined,
  BarChartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Badge, Input, message } from "antd";
import { useSelector } from "react-redux";
const Header = ({ setSearch }) => {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const logOut = () => {
    if (window.confirm("Are you sure to exit?")) {
      localStorage.removeItem("posUser");
      navigate("/login");
      message.success("Exit is succesfull");
    }
  };

  return (
    <div className="border-b mb-6">
      <header className="py-4 px-6 flex justify-between items-center gap-10 bg-gray-700">
        <div className="logo">
          <Link to={"/"}>
            <img src="/img/mm.png" className="max-w-[50px]  " alt="" />
          </Link>
        </div>
        <div
          className="header-search flex-1 flex justify-center"
          onClick={(e) => {
            pathname !== "/" && navigate("/");
          }}
        >
          <Input
            size="large"
            placeholder="Search product..."
            prefix={<SearchOutlined />}
            className="rounded-full max-w-[800px]"
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
        </div>
        <div className="menu-links flex justify-between items-center gap-6 md:static fixed z-50 bottom-0 md:w-auto w-screen md:bg-transparent bg-white left-0 md:border-t-0 border-t md:px-0 px-4 py-1 text-[#40a9ff]">
          <Link
            to={"/"}
            className={`menu-link ${
              pathname === "/" && "active"
            } flex flex-col hover:text-[#40a9ff] transition-all`}
          >
            <HomeOutlined className="md:text-2x1 text-x1 " />
            <span className="md:text-xs text-[10px]">Home</span>
          </Link>
          <Badge
            count={cart.cartItems.length}
            offset={[0, 0]}
            className="md:flex hidden"
          >
            <Link
              to={"/card"}
              className={`menu-link ${
                pathname === "/card" && "active"
              } flex flex-col hover:text-[#40a9ff] transition-all`}
            >
              <ShoppingCartOutlined className="md:text-2x1 text-x1 text-[#40a9ff]" />

              <span className="md:text-xs text-[10px] text-[#40a9ff]">Box</span>
            </Link>
          </Badge>
          <Link
            to={"/bills"}
            className={`menu-link ${
              pathname === "/bills" && "active"
            } flex flex-col hover:text-[#40a9ff] transition-all`}
          >
            <CopyOutlined className="md:text-2x1 text-x1" />
            <span className="md:text-xs text-[10px]">Bills</span>
          </Link>
          <Link
            to={"/customers"}
            className={`menu-link ${
              pathname === "/customers" && "active"
            } flex flex-col hover:text-[#40a9ff] transition-all`}
          >
            <UserOutlined className="md:text-2x1 text-x1" />
            <span className="md:text-xs text-[10px]">Customers</span>
          </Link>

          <Link
            to={"/statistics"}
            className={`menu-link ${
              pathname === "/statistics" && "active"
            } flex flex-col hover:text-[#40a9ff] transition-all`}
          >
            <BarChartOutlined className="md:text-2x1 text-x1" />
            <span className="md:text-xs text-[10px]">Statistics</span>
          </Link>
          <div onClick={logOut}>
            <Link
              className={`menu-link  flex flex-col hover:text-[#40a9ff] transition- gap-y-1`}
            >
              <LogoutOutlined className="md:text-2x1 text-x1" />
              <span className="md:text-xs text-[10px]">Logout</span>
            </Link>
          </div>
        </div>
        <Badge
          count={cart.cartItems.length}
          offset={[0, 0]}
          className="md:hidden flex"
        >
          <Link
            to={"/card"}
            className={`menu-link ${
              pathname === "/card" && "active"
            } flex flex-col hover:text-[#40a9ff] transition-all`}
          >
            <ShoppingCartOutlined className="text-2x1 text-x1 text-[#40a9ff]" />

            <span className="md:text-xs text-[10px] text-[#40a9ff]">Box</span>
          </Link>
        </Badge>
      </header>
    </div>
  );
};

export default Header;
