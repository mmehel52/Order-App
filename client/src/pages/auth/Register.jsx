import { Button, Carousel, Form, Input, message } from "antd";
import { Link } from "react-router-dom";
import AuthCarousel from "../../components/AuthCarousel";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const onFinish = async (values) => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      if (res.status === 200) {
        message.success("Sign up is succesfull.");
        navigate("/login");
        setLoading(false);
      }

      //  form.resetFields();
    } catch (error) {
      message.error("Something went to error.!!!");
      console.log(error);
    }
  };
  return (
    <div className="h-screen">
      <div className="flex justify-between h-full">
        <div className="xl:px-20 px-10 w-full flex flex-col h-full justify-center relative">
          <h1 className="text-center text-5xl font-bold mb-2">LOGO</h1>
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="User Name"
              name={"username"}
              rules={[{ required: true, message: "Name is required" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Email"
              name={"email"}
              rules={[{ required: true, message: "Email is required" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name={"password"}
              rules={[{ required: true, message: "Password is required" }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="Password Again"
              name={"passwordAgain"}
              dependencies={["password"]}
              rules={[
                { required: true, message: "Password again is required" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Password must be same!"));
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full"
                size="large"
                loading={loading}
              >
                Sign Up
              </Button>
            </Form.Item>
          </Form>
          <div className="flex justify-center absolute left-0 bottom-10 w-full">
            Do you have a account?&nbsp;
            <Link to="/login" className="text-blue-600">
              Sign In
            </Link>
          </div>
        </div>
        <div className="xl:w-4/6 lg:w-3/5 md:w-1/2 md:flex hidden bg-[#6c63ff] h-full">
          <div className="w-full h-full flex items-center">
            <div className="w-full">
              <Carousel className="!h-full px-6">
                <AuthCarousel
                  img="/img/responsive.svg"
                  title="Responsive"
                  desc="Tüm Cihaz Boyutlarıyla Uyumluluk"
                />
                <AuthCarousel
                  img="/img/statistic.svg"
                  title="İstatistikler"
                  desc="Geniş Tutulan İstatistikler"
                />
                <AuthCarousel
                  img="/img/customer.svg"
                  title="Müşteri Memnuniyeti"
                  desc="Deneyim Sonunda Üründen Memnun Müşteriler"
                />
                <AuthCarousel
                  img="/img/admin.svg"
                  title="Yönetici Paneli"
                  desc="Tek Yerden Yönetim"
                />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
