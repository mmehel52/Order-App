import React from "react";
import { Button, Card, Form, Input, Modal, Select } from "antd";
const CreateBill = ({ isModalOpen, setIsModalOpen }) => {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div>
      <Modal
        title="Create Bill"
        open={isModalOpen}
        footer={false}
        onCancel={() => setIsModalOpen(false)}
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Client Name"
            name={"client name"}
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Phone Number"
            name={"phone number"}
            rules={[{ required: true }]}
          >
            <Input maxLength={11} />
          </Form.Item>
          <Form.Item
            label="Payment Method"
            name={"payment method"}
            rules={[{ required: true }]}
          >
            <Select placeholder="Choose...">
              <Select.Option value="Cash">Cash</Select.Option>
              <Select.Option value="Credit Card">Credit Card</Select.Option>
            </Select>
          </Form.Item>
          <Card className="">
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
            <div className="flex justify-end">
              <Button
                className="mt-4"
                type="primary"
                onClick={() => setIsModalOpen(true)}
                htmlType="submit"
              >
                Create Order
              </Button>
            </div>
          </Card>
        </Form>
      </Modal>
    </div>
  );
};

export default CreateBill;
