import { useEffect,useRef,useState } from "react"
import axios from 'axios';
import { colorControl } from "./colorControl";
import Doughdesc from "./Doughdesc";
import Edgedesc from "./Edgedesc";
export default function Choicedough ({id,onClick}) {
    const [selectDough,setSelectDough] = useState([])
    const [selectedIndex,setSelectedIndex] = useState(null)
    const doughNameRef =useRef(null);
    const url = "http://127.0.0.1:8080/menu/halfnhalf/edge/";
        

         useEffect(()=>{
            {id&&
          axios({
            method: "POST",
            url: url,
            data: {id:id},
          })
            .then(   result => 
                {
                    return setSelectDough(result.data)
                }
        )
            .catch((error) => console.log(error));
        }
        },[selectDough])
                    

   

   const select = (e,index,d) => {
    d = parseInt(d.price)
    setSelectedIndex(index)
       
    onClick({type:e,data:d})
    
   }

    return(
        <div className="step-wrap dough">
            <div className="title-wrap">
                <div className="title-type2-dough">엣지선택  <Edgedesc/></div>
                    <div className="notice-text side">
                      
                    </div>
                <div className="option-box dough" >
                    {selectDough.map((obj,index)=>(
                              <div   className={`chk-box dough0` }   >
                              <input type="radio" id={`edge${index}`}  name="edge"  onClick={(e)=>{select(e.target.value,index,e.target.dataset)} } data-price={obj.eprice} value={obj.ename} ref={doughNameRef}/>
                             
                                  <label style={{ color: selectedIndex === index ? 'red' : 'black' }} for={`edge${index}`} >{obj.ename} </label>  <label className="eprice" style={{ color: selectedIndex === index ? 'red' : 'black' }}  for={`edge${index}`} >{obj.eprice > 0&& "+"+obj.eprice.toLocaleString() +"원"}  </label> 
                              </div>
          
                    ))} 
                  
                    
                </div>
            </div>
        </div>
    )
}