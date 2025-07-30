import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLogged = localStorage.getItem("isLogged") === "true";

  const navItems = [
    { label: "Home", path: "/home" },
    { label: "Products", path: "/product" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const navigate = useNavigate();

const handleLogout = () => {
  localStorage.removeItem("isLogged");
  localStorage.removeItem("token"); // remove auth token or key
  navigate("/"); // redirect to login page
};

  const linkStyles =
    "text-white no-underline hover:text-cyan-400 transition font-medium text-sm md:text-base";
  const activeStyles = "text-cyan-400 bg-brown-600 underline underline-offset-4";

  return (
    <nav className="bg-darkBlue pr-5 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-xl font-bold tracking-wide">
          Sastay.pk
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">
          {navItems.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `${linkStyles} ${isActive ? activeStyles : ""}`
              }
            >
              {label}
            </NavLink>
          ))}
          {isLogged && (
            <button
              onClick={handleLogout}
              className="bg-white text-black rounded-2xl px-2 pb-1 transition font-medium text-sm md:text-base"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-[#1e293b]">
          {navItems.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `${linkStyles} block ${isActive ? activeStyles : ""}`
              }
              onClick={() => setIsOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          {isLogged && (
            <button
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
              className="block bg-white text-black rounded-2xl px-2 pb-1 transition font-medium text-sm md:text-base"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
