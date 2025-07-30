import React, { useState } from "react";
import axios from "axios";

const UpdateProduct = () => {
  const [productId, setProductId] = useState("");
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    rating: {
      rate: "",
      count: ""
    }
  });

  const [message, setMessage] = useState("");

  const handleFetch = async () => {
    try {
      const res = await axios.get(`https://ecommerce-backend-theta-pink.vercel.app/api/products/${productId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
      setProduct(res.data);
      setMessage("Product loaded");
    } catch (err) {
      setMessage("Product not found.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "rate" || name === "count") {
      setProduct((prev) => ({
        ...prev,
        rating: {
          ...prev.rating,
          [name]: value
        }
      }));
    } else {
      setProduct((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`https://ecommerce-backend-theta-pink.vercel.app/api/products/${productId}`, product);
      setMessage("Product updated successfully.");
    } catch (err) {
      setMessage("Update failed.");
      console.error(err);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-xl p-6 mt-10 space-y-4">
      <h2 className="text-xl font-semibold text-center mb-4 text-blue-700">Update Product</h2>

      <div className="space-y-2">
        <input
          type="text"
          placeholder="Enter Product ID"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
        <button
          onClick={handleFetch}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Fetch Product
        </button>
      </div>

      {product.title && (
        <div className="space-y-3">
          <input
            type="text"
            name="title"
            value={product.title}
            onChange={handleChange}
            placeholder="Title"
            className="w-full p-2 border rounded-lg"
          />
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Price"
            className="w-full p-2 border rounded-lg"
          />
          <input
            type="text"
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full p-2 border rounded-lg"
          />
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            placeholder="Category"
            className="w-full p-2 border rounded-lg"
          />
          <input
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="w-full p-2 border rounded-lg"
          />
          <input
            type="number"
            name="rate"
            value={product.rating.rate}
            onChange={handleChange}
            placeholder="Rating Rate"
            className="w-full p-2 border rounded-lg"
          />
          <input
            type="number"
            name="count"
            value={product.rating.count}
            onChange={handleChange}
            placeholder="Rating Count"
            className="w-full p-2 border rounded-lg"
          />

          <button
            onClick={handleUpdate}
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Update Product
          </button>
        </div>
      )}

      {message && (
        <div className="text-center text-sm font-medium text-gray-600">{message}</div>
      )}
    </div>
  );
};

export default UpdateProduct;
