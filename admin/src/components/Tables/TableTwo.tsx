"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

const TableTwo = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [allProducts, setAllProducts] = useState<any[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null); // Để lưu sản phẩm cần sửa
  const [newProduct, setNewProduct] = useState<any>({}); // Để lưu sản phẩm mới
  const [isModalOpen, setIsModalOpen] = useState(false); // Điều khiển hiển thị popup
  const [isAddModalOpen, setIsAddModalOpen] = useState(false); // Điều khiển popup thêm sản phẩm
  const [searchTerm, setSearchTerm] = useState(""); // Tìm kiếm sản phẩm

  // Fetch sản phẩm
  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://localhost:7071/api/Product");
      setProducts(response.data);
      setAllProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Hàm gọi API chỉnh sửa sản phẩm
  const handleEdit = (productId: number) => {
    const product = products.find((p) => p.productId === productId);
    if (product) {
      setSelectedProduct(product); // Lưu sản phẩm cần chỉnh sửa
      setIsModalOpen(true); // Mở popup
    }
  };

  // Hàm gọi API xóa sản phẩm
  const handleDelete = async (productId: number) => {
    try {
      await axios.delete(`https://localhost:7071/api/Product/${productId}`);
      setProducts(products.filter((product) => product.productId !== productId)); // Cập nhật lại danh sách sản phẩm
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  // Hàm xử lý thay đổi thông tin trong popup
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedProduct) {
      setSelectedProduct({
        ...selectedProduct,
        [e.target.name]: e.target.value,
      });
    }
    if (isAddModalOpen) {
      setNewProduct({
        ...newProduct,
        [e.target.name]: e.target.value,
      });
    }
  };

  // Hàm lưu thông tin sửa sản phẩm
  const handleSaveEdit = async () => {
    if (selectedProduct) {
      try {
        // Gọi API PUT để sửa sản phẩm
        await axios.put(
          `https://localhost:7071/api/Product/${selectedProduct.productId}`,
          selectedProduct
        );

        // Tải lại danh sách sản phẩm mới từ server
        await fetchProducts(); // Đây là lúc có thể gọi lại hàm fetchProducts

        // Đóng popup và reset sản phẩm đã chọn
        setIsModalOpen(false);
        setSelectedProduct(null);
      } catch (error) {
        console.error("Error updating product:", error);
      }
    }
  };

  // Hàm thêm sản phẩm mới
  const handleAddProduct = async () => {
    try {
      // Gọi API POST để thêm sản phẩm mới
      await axios.post("https://localhost:7071/api/Product", newProduct);

      // Tải lại danh sách sản phẩm mới từ server
      await fetchProducts();

      // Đóng popup và reset sản phẩm mới
      setIsAddModalOpen(false);
      setNewProduct({
        title: "",
        price: 0,
        rating: 0,
        status: "",
        releaseDate: "",
        image1: "",
        productType: "",
        stockQuantity: 0,
        categoryName: "",
      });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  // Hàm xử lý sự kiện nhập liệu tìm kiếm và nhấn phím Enter
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    searchProducts();
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // Lọc sản phẩm theo từ khóa tìm kiếm khi nhấn Enter
      searchProducts();
    }
  };

  // Hàm tìm kiếm sản phẩm
  const searchProducts = () => {
    if (!searchTerm.trim()) {
      // Nếu không có từ khóa tìm kiếm, hiển thị lại toàn bộ sản phẩm
      setProducts(allProducts);
      return;
    }

    // Lọc sản phẩm theo từ khóa tìm kiếm
    const filteredProducts = allProducts.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProducts(filteredProducts);
  };

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex items-center justify-between">
        <button
          className="mt-3 ml-4 px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
          onClick={() => setIsAddModalOpen(true)}
        >
          Add Product
        </button>
        <div className="px-4 py-6 md:px-6 xl:px-7.5">
          <h4 className="text-x font-medium text-black dark:text-white">
            <input
              type="text"
              placeholder="Search Products..."
              className="px-4 py-2 border rounded-lg w-full text-black dark:text-white bg-gray-100 dark:bg-gray-800 focus:outline-none"
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyDown={handleSearchKeyDown} // Lắng nghe sự kiện nhấn phím
            />
          </h4>
        </div>
      </div>




      <div className="grid grid-cols-7 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-9 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-semibold text-black dark:text-white">Product Name</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-semibold text-black dark:text-white">Category</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-semibold text-black dark:text-white">Price</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-semibold text-black dark:text-white">Stock</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-semibold text-black dark:text-white">Status</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-semibold text-black dark:text-white">Actions</p>
        </div>
      </div>

      {products.map((product) => (
        <div
          className="grid grid-cols-7 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-9 md:px-6 2xl:px-7.5"
          key={product.productId}
        >
          <div className="col-span-3 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="h-12.5 w-15 rounded-md">
                <Image
                  src={product.image1}
                  width={60}
                  height={50}
                  alt={product.title}
                />
              </div>
              <p className="text-sm text-black dark:text-white">
                {product.title}
              </p>
            </div>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">
              {product.categoryName}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              ${product.price}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              {product.stockQuantity}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              {product.status}
            </p>
          </div>
          <div className="col-span-1 flex items-center gap-2">
            <button
              className="px-2 py-1 text-xs font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
              onClick={() => handleEdit(product.productId)}
            >
              EDIT
            </button>
            <button
              className="px-2 py-1 text-xs font-medium text-white bg-red-500 rounded-md hover:bg-red-600"
              onClick={() => handleDelete(product.productId)}
            >
              DELETE
            </button>
          </div>
        </div>
      ))}

      {/* Popup sửa sản phẩm */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-1/3">
            <h2 className="text-xl font-semibold mb-4">Edit Product</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium">Product Name</label>
              <input
                type="text"
                name="title"
                value={selectedProduct.title}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Category Name</label>
              <input
                type="text"
                name="categoryName"
                value={selectedProduct.categoryName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Price</label>
              <input
                type="number"
                name="price"
                value={selectedProduct.price}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Stock Quantity</label>
              <input
                type="number"
                name="stockQuantity"
                value={selectedProduct.stockQuantity}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Status</label>
              <select
                name="status"
                value={selectedProduct.status}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="active">Available</option>
                <option value="inactive">Unavailable</option>
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
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Popup thêm sản phẩm mới */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-1/3 max-h-[80vh] overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
            {/* Các trường nhập thông tin sản phẩm mới */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Product Name</label>
              <input
                type="text"
                name="title"
                value={newProduct.title}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Price</label>
              <input
                type="number"
                name="price"
                value={newProduct.price}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Description</label>
              <textarea
                name="description"
                value={newProduct.description}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                rows="3"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Category Name</label>
              <input
                type="text"
                name="categoryName"
                value={newProduct.categoryName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Product Type</label>
              <input
                type="text"
                name="productType"
                value={newProduct.productType}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Stock Quantity</label>
              <input
                type="number"
                name="stockQuantity"
                value={newProduct.stockQuantity}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Release Date</label>
              <input
                type="date"
                name="releaseDate"
                value={newProduct.releaseDate}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Image URL</label>
              <input
                type="text"
                name="imageUrl"
                value={newProduct.imageUrl}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium">Status</label>
              <select
                name="status"
                value={newProduct.status}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="available">Available</option>
                <option value="unavailable">Unavailable</option>
              </select>
            </div>

            <div className="mb-4">
              <button
                onClick={handleAddProduct}
                className="w-full px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
              >
                Add Product
              </button>
            </div>
            <button
              onClick={() => setIsAddModalOpen(false)}
              className="w-full px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </div>
      )}



    </div>
  );
};

export default TableTwo;
