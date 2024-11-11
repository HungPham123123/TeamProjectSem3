"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const TableOrders = () => {
  const [orders, setOrders] = useState<any[]>([]); // Danh sách đơn hàng
  const [selectedOrder, setSelectedOrder] = useState<any | null>(null); // Để lưu đơn hàng cần sửa
  const [newOrder, setNewOrder] = useState<any>({});
  const [isModalOpen, setIsModalOpen] = useState(false); // Điều khiển hiển thị popup
  const [isAddModalOpen, setIsAddModalOpen] = useState(false); // Điều khiển popup thêm đơn hàng
  const [searchTerm, setSearchTerm] = useState(""); // Tìm kiếm đơn hàng

  // Fetch đơn hàng
  const fetchOrders = async () => {
    try {
      const response = await axios.get("https://localhost:7071/api/orders");
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // Hàm gọi API chỉnh sửa đơn hàng
  const handleEdit = (orderId: number) => {
    const order = orders.find((o) => o.orderId === orderId);
    if (order) {
      setSelectedOrder(order); // Lưu đơn hàng cần chỉnh sửa
      setIsModalOpen(true); // Mở popup
    }
  };

  // Hàm gọi API xóa đơn hàng
  const handleDelete = async (orderId: number) => {
    try {
      await axios.delete(`https://localhost:7071/api/orders/${orderId}`);
      setOrders(orders.filter((order) => order.orderId !== orderId)); // Cập nhật lại danh sách đơn hàng
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  // Hàm xử lý thay đổi thông tin trong popup
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedOrder) {
      setSelectedOrder({
        ...selectedOrder,
        [e.target.name]: e.target.value,
      });
    }
    if (isAddModalOpen) {
      setNewOrder({
        ...newOrder,
        [e.target.name]: e.target.value,
      });
    }
  };

  // Hàm lưu thông tin sửa đơn hàng
  const handleSaveEdit = async () => {
    if (selectedOrder) {
      try {
        // Gọi API PUT để sửa đơn hàng
        await axios.put(
          `https://localhost:7071/api/orders/${selectedOrder.orderId}`,
          selectedOrder
        );

        // Tải lại danh sách đơn hàng mới từ server
        await fetchOrders();

        // Đóng popup và reset đơn hàng đã chọn
        setIsModalOpen(false);
        setSelectedOrder(null);
      } catch (error) {
        console.error("Error updating order:", error);
      }
    }
  };

  // Hàm xử lý sự kiện nhập liệu tìm kiếm và nhấn phím Enter
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // Lọc đơn hàng theo từ khóa tìm kiếm khi nhấn Enter
      searchOrders();
    }
  };

  const searchOrders = () => {
    // Lọc đơn hàng theo từ khóa tìm kiếm
    const filteredOrders = orders.filter((order) =>
      order.orderId.toString().includes(searchTerm) ||
      order.userId.toString().includes(searchTerm)
    );
    setOrders(filteredOrders);
  };

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex items-center justify-between">
        <div className="px-4 py-6 md:px-6 xl:px-7.5">
          <h4 className="text-x font-medium text-black dark:text-white">
            <input
              type="text"
              placeholder="Search Orders..."
              className="px-4 py-2 border rounded-lg w-full text-black dark:text-white bg-gray-100 dark:bg-gray-800 focus:outline-none"
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyDown={handleSearchKeyDown} // Lắng nghe sự kiện nhấn phím
            />
          </h4>
        </div>
      </div>

      <div className="grid grid-cols-10 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-10 md:px-6 2xl:px-7.5">
        <div className="col-span-1 flex items-center">
          <p className="font-semibold text-black dark:text-white">Order ID</p>
        </div>
        <div className="col-span-1 hidden items-center sm:flex">
          <p className="font-semibold text-black dark:text-white">User Name</p>
        </div>
        <div className="col-span-1 hidden items-center sm:flex">
          <p className="font-semibold text-black dark:text-white">Payment</p>
        </div>
        <div className="col-span-1 hidden items-center sm:flex">
          <p className="font-semibold text-black dark:text-white">Address</p>
        </div>
        <div className="col-span-2 ml-12 hidden items-center sm:flex">
          <p className="font-semibold text-black dark:text-white">Email</p>
        </div>
        <div className="col-span-1 hidden items-center sm:flex">
          <p className="font-semibold text-black dark:text-white">Phone Number</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-semibold text-black dark:text-white">Total Amount</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-semibold text-black dark:text-white">Status</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-semibold text-black dark:text-white">Actions</p>
        </div>
      </div>

      {orders.map((order) => (
        <div
          className="grid grid-cols-11 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-10 md:px-6 2xl:px-7.5"
          key={order.orderId}
        >
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">{order.orderId}</p>
          </div>
          <div className="col-span-1 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">{order.userName}</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">{order.paymentMethod}</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm pr-3 text-black dark:text-white">{order.address}</p>
          </div>
          <div className="col-span-2 flex items-center">
            <p className="text-sm pl-5 text-black dark:text-white">{order.email}</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">{order.phoneNumber}</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">${order.totalAmount}</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">{order.status}</p>
          </div>
          <div className="col-span-1 flex items-center gap-2">
            <button
              className="px-2 py-1 text-xs font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
              onClick={() => handleEdit(order.orderId)}
            >
              EDIT
            </button>
            <button
              className="px-2 py-1 text-xs font-medium text-white bg-red-500 rounded-md hover:bg-red-600"
              onClick={() => handleDelete(order.orderId)}
            >
              DELETE
            </button>
          </div>
        </div>
      ))}

      {/* Popup sửa đơn hàng */}
      {isModalOpen && selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-1/3">
            <h2 className="text-xl font-semibold mb-4">Edit Order</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium">Order ID</label>
              <input
                type="number"
                name="orderId"
                value={selectedOrder.orderId}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
                disabled
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={selectedOrder.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={selectedOrder.phoneNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Status</label>
              <input
                type="text"
                name="status"
                value={selectedOrder.status}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Address</label>
              <input
                type="text"
                name="address"
                value={selectedOrder.address}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={handleSaveEdit}
              >
                Save
              </button>
              <button
                className="ml-2 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default TableOrders;
