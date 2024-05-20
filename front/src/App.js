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
import "./css/orderStyle.css";
import HomeOrder from "./pages/HomeOrder.jsx";
import PizzaMenu from "./pages/PizzaMenu.jsx";
import MyPage from "./pages/MyPage.jsx";
import OrderList from "./components/OrderList.jsx";
import Coupon from "./components/Coupon.jsx";
import Certificate from "./components/Certificate.jsx";
import Qna from "./components/Qna.jsx";
import Information from "./components/Information.jsx";

function App() {
  /* 
  브레드 크럼 사용법
  1. 호출할 페이지에 name, depth1, depth2, depth3, headerName을 입력해 줍니다
      name : 페이지 이동시 보이는 타이틀
      depth1 : 첫번째 브레드 크럼
      depth2 : 두번째 브레드 크럼
      depth3 : 세번째 브레드 크럼
      headerName : location 역할과 json에서 해당하는 배열을 호출하기 위해 사용합니다
  2. 해당 페이지 jsx으로 이동해 파라미터를 똑같이 적어서 받아줍니다  예) export default function Event({name,depth1,depth2,depth3,headerName})
  3. 해당 페이지 jsx에서  Menuheader를 통해 똑같이 전달해 줍니다  <Menuheader name={name} depth1={depth1}  depth2={depth2} depth3={depth3} headerName={headerName} />
  
  관련된 json data/menu.json
      {name : 해당페이지의 서브메뉴 이름 link : 이동할 경로} 
*/

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
        { path: "/", element: <HomeOrder /> },
        { path: "/pizzas", element: <PizzaMenu /> },
        { path: "/mypage", element: <MyPage /> },
        { path: "/mania", element: <MyPage /> },
        { path: "/order", element: <OrderList /> },
        { path: "/coupon", element: <Coupon /> },
        { path: "/certificate", element: <Certificate /> },
        { path: "/qna", element: <Qna /> },
        { path: "/information", element: <Information /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
