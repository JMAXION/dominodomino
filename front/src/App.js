import logo from './logo.svg';
import './css/style2.css'
import Root from './pages/Root.jsx'
import Home from './pages/Home.jsx'
import Event from './pages/Event.jsx';
import Menuheader from './components/Menuheader.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Eventdetail from './pages/Eventdetail.jsx';
import Discount from './pages/Discount.jsx';
import Discountdetail from './pages/Discountdetail.jsx';
import Modal from './components/Modal.jsx';
import TelecomDiscount from './components/TelecomDiscount.jsx'
import Test from './pages/Test.jsx';
import CardDiscount from './components/CardDiscount.jsx';
import HalfNhalf from './pages/HalfNhalf.jsx';
import Hnh from './pages/Hnh.jsx';
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />, /** layout 정의 */
      // loader: rootLoader,
      children: [
        { path: "/", element: <Home />},
        { path: "/menu", element: <Home /> },
        { path: "/event", element: <Event name="이벤트·제휴" depth1="홈" depth2="이벤트·제휴" depth3="이벤트" className="active" headerName="event"/> },
        { path: "/event/detail/:id", element: <Eventdetail name="이벤트,제휴" depth1="홈" depth2="이벤트·제휴" depth3="이벤트"/> },
        { path: "/event/discount", element: <Discount name="이벤트,제휴" depth1="홈" depth2="이벤트·제휴" depth3="제휴할인" className="active"/> },
        { path: "/event/discount/detail/:id", element: <Discountdetail name="이벤트,제휴" depth1="홈" depth2="이벤트·제휴" depth3="제휴할인"/> },
        { path: "/event/discount/telecom/detail/:id", element: <TelecomDiscount id="1"/> },
        { path: "/event/discount/card/detail/:id", element: <CardDiscount id="1"/> },
        { path: "/test", element: <Test /> },
        { path: "/test/:id", element: <Test /> },
        { path: "/halfnhalf", element: <Hnh name="메뉴" depth1="홈" depth2="메뉴" depth3="하프앤하프" headerName="halfnhalf" location1="menu"/> }
      ],
    },
  ]);


  return (
    <RouterProvider router={router} />
  );
}

export default App;
