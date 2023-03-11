import { Button, message } from "antd";
import React from "react";
import {
  ClearOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart, increase, decrease, reset } from "./../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const CartTotals = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="cart h-full max-h-[calc(100vh_-_90px)] flex flex-col">
      <h2 className="bg-gray-700 text-center py-4 text-white font-bold tracking-wide">
        Products in Box
      </h2>
      <ul className="car-items px-2 flex flex-col gap-y-3 py-2 overflow-y-auto">
        {cart.cartItems.length > 0
          ? cart.cartItems
              .map((item) => (
                <li className="cart-item flex justify-between" key={item._id}>
                  <div className="flex items-center">
                    <img
                      src={item.img}
                      alt=""
                      className="w-16 h-16 object-cover cursor-pointer"
                      onClick={() => dispatch(deleteCart(item))}
                    />
                    <div className="flex flex-col ml-2">
                      <b>{item.title}</b>
                      <span>
                        {item.price}₺ x {item.quantity}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center ">
                    <Button
                      size="small"
                      className="w-full flex items-center justify-center rounded-full bg-gray-700 text-white "
                      icon={<PlusCircleOutlined />}
                      onClick={() => dispatch(increase(item))}
                    />
                    <span className="font-bold w-6 inline-block text-center">
                      {item.quantity}
                    </span>
                    <Button
                      size="small"
                      className="w-full flex items-center justify-center rounded-full bg-gray-700 text-white"
                      icon={<MinusCircleOutlined />}
                      onClick={() => {
                        if (item.quantity === 1) {
                          if (window.confirm("The product is deleted?")) {
                            dispatch(decrease(item));
                          }
                        } else {
                          dispatch(decrease(item));
                        }
                      }}
                    />
                  </div>
                </li>
              ))
              .reverse()
          : "there are no products..."}
      </ul>
      <div className="cart-totals mt-auto">
        <div className="border-t border-b">
          <div className="flex justify-between p-2">
            <b>Sub Total</b>
            <span>{((cart.total * 100) / 108).toFixed(2)}₺</span>
          </div>
          <div className="flex justify-between p-2">
            <b>KDV %{cart.tax}</b>
            <span className="text-red-700">
              {((cart.total * cart.tax) / 108).toFixed(2)}₺
            </span>
          </div>
        </div>
        <div className=" border-b mt-4">
          <div className="flex justify-between p-2">
            <b className="text-xl text-green-500">Total</b>
            <span className="text-xl">{cart.total.toFixed(2)}₺</span>
          </div>
        </div>
        <div className="py-4 px-2">
          <Button
            size="large"
            className="w-full  bg-gray-700 text-white"
            disabled={cart.cartItems.length === 0}
            onClick={() => navigate("/card")}
          >
            Create Order
          </Button>
          <Button
            type="primary"
            size="large"
            className="w-full mt-2 flex items-center justify-center"
            icon={<ClearOutlined />}
            danger
            disabled={cart.cartItems.length === 0}
            onClick={() => {
              if (window.confirm("Are you sure?")) {
                dispatch(reset());
                message.success("Box has been cleaned.");
              }
            }}
          >
            Clear
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartTotals;
