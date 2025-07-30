import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import manImg from "../Assets/man.jpeg";
import Carousel  from "./Carousel";
import Card from "./Card";
import ProductCards from "./ProductCards";

export default function Home() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(()=>{
    const token = localStorage.getItem('token'); // or wherever you store the token
    
    fetch('https://ecommerce-backend-theta-pink.vercel.app/api/products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      return response.json();
    })
    .then(data => {
      console.log('Products:', data);
      setProducts(data);
      setLoading(false);
    })
.catch(error => {
  console.error('Error:', error);
  setLoading(false);
});
},[])

    if (loading) return (
      <div className="min-h-screen flex items-center justify-center bg-[#1e293b]">
        <span className="text-cyan-400 text-xl font-semibold animate-pulse">Loading products...</span>
      </div>
    );
    
  return (
    <main className="bg-[#1e293b] text-white min-h-screen font-sans">
      {/* Hero Section */}
      <header className="w-full py-14 px-4 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#164e63] shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-extrabold">
              STYLE <span className="text-cyan-400">AND</span><br />
              FAS<span className="text-cyan-400">HION</span> HERE..!
            </h1>
            <button className="mt-6 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 py-2 rounded-full transition">
              BUY NOW!
            </button>
          </div>
          <div className="flex justify-center">
            <img src={manImg} alt="Hero" className="w-64 h-100 object-cover rounded-xl shadow-lg border-4 border-cyan-700" />
          </div>
        </div>
      </header>

      {/* New Arrivals Section */}
      <section className="py-10 text-center">
        <h3 className="text-3xl font-bold text-cyan-400 mb-2">NEW ARRIVALS</h3>
        <p className="text-gray-300">Trending from mens and womens style collection</p>
      </section>

      {/* Cards */}
      <section className="px-4 mb-10">
        <Card products={products} />
      </section>

      {/* Banner */}
      <section className="bg-gradient-to-r from-[#0f172a] via-[#164e63] to-[#0f172a] py-12 my-8 rounded-3xl mx-2 md:mx-8 shadow-xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="mb-6 md:mb-0 md:w-1/2 flex justify-center">
            <img
              src="https://img.freepik.com/premium-vector/sale-this-weekend-only-up-70-off-sign_515038-4734.jpg?w=740"
              className="w-72 h-72 object-cover rounded-lg border-4 border-cyan-700 shadow-lg"
              alt="Sale Banner"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left px-6">
            <h1 className="text-4xl md:text-6xl font-extrabold">
              CLICK <span className="text-cyan-400">BUY</span><br />
              N<span className="text-cyan-400">OW</span> TO GET..!
            </h1>
            <button className="mt-6 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 py-2 rounded-full transition">
              BUY NOW
            </button>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="text-center py-10">
        <h3 className="text-3xl font-bold text-cyan-400 mb-2">FEATURED</h3>
        <p className="text-gray-300">Trending from mens and womens style collection</p>
      </section>

      {/* Product Cards Section */}
      <section className="px-4 pb-16">
        <ProductCards />
      </section>

    </main>

  );
}