"use client";

import { useEffect, useState } from "react";
import axios from "axios";


const Categories = () => {
  const [categories, setCategories] = useState<any[]>([]);  // Đổi thành categories
  const [selectedCategory, setSelectedCategory] = useState<any | null>(null); // Sửa category
  const [newCategory, setNewCategory] = useState<any>({ }); // Thêm category mới
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [isAddModalOpen, setIsAddModalOpen] = useState(false); 
  const [searchTerm, setSearchTerm] = useState(""); 

  // Fetch danh mục
  const fetchCategories = async () => {
    try {
      const response = await axios.get("https://localhost:7071/api/Categories");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // Hàm chỉnh sửa danh mục
  const handleEdit = (categoryId: number) => {
    const category = categories.find((c) => c.categoryId === categoryId);
    if (category) {
      setSelectedCategory(category); 
      setIsModalOpen(true); 
    }
  };

  // Hàm xóa danh mục
  const handleDelete = async (categoryId: number) => {
    try {
      await axios.delete(`https://localhost:7071/api/Categories/?id=${categoryId}`);
      setCategories(categories.filter((category) => category.categoryId !== categoryId));
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  // Hàm xử lý thay đổi trong popup
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedCategory) {
      setSelectedCategory({
        ...selectedCategory,
        [e.target.name]: e.target.value,
      });
    }
    if (isAddModalOpen) {
      setNewCategory({
        ...newCategory,
        [e.target.name]: e.target.value,
      });
    }
  };

  // Lưu thay đổi sau khi chỉnh sửa
  const handleSaveEdit = async () => {
    if (selectedCategory) {
      try {
        await axios.put(
          `https://localhost:7071/api/Categories/${selectedCategory.categoryId}`,
          selectedCategory
        );

        await fetchCategories(); 

        setIsModalOpen(false);
        setSelectedCategory(null);
      } catch (error) {
        console.error("Error updating category:", error);
      }
    }
  };

  // Thêm danh mục mới
  const handleAddCategory = async () => {
    try {
      await axios.post("https://localhost:7071/api/Categories", newCategory);

      await fetchCategories();

      setIsAddModalOpen(false);
      setNewCategory({
        categoryName: "",
        description: "",
      });
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

  // Tìm kiếm danh mục
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      searchCategories();
    }
  };

  const searchCategories = () => {
    const filteredCategories = categories.filter((category) =>
      category.categoryName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCategories(filteredCategories);
  };

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex items-center justify-between">
        <button
          className="mt-3 ml-4 px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
          onClick={() => setIsAddModalOpen(true)}
        >
          Add Category
        </button>
        <div className="px-4 py-6 md:px-6 xl:px-7.5">
          <h4 className="text-x font-medium text-black dark:text-white">
            <input
              type="text"
              placeholder="Search Categories..."
              className="px-4 py-2 border rounded-lg w-full text-black dark:text-white bg-gray-100 dark:bg-gray-800 focus:outline-none"
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyDown={handleSearchKeyDown}
            />
          </h4>
        </div>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-9 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-semibold text-black dark:text-white">Category Name</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-semibold text-black dark:text-white"></p>
        </div>
        <div className="col-span-3 flex items-center">
          <p className="font-semibold text-black dark:text-white">Actions</p>
        </div>
      </div>

      {categories.map((category) => (
        <div
          className="grid grid-cols-7 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-9 md:px-6 2xl:px-7.5"
          key={category.categoryId}
        >
          <div className="col-span-3 flex items-center">
            <p className="text-sm text-black dark:text-white">{category.categoryName}</p>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">{category.description}</p>
          </div>
          <div className="col-span-1 flex items-center gap-2">
            <button
              className="px-2 py-1 text-xs font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
              onClick={() => handleEdit(category.categoryId)}
            >
              EDIT
            </button>
            <button
              className="px-2 py-1 text-xs font-medium text-white bg-red-500 rounded-md hover:bg-red-600"
              onClick={() => handleDelete(category.categoryId)}
            >
              DELETE
            </button>
          </div>
        </div>
      ))}

      {/* Popup sửa danh mục */}
      {isModalOpen && selectedCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-1/3">
            <h2 className="text-xl font-semibold mb-4">Edit Category</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium">Category Name</label>
              <input
                type="text"
                name="categoryName"
                value={selectedCategory.categoryName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            {/* <div className="mb-4">
              <label className="block text-sm font-medium">Description</label>
              <textarea
                name="description"
                value={selectedCategory.description}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                rows="3"
              />
            </div> */}
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

      {/* Popup thêm danh mục mới */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-1/3">
            <h2 className="text-xl font-semibold mb-4">Add Category</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium">Category Name</label>
              <input
                type="text"
                name="categoryName"
                value={newCategory.categoryName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Description</label>
              <textarea
                name="description"
                value={newCategory.description}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                rows="3"
              />
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
                onClick={handleAddCategory}
              >
                Add Category
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
