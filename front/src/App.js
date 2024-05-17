import { useState } from "react";
import "./css/style.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import MapContainer from "./pages/MapContainer";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root /> /* 전체 사이트의 layout 구성/결정/정의 */,
      /* loader: rootLoader, */
      children: [
        { path: "/", element: <Home /> },
        { path: "/signup", element: <Signup /> },
        { path: "/login", element: <Login /> },
        { path: "/branch", element: <MapContainer /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
