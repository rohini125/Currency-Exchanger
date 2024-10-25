import React, { useState } from 'react';

const ProfileHeader = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    phone: '+1 234 567 890',       // Registered Phone Number
    upiId: 'john.doe@upi',
    walletBalance: 5000, // Set initial balance as a number
    profilePicture: 'https://via.placeholder.com/150', // Placeholder image
  });

  const [isEditing, setIsEditing] = useState(false); // State to toggle edit mode
  const [editName, setEditName] = useState(user.name); // Store edited name
  const [editProfilePicture, setEditProfilePicture] = useState(user.profilePicture); // Store edited profile picture
  const [editPhone, setEditPhone] = useState(user.phone); // Store edited phone number

  // Function to handle save
  const handleSave = () => {
    const newUpiId = `${editPhone.replace('+', '').replace(/\s+/g, '')}@upi`; // Create new UPI ID
    setUser({
      ...user,
      name: editName,
      phone: editPhone,
      upiId: newUpiId, // Update UPI ID based on new phone number
      profilePicture: editProfilePicture,
    });
    setIsEditing(false); // Exit edit mode
  };

  // Function to handle profile picture upload
  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditProfilePicture(reader.result);
      };
      reader.readAsDataURL(file); // Read the image as data URL
    }
  };

  // Function to refresh wallet balance (simulate fetching from server)
  const refreshWalletBalance = () => {
    const newBalance = Math.floor(Math.random() * 10000); // Random balance for demo purposes
    setUser((prevState) => ({
      ...prevState,
      walletBalance: newBalance,
    }));
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center">
          <div className="mr-6">
            {isEditing ? (
              <label className="cursor-pointer">
                <img
                  className="w-20 h-20 rounded-full object-cover"
                  src={editProfilePicture}
                  alt="Profile"
                />
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleProfilePictureChange}
                />
              </label>
            ) : (
              <img
                className="w-20 h-20 rounded-full object-cover"
                src={user.profilePicture}
                alt="Profile"
              />
            )}
          </div>

          <div className="flex flex-col">
            {isEditing ? (
              <>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="text-xl font-semibold border border-gray-300 rounded px-2 py-1 mb-2 focus:outline-none focus:ring focus:ring-blue-300"
                />
                
                {/* Editable Phone Number */}
                <input
                  type="text"
                  value={editPhone}
                  onChange={(e) => setEditPhone(e.target.value)}
                  className="text-lg border border-gray-300 rounded px-2 py-1 mb-2 focus:outline-none focus:ring focus:ring-blue-300"
                  placeholder="Enter phone number"
                />

                {/* UPI ID (Auto-generated based on phone number) */}
                <p className="text-gray-500 mb-2">UPI ID: {editPhone.replace('+', '').replace(/\s+/g, '')}@upi</p>

                <div className="flex space-x-4">
                  <button
                    onClick={handleSave}
                    className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <p className="text-gray-500 mb-2">
                  Phone: {user.phone}  </p>
                  <p className="text-gray-500">UPI ID: {user.upiId}</p>
                <button
                  onClick={() => setIsEditing(true)}
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Edit Profile
                </button>
              </>
            )}
          </div>
        </div>

        <div className="mt-6 bg-gray-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold">Wallet Balance</h3>
          <p className="text-green-500 text-xl font-medium">₹ {user.walletBalance}</p>
          <button
            onClick={refreshWalletBalance}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Refresh Balance
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
