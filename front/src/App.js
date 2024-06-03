import "./css/order.css";
import "./css/pizzaMenu.css";
import "./css/rootStyle.css";
import "./css/pizzaModalButton.css";
import "./css/pizzaModalContent.css";
import "./css/sideMenu.css";
import "./css/sideModalButton.css";
import "./css/popularSetMenu.css";
import "./css/popularSetMenuModal.css";
import "./css/orderWay.css";
import HomeOrder from "./pages/HomeOrder.jsx";
import AllPizzaMenu from "./pages/AllPizzaMenu.jsx";
import DetailPizzaMenu from "./pages/DetailPizzaMenu.jsx";
import SideDishMenu from "./pages/SideDishMenu.jsx";
import PopularSetMenu from "./pages/PopularSetMenu.jsx";
import Root from "./pages/Root.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OrderWay from "./components/OrderWay.jsx";

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
        { path: "/popular", element: <PopularSetMenu /> },
        { path: "/orderway", element: <OrderWay /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
