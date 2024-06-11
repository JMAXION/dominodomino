import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
import HomeOrder from "./pages/HomeOrder.jsx";
import PopularSetMenu from "./pages/PopularSetMenu.jsx";
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
import NewsWrite from "./pages/news/NewsWrite.jsx";

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
              name="이벤트,제휴"
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
        { path: "/law/video", element: <LawVideo /> },

        { path: "/login", element: <Login /> },
        { path: "/nonmember", element: <LoginNonmember /> },
        { path: "/signup", element: <Signup /> },

        { path: "/branch", element: <Branch /> },

        { path: "/pizzas", element: <AllPizzaMenu depth2={"피자"} /> },
        { path: "/pizzas/:id", element: <DetailPizzaMenu /> },
        { path: "/sides", element: <SideDishMenu depth2={"사이드디시"} /> },
        {
          path: "/menu/halfnhalf",
          element: <Hnh depth2="하프앤하프" />,
        },
        { path: "/popular", element: <PopularSetMenu depth2="인기세트메뉴" /> },
        { path: "/orderway", element: <OrderWay /> },
        { path: "/cart", element: <Cart depth2="장바구니" /> },

        { path: "/mypage", element: <MyPage /> },
        { path: "/mypage/mania", element: <MyPage /> },
        { path: "/mypage/order", element: <OrderList /> },
        { path: "/mypage/coupon", element: <Coupon /> },
        { path: "/mypage/certificate", element: <Certificate /> },
        { path: "/mypage/qna", element: <Qna /> },
        { path: "/mypage/information", element: <Information /> },

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
          path: "/news/write",
          element: <NewsWrite depth2={"도미노뉴스"} />,
        },
        {
          path: "/news/:bid/:rno",
          element: <NewsContent depth2={"도미노뉴스"} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
