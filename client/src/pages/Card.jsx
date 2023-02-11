import React, { useState } from "react";
import { Table, Card, Button, Modal } from "antd";
import CreateBill from "../components/CreateBill";

const CardPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  return (
    <div>
      <div className="px-6">
        <Table
          dataSource={dataSource}
          columns={columns}
          bordered
          pagination={false}
        />
        <div className="cart-total flex justify-end mt-4">
          <Card className="w-72">
            <div className="flex justify-between">
              <span>Sub Total</span>
              <span>549.00₺</span>
            </div>
            <div className="flex justify-between">
              <span>KDV Total %8</span>
              <span className="text-red-600">44.00₺</span>
            </div>
            <div className="flex justify-between">
              <b>Total</b>
              <b>549.00₺</b>
            </div>
            <Button
              size="large"
              className="mt-4 w-full"
              type="primary"
              onClick={() => setIsModalOpen(true)}
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
