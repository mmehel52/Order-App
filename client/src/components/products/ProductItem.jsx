import React from "react";

const ProductItem = ({ item }) => {
  return (
    <div className="product-item border hover:shadow-lg cursor-pointer transition-all select-none">
      <div className="product-img">
        <img
          src={item.img}
          alt=""
          className="object-cover w-full border-b h-28"
        />
      </div>
      <div className="product-info flex flex-col p-3">
        <span className="font-bold">{item.title}</span>
        <span>{item.price}₺</span>
      </div>
    </div>
  );
};

export default ProductItem;
