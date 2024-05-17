import "./css/orderStyle.css";
import HomeOrder from "./pages/HomeOrder.jsx";
import PizzaMenu from "./pages/PizzaMenu.jsx";
import Root from "./pages/Root.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/", element: <HomeOrder /> },
        { path: "/pizzas", element: <PizzaMenu /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
