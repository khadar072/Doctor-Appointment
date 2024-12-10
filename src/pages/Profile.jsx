import React, { useState } from 'react';
import { assets } from '../assets/assets';

const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [PrevPassword,setPerPassword]=useState('')
  const [newPassword,setNewPassword]=useState('')
  const [confirmPassword,setConfirmPassword]=useState('')
  const [userData, setUserData] = useState({
    name: 'khadar moha',
    image: assets.profile,
    email: 'khadar@gmail.com',
    phone: '+252 00 000000',
    address: 'Debre berhan, DBU',
    gender: 'male',
    dob: '25/2/2002',
  });

  return (
    <div className="flex flex-col mt-6 px-10 gap-6">
      <div className="flex gap-6">
        <img className="w-56 border border-blue-500   object-cover" src={userData.image} alt="Profile" />
        <div className="flex flex-col gap-2">
          {isEdit ? (
            <div className="flex items-center gap-2">
              <p className="font-medium">Name:</p>
              <input
                className="border border-gray-300 px-2 py-1 rounded focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                value={userData.name}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
              />
            </div>
          ) : (
            <p className="text-blue-800">
              <span className="text-black font-medium">Name:</span> {userData.name}
            </p>
          )}
          <p className="text-blue-800">
            <span className="text-black font-medium">Email:</span> {userData.email}
          </p>
          {isEdit ? (
            <div className="flex items-center gap-2">
              <p className="font-medium">Phone:</p>
              <input
                className="border border-gray-300 px-2 py-1 rounded focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                value={userData.phone}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    phone: e.target.value,
                  }))
                }
              />
            </div>
          ) : (
            <p className="text-blue-800">
              <span className="text-black font-medium">Phone:</span> {userData.phone}
            </p>
          )}
          {isEdit ? (
            <div className="flex items-center gap-2">
              <p className="font-medium">Address:</p>
              <input
                className="border border-gray-300 px-2 py-1 rounded focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                value={userData.address}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: e.target.value,
                  }))
                }
              />
            </div>
          ) : (
            <p className="text-blue-800">
              <span className="text-black font-medium">Address:</span> {userData.address}
            </p>
          )}
          {isEdit ? (
            <div className="flex items-center gap-2">
              <p className="font-medium">Gender:</p>
              <select
                className="border border-gray-300 px-2 py-1 rounded focus:outline-none focus:ring focus:ring-blue-300"
                value={userData.gender}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    gender: e.target.value,
                  }))
                }
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          ) : (
            <p className="text-blue-800">
              <span className="text-black font-medium">Gender:</span> {userData.gender}
            </p>
          )}
          {isEdit ? (
            <div className="flex items-center gap-2">
              <p className="font-medium">Dob:</p>
              <input
                className="border border-gray-300 px-2 py-1 rounded focus:outline-none focus:ring focus:ring-blue-300"
                type="date"
                value={userData.dob}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    dob: e.target.value,
                  }))
                }
              />
            </div>
          ) : (
            <p className="text-blue-800">
              <span className="text-black font-medium">Dob:</span> {userData.dob}
            </p>
          )}
          <div className="flex items-start gap-4">
            {isEdit ? (
              <button
                onClick={() => setIsEdit(!isEdit)}
                className="bg-blue-500 px-6 py-2 text-white rounded-lg hover:bg-blue-600 transition"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => setIsEdit(!isEdit)}
                className="bg-green-500 px-6 py-2 text-white rounded-lg hover:bg-green-600 transition"
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="w-64">
        <div className="flex flex-col gap-2 border border-blue-800 p-4 rounded-lg">
          <input
            type="password"
            className="border border-gray-300 px-2 py-1 rounded focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Previous password"
            onChange={(e)=>setPerPassword(e.target.value)}
          />
          <input
            type="password"
            className="border border-gray-300 px-2 py-1 rounded focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="New password"
            onChange={(e)=>setNewPassword(e.target.value)}

          />
          <input
            type="password"
            className="border border-gray-300 px-2 py-1 rounded focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Confirm password"
            onChange={(e)=>setConfirmPassword(e.target.value)}
          />
          <button className="bg-blue-800 text-center text-white py-2 rounded hover:bg-blue-900 transition">
            Change
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
