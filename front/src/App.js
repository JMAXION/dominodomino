import { useState } from "react";
import "./css/style.css";
import "./css/order.css";
import "./css/pizzaMenu.css";
import "./css/rootStyle.css";
import "./css/pizzaModalButton.css";
import "./css/pizzaModalContent.css";
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
// import Service from "./pages/Service.jsx";
import ServiceMania from "./pages/service/ServiceMania.jsx";
import ServiceMoment from "./pages/service/ServiceMoment.jsx";
import ServiceQuick from "./pages/service/ServiceQuick.jsx";
import ServiceGroup from "./pages/service/ServiceGroup.jsx";
import HomeSlider from "./pages/HomeSlider.jsx";
import LawPersonal from "./pages/law/LawPersonal.jsx";
import LawNavi from "./pages/law/LawNavi.jsx";
import LawTeen from "./pages/law/LawTeen.jsx";
import LawUse from "./pages/law/LawUse.jsx";
import LawVideo from "./pages/law/LawVideo.jsx";
import TabDetail from "./pages/TabDetail.jsx";
import CsCenter from "./pages/CsCenter.jsx";
import Company from "./pages/company/Company.jsx";
import Franchisee from "./pages/company/Franchisee.jsx";
import Recruit from "./pages/company/Recruit.jsx";

import LoginNonmember from "./components/LoginNonmember.jsx";
import Ecoupon from "./pages/Ecoupon.jsx";
import Service from "./pages/Service.jsx";
import HomeOrder from "./pages/HomeOrder.jsx";
import PizzaMenu from "./pages/PizzaMenu.jsx";
import MyPage from "./pages/MyPage.jsx";
import OrderList from "./components/OrderList.jsx";
import Coupon from "./components/Coupon.jsx";
import Certificate from "./components/Certificate.jsx";
import Qna from "./components/Qna.jsx";
import Information from "./components/Information.jsx";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root /> /** layout 정의 */,
      // loader: rootLoader,
      children: [
        { path: "/law", element: <LawUse depth2={"이용약관"} /> },
        { path: "/", element: <Home /> },
        { path: "/signup", element: <Signup /> },
        { path: "/login", element: <Login /> },
        { path: "/nonmember", element: <LoginNonmember /> },
        { path: "/branch", element: <MapContainer /> },
        { path: "/menu", element: <Home /> },

        { path: "/ecoupon", element: <Ecoupon /> },
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
          path: "/menu/halfnhalf",
          element: (
            <Hnh
              name="메뉴"
              depth1="홈"
              depth2="메뉴"
              depth3="하프앤하프"
              headerName="menu"
            />
          ),
        },
        {
          path: "/event",
          element: (
            <Event
              name="이벤트·제휴"
              depth1="홈"
              depth2="이벤트·제휴"
              depth3="이벤트"
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
              headerName="event"
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
              headerName="event/discount"
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
              headerName="event/discount"
            />
          ),
        },
        {
          path: "/event/discount/telecom/detail/:id",
          element: <TelecomDiscount />,
        },
        { path: "/event/discount/card/detail/:id", element: <CardDiscount /> },
        {
          path: "/event/discount/telecom/detail/:id",
          element: <TelecomDiscount id="1" />,
        },
        { path: "/", element: <HomeSlider /> },
        { path: "/law", element: <LawUse depth2={"이용약관"} /> },
        {
          path: "/law/personal",
          element: <LawPersonal depth2={"개인정보 처리방침"} />,
        },
        {
          path: "/law/navi",
          element: <LawNavi depth2={"위치기반 서비스 이용약관"} />,
        },
        { path: "/law/teen", element: <LawTeen depth2={"청소년 보호방침"} /> },
        {
          path: "/event/discount/card/detail/:id",
          element: <CardDiscount id="1" />,
          path: "/law/video",
          element: <LawVideo depth2={"영상정보처리기기 운영관리방침"} />,
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
          path: "/service/moment",
          element: <ServiceMoment depth2={"도미노 모멘트"} />,
        },
        {
          path: "/service/quickOrder",
          element: <ServiceQuick depth2={"퀵오더"} />,
        },
        {
          path: "/service/groupOrder",
          element: <ServiceGroup depth2={"단체주문 서비스"} />,
        },
        {
          path: "/service/:id",
          element: <ServiceMania depth2={"매니아 혜택"} />,
        },
        {
          path: "/cs/:id",
          element: <CsCenter depth2={"자주하는 질문"} />,
        },
        {
          path: "/company/:id",
          element: <Company depth2={"한국도미노피자"} />,
        },
        {
          path: "/company/franchisee/:id",
          element: <Franchisee depth2={"가맹점모집"} />,
        },
        {
          path: "/company/recruit/:id",
          element: <Recruit depth2={"인재채용"} />,
        },

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
          path: "/menu/halfnhalf",
          element: (
            <Hnh
              name="메뉴"
              depth1="홈"
              depth2="메뉴"
              depth3="하프앤하프"
              headerName="menu"
            />
          ),
        },
        {
          path: "/event",
          element: (
            <Event
              name="이벤트·제휴"
              depth1="홈"
              depth2="이벤트·제휴"
              depth3="이벤트"
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
              headerName="event"
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
              headerName="event/discount"
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
              headerName="event/discount"
            />
          ),
        },
        {
          path: "/event/discount/telecom/detail/:id",
          element: <TelecomDiscount />,
        },
        { path: "/event/discount/card/detail/:id", element: <CardDiscount /> },
        { path: "/", element: <HomeSlider /> },
        { path: "/law", element: <LawUse /> },
        { path: "/law/personal", element: <LawPersonal /> },
        { path: "/law/navi", element: <LawNavi /> },
        { path: "/law/teen", element: <LawTeen /> },
        { path: "/law/video", element: <LawVideo /> },
        { path: "/service", element: <Service /> },
        { path: "/service/:id", element: <TabDetail /> },
        { path: "/", element: <HomeOrder /> },
        { path: "/pizzas", element: <PizzaMenu /> },
        { path: "/mypage", element: <MyPage /> },
        { path: "/mypage/mania", element: <MyPage /> },
        { path: "/mypage/order", element: <OrderList /> },
        { path: "/mypage/coupon", element: <Coupon /> },
        { path: "/mypage/certificate", element: <Certificate /> },
        { path: "/mypage/qna", element: <Qna /> },
        { path: "/mypage/information", element: <Information /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
