import React, { useState } from "react";
import { Table, Card, Button, Popconfirm } from "antd";
import CreateBill from "../components/CreateBill";
import Header from "../components/Header";
import { useSelector, useDispatch } from "react-redux";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { increase, decrease, deleteCart } from "./../redux/cartSlice";

const CardPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const columns = [
    {
      title: "Image",
      dataIndex: "img",
      key: "img",
      width: "125px",
      render: (text) => {
        return <img src={text} alt="" className="w-full h-20 object-cover" />;
      },
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (text) => {
        return <span>{text.toFixed(2)}</span>;
      },
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      render: (text, record) => {
        return (
          <div className="flex items-center  ">
            <Button
              size="small"
              className="w-full flex items-center justify-center rounded-full bg-gray-700 text-white"
              icon={<PlusCircleOutlined />}
              onClick={() => dispatch(increase(record))}
            />
            <span className="font-bold w-6 inline-block text-center">
              {record.quantity}
            </span>
            <Button
              size="small"
              className="w-full flex items-center justify-center rounded-full bg-gray-700 text-white"
              icon={<MinusCircleOutlined />}
              onClick={() => {
                if (record.quantity === 1) {
                  if (window.confirm("The product is deleted?")) {
                    dispatch(decrease(record));
                  }
                } else {
                  dispatch(decrease(record));
                }
              }}
            />
          </div>
        );
      },
    },
    {
      title: "Total Price",
      render: (text, record) => {
        return <span>{(record.quantity * record.price).toFixed(2)}₺</span>;
      },
    },
    {
      title: "Actions",
      render: (_, record) => {
        return (
          <Popconfirm
            title="Are you sure to delete?"
            onConfirm={() => dispatch(deleteCart(record))}
            okText="Yes"
            cancelText="No"
          >
            <Button type="link" danger>
              Delete
            </Button>
          </Popconfirm>
        );
      },
    },
  ];

  return (
    <div>
      <Header />
      <div className="px-6">
        <Table
          dataSource={cart.cartItems}
          columns={columns}
          bordered
          pagination={false}
          scroll={{
            x: 1200,
            y: 300,
          }}
        />
        <div className="cart-total flex justify-end mt-4">
          <Card className="w-72">
            <div className="flex justify-between">
              <span>Sub Total</span>
              <span>{((cart.total * 100) / 108).toFixed(2)}₺</span>
            </div>
            <div className="flex justify-between">
              <span>KDV %{cart.tax}</span>
              <span className="text-red-600">
                {((cart.total * cart.tax) / 108).toFixed(2)}₺
              </span>
            </div>
            <div className="flex justify-between">
              <b>Total</b>
              <b>{cart.total.toFixed(2)}₺</b>
            </div>
            <Button
              size="large"
              className="mt-4 w-full  bg-gray-700 text-white"
              onClick={() => setIsModalOpen(true)}
              disabled={cart.cartItems.length === 0}
            >
              Create Order
            </Button>
          </Card>
        </div>
      </div>
      <CreateBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default CardPage;
