import "./css/order.css";
import "./css/pizzaMenu.css";
import "./css/rootStyle.css";
import "./css/pizzaModalButton.css";
import "./css/pizzaModalContent.css";
import HomeOrder from "./pages/HomeOrder.jsx";
import AllPizzaMenu from "./pages/AllPizzaMenu.jsx";
import DetailPizzaMenu from "./pages/DetailPizzaMenu.jsx";
import SideDishMenu from "./pages/SideDishMenu.jsx";
import Root from "./pages/Root.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/", element: <HomeOrder /> },
        { path: "/pizzas", element: <AllPizzaMenu /> },
        { path: "/pizzas/:id", element: <DetailPizzaMenu /> },
        { path: "/sides", element: <SideDishMenu /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
