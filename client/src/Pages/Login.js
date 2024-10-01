// import React from "react";
// import { Form, Input, Button } from "antd";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const navigate = useNavigate();

//   const onFinish = (values) => {
//     console.log("Received values of form: ", values);
//     // Handle signup logic here (e.g., API request to create user)
//     // Navigate to login page or dashboard after successful signup
//     navigate("/login");
//   };

//   return (
//     <div className="m-5 md:m-10 lg:m-20">
//       <h1 className="text-2xl">Sign up</h1>
//       <hr />
//       <Form layout="vertical" onFinish={onFinish}>
//         {/* Name */}
//         <Form.Item
//           label="Name"
//           name="name"
//           rules={[{ required: true, message: "Please enter your name" }]}
//         >
//           <Input />
//         </Form.Item>

//         {/* Email */}
//         <Form.Item
//           label="Email"
//           name="email"
//           rules={[
//             { required: true, message: "Please enter your email" },
//             { type: "email", message: "Please enter a valid email" },
//           ]}
//         >
//           <Input />
//         </Form.Item>

//         {/* Password */}
//         <Form.Item
//           label="Password"
//           name="password"
//           rules={[{ required: true, message: "Please enter your password" }]}
//         >
//           <Input.Password />
//         </Form.Item>

//         {/* Confirm Password */}
//         <Form.Item
//           label="Confirm Password"
//           name="confirmPassword"
//           rules={[
//             { required: true, message: "Please confirm your password" },
//             ({ getFieldValue }) => ({
//               validator(_, value) {
//                 if (!value || getFieldValue("password") === value) {
//                   return Promise.resolve();
//                 }
//                 return Promise.reject("Passwords do not match");
//               },
//             }),
//           ]}
//         >
//           <Input.Password />
//         </Form.Item>

//         <div className="flex justify-end">
//           <Button type="primary" htmlType="submit">
//             Sign up
//           </Button>
//         </div>
//       </Form>

//       <div className="mt-5">
//         <p>
//           Already have an account?{" "}
//           <span
//             className="text-blue-500 cursor-pointer"
//             onClick={() => navigate("/login")}
//           >
//             Login
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;

// import React from "react";
// import { Form, Input, Button } from "antd";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const navigate = useNavigate();

//   const onFinish = (values) => {
//     console.log("Received values of form: ", values);
//     // Handle login logic here (e.g., API request to verify user)
//     // Navigate to payment page or dashboard after successful login
//     navigate("/payment");
//   };

//   return (
//     <div className="m-5">
//       <h1 className="text-2xl">Login</h1>
//       <hr />
//       <Form layout="vertical" onFinish={onFinish}>
//         {/* Email */}
//         <Form.Item
//           label="Email"
//           name="email"
//           rules={[
//             { required: true, message: "Please enter your email" },
//             { type: "email", message: "Please enter a valid email" },
//           ]}
//         >
//           <Input />
//         </Form.Item>

//         {/* Password */}
//         <Form.Item
//           label="Password"
//           name="password"
//           rules={[{ required: true, message: "Please enter your password" }]}
//         >
//           <Input.Password />
//         </Form.Item>

//         <div className="flex justify-end">
//           <Button type="primary" htmlType="submit">
//             Login
//           </Button>
//         </div>
//       </Form>

//       <div className="mt-5">
//         <p>
//           Don't have an account?{" "}
//           <span
//             className="text-blue-500 cursor-pointer"
//             onClick={() => navigate("/register")}
//           >
//             Register
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;


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
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-md shadow-md shadow-lg shadow-gray-500/50 w-96">
        <h1 className="text-2xl text-center mb-4">Login</h1>
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
            <Input
              placeholder="Enter your email"
              className="w-full p-2 pl-10 text-sm text-gray-700"
            />
          </Form.Item>

          {/* Password */}
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password
              placeholder="Enter your password"
              className="w-full p-2 pl-10 text-sm text-gray-700"
            />
          </Form.Item>

          <div className="flex justify-center">
            <Button
              type="primary"
              htmlType="submit"
              className="w-full p-2 text-sm text-white bg-blue-500 hover:bg-blue-700"
            >
              Login
            </Button>
          </div>
        </Form>

        <div className="mt-5 text-center">
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
    </div>
  );
}

export default Login;