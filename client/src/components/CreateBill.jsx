import React from "react";
import { Button, Card, Form, Input, message, Modal, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reset } from "./../redux/cartSlice";
const CreateBill = ({ isModalOpen, setIsModalOpen }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      const res = await fetch(
        process.env.REACT_APP_SERVER_URL + "/api/bills/add-bill",
        {
          method: "POST",
          body: JSON.stringify({
            ...values,
            subTotal: ((cart.total * 100) / 108).toFixed(2),
            tax: ((cart.total * cart.tax) / 108).toFixed(2),
            totalAmount: cart.total.toFixed(2),
            cartItems: cart.cartItems,
          }),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        }
      );
      if (res.status === 200) {
        message.success("The bill is created.");
        dispatch(reset());
        navigate("/bills");
      }
    } catch (error) {
      message.danger("There is a error.");
      console.log(error);
    }
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
            label="Customer Name"
            name={"customerName"}
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Phone Number"
            name={"customerPhoneNumber"}
            rules={[{ required: true }]}
          >
            <Input maxLength={11} />
          </Form.Item>
          <Form.Item
            label="Payment Mode"
            name={"paymentMode"}
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
            <div className="flex justify-end">
              <Button
                className="mt-4"
                type="primary"
                onClick={() => setIsModalOpen(false)}
                htmlType="submit"
                disabled={cart.cartItems.length === 0}
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
