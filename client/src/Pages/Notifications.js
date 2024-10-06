import React, { useState } from 'react';

const Notifications = () => {
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [notificationTypes, setNotificationTypes] = useState({
        marketing: true,
        transaction: true,
        reminders: true,
    });

    const handleToggleNotifications = () => {
        setNotificationsEnabled(!notificationsEnabled);
    };

    const handleToggleNotificationType = (type) => {
        setNotificationTypes((prev) => ({
            ...prev,
            [type]: !prev[type],
        }));
    };

    const handleSaveChanges = () => {
        // Here you can implement the logic to save changes to the backend if needed
        alert('Changes saved successfully!');
    };

    return (
        <div className="max-w-lg mx-auto mt-20 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold  mt-2 mb-4">Notifications</h2>
            <div className="mb-6">
                <label className="inline-flex items-center">
                    <input
                        type="checkbox"
                        checked={notificationsEnabled}
                        onChange={handleToggleNotifications}
                        className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    <span className="ml-2">Enable Push Notifications</span>
                </label>
            </div>
            {notificationsEnabled && (
                <div>
                    <h3 className="text-lg font-medium mb-4">Notification Types</h3>
                    <div className="space-y-4">
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                checked={notificationTypes.marketing}
                                onChange={() => handleToggleNotificationType('marketing')}
                                className="form-checkbox h-5 w-5 text-blue-600"
                            />
                            <span className="ml-2">Marketing Notifications</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                checked={notificationTypes.transaction}
                                onChange={() => handleToggleNotificationType('transaction')}
                                className="form-checkbox h-5 w-5 text-blue-600"
                            />
                            <span className="ml-2">Transaction Alerts</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                checked={notificationTypes.reminders}
                                onChange={() => handleToggleNotificationType('reminders')}
                                className="form-checkbox h-5 w-5 text-blue-600"
                            />
                            <span className="ml-2">Reminders</span>
                        </label>
                    </div>
                </div>
            )}
            <button 
                onClick={handleSaveChanges} 
                className="mt-6 w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600"
            >
                Save Changes
            </button>
        </div>
    );
};

export default Notifications;
