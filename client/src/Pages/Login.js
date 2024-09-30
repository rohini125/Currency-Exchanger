import React from "react";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    // Handle login logic here (e.g., API request to verify user)
    // Navigate to payment page or dashboard after successful login
    navigate("/payment");
  };

  return (
    <div className="m-5">
      <h1 className="text-2xl">Login</h1>
      <hr />
      <Form layout="vertical" onFinish={onFinish}>
        {/* Email */}
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input />
        </Form.Item>

        {/* Password */}
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <Input.Password />
        </Form.Item>

        <div className="flex justify-end">
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </div>
      </Form>

      <div className="mt-5">
        <p>
          Don't have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;


