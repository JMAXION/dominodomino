import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PizzaMenuDetail() {
  const { id } = useParams();
  const [pizzaList, setPizzaList] = useState([]);
  const [pizza, setPizza] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const url = `http://127.0.0.1:8080/menu/pizzas/${id}`;
    axios({
      method: "GET",
      url: url,
      data: { id: id },
    })
      .then((res) => {
        setPizzaList(res.data);
        console.log("res ==>", res.data);
        /* const selectedPizza = pizzaList.find((pizza) => pizza.id === id);
        setPizza(selectedPizza); */
      })
      .catch((error) => console.log(error));
  }, [id]);

  // 수량 증가 함수
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // 수량 감소 함수
  const decreaseQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1); // 수량이 1보다 작아지지 않도록 함
  };

  /*  if (!pizza) {
    return <div>Loading...</div>;
  } */

  return (
    <div className="content">
      <div className="pizza-detail-content">
        <div className="pizza-detail-image-box">
          <img
            className="pizza-detail-image"
            src={pizzaList.menuimg}
            alt={pizzaList.pname}
          />
        </div>
        <div className="pizza-detail-info">
          <h1 className="pizza-detail-info-title">{pizzaList.pname}</h1>
          <div>{pizzaList.desc1}</div>
          <div>{pizzaList.desc2}</div>
          <div>
            <div>사이즈 선택</div>
            <div>L {pizzaList.lprice}</div>
            {pizzaList.mprice !== undefined && (
              <>
                <div>M {pizzaList.mprice}</div>
              </>
            )}
            <div>
              <div>도우 선택</div>

              <button className="pizza-datail-info-button-allergy">
                원산지•영양성분•알레르기 유발성분
              </button>
            </div>
            <div>
              <div>엣지 선택</div>
            </div>
            <div>
              <div>토핑추가</div>
            </div>
            <div>
              <div>수량 선택</div>
              <div>
                <button onClick={decreaseQuantity}>-</button>
                <span>{quantity}</span>
                <button onClick={increaseQuantity}>+</button>
              </div>
            </div>
            <p>{pizzaList.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
