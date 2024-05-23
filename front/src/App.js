import "./css/order.css";
import "./css/pizzaMenu.css";
import "./css/rootStyle.css";
import "./css/pizzaModalButton.css";
import "./css/pizzaModalContent.css";
import HomeOrder from "./pages/HomeOrder.jsx";
import PizzaMenu from "./pages/AllPizzaMenu.jsx";
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
