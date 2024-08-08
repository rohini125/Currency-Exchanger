import React from 'react';
import { useState } from 'react';
import { Col, Form, Row } from "antd";
import Login from '../Login/Login.js'
import email_icon from '../../Assets/email_icon.png'
import password_icon from '../../Assets/password_icon.png';
import user_icon from '../../Assets/user_icon.png'

function Register() {
   const [action,setAction]=useState("Log In");
    const onFinish = (values) => {
        console.log("Received values of form: ", values);
    };

    return (
        
        <div className="bg-primary flex items-center justify-center">
            <div className="card w-1400 p-2">
            <div className="flex items-center justify-between header">
                <h1 className="text-primary items-center gap-1 header ">{action}</h1>
            </div>
            <hr />
            <form layout="vertical" onFinish={onFinish}>
            <div className='inputs'>
            {action==="Log In"?<div></div>: <div className='input'>
                            <img className='mlr-3 m-0' src={user_icon} alt="user_icon" />
                            <input type='text' placeholder='Name' />
                        </div>}
                       
                        
                        <div className='input'>
                            <img className='mlr-3 m-0' src={email_icon} alt="email_icon" />
                            <input type='email' placeholder='Email' />
                        </div>
                        {action==="Log In"?<div></div>:
                        <div className='input'>
                            <img className='mlr-3 m-0' src={user_icon} alt="user_icon" />
                            <input type='text' placeholder='Mobile No.' />
                        </div>}
                        {action==="Log In"?<div></div>:<div>
                       <Form.Item lable="Identification Type" name="identificationtype" className='input'>
                           <select className='input'>
                            <option value="NATIONAL ID">National Id</option>
                            <option value="PASSPORT">Passport</option>
                            <option value="DRIVING LICENCE">Driving Licence</option>
                            <option value="SOCIAL CARD">Social Security Card</option>
                           </select>
                        </Form.Item>
                    </div>}
                    {action==="Log In"?<div></div>:
                    <div className='input'>
                            <img className='mlr-3 m-0' src={user_icon} alt="user_icon" />
                            <input type='text' placeholder='Identification Number' />
                        </div>}
                        
                        <div className='input'>
                            <img className='mlr-3 m-0' src={password_icon} alt="password_icon" />
                            <input type='password' placeholder='Password' />
                        </div>
                        {action==="Log In"?<div></div>:
                        <div className='input'>
                            <img className='mlr-3 m-3' src={password_icon} alt="password_icon" />
                            <input type='password' placeholder='Confirm Password' />
                        </div>}
                    </div>
                <div className='submit-container'>
                    <div className={action==="Log In"?"submit gray":"submit"} onClick={()=>{setAction("Register")}}>Register</div>
                    <div className={action==="Register"?"submit gray":"submit"} onClick={()=>{setAction("Log In")}}>Log In</div>

                </div>
                {action==="Log In"?<div></div>:
                <div className="text-5m underline mt-2">
                    Already a member ,  Log in
                </div>}
            </form>
            </div>
        </div>
    );
}

export default Register;