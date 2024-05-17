import React from "react";
import Footer from "../components/Footer.jsx";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
}
