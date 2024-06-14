import { useEffect, useState } from "react";
import axios from "axios";
import Doughdesc from "./Doughdesc";

export default function SideDetailOption({ id, onClick }) {
  const [selectSide, setSelect] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const url = `http://127.0.0.1:8080/menu/sides/${id}/option`;
    if (id) {
      axios
        .get(url)
        .then((result) => {
          setSelect(result.data);
          if (result.data.length > 0) {
            const firstOption = {
              sname: result.data[0].sname,
              sprice: result.data[0].sprice,
            };
            setSelectedOption(firstOption);
            onClick(firstOption.sname, firstOption);
          }
        })
        .catch((error) => console.log(error));
    }
  }, [id, onClick]);

  const handleSelect = (e) => {
    const selectedValue = e.target.value;
    const selectedPrice = e.target.dataset.price;
    const selectedOption = {
      sname: selectedValue,
      sprice: parseInt(selectedPrice),
    };
    setSelectedOption(selectedOption);
    onClick(selectedValue, selectedOption);
  };

  return (
    <div className="step-wrap dough">
      <div className="title-wrap">
        <div className="title-type2-dough">
          옵션 선택 <Doughdesc />
        </div>
        <div className="notice-text side"></div>
        <div className="option-box dough">
          {selectSide.map((obj, index) => (
            <div className={`chk-box dough0`} id={`doughh${index}`} key={index}>
              <input
                type="radio"
                id={`dough${index}`}
                name="option"
                checked={selectedOption && selectedOption.sname === obj.sname}
                onChange={handleSelect}
                data-price={obj.sprice}
                value={obj.sname}
              />
              <label htmlFor={`dough${index}`}>
                {obj.sname}{" "}
                {obj.sprice > 0 && `(+${obj.sprice.toLocaleString()}원)`}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// import { useEffect, useRef, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import Doughdesc from "./Doughdesc";

// export default function SideDetailOption({ id, onClick }) {
//   /* console.log("id==>", id); */
//   const [selectSide, setSelect] = useState([]);
//   const [selectedIndex, setSelectedIndex] = useState(null);
//   const doughNameRef = useRef(null);

//   useEffect(() => {
//     const url = `http://127.0.0.1:8080/menu/sides/${id}/option`;
//     if (id) {
//       axios
//         .get(url)
//         .then((result) => {
//           /* console.log(result.data); */
//           setSelect(result.data);
//         })

//         .catch((error) => console.log(error));
//     }
//   }, [id]); // id 값이 변경될 때만 useEffect가 실행되도록 수정
//   console.log();
//   /* console.log(selectDough); */
//   const select = (e, d) => {
//     console.log(d.price);

//     onClick(e, d);
//   };

//   return (
//     <div className="step-wrap dough">
//       <div className="title-wrap">
//         <div className="title-type2-dough">
//           옵션 선택 <Doughdesc />
//         </div>
//         <div className="notice-text side"></div>
//         <div className="option-box dough">
//           {selectSide.map((obj, index) => (
//             <div className={`chk-box dough0`} id={`doughh${index}`} key={index}>
//               <input
//                 type="radio"
//                 checked
//                 id={`dough${index}`}
//                 name="option"
//                 onClick={(e) => {
//                   select(e.target.value, e.target.dataset);
//                 }}
//                 data-price={obj.sprice}
//                 value={obj.sname}
//                 ref={doughNameRef}
//               />
//               <label
//                 style={{ color: selectedIndex === "black" }}
//                 htmlFor={`dough${index}`}
//               >
//                 {obj.sprice > 0 && obj.sprice.toLocaleString() + "원"}{" "}
//               </label>{" "}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
