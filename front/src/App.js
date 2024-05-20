import logo from './logo.svg';
import './css/style.css'
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
      element: <Root />, /** layout 정의 */
      // loader: rootLoader,
      children: [
        { path: "/", element: <Home />},
        { path: "/menu", element: <Home /> },
        { path: "/menu/halfnhalf", element: <Hnh name="메뉴" depth1="홈" depth2="메뉴" depth3="하프앤하프" headerName="menu"/> },
        
        { path: "/event", element: <Event name="이벤트·제휴" depth1="홈" depth2="이벤트·제휴" depth3="이벤트" headerName="event"/> },
        { path: "/event/detail/:id", element: <Eventdetail name="이벤트,제휴" depth1="홈" depth2="이벤트·제휴" depth3="이벤트" headerName="event"/> },
        { path: "/event/discount", element: <Discount name="이벤트,제휴" depth1="홈" depth2="이벤트·제휴" depth3="제휴할인" headerName="event/discount"/> },
        { path: "/event/discount/detail/:id", element: <Discountdetail name="이벤트,제휴" depth1="홈" depth2="이벤트·제휴" depth3="제휴할인" headerName="event/discount"/> },
        { path: "/event/discount/telecom/detail/:id", element: <TelecomDiscount /> },
        { path: "/event/discount/card/detail/:id", element: <CardDiscount /> },
        
      
       
      ],
    },
  ]);


  return (
    <RouterProvider router={router} />
  );
}

export default App;
