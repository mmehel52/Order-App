import React from "react";
import Header from "../components/Header";
import Edit from "../components/products/Edit";

const Product = () => {
  return (
    <div>
      <Header />
      <div className="px-6">
        <h1 className="text-4x1 font-bold text-center">Products</h1>
        <Edit />
      </div>
    </div>
  );
};

export default Product;
