import { useEffect, useState } from "react"
import axios from 'axios'
export default function ChoiceSide({onClick}){
    const [sideMenu, setSideMenu] = useState([])
    const [checkQty,setCheckQty] = useState(0)
    const [sideQty,setSideQty] = useState([{
        quantity :1,
        sname: '',
        simage: '0',
        skind: '0',
        sprice: 2000,
        sid:0,
    }])

    useEffect(()=>{
        const url = `http://127.0.0.1:8080/menu/halfnhalf/side`
        axios({
        method:"POST",
        url:url,
        data:sideMenu
     })
     .then(result=> setSideMenu(result.data))
     .catch(error=>console.log(error))
    },[])


    const increase = (sid) => {
       
        let existingToppingIndex = sideQty.findIndex(t => t.sid === sid);
        let toppingFilter = sideMenu.filter(t=> t.sid === sid)
    
        let toppingFilter2 = sideMenu.filter(t=> t.quantity >=5 )
        setCheckQty(checkQty + 1);
       
        if (checkQty >= 5) {
           
            alert("5개까지만 담을 수 있습니다");
           return onClick(sideQty)
        }      

        setSideMenu(prevToppings => 
            prevToppings.map(t => 
                t.sid === sid ? { ...t, quantity: t.quantity + 1 } : t       
            )
        );

       
        if (existingToppingIndex !== -1 ) {
     
            // 동일한 tid를 가진 항목이 있으면 quantity를 증가시킵니다.
            setSideQty( 
                sideQty.map((t, index) => 
                    t.sid === sid ? { ...t, quantity: t.quantity + 1 } : t     
                )
            );
           
        } else {
           
            // 동일한 tid를 가진 항목이 없으면 새로운 항목으로 추가합니다.
            setSideQty([
                ...sideQty,
                {
                    quantity: 1, // 새로운 항목의 초기 수량을 1로 설정
                    sname: toppingFilter[0].sname,
                    simage: toppingFilter[0].simage,
                    skind: toppingFilter[0].skind,
                    sprice: toppingFilter[0].sprice,
                    sid: toppingFilter[0].sid
                }
            ]);
      
         
          
        }
    
        onClick(sideQty)
   
        console.log(sideQty);
    };


    const decrease = (tid) => {
       
        // If checkQty is 0 or less, just return
       if( checkQty === 0){
        return onClick(sideQty)
       }
    
        // Decrease checkQty
        setCheckQty(checkQty - 1);
    
        // Update the topping array
        setSideMenu(prevToppings => 
            prevToppings.map(t => 
                t.tid === tid ? { ...t, quantity: t.quantity - 1 } : t       
            )
        );
    
        // Update the toppingQty array
        setSideQty(prevToppingQty => {
            const updatedToppings = prevToppingQty.map(t => 
                t.tid === tid ? { ...t, quantity: t.quantity - 1 } : t       
            );
            onClick(sideQty,sideMenu[0].quantity)
            
            // Remove items with quantity 0
            return updatedToppings.filter(t => t.quantity > 0);
        });
 
    };

    return(
        <div className="step-wrap-side">
          
            <div className="title-wrap-topping">
                <div className="title-type-edge2">사이드디시 </div>
            </div>
            <div id="topping1" className="tab-content-side">
                        {sideMenu.map(obj=>(
                            
                       
                           <ul>
                        <li className="topping-img">
                            <img src={obj.simage} alt="" />
                        </li>
                        <div className="topping-name"><li>{obj.sname}<p>{obj.sprice}</p>
                            
                        </li>
                        </div>
                        <div className="qty-box">
                            <input type="text" className="topping-qty-txt" value={obj.quantity} ></input>
                                <button className="qty-minus" onClick={()=>{decrease(obj.sid)}} >-</button>
                                <button className="qty-plus" onClick={()=>{increase(obj.sid)}} >+</button>
                              
                            </div>
                            
                           </ul>
                        )) }

                    </div>
                </div>
      
    )
}