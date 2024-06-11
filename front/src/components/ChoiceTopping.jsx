import { useEffect, useState } from "react";
import Doughdesc from "./Doughdesc";
import axios from 'axios'
export default function ChoiceTopping  ({pizzaRight,onClick,onChange}) {

const [toppingBox, setToppingBox] = useState(false)
const [topping,setTopping]=useState([])
const [toppingQty,setToppingQty] = useState([{
    quantity :1,
    tname: '',
    timage: '0',
    tkind: '0',
    tprice: 2000,
    tid:0,
    

}])
const [checkQty,setCheckQty] = useState(0)
const [toppingMenu, setToppingMenu] = useState({
    main:true, 
    cheese:false,
    after:false
})




const showTopping = () => {
    setToppingBox(!toppingBox)
}

const changeTap = (e) => {
   

    if(e === "main"){
    
        setToppingMenu({main:true,cheese:false,after:false})
    }else if(e === "cheese"){
       
        setToppingMenu({main:false,cheese:true,after:false})
    }
    else {setToppingMenu({main:false,cheese:false,after:true})}
}

    const getTopping = (topping) => {
       
         
        
            const url = `http://127.0.0.1:8080/menu/halfnhalf/topping`
            axios({
                method:"POST",
                url : url,
                data:{topping:topping}
            })
            .then(result => {setTopping(result.data)
                            
            });
         
    }



  
    const increase = (tid) => {
        let existingToppingIndex = toppingQty.findIndex(t => t.tid === tid);
        let toppingFilter = topping.filter(t=> t.tid === tid)
        let toppingFilter2 = toppingQty.filter(t=> t.quantity >=5 )
        setCheckQty(checkQty + 1);
        console.log(toppingFilter2);
        if (checkQty >= 5) {
           
            alert("5개까지만 담을 수 있습니다");
           return onClick(toppingQty)
        }      

        setTopping(prevToppings => 
            prevToppings.map(t => 
                t.tid === tid ? { ...t, quantity: t.quantity + 1 } : t       
            )
        );

       
        if (existingToppingIndex !== -1 ) {
     
            // 동일한 tid를 가진 항목이 있으면 quantity를 증가시킵니다.
            setToppingQty( 
                toppingQty.map((t, index) => 
                    t.tid === tid ? { ...t, quantity: t.quantity + 1 } : t     
                )
            );
           
        } else {
           
            // 동일한 tid를 가진 항목이 없으면 새로운 항목으로 추가합니다.
        
      
            setToppingQty([
                ...toppingQty,
                {
                    quantity: 1, // 새로운 항목의 초기 수량을 1로 설정
                    tname: toppingFilter[0].tname,
                    timage: toppingFilter[0].timage,
                    tkind: toppingFilter[0].tkind,
                    tprice: toppingFilter[0].tprice,
                    tid: toppingFilter[0].tid
                }
            ]);
          
        }
    
        onClick(toppingQty)
   
 
    };


    const decrease = (tid) => {
       
        // If checkQty is 0 or less, just return
       if( checkQty === 0){
        return onClick(toppingQty)
       }
    
        // Decrease checkQty
        setCheckQty(checkQty - 1);
    
        // Update the topping array
        setTopping(prevToppings => 
            prevToppings.map(t => 
                t.tid === tid ? { ...t, quantity: t.quantity - 1 } : t       
            )
        );
    
        // Update the toppingQty array
        setToppingQty(prevToppingQty => {
            const updatedToppings = prevToppingQty.map(t => 
                t.tid === tid ? { ...t, quantity: t.quantity - 1 } : t       
            );
            onClick(toppingQty,topping[0].quantity)
            
            // Remove items with quantity 0
            return updatedToppings.filter(t => t.quantity > 0);
        });
 
    };
            

    return(
       
        <div className="step-wrap">
          
            <div className="title-wrap-topping">
                <div className="title-type-edge2"><span className={`btn-topping close ${toppingBox ? 'open':'close'}`} onClick={(e)=>{showTopping();getTopping("main");}}>토핑추가 </span> <Doughdesc/></div>
            </div>
            {toppingBox&&
            <div className="topping_box">
                <ul className="list-text-v4">
                    <li>토핑추가는 피자 한판 당 5개까지 추가가능</li>
                </ul>
                <div className="tap-type">
                    <tr>
                        <td onClick={(e)=>{changeTap("main");getTopping("main")}} className={`${toppingMenu.main ? 'aaa':''}`}><span >메인</span></td>
                        <td onClick={(e)=>{changeTap("cheese");getTopping("cheese")}} className={`${toppingMenu.cheese ? 'aaa':''}`}><span >치즈</span></td>
                        <td onClick={(e)=>{changeTap("after");getTopping("after")}} className={`${toppingMenu.after ? 'aaa':''}`}><span >애프터</span></td>
                    </tr>
                </div>
                {
                <div className="all-topping-layer">
                    <div id="topping1" className="tab-content">
                        { topping.map(obj=>(
                           <ul>
                        <li className="topping-img"><img src={`${obj.timage}`} alt="" />
                            
                        </li>
                        <div className="topping-name"><li>{obj.tname}<p>{obj.tprice}</p>
                            
                        </li>
                        </div>
                        <div className="qty-box">
                            <input type="text" className="topping-qty-txt" value={obj.quantity}></input>
                                <button className="qty-minus" onClick={()=>{decrease(obj.tid);}} >-</button>
                                <button className="qty-plus" onClick={()=>{increase(obj.tid)}} >+</button>
                              
                            </div>
                            
                           </ul>
                        ))}

                    </div>
                </div>
                }
            </div>
            }
        </div>
    )
}