import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    size: "",
    color: "",
    rating: {
      rate: "",
      count: ""
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "rate" || name === "count") {
      setFormData((prev) => ({
        ...prev,
        rating: { ...prev.rating, [name]: value }
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const newProduct = {
    title: formData.title,
    price: parseFloat(formData.price),
    description: formData.description,
    category: formData.category,
    image: formData.image,
    size: formData.size.split(',').map(Number),
    color: formData.color.split(',').map((c) => c.trim()),
    rating: {
      rate: parseFloat(formData.rating.rate),
      count: parseInt(formData.rating.count)
    }
  };

  try {
    const token = localStorage.getItem('token');

    const res = await axios.post(
      "https://ecommerce-backend-theta-pink.vercel.app/api/products",
      newProduct,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      }
    );

    console.log("Product added:", res.data);
    alert("Product submitted!");

    setFormData({
      title: "",
      price: "",
      description: "",
      category: "",
      image: "",
      size: "",
      color: "",
      rating: {
        rate: "",
        count: ""
      }
    });

  } catch (error) {
    console.error("Error:", error);
    alert("Failed to submit product. Please check your token or server.");
  }
}; // ✅ This closing brace ends the handleSubmit function properly

  return (
    <div className="p-8 w-full bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">➕ Add New Product</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Title</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500" />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1">Price</label>
          <input type="number" name="price" value={formData.price} onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500" />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1">Category</label>
          <input type="text" name="category" value={formData.category} onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500" />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1">Image URL</label>
          <input type="text" name="image" value={formData.image} onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500" />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1">Size (comma separated, e.g., 7,8,9)</label>
          <input type="text" name="size" value={formData.size} onChange={handleChange}
            placeholder="7, 8, 9"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500" />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1">Color (comma separated, e.g., red,blue)</label>
          <input type="text" name="color" value={formData.color} onChange={handleChange}
            placeholder="red, blue, green"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500" />
        </div>

        <div className="col-span-1 md:col-span-2">
          <label className="block text-gray-700 font-semibold mb-1">Description</label>
          <textarea name="description" value={formData.description} onChange={handleChange}
            rows="4"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500" />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1">Rating Rate</label>
          <input type="text" name="rate" value={formData.rating.rate} onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500" />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1">Rating Count</label>
          <input type="text" name="count" value={formData.rating.count} onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500" />
        </div>

        <div className="col-span-1 md:col-span-2">
          <button type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded transition duration-300">
            ✅ Submit Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
