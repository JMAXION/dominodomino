import axios from "axios";
import React, { useEffect } from "react";

import { useState } from "react";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { colorControl } from "./colorControl";
import { borderControl } from "./borderControl";

import "../css/allergy.css";

export default function Allergy({ id }) {
  const [modalOpen, setModalOpen] = useState(false); //모달 열고 닫기 감지
  const [infoChange, setInfoChange] = useState(); // 모달 json 분기
  const [infoList, setInfoList] = useState([]); // 모달 테이블헤더
  const [infoContent, setInfoContent] = useState([]); // 모달 테이블내용
  const [clickList, setClickList] = useState({
    country: true,
    nutritional: false,
    allergy: false,
    pizza: true,
    side: false,
    kitchen: false,
  });

  const url = "/data/info.json";

  useEffect(
    () => {
      axios({
        method: "GET",
        url: url,
        data: infoList,
      })
        .then((res) => {
          if (clickList.country && clickList.pizza) {
            setInfoList(res.data.menu);
            setInfoContent(res.data.menucontent);
          } else if (clickList.country && clickList.side) {
            setInfoList(res.data.side);
            setInfoContent(res.data.sidecontent);
          } else if (clickList.country && clickList.kitchen) {
            setInfoList(res.data.kitchen);
            setInfoContent(res.data.kitchencontent);
          } else if (clickList.nutritional && clickList.pizza) {
            setInfoList(res.data.nutritionalPizza);
            setInfoContent(res.data.nutritionalPizzaContent);
          } else if (clickList.nutritional && clickList.side) {
            setInfoList(res.data.nutritionalSide);
            setInfoContent(res.data.nutritionalSideContent);
          } else if (clickList.nutritional && clickList.kitchen) {
            setInfoList(res.data.nutritionalKitchen);
            setInfoContent(res.data.nutritionalKitchenContent);
          } else if (clickList.allergy && clickList.pizza) {
            setInfoList(res.data.allergyPizza);
            setInfoContent(res.data.allergyPizzacontent);
          } else if (clickList.allergy && clickList.side) {
            setInfoList(res.data.allergySide);
            setInfoContent(res.data.allergySidecontent);
          } else if (clickList.allergy && clickList.kitchen) {
            setInfoList(res.data.allergyKitchen);
            setInfoContent(res.data.allergyKitchencontent);
          }
        })
        .catch((error) => console.log(error));
    },
    [infoChange],
    [clickList]
  );

  const InfoChange = (e) => {
    setInfoChange(e);
  };

  const modalBackground = useRef();
  return (
    <>
      <div className="allergy-content-list-button">
        <div className="allergy-content-list-button-box">
          <button
            className="allergy-content-list-button-allergy"
            onClick={() => {
              setModalOpen(true);
            }}
          >
            원산지·영양성분·알레르기 유발성분 정보 &gt;
          </button>
        </div>
      </div>

      {modalOpen && (
        <div
          className={"modal-container"}
          ref={modalBackground}
          onClick={(e) => {
            if (e.target === modalBackground.current) {
              setModalOpen(false);
            }
          }}
        >
          <div className={"modal-content"}>
            <p className="info-title">
              원산지 · 영양성분 · 알레르기 유발성분 정보
            </p>
            <span
              className="modal-close-btn"
              onClick={() => {
                setModalOpen(false);
              }}
            >
              <FontAwesomeIcon icon={faXmark} />
            </span>
            <hr></hr>
            <ul className="info-list1">
              <li>
                <a>
                  <button
                    className="country"
                    id="btn1"
                    onClick={(e) => {
                      colorControl(e.target);
                      InfoChange("menu");
                      clickList.country = true;
                      clickList.nutritional = false;
                      clickList.allergy = false;
                    }}
                  >
                    원산지
                  </button>
                </a>
              </li>
              <li>
                <a>
                  <button
                    id="btn2"
                    onClick={(e) => {
                      colorControl(e.target);
                      InfoChange("nutritional");
                      clickList.country = false;
                      clickList.nutritional = true;
                      clickList.allergy = false;
                    }}
                  >
                    영양성분
                  </button>
                </a>
              </li>
              <li>
                <a>
                  <button
                    id="btn3"
                    onClick={(e) => {
                      colorControl(e.target);
                      InfoChange("allergy");
                      clickList.country = false;
                      clickList.nutritional = false;
                      clickList.allergy = true;
                    }}
                  >
                    알레르기 유발성분
                  </button>
                </a>
              </li>
            </ul>
            <ul className="info-list2">
              <li>
                <a>
                  <button
                    className="line"
                    id="btn4"
                    onClick={(e) => {
                      borderControl(e.target);
                      InfoChange("pizza");
                      clickList.pizza = true;
                      clickList.side = false;
                      clickList.kitchen = false;
                    }}
                  >
                    피자
                  </button>
                </a>
              </li>
              <li>
                <a>
                  <button
                    id="btn5"
                    onClick={(e) => {
                      borderControl(e.target);
                      InfoChange("side");
                      clickList.pizza = false;
                      clickList.side = true;
                      clickList.kitchen = false;
                    }}
                  >
                    사이드
                  </button>
                </a>
              </li>
              <li>
                <a>
                  <button
                    id="btn6"
                    onClick={(e) => {
                      borderControl(e.target);
                      InfoChange("kitchen");
                      clickList.pizza = false;
                      clickList.side = false;
                      clickList.kitchen = true;
                    }}
                  >
                    마이키친
                  </button>
                </a>
              </li>
            </ul>
            <div>
              <table border="1">
                <tr>
                  {infoList.map((obj, index) => (
                    <th
                      className={`info-header ${
                        (clickList.nutritional && clickList.side) ||
                        (clickList.nutritional && clickList.side) ||
                        (clickList.nutritional && clickList.kitchen)
                          ? "set-info-header"
                          : "info-header"
                      }`}
                    >
                      {obj.name}
                    </th>
                  ))}
                </tr>
              </table>
              <table border="1">
                {infoContent.map((item) => (
                  <tr>
                    <td
                      className={`${
                        clickList.nutritional && clickList.pizza
                          ? "set-info-contents"
                          : "info-contents"
                      }`}
                    >
                      {item.name}
                    </td>
                    <td
                      className={`${
                        clickList.allergy && clickList.kitchen
                          ? "set-info-contents2"
                          : "info-contents"
                      }`}
                    >
                      {item.link}
                    </td>
                    {clickList.kitchen && clickList.country && (
                      <td className="info-contents3">{item.link2}</td>
                    )}

                    {clickList.nutritional && clickList.pizza && (
                      <div className="nutritional-pizza">
                        <td className="info-contents">{item.link4}</td>
                        <td className="info-contents">{item.link5}</td>
                        <td className="info-contents">{item.link6}</td>
                        <td className="info-contents">{item.link7}</td>
                        <td className="info-contents">{item.link8}</td>
                        <td className="info-contents">{item.link9}</td>
                        <td className="info-contents">{item.link10}</td>
                        <td className="info-contents">{item.link11}</td>
                        <td className="info-contents">{item.link12}</td>
                        <td className="info-contents">{item.link13}</td>
                        <td className="info-contents">{item.link14}</td>
                      </div>
                    )}
                    {clickList.nutritional && clickList.side && (
                      <div className="nutritional-side">
                        <td className="info-contents">{item.link10}</td>
                        <td className="info-contents">{item.link11}</td>
                        <td className="info-contents">{item.link12}</td>
                        <td className="info-contents">{item.link13}</td>
                        <td className="info-contents">{item.link14}</td>
                      </div>
                    )}
                    {clickList.nutritional && clickList.kitchen && (
                      <div id="searchtable" className="nutritional-side">
                        <td className="info-contents">{item.link10}</td>
                        <td className="info-contents">{item.link11}</td>
                        <td className="info-contents">{item.link12}</td>
                        <td className="info-contents">{item.link13}</td>
                        <td className="info-contents">{item.link14}</td>
                      </div>
                    )}
                    {clickList.allergy && clickList.kitchen && (
                      <div id="searchtable" className="allergy-kitchen">
                        <td className="info-contents">{item.link2}</td>
                      </div>
                    )}
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
