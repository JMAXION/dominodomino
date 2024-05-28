import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand, faX } from "@fortawesome/free-solid-svg-icons";
import SideModal from "./SideModal";
import { Link } from "react-router-dom";
import "../css/sideMenu.css";

export default function SideMenuProduct() {
  const [sideList, setSideList] = useState({
    combo: [],
    single: [],
  });

  useEffect(() => {
    fetch("/data/sideAll.json")
      .then((res) => res.json())
      .then((data) => setSideList(data.side))
      .catch((error) => console.log(error));
  }, []);

  const [selectedSide, setSelectedSide] = useState(null);

  const openModal = (side) => {
    setSelectedSide(side);
  };

  const closeModal = () => {
    setSelectedSide(null);
  };

  const createRows = (category) => {
    const rows = [];
    for (let i = 0; i < category.length; i += 4) {
      rows.push(category.slice(i, i + 4));
    }
    return rows;
  };

  const renderSideDish = (side, showButton, isSingle) => {
    const clickableContent = (
      <>
        <img className="side-box-in-image" src={side.image} alt={side.title} />
        {showButton && (
          <button onClick={() => openModal(side)}>
            <FontAwesomeIcon icon={faExpand} />
          </button>
        )}
      </>
    );

    const textContent = (
      <div>
        <div>{side.title}</div>
        <span>{side.lable}</span>
        <div>{side.price}원</div>
        <button>주문</button>
      </div>
    );

    // const content = (
    //   <div key={side.id} className="side-box-in">
    //     <img className="side-box-in-image" src={side.image} alt={side.title} />

    //     {showButton && (
    //       <button onClick={() => openModal(side)}>
    //         <FontAwesomeIcon icon={faExpand} />
    //       </button>
    //     )}
    //     <div>
    //       <div>{side.title}</div>
    //       <span>{side.lable}</span>
    //     </div>
    //     <div>{side.price}원</div>
    //     <button>주문</button>
    //   </div>
    // );

    return (
      <div key={side.id} className="side-box-in">
        {isSingle ? (
          <Link to={side.link}>{clickableContent}</Link>
        ) : (
          clickableContent
        )}
        {textContent}
      </div>
    );
  };

  const renderRows = (rows, showButton, isSingle) => {
    return rows.map((row, index) => (
      <div key={index} className="side-box">
        {row.map((side) => renderSideDish(side, showButton, isSingle))}
      </div>
    ));
  };

  const renderModal = () => {
    if (!selectedSide) return null;
    return (
      <div>
        <div>
          <SideModal side={selectedSide} onClose={closeModal} />
        </div>
      </div>
    );
  };

  return (
    <div className="content">
      <div>
        <ul>
          <div className="category">콤보</div>
          <li>{renderRows(createRows(sideList.combo), false, false)}</li>
        </ul>
      </div>
      <div>
        <ul>
          <div className="category">단품</div>
          <li>{renderRows(createRows(sideList.single), true, true)}</li>
        </ul>
      </div>
    </div>
  );
}
