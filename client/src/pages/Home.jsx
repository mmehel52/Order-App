import React from "react";
import CartTotals from "../components/CartTotals";
import Categories from "../components/Categories";
import Products from "../components/Products";

const Home = () => {
  return (
    <>
      <div className="home px-6 flex md:flex-row flex-col justify-between gap-10 md:pb-0 pb-24">
        <div className="categories  overflow-auto max-h-[calc(100vh112px)] md:pb-10 ">
          <Categories />
        </div>
        <div className="products flex-[8] overflow-y-auto max-h-[calc(100vh_-_112px)] pb-10">
          <Products />
        </div>
        <div className="car-wrapper  min-w-[300px] md:-mr-[24px] md:-mt-[24px] border">
          <CartTotals />
        </div>
      </div>
    </>
  );
};

export default Home;
