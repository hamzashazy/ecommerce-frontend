import React from "react";
import CardItem from "./CardItem";

const Card = ({ products }) => {
  return (
    <section className="w-full bg-[#0f172a] py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <CardItem
            key={product._id}
            id={product._id}
            title={product.title}
            description={product.description}
            price={product.price}
            image={product.image}
            size={product.size}
            rating={product.rating}
            color={product.color}
            category={product.category}
          />
        ))}
      </div>
    </section>
  );
};

export default Card;
