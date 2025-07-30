import React, { useState } from "react";
import { FaPlus, FaEdit, FaTrash, FaChartBar, FaUsers, FaCog } from "react-icons/fa";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import DeleteProduct from "./DeleteProduct";

const Admin = () => {
  const [activePage, setActivePage] = useState("dashboard");

  const renderContent = () => {
    switch (activePage) {
      case "add":
        return <AddProduct />;
      case "update":
        return <UpdateProduct />;
      case "delete":
        return <DeleteProduct />;
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card
              icon={<FaPlus className="text-4xl text-blue-500 mx-auto mb-3" />}
              title="Add Product"
              desc="Create new listings"
              onClick={() => setActivePage("add")}
            />
            <Card
              icon={<FaEdit className="text-4xl text-yellow-500 mx-auto mb-3" />}
              title="Update Product"
              desc="Modify existing items"
              onClick={() => setActivePage("update")}
            />
            <Card
              icon={<FaTrash className="text-4xl text-red-500 mx-auto mb-3" />}
              title="Delete Product"
              desc="Remove items"
              onClick={() => setActivePage("delete")}
            />
          </div>
        );
    }
  };

  const Card = ({ icon, title, desc, onClick }) => (
    <div
      onClick={onClick}
      className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer text-center"
    >
      {icon}
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-500 text-sm mt-2">{desc}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 hidden md:block">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Admin Panel</h2>
        <ul className="space-y-4">
          <li>
            <button
              onClick={() => setActivePage("add")}
              className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition"
            >
              <FaPlus />
              <span>Add Product</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => setActivePage("update")}
              className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition"
            >
              <FaEdit />
              <span>Update Product</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => setActivePage("delete")}
              className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition"
            >
              <FaTrash />
              <span>Delete Product</span>
            </button>
          </li>
          <li>
            <button className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition">
              <FaChartBar />
              <span>Analytics</span>
            </button>
          </li>
          <li>
            <button className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition">
              <FaUsers />
              <span>Users</span>
            </button>
          </li>
          <li>
            <button className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition">
              <FaCog />
              <span>Settings</span>
            </button>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        {renderContent()}
      </main>
    </div>
  );
};

export default Admin;
