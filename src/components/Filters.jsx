import React, { useState } from "react";
import Card from "./Card";

const Filters = () => {
  const allProducts = [
    {
      title: "Nike Air Max 270",
      description: "Comfortable lifestyle shoes with signature visible Air unit in heel.",
      price: "170$",
      image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
      sizes: ["7", "8", "9", "10", "11", "12"],
      rating: 5,
      colour: "red",
      category: "shoes",
    },
    {
      title: "Adidas Ultraboost",
      description: "Responsive Boost cushioning and sock-fit Primeknit upper.",
      price: "180$",
      image: "https://images.pexels.com/photos/19090/pexels-photo.jpg",
      sizes: ["6", "7", "8", "9", "10", "11"],
      rating: 4,
      colour: "blue",
      category: "joggers",
    },
    {
      title: "Puma RS-X",
      description: "Bold retro design sneakers with durable cushioning.",
      price: "110$",
      image: "https://images.pexels.com/photos/19090/pexels-photo.jpg",
      sizes: ["8", "9", "10", "11"],
      rating: 3,
      colour: "yellow",
      category: "sneakers",
    },
    {
      title: "New Balance 574",
      description: "Classic casual sneakers for daily comfort and style.",
      price: "95$",
      image: "https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg",
      sizes: ["7", "8", "9", "10", "11"],
      rating: 5,
      colour: "green",
      category: "shoes",
    },
    {
      title: "Vans Old Skool",
      description: "Iconic skate style low-tops with signature side stripe.",
      price: "65$",
      image: "https://images.pexels.com/photos/2529149/pexels-photo-2529149.jpeg",
      sizes: ["6", "7", "8", "9", "10", "11"],
      rating: 4,
      colour: "black",
      category: "shoes",
    },
  ];

  const [selectedColor, setSelectedColor] = useState("");

  const filteredProducts = selectedColor
    ? allProducts.filter((p) => p.colour === selectedColor)
    : allProducts;

  return (
    <div className="bg-blue-200 min-h-screen p-6 text-black">
      <h1 className="text-3xl mb-4">Filter by Color</h1>

      <select
        onChange={(e) => setSelectedColor(e.target.value)}
        value={selectedColor}
        className="p-2 mb-6 text-black rounded"
      >
        <option value="">All</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="black">Black</option>
      </select>

      <Card products={filteredProducts} />
    </div>
  );
};

export default Filters;
