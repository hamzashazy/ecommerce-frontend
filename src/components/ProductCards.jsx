import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiFillStar } from "react-icons/ai";

const ProductCards = () => {
  const [products, setProducts] = useState([]);

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

  return (
    <section className="px-4 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, i) => (
          <div
            key={i}
            className="bg-[#1e293b] text-white rounded-xl shadow-lg p-5 flex flex-col justify-between"
          >
            {/* Title and Price */}
            <div className="flex justify-between items-start">
              <div>
                <h5 className="text-xl font-bold">{product.title}</h5>
                <p className="text-gray-400">
                  {product.description?.substring(0, 60)}...
                </p>
              </div>
              <div>
                <span className="bg-cyan-500 text-white px-4 py-3 rounded-full text-center font-bold">
                  ${product.price}
                </span>
              </div>
            </div>

            {/* Image */}
            <div className="text-center my-6">
              <img
                src={product.image}
                className="w-56 h-56 object-cover mx-auto rounded-full border"
                alt={product.title}
              />
            </div>

            {/* Rating and Button */}
            <div className="flex justify-between items-center">
              <div className="flex text-yellow-400">
                {[...Array(Math.floor(product.rating?.rate || 0))].map((_, j) => (
                  <AiFillStar key={j} />
                ))}
                {[...Array(5 - Math.floor(product.rating?.rate || 0))].map((_, j) => (
                  <AiFillStar key={`gray-${j}`} className="text-gray-300" />
                ))}
              </div>
              <button className="bg-cyan-400 text-white px-4 py-2 rounded-full font-semibold">
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCards;
