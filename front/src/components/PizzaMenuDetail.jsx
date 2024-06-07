import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PizzaMenuDetail() {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch("/data/pizzaAll.json")
      .then((res) => res.json())
      .then((data) => {
        const allPizzas = [
          ...data.pizza.new,
          ...data.pizza.premium,
          ...data.pizza.halfSignature,
          ...data.pizza.classic,
          ...data.pizza.happyDaily,
        ];
        const selectedPizza = allPizzas.find((pizza) => pizza.id === id);
        setPizza(selectedPizza);
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

  if (!pizza) {
    return <div>Loading...</div>;
  }

  return (
    <div className="content">
      <div className="pizza-detail-content">
        <div className="pizza-detail-image-box">
          <img
            className="pizza-detail-image"
            src={pizza.image}
            alt={pizza.title}
          />
        </div>
        <div className="pizza-detail-info">
          <h1 className="pizza-detail-info-title">{pizza.title}</h1>
          <div>{pizza.tag1}</div>
          <div>{pizza.tag2}</div>
          <div>
            <div>사이즈 선택</div>
            <div>L {pizza.lPrice.toLocaleString()}원</div>
            {pizza.mPrice !== undefined && (
              <>
                <div>M {pizza.mPrice.toLocaleString()}원</div>
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
            <p>{pizza.description}</p>
            <div>
              <strong>태그:</strong> {pizza.tag1}, {pizza.tag2}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
