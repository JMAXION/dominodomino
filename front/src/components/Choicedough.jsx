import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Doughdesc from "./Doughdesc";
export default function Choicedough({ id, onClick }) {
  const [selectDough, setSelectDough] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const doughNameRef = useRef(null);
  const url = "http://127.0.0.1:8080/menu/halfnhalf/dough/";

  useEffect(() => {
    {
      id &&
        axios({
          method: "POST",
          url: url,
          data: { id: id },
        })
          .then((result) => {
            return setSelectDough(result.data);
          })
          .catch((error) => console.log(error));
    }
  }, [selectDough]);

  const select = (e, index, d) => {
    d = parseInt(d.price);
    setSelectedIndex(index);

    onClick({ type: e, data: d });
  };

  return (
    <div className="step-wrap dough">
      <div className="title-wrap">
        <div className="title-type2-dough">
          도우선택 <Doughdesc />
        </div>
        <div className="notice-text side"></div>
        <div className="option-box dough">
          {selectDough.map((obj, index) => (
            <div className={`chk-box dough0`} id={`doughh${index}`}>
              <input
                type="radio"
                id={`dough${index}`}
                name="dough"
                onClick={(e) => {
                  select(e.target.value, index, e.target.dataset);
                }}
                data-price={obj.dprice}
                value={obj.dname}
                ref={doughNameRef}
              />
              <label
                style={{ color: selectedIndex === index ? "red" : "black" }}
                for={`dough${index}`}
              >
                {obj.dname}{" "}
              </label>{" "}
              <label
                className="eprice"
                style={{ color: selectedIndex === index ? "red" : "black" }}
                for={`dough${index}`}
              >
                {obj.dprice > 0 && "+" + obj.dprice.toLocaleString() + "원"}{" "}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
