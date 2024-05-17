import "./css/footerStyle.css";
import "./css/commons.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root.jsx";
import LawUse from "./pages/law/LawUse.jsx";
import Service from "./pages/Service.jsx";
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
