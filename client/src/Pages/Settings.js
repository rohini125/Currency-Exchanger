import React from "react";
import { Link } from "react-router-dom";

const Settings = () => {
    return (
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-6">Settings</h2>
            <div className="border-b pb-4 mb-4">
                <h3 className="text-lg font-medium mb-2">Account</h3>
                <Link to="/profile">
                    <button className="w-full text-left py-2 hover:bg-gray-100">
                        Profile Information
                    </button>
                </Link>
                <Link to="/changepassword">
                    <button className="w-full text-left py-2 hover:bg-gray-100">
                        Change Password
                    </button>
                </Link>
                <Link to="/manage-devices">
                    <button className="w-full text-left py-2 hover:bg-gray-100">
                        Manage Devices
                    </button>
                </Link>
                <Link to="/security-questions">
                    <button className="w-full text-left py-2 hover:bg-gray-100">
                        Security Questions
                    </button>
                </Link>
            </div>
            <div className="border-b pb-4 mb-4">
                <h3 className="text-lg font-medium mb-2">Notifications</h3>
                <Link to="/push-notifications">
                    <button className="w-full text-left py-2 hover:bg-gray-100">
                        Push Notifications
                    </button>
                </Link>
                <button className="w-full text-left py-2 hover:bg-gray-100">
                    Email Notifications
                </button>
            </div>
            <div className="border-b pb-4 mb-4">
                <h3 className="text-lg font-medium mb-2">Security</h3>
                <Link to="/two-factor-authentication">
                    <button className="w-full text-left py-2 hover:bg-gray-100">
                        Two-Factor Authentication
                    </button>
                </Link>
                <Link to="/security-questions">
                <button className="w-full text-left py-2 hover:bg-gray-100">
                    Security Questions
                </button>
                </Link>
            </div>
            <div className="mt-6">
                <h3 className="text-lg font-medium mb-2">Help & Support</h3>
                <button className="w-full text-left py-2 hover:bg-gray-100">
                    Contact Support
                </button>
                <button className="w-full text-left py-2 hover:bg-gray-100">
                    FAQs
                </button>
            </div>
            <button className="mt-6 w-full bg-red-500 text-white rounded-md py-2 hover:bg-red-600">
                Logout
            </button>
        </div>
    );
};

export default Settings;
