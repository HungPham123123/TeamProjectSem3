"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState<any[]>([]);  // Đổi thành users
  const [allUsers, setAllUsers] = useState<any[]>([]);  // Đổi thành users
  const [selectedUser, setSelectedUser] = useState<any | null>(null); // Sửa category
  const [newUser, setNewUser] = useState<any>({}); // Thêm user mới
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [isAddModalOpen, setIsAddModalOpen] = useState(false); 
  const [searchTerm, setSearchTerm] = useState(""); 
  
  const token = localStorage.getItem('adminToken');
  // Fetch danh sách người dùng
  const fetchUsers = async () => {
    try {
      // Kiểm tra nếu token tồn tại, thêm vào header Authorization
      const response = await axios.get("https://localhost:7071/api/User", {
        headers: {
          Authorization: `Bearer ${token}`, 
        }
      });
  
      setUsers(response.data);
      setAllUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  

  useEffect(() => {
    fetchUsers();
  }, []);

  // Hàm chỉnh sửa người dùng
  const handleEdit = (userId: number) => {
    const user = users.find((u) => u.userId === userId);
    if (user) {
      setSelectedUser(user); 
      setIsModalOpen(true); 
    }
  };

  // Hàm xóa người dùng
  const handleDelete = async (userId: number) => {
    try {
      await axios.delete(`https://localhost:7071/api/User/${userId}`,{
        headers: {
          Authorization: `Bearer ${token}`, 
        }
      });
      setUsers(users.filter((user) => user.userId !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  // Hàm handleInputChange được cập nhật để chuyển đổi giá trị của enabled thành boolean
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Kiểm tra xem đang thay đổi thuộc tính của người dùng hay thêm người dùng mới
    if (selectedUser) {
      setSelectedUser((prevUser) => ({
        ...prevUser,
        [name]: name === "enabled" ? value === "true" : value, // Chuyển 'true'/'false' thành boolean
      }));
    } else {
      setNewUser((prevUser) => ({
        ...prevUser,
        [name]: name === "enabled" ? value === "true" : value, // Chuyển 'true'/'false' thành boolean
      }));
    }
  };
  

// Hàm handleSaveEdit gửi yêu cầu cập nhật
const handleSaveEdit = async () => {
  const updateData = {
    email: selectedUser.email,
    enabled: selectedUser.enabled,
    role: selectedUser.userRole,
  };

  try {
    await axios.put(`https://localhost:7071/api/User/${selectedUser.userId}`, updateData,{
      headers: {
        Authorization: `Bearer ${token}`, 
      }
    });
    setIsModalOpen(false); // Ẩn popup khi cập nhật thành công
    fetchUsers();
  } catch (error) {
    console.error("Error updating user:", error);
  }
};

  // Thêm người dùng mới
  const handleAddUser = async () => {
    if (!newUser.username || !newUser.email || !newUser.userRole) {
      console.error("Missing required fields.");
      return;
    }
  
    const userData = {
      username: newUser.username,
      email: newUser.email,
      enabled: newUser.enabled,
      userRole: newUser.userRole,
    };
  
    try {
      await axios.post("https://localhost:7071/api/User", userData,{
        headers: {
          Authorization: `Bearer ${token}`, 
        }
      });
      console.log(userData);
      setIsAddModalOpen(false); // Đóng modal khi thêm thành công
      fetchUsers(); // Tải lại danh sách người dùng
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };
  

  // Tìm kiếm người dùng
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    searchUsers()
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      searchUsers();
    }
  };

  const searchUsers = () => {
    if (!searchTerm.trim()) {
      // Nếu không có từ khóa tìm kiếm, hiển thị lại toàn bộ sản phẩm
      setUsers(allUsers);
      return;
    }
  
    const filteredUsers = allUsers.filter((user) =>
      user.username && user.username.toLowerCase().includes(searchTerm.toLowerCase()) // Kiểm tra null/undefined trước khi gọi toLowerCase
    );
    setUsers(filteredUsers);
  };
  

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex items-center justify-between">
        <button
          className="mt-3 ml-4 px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
          onClick={() => setIsAddModalOpen(true)}
        >
          Add User
        </button>
        <div className="px-4 py-6 md:px-6 xl:px-7.5">
          <h4 className="text-x font-medium text-black dark:text-white">
            <input
              type="text"
              placeholder="Search Users..."
              className="px-4 py-2 border rounded-lg w-full text-black dark:text-white bg-gray-100 dark:bg-gray-800 focus:outline-none"
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyDown={handleSearchKeyDown}
            />
          </h4>
        </div>
      </div>

      <div className="grid grid-cols-8 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-9 md:px-6 2xl:px-7.5">
        <div className="col-span-2 flex items-center">
          <p className="font-semibold text-black dark:text-white">User ID</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="font-semibold text-black dark:text-white">Username</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-semibold text-black dark:text-white">Email</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-semibold text-black dark:text-white">Enabled</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-semibold text-black dark:text-white">Role</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-semibold text-black dark:text-white">Actions</p>
        </div>
      </div>

      {users.map((user) => (
        <div
          className="grid grid-cols-8 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-9 md:px-6 2xl:px-7.5"
          key={user.userId}
        >
          <div className="col-span-2 flex items-center">
            <p className="text-sm text-black dark:text-white">{user.userId}</p>
          </div>
          <div className="col-span-2 flex items-center">
            <p className="text-sm text-black dark:text-white">{user.username}</p>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">{user.email}</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">{user.enabled ? "True" : "False"}</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">{user.userRole}</p>
          </div>
          <div className="col-span-1 flex items-center gap-2">
            <button
              className="px-2 py-1 text-xs font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
              onClick={() => handleEdit(user.userId)}
            >
              EDIT
            </button>
            <button
              className="px-2 py-1 text-xs font-medium text-white bg-red-500 rounded-md hover:bg-red-600"
              onClick={() => handleDelete(user.userId)}
            >
              DELETE
            </button>
          </div>
        </div>
      ))}

      {/* Popup sửa người dùng */}
      {isModalOpen && selectedUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-1/3">
            <h2 className="text-xl font-semibold mb-4">Edit User</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium">User ID</label>
              <input
                type="text"
                name="userId"
                value={selectedUser.userId} // Hiển thị nhưng không cho phép chỉnh sửa
                disabled
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Username</label>
              <input
                type="text"
                name="username"
                value={selectedUser.username}
                disabled
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={selectedUser.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">user Role</label>
              <select
                name="userRole"
                value={selectedUser.userRole || ""} // Lấy giá trị role từ selectedUser
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="Moderator">Moderator</option>
                <option value="User">User</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium">Enabled</label>
              <select
                name="enabled"
                value={selectedUser.enabled ? "true" : "false"} // Hiển thị đúng giá trị true/false
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>

            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 text-white bg-gray-500 rounded-md"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 text-white bg-blue-500 rounded-md"
                onClick={handleSaveEdit}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}



      {/* Popup thêm người dùng */}
{isAddModalOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
    <div className="bg-white p-6 rounded-lg w-1/3">
      <h2 className="text-xl font-semibold mb-4">Add User</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium">Username</label>
        <input
          type="text"
          name="username"
          value={newUser.username}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={newUser.email}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Enabled</label>
        <select
          name="enabled"
          value={newUser.enabled || ""} // Nếu chưa có giá trị, mặc định là chuỗi rỗng
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">User Role</label>
        <select
          name="userRole"
          value={newUser.userRole || ""} // Nếu chưa có giá trị, mặc định là chuỗi rỗng
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="">Select Role</option>
          <option value="Admin">Admin</option>
          <option value="Moderator">Moderator</option>
          <option value="User">User</option>
        </select>
      </div>
      <div className="flex justify-end gap-2">
        <button
          className="px-4 py-2 text-white bg-gray-500 rounded-md"
          onClick={() => setIsAddModalOpen(false)}
        >
          Cancel
        </button>
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded-md"
          onClick={handleAddUser}
        >
          Add User
        </button>
      </div>
    </div>
  </div>
)}


    </div>
  );
};

export default Users;
