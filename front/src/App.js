import { useState } from "react";
import "./css/style.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import MapContainer from "./pages/MapContainer";
import Login from "./pages/Login";
import logo from "./logo.svg";
import "./css/style2.css";
import Event from "./pages/Event.jsx";
import Menuheader from "./components/Menuheader.jsx";
import Eventdetail from "./pages/Eventdetail.jsx";
import Discount from "./pages/Discount.jsx";
import Discountdetail from "./pages/Discountdetail.jsx";
import Modal from "./components/Modal.jsx";
import TelecomDiscount from "./components/TelecomDiscount.jsx";
import Test from "./pages/Test.jsx";
import CardDiscount from "./components/CardDiscount.jsx";
import HalfNhalf from "./pages/HalfNhalf.jsx";
import Hnh from "./pages/Hnh.jsx";
import "./css/footerStyle.css";
import "./css/commons.css";
import LawUse from "./pages/law/LawUse.jsx";
import Service from "./pages/Service.jsx";
import HomeSlider from "./pages/HomeSlider.jsx";
import LawPersonal from "./pages/law/LawPersonal.jsx";
import LawNavi from "./pages/law/LawNavi.jsx";
import LawTeen from "./pages/law/LawTeen.jsx";
import LawVideo from "./pages/law/LawVideo.jsx";
import TabDetail from "./pages/TabDetail.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root /> /** layout 정의 */,
      // loader: rootLoader,
      children: [
        { path: "/", element: <Home /> },
        { path: "/signup", element: <Signup /> },
        { path: "/login", element: <Login /> },
        { path: "/branch", element: <MapContainer /> },
        { path: "/menu", element: <Home /> },
        {
          path: "/event",
          element: (
            <Event
              name="이벤트·제휴"
              depth1="홈"
              depth2="이벤트·제휴"
              depth3="이벤트"
              className="active"
              headerName="event"
            />
          ),
        },
        {
          path: "/event/detail/:id",
          element: (
            <Eventdetail
              name="이벤트,제휴"
              depth1="홈"
              depth2="이벤트·제휴"
              depth3="이벤트"
            />
          ),
        },
        {
          path: "/event/discount",
          element: (
            <Discount
              name="이벤트,제휴"
              depth1="홈"
              depth2="이벤트·제휴"
              depth3="제휴할인"
              className="active"
            />
          ),
        },
        {
          path: "/event/discount/detail/:id",
          element: (
            <Discountdetail
              name="이벤트,제휴"
              depth1="홈"
              depth2="이벤트·제휴"
              depth3="제휴할인"
            />
          ),
        },
        {
          path: "/event/discount/telecom/detail/:id",
          element: <TelecomDiscount id="1" />,
        },
        {
          path: "/event/discount/card/detail/:id",
          element: <CardDiscount id="1" />,
        },
        { path: "/test", element: <Test /> },
        { path: "/test/:id", element: <Test /> },
        {
          path: "/halfnhalf",
          element: (
            <Hnh
              name="메뉴"
              depth1="홈"
              depth2="메뉴"
              depth3="하프앤하프"
              headerName="halfnhalf"
              location1="menu"
            />
          ),
        },
        {
          path: "/",
          element: <HomeSlider />,
        },
        {
          path: "/law",
          element: <LawUse />,
        },
        {
          path: "/law/personal",
          element: <LawPersonal />,
        },
        {
          path: "/law/navi",
          element: <LawNavi />,
        },
        {
          path: "/law/teen",
          element: <LawTeen />,
        },
        {
          path: "/law/video",
          element: <LawVideo />,
        },
        {
          path: "/service",
          element: <Service />,
        },
        {
          path: "/service/:id",
          element: <TabDetail />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
