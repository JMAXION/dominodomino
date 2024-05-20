import HalfNhalfSwiper from "../components/HalfNhalfSwiper";
import HnfInfoModal from "../components/HnfInfoModal";
import Menuheader from "../components/Menuheader";
import '../css/hnh.css'
import { useEffect,useState } from "react";

export default function Hnh( {name,depth1,depth2,depth3,headerName,location1}){
    

    const [navActive, setNavActive] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [scrollActive, setScrollActive] = useState(false);
    
    const scrollFixed = () => {
        if (scrollY > 200) {
          setScrollY(window.scrollY );
          setScrollActive(true);
        } else {
          setScrollY(window.scrollY );
          setScrollActive(false);
        }
      };
    
      useEffect(() => {
        const scrollListener = () => {
          window.addEventListener('scroll', scrollFixed);
        };
        scrollListener();
        return () => {
          window.removeEventListener('scroll', scrollFixed);
        };
      });
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

                                </span>
                            </div>
                            <div className="pizza-right-box">
                            <span className="sel-pizza">

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
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        </div>
      
       </>

    )
}