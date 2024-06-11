import { useState } from "react"

export default function QtyoptionComp({onClick}) {
    const [count, setCount] = useState(1)

const increase = () => {
    if(count < 9){
        setCount(count+1)
    }else{
        alert("피자는 9판까지 주문 하실 수 있습니다.")
    }
    return onClick(count)
}

const decrease = () => {
    if(count > 1){
        setCount(count-1)
    }else{
        
    }
    onClick(count)
}

    return  (
        <div className="step-wrap">
            <div className="title-wrap-topping">
                <div className="title-type-edge2">수량선택 </div>
                <div className="qty-box-option">
                            <input type="text" className="qty-txt" value={count}></input>
                                <button className="qty-minus"  onClick={decrease}>-</button>
                                <button className="qty-plus"  onClick={increase}>+</button>
                            </div>
            </div>
        </div>
    )
}