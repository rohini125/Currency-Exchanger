import { Col, Form, Row, Input, Select, Button, Card } from "antd";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Register() {
  const [data, setData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      contactNo: '',
      city: '',
      identificationType: '',
      identificationNumber: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [identificationError, setIdentificationError] = useState('');
  const [emailError, setEmailError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
      const { name, value } = e.target;
      setData({ ...data, [name]: value });

      // Reset errors when user types
      if (name === 'email') setEmailError('');
      if (name === 'confirmPassword') setPasswordError('');
      if (name === 'identificationNumber') setIdentificationError('');
  };

  const handleSubmit = async (e) => {
      e.preventDefault();

      // // Check if passwords match before submitting
      // if (data.password !== data.confirmPassword) {
      //     setPasswordError('Password do not match');
      //     return;
      // }

      // // Email validation (you can add more robust email regex if needed)
      // if (!/\S+@\S+\.\S+/.test(data.email)) {
      //     setEmailError('Please enter a valid email address');
      //     return;
      // }

      try {
          console.log('data ', data);
          const response = await axios.post('http://192.168.1.13:5000/auth/register', data);
          console.log(' response ', response)



          if (response.status === 200) {
              alert(response.data.message);
              setIsSubmitted(true);
              navigate('/SignUp');
          }
      } catch (error) {
          console.error('Error:', error.response?.data || error.message);
          alert('There was an error submitting the form. Please try again.');
      }
  };


  const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
      setConfirmPasswordVisible(!confirmPasswordVisible);
  };



// function Register() 
// {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     mobile: '',
//     identificationType:'',  
//     identificationNumber:'',
//     password:'',
//     confirmPassword:'' 
//   });
 
//   const [formErrors, setFormErrors] = useState({});
//       const [isSubmitted, setIsSubmitted] = useState(false);
    
//       const validate = () => {
//         const errors = {};
//         if (!formData.firstName) errors.firstName = 'First Name is required';
//         if (!formData.lastName) errors.lastName = 'Last Name is required';
//         if (!formData.email) errors.email = 'Email is required';
//         if (!formData.mobile) errors.mobile = 'Mobile is required';
//         if (!formData.identificationType) errors.identificationType = 'Identification Type is required';
//         if (!formData.identificationNumber) errors.identificationNumber = 'Identification Number is required';
//         if (!formData.password) errors.password = 'Password is required';
//         if (!formData.confirmPassword) errors.confirmPassword = 'Confirm Password is required';
//         return errors;
//       };
    
//       const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//       };
//       // const navigate = useNavigate();

//   // handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//         // Make a POST request to your backend API
//         const response = await axios.post('http://192.168.1.4:5000/User', formData);
//         console.log(response);
//         if(response.status === 200){
//           alert('successfully register');
//         }
        
//     } catch (error) {
//         console.error('There was an error submitting the form!', error);
//         alert('registration submit for error');
//       }
//   };

  // const onFinish = async (values) => {
  //   console.log("Received values of form: ", values);
  //   try {
  //     // Make a POST request to your backend API
  //     const response = await fetch("https://your-api-endpoint.com/register", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(values), // Send form data as JSON
  //     });

  //     // Handle response
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }

  //     const data = await response.json();
  //     console.log("Success:", data);

  //     // Navigate to login page after successful registration
  //     navigate("/login");
  //   } catch (error) {
  //     console.error("Error:", error);
  //     // Optionally show an error message to the user
  //   }
  // };

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
            // onClick={() => navigate("/login")}
            onSubmit={handleSubmit}
          >
            Already a member? Login
          </h1>
        </div>
        {/* <Form layout="vertical" onFinish={onFinish}> */}
        <Form layout="vertical" onSubmit={handleSubmit}>
          <Row gutter={32}>
            {/* First Name */}
            <Col span={12}>
              <Form.Item
                label="First Name"
                name="firstName"
                value={data.firstName}
                onChange={handleChange}
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
                value={data.lastName}
                onChange={handleChange}
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
                value={data.email}
                onChange={handleChange}
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
                value={data.mobile}
                onChange={handleChange}
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
                value={data.identificationType}
                onChange={handleChange}
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
                value={data.identificationNumber}
                onChange={handleChange}
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
                value={data.password}
                onChange={handleChange}
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
                value={data.confirmPassword}
                onChange={handleChange}
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
            <Button type="primary" htmlType="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md" onclick="">
              Register
            </Button>
              {isSubmitted && (
                <div>
                    <p>Form submitted successfully!</p>
                </div> 
              )}
          </div>
        </Form>
      </Card>
    </div>
  );
}

export default Register;





// import React from "react";
// import { Col, Form, Row, Input, Select, Button, Card } from "antd";
// import { useNavigate } from "react-router-dom";

// function Register() {
//   const navigate = useNavigate();

