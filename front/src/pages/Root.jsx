import "../css/style.css";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import React from "react";
import Footer from "../components/Footer.jsx";

export default function Root() {
  return (
    <div>
      <Header />

      <Outlet />
      <Footer />
    </div>
  );
}
