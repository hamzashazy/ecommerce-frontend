import React, { useState } from "react";
import axios from "axios";

const DeleteProduct = () => {
  const [productId, setProductId] = useState("");
  const [message, setMessage] = useState("");

  const deleteProduct = async () => {
    if (!productId) {
      setMessage("Please enter a product ID.");
      return;
    }

try {
  const token = localStorage.getItem('token');
  await axios.delete(`https://ecommerce-backend-theta-pink.vercel.app/api/products/${productId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  setMessage(`Product with ID ${productId} has been deleted.`);
  console.log("Product deleted:");
} catch (error) {
  console.error("Delete error:", error);
  setMessage("Failed to delete product.");
}
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4">Delete Product</h2>

      <input
        type="text"
        placeholder="Enter Product ID"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 w-full mb-4"
      />

      <button
        onClick={deleteProduct}
        className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
      >
        Delete Product
      </button>

      {message && <p className="mt-4 text-sm text-gray-700">{message}</p>}
    </div>
  );
};

export default DeleteProduct;
