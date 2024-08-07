import React from 'react';
import { useState } from 'react';
import { Col, Form, Row } from "antd";
import email_icon from '../../Assets/email_icon.png'
import password_icon from '../../Assets/password_icon.png';
import user_icon from '../../Assets/user_icon.png'

function Login() {
    const [action, setAction] = useState("Login")

    const onFinish = (values) => {
        console.log("Received values of form: ", values);
    };

    return (
        <div className="bg-primary flex items-center justify-center h-screen">
            <div className="card w-400 p-2">
                <div className="flex items-center justify-between">
                    <h1 className="text-primary items-center gap-1">Login</h1></div>
                <hr />
                <Form layout="vertical" onFinish={onFinish} >
                    <div className='inputs'>
                        <div className='input'>
                            <img className='mlr-3 m-0' src={user_icon} alt="user_icon" />
                            <input type='text' placeholder='User name' />
                        </div>
                        <div className='input'>
                            <img className='mlr-3 m-0' src={email_icon} alt="email_icon" />
                            <input type='email' placeholder='Email' />
                        </div>
                        <div className='input'>
                            <img className='mlr-3 m-0' src={password_icon} alt="password_icon" />
                            <input type='password' placeholder='Password' />
                        </div>
                    </div>

                    <div className=' forget-password m-2 fs-1 text-third'>
                        Forget password  <span >click here !</span>
                    </div>


                    <div className="submit bg-primary justify-center items-center " onClick={()=>{setAction("Login")}}>Log In</div>


                </Form>
            </div>
        </div>
    );
}

export default Login;