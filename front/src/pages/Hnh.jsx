import { useParams } from "react-router-dom";
import HalfNhalfSwiper from "../components/HalfNhalfSwiper";
import HnfInfoModal from "../components/HnfInfoModal";
import Menuheader from "../components/Menuheader";
import '../css/hnh.css'
import { useEffect,useState } from "react";
import axios from 'axios'
export default function Hnh( {name,depth1,depth2,depth3,headerName,location1}){
    

    const [navActive, setNavActive] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [scrollActive, setScrollActive] = useState(false);
    const [halfchoice, setHalfChoice]  =useState([]);
     const [pizzaLeft, setPizzaLeft] =useState("")
     const [pizzaRight, setPizzaRight] =useState("")
    const {id} = useParams()
  
  useEffect(()=>{
    const url ="http://127.0.0.1:8080/menu/halfnhalf/"
    axios({
      method:"POST",
      url:url,
      data:halfchoice
    }).then(res =>{
        console.log("res==>",res);
      setHalfChoice(res.data)})
    .catch(error=> console.log(error))
  },[pizzaLeft])
 
console.log("피자 왼쪽 ==>", pizzaLeft);
console.log("피자 오른쪽 ==>", pizzaRight);
    const scrollFixed = () => {
        if (scrollY > 200) {
          setScrollY(window.scrollY );
          setScrollActive(true);
        } else {
          setScrollY(window.scrollY );
          setScrollActive(false);
        }
      };
    console.log(pizzaLeft);
      useEffect(() => {
        const scrollListener = () => {
          window.addEventListener('scroll', scrollFixed);
        };
        scrollListener();
        return () => {
          window.removeEventListener('scroll', scrollFixed);
        };
      });

     
      function check(t){
      
        const filter = halfchoice.filter(item=> item.id ===t)
    
         
          setPizzaLeft(...filter)
  
      }

      function check2(t){
        
        const filter = halfchoice.filter(item=> item.id ===t)
    
         
          setPizzaRight(...filter)
  
      }
    return(
        <>        
      
       <Menuheader name={name} depth1={depth1} depth2={depth2} depth3={depth3}  headerName={headerName} location1={location1}/>
      
        <div className="hnh-container">
            <div className={`img-wrap ${scrollActive ? "fixed":"img-wrap"}`}>
               
                <div className="view-box">
                    <div className="half-box">
                        <div className="pizza-box">
                            <div className="pizza-left-box">
                                <span className="sel-pizza">
                             
                                  <h1></h1>
                                 <img src={pizzaLeft.img} alt="" />
                                
                                </span>
                            </div>
                            <div className="pizza-right-box">
                            <span className="sel-pizza">
                            <h1></h1>
                                   <img src={pizzaRight.img} alt=""/>
                            </span>
                            </div>
                        </div>
                      
                    </div>
                </div>
                {scrollActive&& 
                <div style={{width:'100px',height:"100px"}}>
                </div>
                }   
            </div>
                
            <div className="detail-wrap">
                <p className="hnh-title">피자 한 판으로 두 가지 맛을 동시에!</p>
                <HalfNhalfSwiper/>
                <HnfInfoModal/>
                <select onChange={(e)=>check(e.target.value) } >
                    <option value="0"> 첫번째 피자를 선택하세요</option>
                    <option value="1" >뉴욕불고기</option>
                    <option value="2" >한우불고기</option>
                </select>
          
                <select onChange={(e)=>check2(e.target.value) } >
                    <option value="0"> 두번째 피자를 선택하세요</option>
                    <option value="1" >뉴욕불고기</option>
                    <option value="2" >한우불고기</option>
                </select>
       
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
            
        </div>
      
       </>

    )
}