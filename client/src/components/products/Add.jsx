import { Button, Form, Input, message, Modal, Select, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import React from "react";
import { Image } from "cloudinary-react";

const Add = ({
  isAddModalOpen,
  setIsAddModalOpen,
  categories,
  products,
  setProducts,
}) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    try {
      fetch("http://localhost:5000/api/products/add-product", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      message.success("Product has been added succesfully.");
      form.resetFields();
      setProducts([
        ...products,
        {
          _id: Math.random(),
          title: values.title,
          price: Number(values.price),
          img: values.img,
        },
      ]);
      setIsAddModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };
  const cloudName = "REACT_APP_CLOUDINARY_CLOUD_NAME";
  const uploadPreset = "REACT_APP_CLOUDINARY_UPLOAD_PRESET";

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", uploadPreset);
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log(file);
  };
  return (
    <Modal
      title="Add New Product"
      open={isAddModalOpen}
      onCancel={() => setIsAddModalOpen(false)}
      footer={false}
    >
      <Form layout="vertical" onFinish={onFinish} form={form}>
        <Form.Item
          name="title"
          label="Product Name"
          rules={[{ required: true, message: "Product is required" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="upload"
          label="Product Picture"
          valuePropName="fileList"
          rules={[{ required: true, message: "Product is required" }]}
          extra=""
        >
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item
          name="price"
          label="Product Price"
          rules={[{ required: true, message: "Product Price is required" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="category"
          label="Product Category"
          rules={[{ required: true, message: "Product Category is required" }]}
        >
          <Select
            showSearch
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.title ?? "").includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.title ?? "")
                .toLowerCase()
                .localeCompare((optionB?.title ?? "").toLowerCase())
            }
            options={categories}
          />
        </Form.Item>
        <Form.Item className="flex justify-end mb-0">
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default Add;
