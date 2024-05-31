import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faPizzaSlice,
  faTriangleExclamation,
  faPlus,
  faCar,
} from "@fortawesome/free-solid-svg-icons";

export default function OrderWay() {
  const [orderType, setOrderType] = useState(null);

  const DeliveryContent = () => {
    return (
      <div>
        <div>
          <FontAwesomeIcon icon={faPizzaSlice} /> 밖에서 도미노피자 먹고 싶을
          땐?
        </div>
        <div>
          DOMINO SPOT 배달 <FontAwesomeIcon icon={faChevronRight} />
        </div>
        <div>
          <FontAwesomeIcon icon={faTriangleExclamation} /> 배달주소를
          등록해주세요.
          <button>
            <FontAwesomeIcon icon={faPlus} /> 배달주소 등록
          </button>
        </div>
      </div>
    );
  };

  const PickUpContent = () => {
    return (
      <div>
        <div>
          <FontAwesomeIcon icon={faCar} /> 모바일로 주문하고 차에서 바로받자!
          <span>
            5/16(목)~5/31(금) 동안 드라이빙 픽업 서비스를 진행하지 않습니다. (KT
            달달혜택 프로모션 진행)
          </span>
          <div>
            도미노 드라이빙 픽업 서비스
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
        <div>
          <div>
            <FontAwesomeIcon icon={faTriangleExclamation} /> 포장매장을
            등록해주세요.
            <button>
              <FontAwesomeIcon icon={faPlus} /> 포장주소 등록
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <ul>
        <li onClick={() => setOrderType("delivery")}>배달 주문</li>
        <li onClick={() => setOrderType("pickup")}>
          <span>포장 주문</span>
        </li>
        <div>{orderType === "delivery" && <DeliveryContent />}</div>
        <div>{orderType === "pickup" && <PickUpContent />}</div>
      </ul>
    </div>
  );
}
