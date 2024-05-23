import "./css/footerStyle.css";
import "./css/commons.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root.jsx";
import LawUse from "./pages/law/LawUse.jsx";
// import Service from "./pages/Service.jsx";
import ServiceMoment from "./pages/service/ServiceMoment.jsx";
import ServiceQuick from "./pages/service/ServiceQuick.jsx";
import ServiceGroup from "./pages/service/ServiceGroup.jsx";
import HomeSlider from "./pages/HomeSlider.jsx";
import LawPersonal from "./pages/law/LawPersonal.jsx";
import LawNavi from "./pages/law/LawNavi.jsx";
import LawTeen from "./pages/law/LawTeen.jsx";
import LawVideo from "./pages/law/LawVideo.jsx";
import TabDetail from "./pages/TabDetail.jsx";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
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
          path: "/law/video",
          element: <LawVideo depth2={"영상정보처리기기 운영관리방침"} />,
        },
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
          element: <TabDetail depth2={"매니아 혜택"} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
