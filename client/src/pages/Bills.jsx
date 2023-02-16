import React, { useEffect, useState } from "react";
import { Table, Button } from "antd";
import PrintBills from "../components/PrintBills";
import Header from "../components/Header";
const BillPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [billItems, setBillItems] = useState("");
  const [customer, setCustomer] = useState();

  useEffect(() => {
    const getBills = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/bills/get-all");
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
      <div className="px-6">
        <h1 className="text-4xl font-bold text-center mb-4">Bills</h1>
        <Table
          dataSource={billItems}
          columns={columns}
          bordered
          pagination={false}
          scroll={{
            x: 1200,
            y: 300,
          }}
        />
      </div>
      <PrintBills
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        customer={customer}
      />
    </div>
  );
};

export default BillPage;
