import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductAvata from "./ProductAvata";
import { Link } from "react-router-dom";

export default function Product() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch("/data/pizza.json")
      .then((res) => res.json())
      .then((data) => {
        const categories = data.pizza.categories;
        const categoryList = categories.reduce((acc, category) => {
          if (category.title === "New" || category.title === "프리미엄") {
            const updateList = category.list.map((item) => ({
              ...item,
              categoryTitle: category.title,
            }));
            acc.push(...category.list);
          }
          return acc;
        }, []);
        setProductList(categoryList);
      })
      .catch((error) => console.log(error));
  }, []);

  //출력 개수
  const rows = [];
  for (let i = 0; i < productList.length; i += 4) {
    rows.push(productList.slice(i, i + 4));
  }

  return (
    <div>
      {rows.map((rowArray, index) => (
        <div key={index}>
          {rowArray.map((product, productIndex) => (
            <Link to={`/product/${product.id}`} key={productIndex}>
              <ProductAvata image={product.image} />
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}

export function ProductInfo({ list }) {
  const priceOrg = list.price.toLocaleString();
  const priceCur = Math.trunc(list.price + list.discount).toLocaleString();
  return (
    <div>
      <div>{list.categoryTitle}</div>
      <ul>
        <li>
          <img src={list.image} alt="피자이미지" />
          <div>{list.title}</div>
          <span>NEW</span>
          <div>
            <span>L</span>
            <span>{priceOrg}원</span>
          </div>
          <div>
            #포장 {priceCur}원
            <br />
            #맥앤치즈의 고소함과 만난 클래식의 맛!
            <br />
            #해피 데일리 피자, 매일매일 도미노를 끝없이 만나보세요!
          </div>
        </li>
      </ul>
    </div>
  );
}
