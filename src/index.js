import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css"; // If you have global styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { ToastProvider } from "./ToastManager";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // Move the basename prop to the Router component here
  <Router>
    <ToastProvider>

      <Navbar />
      <App />
      <Footer/>
    </ToastProvider>

  </Router>
);
