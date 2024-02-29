import React, { useState } from "react";
import EditUser from "./EditUser"
import AddAdmin from "./AddAdmin";

export default function ManageUsers({userList, status}) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null); // Step 2
  const [addUserOpen, setAddUserOpen] = useState(false)
  const userIcon = "data:image/png;base64,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"


  const handleOpenAddUser = () => {
    setAddUserOpen(true)
  }

  const handleCloseAddUser = () => {
    setAddUserOpen(false)
  }

  const handleEditUser = (user) => { // Updated to include movie parameter
    setSelectedUser(user)
    setIsEditOpen(true)
  };

  const handleCloseEdit = () => {
    setIsEditOpen(false)
    setSelectedUser(null) // Reset selected movie on close
  };

  return (
    <div>
        <div className="flex items-center justify-center h-full mt-6">
            <button onClick={handleOpenAddUser} className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-500">
                Add Administrator
            </button>
        </div>
      <ul className="divide-y divide-gray-100 p-20">
        {userList.map((user) => (
          <li key={user.email} className="flex justify-between gap-x-6 py-5 bg-white shadow-lg rounded-xl p-8 space-y-8 mb-6">
            <div className="flex min-w-0 gap-x-4">
              <img className="w-40 flex-none bg-gray-50" src={userIcon} alt="" />
              <div className="min-w-0 flex-auto">
                <p className="text-3xl font-semibold leading-6 text-gray-900">{user.name}</p>
                <p className="mt-4 truncate text-sm leading-5 text-gray-500">Email: {user.email}</p>
                <p className="mt-2 truncate text-sm leading-5 text-gray-500">Phone: {user.phone}</p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">{user.status}</p>
              <p className="text-sm leading-6 text-gray-900">{user.suspensionStatus}</p>
            </div>
            <div className="mt-4 space-x-4">
              <button onClick={() => handleEditUser(user)} className="px-4 py-2 text-sm font-semibold text-indigo-600 border border-indigo-600 rounded-md hover:text-indigo-400 hover:border-indigo-400">
                Edit User
              </button>
              <button className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-500">
                Suspend
              </button>
            </div>
          </li>
        ))}
      </ul>
      {selectedUser && <EditUser isOpen={isEditOpen} onClose={handleCloseEdit} userToEdit={selectedUser}/>}
      {<AddAdmin isOpen={addUserOpen} onClose={handleCloseAddUser}/>}
    </div>
  );
}
