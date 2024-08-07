import React from 'react';
import { Col, Form, Row } from "antd";


function Register() {
   
    const onFinish = (values) => {
        console.log("Received values of form: ", values);
    };

    return (
        <div className="m-5">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl">Payment-REGESTER</h1>

                <h1 className="text-5m underline">
                    Already a member , Log in
                </h1>
            </div>
            <hr />
            <form layout="vertical" onFinish={onFinish}>
            <Row gutter={16}>
                    <Col span={6}>
                        <Form.Item lable="First Name" name="firstname">
                            <input type="text" />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item lable="Last Name" name="lastname">
                            <input type="text" />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item lable="Email" name="email">
                            <input type="text" />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item lable="Mobile" name="mobile">
                            <input type="text" />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                       <Form.Item lable="Identification Type" name="identificationtype">
                           <select>
                            <option value="NATIONAL ID">National Id</option>
                            <option value="PASSPORT">Passport</option>
                            <option value="DRIVING LICENCE">Driving Licence</option>
                            <option value="SOCIAL CARD">Social Security Card</option>
                           </select>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item lable="Identification Number" name="identificationNumber">
                            <input type="text" />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item lable="Address" name="address">
                            <input type="textarea" />
                        </Form.Item>
                    </Col>

                    <Col span={6}>
                        <Form.Item lable="Password" name="password">
                            <input type="password" />
                        </Form.Item>
                    </Col>

                    <Col span={6}>
                        <Form.Item lable="Confirm Password" name="confirmPassword">
                            <input type="password" />
                        </Form.Item>
                    </Col>
                </Row>
                <div className="flex justify-end">
                    <button className="primary-contained-btn" type="submit">
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Register;