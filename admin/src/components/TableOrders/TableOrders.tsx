"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const TableOrders = () => {
  const [orders, setOrders] = useState<any[]>([]); // Danh sách đơn hàng
  const [allOrders, setAllOrders] = useState<any[]>([]); // Danh sách đơn hàng
  const [selectedOrder, setSelectedOrder] = useState<any | null>(null); // Để lưu đơn hàng cần sửa
  const [searchTerm, setSearchTerm] = useState(""); // Tìm kiếm đơn hàng
  const [isModalOpen, setIsModalOpen] = useState(false); // Điều khiển hiển thị popup


  const token = localStorage.getItem('adminToken');
  // Fetch đơn hàng
  const fetchOrders = async () => {
    try {
      const response = await axios.get("https://localhost:7071/api/orders",{
        headers: {
          Authorization: `Bearer ${token}`, 
        }
      });
      setOrders(response.data);
      setAllOrders(response.data);
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
      await axios.delete(`https://localhost:7071/api/orders/${orderId}`,{
        headers: {
          Authorization: `Bearer ${token}`, 
        }
      });
      setOrders(orders.filter((order) => order.orderId !== orderId)); // Cập nhật lại danh sách đơn hàng
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  // Hàm xử lý thay đổi thông tin trong popup
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (selectedOrder) {
      setSelectedOrder({
        ...selectedOrder,
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
          `https://localhost:7071/api/orders/${selectedOrder.orderId}`,selectedOrder,{
            headers: {
              Authorization: `Bearer ${token}`, 
            }
          }
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

  // Hàm xử lý tìm kiếm đơn hàng
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    searchOrders();
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      searchOrders();
    }
  };

  const searchOrders = () => {
    if (!searchTerm.trim()) {
      // Nếu không có từ khóa tìm kiếm, hiển thị lại toàn bộ sản phẩm
      setOrders(allOrders);
      return;
    }

    const filteredOrders = allOrders.filter(
      (order) =>
        order.userName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setOrders(filteredOrders);
  };

  // Hàm chấp nhận đơn hàng
const handleAccept = async (orderId: number) => {
  try {
    const order = orders.find((o) => o.orderId === orderId);
    if (order) {
      order.status = "Preparing";
      await axios.put(`https://localhost:7071/api/orders/${orderId}`, order,{
        headers: {
          Authorization: `Bearer ${token}`, 
        }
      });
      fetchOrders(); // Cập nhật danh sách đơn hàng
    }
  } catch (error) {
    console.error("Error accepting order:", error);
  }
};

// Hàm từ chối đơn hàng
const handleReject = async (orderId: number) => {
  try {
    const order = orders.find((o) => o.orderId === orderId);
    if (order) {
      order.status = "Reject";
      await axios.put(`https://localhost:7071/api/orders/${orderId}`, order,{
        headers: {
          Authorization: `Bearer ${token}`, 
        }
      });
      fetchOrders(); // Cập nhật danh sách đơn hàng
    }
  } catch (error) {
    console.error("Error rejecting order:", error);
  }
};


const handleShipped = async (orderId: number) => {
  try {
    const order = orders.find((o) => o.orderId === orderId);
    if (order) {
      order.status = "Shipping";
      await axios.put(`https://localhost:7071/api/orders/${orderId}`, order,{
        headers: {
          Authorization: `Bearer ${token}`, 
        }
      });
      setIsModalOpen(false);
      fetchOrders(); // Cập nhật danh sách đơn hàng
    }
  } catch (error) {
    console.error("Error rejecting order:", error);
  }
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
              onKeyDown={handleSearchKeyDown}
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
          className="grid grid-cols-10 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-10 md:px-6 2xl:px-7.5"
          key={order.orderId}
        >
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">{order.orderId}</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">{order.userName}</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">{order.paymentMethod}</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">{order.address}</p>
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
            <p
              className={`text-sm ${
                order.status.toLowerCase() === 'completed'
                  ? 'text-green-500' 
                  : order.status.toLowerCase() === 'reject'
                  ? 'text-red-500' 
                  : 'text-black' 
              } dark:text-white`}
            >
              {order.status}
            </p>
          </div>
          <div className="col-span-1 flex items-center gap-2">
            {/* Nút Detail luôn hiển thị */}
            <button
              className="px-2 py-1 text-xs font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
              onClick={() => handleEdit(order.orderId)}
            >
              Detail
            </button>

            {/* Nút Delete chỉ hiển thị khi status là Completed hoặc Rejected */}
            {order.status.toLowerCase() === 'completed' || order.status.toLowerCase() === 'rejected' ? (
              <button
                className="px-2 py-1 text-xs font-medium text-white bg-red-500 rounded-md hover:bg-red-600"
                onClick={() => handleDelete(order.orderId)}
              >
                Delete
              </button>
            ) : null}
          </div>
        </div>
      ))}




      {/* Popup sửa đơn hàng */}
      {isModalOpen && selectedOrder && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-[800px] max-w-full rounded-lg shadow-lg p-6">
            {/* Popup Header */}
            <div className="flex justify-between items-center border-b pb-4 mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Order# {selectedOrder.orderId}</h2>
              <button className="text-gray-500 hover:text-gray-800" onClick={() => setIsModalOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Order Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h3 className="text-sm font-medium text-gray-600 mb-1">Customer & Order</h3>
                <p className="text-sm text-gray-700">
                  <strong>Name:</strong> {selectedOrder.firstName} {selectedOrder.lastName}
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Email:</strong> {selectedOrder.email}
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Phone:</strong> {selectedOrder.phoneNumber}
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Payment terms:</strong> {selectedOrder.paymentMethod}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-600 mb-1">Shipping Address</h3>
                <p className="text-sm text-gray-700">{selectedOrder.city}</p>
                <p className="text-sm text-gray-700">{selectedOrder.address}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-600 mb-1">Order Notes</h3>
                <p className="text-sm text-gray-700">{selectedOrder.optional}</p>
              </div>
            </div>

            {/* Items Ordered */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Items Ordered</h3>
              <table className="w-full text-sm text-left text-gray-600">
                <thead className="bg-gray-100 text-gray-800">
                  <tr>
                    <th className="py-2 px-4">IMG</th>
                    <th className="py-2 px-4">Item Name</th>
                    <th className="py-2 px-4">SKU</th>
                    <th className="py-2 px-4">Quantity</th>
                    <th className="py-2 px-4">Price</th>
                    <th className="py-2 px-4">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Lặp qua danh sách OrderItems */}
                  {selectedOrder.orderItems.map((item, index) => (
                    <tr key={index}>
                      <img src={item.productImage} alt="" className="py-2 px-4 w-20 h-15" />
                      <td className="py-2 px-4">{item.productTitle}</td>
                      <td className="py-2 px-4">{item.productId}</td> 
                      <td className="py-2 px-4">{item.quantity}</td>
                      <td className="py-2 px-4">${item.price}</td> 
                      <td className="py-2 px-4">${(item.quantity * item.price).toFixed(2)}</td> 
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>


            {/* Summary */}
            <div className="mt-6 flex justify-between items-center">
              <div>
                {/* <p className="text-sm text-gray-700">
                  <strong>Free Shipping:</strong> Yes
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Tax Amount:</strong> 10%
                </p> */}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">${selectedOrder.totalAmount}</h3>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 flex justify-end gap-4">
              <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              
              {/* Display buttons based on order status */}
              {selectedOrder.status === 'Pending' && (
                <>
                  <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600" onClick={() => handleReject(selectedOrder.orderId)}>
                    Reject
                  </button>
                  <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600" onClick={() => handleAccept(selectedOrder.orderId)}>
                    Accept
                  </button>
                </>
              )}
              {selectedOrder.status === 'Preparing' && (
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => handleShipped(selectedOrder.orderId)}>
                  Shipping
                </button>
              )}
            </div>
          </div>
        </div>
      )}


    </div>
  );
};

export default TableOrders;
