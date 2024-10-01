import React from "react";
import { Col, Form, Row, Input, Select, Button, Card } from "antd";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    // Navigate to login page after successful registration
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 md:p-12 lg:p-24">
      <Card
        title="Payment - REGISTER"
        bordered={false}
        className="w-full max-w-lg p-6 shadow-lg shadow-md shadow-gray-500/50 drop-shadow-lg drop-shadow-gray-500/50"
      >
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-gray-800">Create an Account</h1>
          <h1
            className="text-sm underline cursor-pointer text-blue-600"
            onClick={() => navigate("/login")}
          >
            Already a member? Login
          </h1>
        </div>
        <Form layout="vertical" onFinish={onFinish}>
          <Row gutter={32}>
            {/* First Name */}
            <Col span={12}>
              <Form.Item
                label="First Name"
                name="firstName"
                rules={[{ required: true, message: "Please enter your first name" }]}
              >
                <Input className="rounded-md border-gray-300" placeholder="Enter your first name" />
              </Form.Item>
            </Col>

            {/* Last Name */}
            <Col span={12}>
              <Form.Item
                label="Last Name"
                name="lastName"
                rules={[{ required: true, message: "Please enter your last name" }]}
              >
                <Input className="rounded-md border-gray-300" placeholder="Enter your last name" />
              </Form.Item>
            </Col>

            {/* Email */}
            <Col span={12}>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Please enter a valid email" },
                ]}
              >
                <Input className="rounded-md border-gray-300" placeholder="example@mail.com" />
              </Form.Item>
            </Col>

            {/* Mobile */}
            <Col span={12}>
              <Form.Item
                label="Mobile"
                name="mobile"
                rules={[
                  { required: true, message: "Please enter your mobile number" },
                  { pattern: /^[0-9]{10}$/, message: "Please enter a valid 10-digit mobile number" },
                ]}
              >
                <Input type="tel" className="rounded-md border-gray-300" placeholder="1234567890" />
              </Form.Item>
            </Col>

            {/* Identification Type */}
            <Col span={12}>
              <Form.Item
                label="Identification Type"
                name="identificationType"
                rules={[{ required: true, message: "Please select an identification type" }]}
              >
                <Select className="rounded-md border-gray-300" placeholder="Select Identification Type">
                  <Select.Option value="NATIONAL ID">National ID</Select.Option>
                  <Select.Option value="AADHAR CARD">Aadhar Card</Select.Option>
                  <Select.Option value="PAN CARD">Pan Card</Select.Option>
                  <Select.Option value="PASSPORT">Passport</Select.Option>
                  <Select.Option value="DRIVING LICENCE">Driving Licence</Select.Option>
                </Select>
              </Form.Item>
            </Col>

            {/* Identification Number */}
            <Col span={12}>
            <Form.Item
                label="Identification Number"
                name="identificationNumber"
                rules={[{ required: true, message: "Please enter your identification number" }]}
              >
                <Input className="rounded-md border-gray-300" placeholder="Enter identification number" />
              </Form.Item>
            </Col>

            {/* Password */}
            <Col span={12}>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please enter your password" },
                  { min: 6, message: "Password must be at least 6 characters long" },
                ]}
              >
                <Input.Password className="rounded-md border-gray-300" placeholder="Enter password" />
              </Form.Item>
            </Col>

            {/* Confirm Password */}
            <Col span={12}>
              <Form.Item
                label="Confirm Password"
                name="confirmPassword"
                dependencies={["password"]}
                rules={[
                  { required: true, message: "Please confirm your password" },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error("The two passwords do not match"));
                    },
                  }),
                ]}
              >
                <Input.Password className="rounded-md border-gray-300" placeholder="Confirm password" />
              </Form.Item>
            </Col>
          </Row>

          <div className="flex justify-end">
            <Button type="primary" htmlType="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md">
              Register
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
}

export default Register;

