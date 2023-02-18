import React, { useEffect, useState } from "react";
import { Table, Button, Spin } from "antd";
import PrintBills from "../components/PrintBills";
import Header from "../components/Header";
const BillPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [billItems, setBillItems] = useState("");
  const [customer, setCustomer] = useState();

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

  console.log(billItems);

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
    {
      title: "Payment Mode",
      dataIndex: "paymentMode",
      key: "paymentMode",
    },
    {
      title: "Total Amount",
      dataIndex: "totalAmount",
      key: "totalAmount",
      render: (text) => {
        return <span>{text}₺</span>;
      },
      sorter: (a, b) => a.totalAmount - b.totalAmount,
    },
    {
      title: "Actions",
      render: (_, record) => {
        return (
          <Button
            type="link"
            className="pl-0"
            onClick={() => {
              setIsModalOpen(true);
              setCustomer(record);
            }}
          >
            Print
          </Button>
        );
      },
    },
  ];

  return (
    <div>
      <Header />
      <h1 className="text-4xl font-bold text-center mb-4">Bills</h1>
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
        </div>
      ) : (
        <Spin
          size="large"
          className="absolute top-1/2 h-screen w-screen flex  justify-center"
        />
      )}
      <PrintBills
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        customer={customer}
      />
    </div>
  );
};

export default BillPage;