//   const onFinish = (values) => {
//     console.log("Received values of form: ", values);
//     // Navigate to login page after successful registration
//     navigate("/login");
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 md:p-12 lg:p-24">
//       <Card
//         title="Payment - REGISTER"
//         bordered={false}
//         className="w-full max-w-lg p-6 shadow-lg shadow-md shadow-gray-500/50 drop-shadow-lg drop-shadow-gray-500/50"
//       >
//         <div className="flex items-center justify-between mb-4">
//           <h1 className="text-2xl font-bold text-gray-800">Create an Account</h1>
//           <h1
//             className="text-sm underline cursor-pointer text-blue-600"
//             onClick={() => navigate("/login")}
//           >
//             Already a member? Login
//           </h1>
//         </div>
//         <Form layout="vertical" onFinish={onFinish}>
//           <Row gutter={32}>
//             {/* First Name */}
//             <Col span={12}>
//               <Form.Item
//                 label="First Name"
//                 name="firstName"
//                 rules={[{ required: true, message: "Please enter your first name" }]}
//               >
//                 <Input className="rounded-md border-gray-300" placeholder="Enter your first name" />
//               </Form.Item>
//             </Col>

//             {/* Last Name */}
//             <Col span={12}>
//               <Form.Item
//                 label="Last Name"
//                 name="lastName"
//                 rules={[{ required: true, message: "Please enter your last name" }]}
//               >
//                 <Input className="rounded-md border-gray-300" placeholder="Enter your last name" />
//               </Form.Item>
//             </Col>

//             {/* Email */}
//             <Col span={12}>
//               <Form.Item
//                 label="Email"
//                 name="email"
//                 rules={[
//                   { required: true, message: "Please enter your email" },
//                   { type: "email", message: "Please enter a valid email" },
//                 ]}
//               >
//                 <Input className="rounded-md border-gray-300" placeholder="example@mail.com" />
//               </Form.Item>
//             </Col>

//             {/* Mobile */}
//             <Col span={12}>
//               <Form.Item
//                 label="Mobile"
//                 name="mobile"
//                 rules={[
//                   { required: true, message: "Please enter your mobile number" },
//                   { pattern: /^[0-9]{10}$/, message: "Please enter a valid 10-digit mobile number" },
//                 ]}
//               >
//                 <Input type="tel" className="rounded-md border-gray-300" placeholder="1234567890" />
//               </Form.Item>
//             </Col>

//             {/* Identification Type */}
//             <Col span={12}>
//               <Form.Item
//                 label="Identification Type"
//                 name="identificationType"
//                 rules={[{ required: true, message: "Please select an identification type" }]}
//               >
//                 <Select className="rounded-md border-gray-300" placeholder="Select Identification Type">
//                   <Select.Option value="NATIONAL ID">National ID</Select.Option>
//                   <Select.Option value="AADHAR CARD">Aadhar Card</Select.Option>
//                   <Select.Option value="PAN CARD">Pan Card</Select.Option>
//                   <Select.Option value="PASSPORT">Passport</Select.Option>
//                   <Select.Option value="DRIVING LICENCE">Driving Licence</Select.Option>
//                 </Select>
//               </Form.Item>
//             </Col>

//             {/* Identification Number */}
//             <Col span={12}>
//             <Form.Item
//                 label="Identification Number"
//                 name="identificationNumber"
//                 rules={[{ required: true, message: "Please enter your identification number" }]}
//               >
//                 <Input className="rounded-md border-gray-300" placeholder="Enter identification number" />
//               </Form.Item>
//             </Col>

//             {/* Password */}
//             <Col span={12}>
//               <Form.Item
//                 label="Password"
//                 name="password"
//                 rules={[
//                   { required: true, message: "Please enter your password" },
//                   { min: 6, message: "Password must be at least 6 characters long" },
//                 ]}
//               >
//                 <Input.Password className="rounded-md border-gray-300" placeholder="Enter password" />
//               </Form.Item>
//             </Col>

//             {/* Confirm Password */}
//             <Col span={12}>
//               <Form.Item
//                 label="Confirm Password"
//                 name="confirmPassword"
//                 dependencies={["password"]}
//                 rules={[
//                   { required: true, message: "Please confirm your password" },
//                   ({ getFieldValue }) => ({
//                     validator(_, value) {
//                       if (!value || getFieldValue("password") === value) {
//                         return Promise.resolve();
//                       }
//                       return Promise.reject(new Error("The two passwords do not match"));
//                     },
//                   }),
//                 ]}
//               >
//                 <Input.Password className="rounded-md border-gray-300" placeholder="Confirm password" />
//               </Form.Item>
//             </Col>
//           </Row>

//           <div className="flex justify-end">
//             <Button type="primary" htmlType="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md">
//               Register
//             </Button>
//           </div>
//         </Form>
//       </Card>
//     </div>
//   );
// }

// export default Register;

