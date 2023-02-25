import React, { useEffect, useState } from "react";
import { Spin, Table } from "antd";
import Header from "../components/Header";
const Customers = () => {
  const [billItems, setBillItems] = useState("");
  useEffect(() => {
    const getBills = async () => {
      try {
        const res = await fetch(
          process.env.REACT_APP_SERVER_URL + "/api/bills/get-all"
        );
        const data = await res.json();
        setBillItems(data);
      } catch (err) {
        console.log(err);
      }
    };
    getBills();
  }, []);

  const columns = [
    {
      title: "Customer Name",
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: "Phone Number",
      dataIndex: "customerPhoneNumber",
      key: "customerPhoneNumber",
    },
    {
      title: "Created Date",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text) => {
        return <span>{text.substring(0, 10)}</span>;
      },
    },
  ];

  return (
    <div>
      <Header />
      <h1 className="text-4xl font-bold text-center mb-4">Customers</h1>
      {billItems ? (
        <div className="px-6">
          <Table
            dataSource={billItems}
            columns={columns}
            bordered
            pagination={false}
            scroll={{
              x: 1000,
              y: 300,
            }}
            rowKey="_id"
          />
          <div className="cart-total flex justify-end mt-4"></div>
        </div>
      ) : (
        <Spin
          size="large"
          className="absolute top-1/2 h-screen w-screen flex  justify-center"
        />
      )}
    </div>
  );
};

export default Customers;
