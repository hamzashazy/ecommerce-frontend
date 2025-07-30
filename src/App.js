import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./components/Home.jsx";
import CardDetails from "./components/CardDetails.jsx";
import Aboutus from "./components/Aboutus.jsx";
import CardSection from "./components/CardSection.jsx";
import Contact from "./components/Contact.jsx";
import Signup from "./components/login/Signup";
import Admin from "./components/Admin";
import AddProduct from "./components/AddProduct.jsx";
import UpdateProduct from "./components/UpdateProduct.jsx";
import DeleteProduct from "./components/DeleteProduct.jsx";
import Main from "./components/Main.jsx";
import { FaHome } from "react-icons/fa";
//import AppRouter from "./AppRouter.js";
// import Home_V1 from "./components/homev4.js";
// const ProtectedRoute = ({ children }) => {
//   const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
//   return isLoggedIn ? children : <Navigate to="/" />;
// };
const ProtectedRoute1 = ({ children }) => {
  const isLogged = localStorage.getItem("isLogged") === "true";
  return isLogged ? children : <Navigate to="/" />;
};

export default function App() {
  return (
    <Routes>
      <Route path="/admin" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/product" element={<CardSection />} />
      <Route path="/product/:id" element={<CardDetails />} />
      <Route path="/about" element={<Aboutus />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin/dashboard" element={<ProtectedRoute1><Admin /></ProtectedRoute1>} />
      <Route path="/admin/add" element={<ProtectedRoute1><AddProduct /></ProtectedRoute1>} />
      <Route path="/admin/update" element={<ProtectedRoute1><UpdateProduct /></ProtectedRoute1>} />
      <Route path="/admin/delete" element={<ProtectedRoute1><DeleteProduct /></ProtectedRoute1>} />
      <Route path="*" element={<Main />} /> 

    </Routes>
  );
}
