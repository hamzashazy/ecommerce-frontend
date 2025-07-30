// 

import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactSlider from "react-slider";
import Card from "./Card"; // Keep your existing Card component

const CardSection = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [selectedColor, setSelectedColor] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [priceRange, setPriceRange] = useState([0, 300]);

  // Fetch from API
useEffect(() => {
  const token = localStorage.getItem('token');
  axios.get('https://ecommerce-backend-theta-pink.vercel.app/api/products', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  .then(res => {
    setProducts(res.data);
  })
  .catch(err => {
    console.error('API Error:', err);
  });
}, []);

  // Apply filters
  useEffect(() => {
    const result = products.filter((p) => {
      const colorMatch = selectedColor
        ? p.color?.includes(selectedColor)
        : true;
      const categoryMatch = selectedCategory
        ? p.category === selectedCategory
        : true;
      const ratingMatch = selectedRating
        ? Math.floor(p.rating?.rate || 0) === Number(selectedRating)
        : true;
      const sizeMatch = selectedSize
        ? p.size?.includes(Number(selectedSize))
        : true;
      const priceMatch =
        p.price >= priceRange[0] && p.price <= priceRange[1];

      return (
        colorMatch &&
        categoryMatch &&
        ratingMatch &&
        sizeMatch &&
        priceMatch
      );
    });

    setFilteredProducts(result);
  }, [
    products,
    selectedColor,
    selectedCategory,
    selectedRating,
    selectedSize,
    priceRange,
  ]);

  const resetFilters = () => {
    setSelectedColor("");
    setSelectedCategory("");
    setSelectedRating("");
    setSelectedSize("");
    setPriceRange([0, 300]);
  };

  return (
    <div className="bg-[#1e293b] text-white min-h-screen p-6">
      {/* Filters */}
      <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 mb-10 shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-cyan-400">
          Filter Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Color */}
          <div>
            <label className="block mb-1 text-sm font-semibold">Color</label>
            <select
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="w-full p-2 rounded bg-white text-black"
            >
              <option value="">All</option>
              <option value="brown">brown</option>
              <option value="White">White</option>
              <option value="Black">Black</option>
              <option value="green">Green</option>
              <option value="black">black</option>
            </select>
          </div>

          {/* Category */}
          <div>
            <label className="block mb-1 text-sm font-semibold">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-2 rounded bg-white text-black"
            >
              <option value="">All</option>
              <option value="Shoes">Shoes</option>
              <option value="Joggers">Joggers</option>
              <option value="Jackets">Jackets</option>
            </select>
          </div>

          {/* Rating */}
          <div>
            <label className="block mb-1 text-sm font-semibold">Rating</label>
            <select
              value={selectedRating}
              onChange={(e) => setSelectedRating(e.target.value)}
              className="w-full p-2 rounded bg-white text-black"
            >
              <option value="">All</option>
              <option value="1">1 ★</option>
              <option value="2">2 ★★</option>
              <option value="3">3 ★★★</option>
              <option value="4">4 ★★★★</option>
              <option value="5">5 ★★★★★</option>
            </select>
          </div>

          {/* Size */}
          <div>
            <label className="block mb-1 text-sm font-semibold">Size</label>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="w-full p-2 rounded bg-white text-black"
            >
              <option value="">All</option>
              {[6, 7, 8, 9, 10, 11].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Price Range */}
        <div className="mt-6">
          <label className="block mb-2 text-sm font-semibold">
            Price Range:{" "}
            <span className="text-cyan-300">
              ${priceRange[0]} - ${priceRange[1]}
            </span>
          </label>
          <ReactSlider
            className="w-full h-2 bg-gray-300 rounded-md"
            thumbClassName="h-4 w-4 bg-cyan-400 border-2 border-white rounded-full cursor-pointer"
            trackClassName="bg-cyan-500 h-2 rounded"
            value={priceRange}
            onChange={setPriceRange}
            min={0}
            max={300}
            step={10}
            pearling
            minDistance={10}
          />
        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={resetFilters}
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded shadow-md"
          >
            Reset Filters
          </button>
        </div>
      </div>

      {/* Cards */}
      <Card products={filteredProducts} />
    </div>
  );
};

export default CardSection;
