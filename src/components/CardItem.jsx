import React from "react";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

const CardItem = ({
  id,
  title,
  description,
  price,
  image,
  rating,
  size = [],
  color = [],
  category,
}) => {
  const rate = rating?.rate || 0;

  return (
    <div className="p-4">
      <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
        <Link to={`/product/${id}`} className="block text-inherit no-underline">
          {/* Image Section */}
<div className="relative bg-gradient-to-b from-gray-100 to-white p-6 flex justify-center items-center">
  <img
    src={image}
    alt={title}
    className="w-44 h-44 object-contain transition-transform duration-300 group-hover:scale-110"
  />

  {/* 🔥 Premium Price Badge */}
  <div className="absolute top-3 right-3 bg-cyan-600 text-white text-base font-bold px-2 py-2 rounded-full shadow-lg ring-2 ring-white/70">
    ${price}
  </div>
</div>

          {/* Info Section */}
          <div className="px-5 py-4 text-sm text-gray-800 bg-white">
            <h3 className="text-lg font-semibold text-gray-900 mb-1 truncate">
              {title}
            </h3>
            <p className="text-xs text-gray-500 line-clamp-2 mb-2">
              {description}
            </p>

            {/* Category */}
            <p className="text-xs text-gray-400">
              <span className="font-medium text-gray-600">Category:</span>{" "}
              {category}
            </p>

            {/* Colors */}
            {color.length > 0 && (
              <div className="flex items-center flex-wrap gap-1 mt-1 text-xs">
                <span className="font-medium text-gray-500">Colors:</span>
                {color.map((c, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full"
                  >
                    {c}
                  </span>
                ))}
              </div>
            )}

            {/* Sizes */}
            {size.length > 0 && (
              <div className="flex items-center flex-wrap gap-1 mt-1 text-xs">
                <span className="font-medium text-gray-500">Sizes:</span>
                {size.map((s, i) => (
                  <span
                    key={i}
                    className="bg-lime-100 text-lime-700 px-2 py-0.5 rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>
            )}

            {/* Rating */}
            <div className="flex items-center gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <AiFillStar
                  key={i}
                  className={`${
                    i < Math.round(rate) ? "text-yellow-400" : "text-gray-300"
                  }`}
                  size={16}
                />
              ))}
              <span className="text-xs text-gray-500 ml-1">
                ({rating?.count ?? 0})
              </span>
            </div>

            {/* Button */}
            <button className="mt-4 w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold text-sm py-2 rounded-full shadow-md transition-all">
              Add to Cart
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CardItem;
