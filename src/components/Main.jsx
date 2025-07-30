import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Header */}
      <header className="w-full py-10 bg-white shadow-sm flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-500 mb-2 text-center">
          Choose Your Side
        </h1>
        <p className="text-lg text-gray-700 text-center max-w-2xl">
          Select your preferred side to get started. Whether you're an admin or a shopper, we have something for you!
        </p>
      </header>

      {/* Cards */}
      <section className="flex flex-col md:flex-row gap-10 mt-12 mb-8">
        {/* User Side */}
        <div className="bg-white rounded-xl shadow-lg p-6 w-[350px] flex flex-col items-center hover:shadow-2xl transition">
          <div className="w-full flex flex-col items-center">
            <img
              src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80"
              alt="Shopper"
              className="rounded-lg w-full h-36 object-cover mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Shopper</h2>
            <p className="text-gray-600 text-center mb-4">
              Explore the latest shoes, discover top brands, and shop your favorites!
            </p>
            <button
              onClick={() => navigate("/home")}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded shadow w-full transition"
            >
              Go to User Side
            </button>
          </div>
        </div>

        {/* Admin Side */}
        <div className="bg-white rounded-xl shadow-lg p-6 w-[350px] flex flex-col items-center hover:shadow-2xl transition">
          <div className="w-full flex flex-col items-center">
            <img
              src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80"
              alt="Admin"
              className="rounded-lg w-full h-36 object-cover mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Admin Panel</h2>
            <p className="text-gray-600 text-center mb-4">
              Manage products, view orders, and control your shoe store with ease.
            </p>
            <button
              onClick={() => navigate("/admin")}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded shadow w-full transition"
            >
              Go to Admin Panel
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-6 w-full text-center text-gray-500 text-sm">
        Choose your path and dive into the experience. For admins, manage products and orders. For shoppers, explore and enjoy the latest in footwear!
      </footer>
    </main>
      );
};

export default Main;