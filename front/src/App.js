import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/* css */
import "./css/style.css";
import "./css/style2.css";
import "./css/order.css";
import "./css/commons.css";
import "./css/pizzaMenu.css";
import "./css/rootStyle.css";
import "./css/footerStyle.css";
import "./css/pizzaModalButton.css";
import "./css/pizzaModalContent.css";
import "./css/sideMenu.css";
import "./css/sideModalButton.css";
import "./css/popularSetMenu.css";
import "./css/popularSetMenuModal.css";
import "./css/orderWay.css";
import "./css/orderWayModal.css";
import "./css/cartMenu.css";
import "./css/beverageMenu.css";
/* root and home */
import Root from "./pages/Root";
import Home from "./pages/Home";
/* cscenter */
import CsCenter from "./pages/CsCenter.jsx";
/* discount */
import Discount from "./pages/Discount.jsx";
import CardDiscount from "./components/CardDiscount.jsx";

import Discountdetail from "./pages/Discountdetail.jsx";
import TelecomDiscount from "./components/TelecomDiscount.jsx";
/* event */
import Event from "./pages/Event.jsx";
import Eventdetail from "./pages/Eventdetail.jsx";
/* ecoupon */
import Ecoupon from "./pages/Ecoupon.jsx";
import EcouponIndex from "./components/EcouponIndex.jsx";
import EcouponUsage from "./components/EcouponUsage.jsx";
/* law */
import LawNavi from "./pages/law/LawNavi.jsx";
import LawPersonal from "./pages/law/LawPersonal.jsx";
import LawTeen from "./pages/law/LawTeen.jsx";
import LawUse from "./pages/law/LawUse.jsx";
import LawVideo from "./pages/law/LawVideo.jsx";
/* login and signup */
import Login from "./pages/Login";
import LoginNonmember from "./components/LoginNonmember.jsx";
import TabDetail from "./pages/TabDetail.jsx";
import Company from "./pages/company/Company.jsx";
import Franchisee from "./pages/company/Franchisee.jsx";
import Recruit from "./pages/company/Recruit.jsx";
import Signup from "./pages/Signup";
/* map */
import Branch from "./pages/Branch.jsx";
/* menu */
import AllPizzaMenu from "./pages/AllPizzaMenu.jsx";
import DetailPizzaMenu from "./pages/DetailPizzaMenu.jsx";
import SideDishMenu from "./pages/SideDishMenu.jsx";
import Hnh from "./pages/Hnh.jsx";
import HnhOrder from "./pages/HnhOrder.jsx";
import HomeOrder from "./pages/HomeOrder.jsx";
import PopularSetMenu from "./pages/PopularSetMenu.jsx";
import BeverageMenu from "./pages/BeverageMenu.jsx";
import OrderWay from "./components/OrderWay.jsx";
import Cart from "./pages/Cart.jsx";

/* mypage */
import MyPage from "./pages/MyPage.jsx";
import OrderList from "./components/OrderList.jsx";
import Coupon from "./components/Coupon.jsx";
import Certificate from "./components/Certificate.jsx";
import Qna from "./components/Qna.jsx";
import Information from "./components/Information.jsx";
/* service */
import Service from "./pages/Service.jsx";
import ServiceGroup from "./pages/service/ServiceGroup.jsx";
import ServiceMania from "./pages/service/ServiceMania.jsx";
import ServiceMoment from "./pages/service/ServiceMoment.jsx";
import ServiceQuick from "./pages/service/ServiceQuick.jsx";
/* news */
import News from "./pages/news/News.jsx";
import NewsContent from "./pages/news/NewsContent.jsx";
/* gift */
import Gift from "./pages/Gift.jsx";
import MoneyGift from "./components/MoneyGift.jsx";
import GiftUsage from "./components/GiftUsage.jsx";
import SideMenuDetail from "./components/SideMenuDetail.jsx";
import PopularMenuDetail from "./components/PopularMenuDetail.jsx";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/event/discount",
          element: (
            <Discount
              name="이벤트·제휴"
              depth1="홈"
              depth2="이벤트·제휴"
              depth3="제휴할인"
              headerName="event/discount"
            />
          ),
        },
        { path: "/event/discount/card/detail/:id", element: <CardDiscount /> },
        {
          path: "/event/discount/detail/:id",
          element: (
            <Discountdetail
              name="이벤트·제휴"
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
        {
          path: "/event/discount/telecom/detail/:id",
          element: <TelecomDiscount id="1" />,
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
        { path: "/ecoupon", element: <Ecoupon /> },
        {
          path: "/menu/halfnhalf/orderok",
          element: <HnhOrder />,
        },
        {
          path: "/ecoupon/index",
          element: <EcouponIndex depth2={"e-쿠폰 주문"} />,
        },
        {
          path: "/ecouponusage",
          element: <EcouponUsage depth2={"e-쿠폰 사용 안내"} />,
        },
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
          path: "/law/video",
          element: <LawVideo depth2={"영상정보처리기기 운영관리방침"} />,
        },

        { path: "/login", element: <Login /> },
        { path: "/nonmember", element: <LoginNonmember /> },
        { path: "/signup", element: <Signup /> },

        { path: "/branch", element: <Branch /> },

        { path: "/pizzas", element: <AllPizzaMenu depth2={"피자"} /> },
        { path: "/pizzas/:id", element: <DetailPizzaMenu depth2={"피자"} /> },
        { path: "/sides", element: <SideDishMenu depth2={"사이드디시"} /> },
        {
          path: "/sides/:id",
          element: <SideMenuDetail depth2={"사이드디시"} />,
        },
        {
          path: "/menu/halfnhalf",
          element: <Hnh depth2="하프앤하프" />,
        },
        {
          path: "/popular",
          element: <PopularSetMenu depth2={"인기세트메뉴"} />,
        },
        {
          path: "/popular/:id",
          element: <PopularMenuDetail depth2={"인기세트메뉴"} />,
        },
        { path: "/beverage", element: <BeverageMenu depth2={"음료&기타"} /> },

        { path: "/orderway", element: <OrderWay depth2={"주문방법 선택"} /> },
        { path: "/cart", element: <Cart depth2={"장바구니"} /> },

        { path: "/mypage", element: <MyPage depth2={"매니아 등급"} /> },
        { path: "/mypage/mania", element: <MyPage depth2={"매니아 등급"} /> },
        { path: "/mypage/order", element: <OrderList depth2={"주문내역"} /> },
        { path: "/mypage/coupon", element: <Coupon depth2={"쿠폰함"} /> },
        {
          path: "/mypage/certificate",
          element: <Certificate depth2={"금액상품권"} />,
        },
        { path: "/mypage/qna", element: <Qna depth2={"1:1문의/칭찬"} /> },
        {
          path: "/mypage/information",
          element: <Information depth2={"정보수정"} />,
        },

        { path: "/service", element: <Service /> },
        {
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
          path: "/news",
          element: <News depth2={"도미노뉴스"} />,
        },
        {
          path: "/news/:bid/:rno",
          element: <NewsContent depth2={"도미노뉴스"} />,
        },
        {
          path: "/gift",
          element: <Gift depth2={"금액상품권"} />,
        },
        { path: "/moneygift", element: <MoneyGift depth2={"금액상품권"} /> },

        {
          path: "/giftusage",
          element: <GiftUsage depth2={"상품권 사용 안내"} />,
        },
      ],
    },
  ]);
  <Router>
    <Routes>
      <Route path="/" element={<Hnh />} />
      <Route path="/menu/halfnhalf/orderok" element={<HnhOrder />} />
    </Routes>
  </Router>;

  return <RouterProvider router={router} />;
}
