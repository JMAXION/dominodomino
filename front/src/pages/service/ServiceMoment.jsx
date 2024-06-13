import React, { useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle";
import { getUser } from "../../util/localStorage";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function ServiceMoment({ depth2 }) {
  const [props, setprops] = useState({
    title: "도미노 서비스",
    breadcrumb: "도미노 모멘트", //브레드크럼 경로가 3개 이상일때 사용
    breadcrumbLink: "/service/mania", //브레드크럼 경로가 3개 이상일때 사용
    nav1: "매니아 혜택",
    nav2: "도미노 모멘트",
    nav3: "퀵오더",
    nav4: "단체주문 서비스",
    link1: "/service/mania",
    link2: "/service/moment",
    link3: "/service/quickOrder",
    link4: "/service/groupOrder",
  });

  const [savedMonth, setSavedMonth] = useState(0);
  const [savedDay, setSavedDay] = useState(0);
  const [momentDesc, setMomentDesc] = useState({
    desc1: "",
    desc2: "",
    desc3: "",
  });
  const [isSaved, setIsSaved] = useState({
    form1: false,
    form2: false,
    form3: false,
  });
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [dbData, setDbData] = useState([]);
  const userInfo = getUser();
  const navigate = useNavigate();

  const dayList = [
    {
      month1: () => {
        let month1 = [];
        for (let i = 1; i < 32; i++) {
          month1.push({ day: i });
        }
        return month1;
      },
    },
    {
      month2: () => {
        let month2 = [];
        for (let i = 1; i < 30; i++) {
          month2.push({ day: i });
        }
        return month2;
      },
    },
  ];

  const [dateList, setDateList] = useState(dayList[0].month1);

  const monthList = [];
  for (let i = 1; i < 13; i++) {
    monthList.push({ month: i });
  }

  const handleDesc = (e) => {
    const { name, value } = e.target;
    setMomentDesc((prevMomentDesc) => ({
      ...prevMomentDesc,
      [name]: value,
    }));
  };

  /* 월 선택 */
  const monthChange = (e) => {
    e.preventDefault();
    const month = e.target.value;
    setSelectedMonth(month);

    if (month === 2) {
      setDateList(dayList[1].month2);
    } else {
      setDateList(dayList[0].month1);
    }

    setSavedMonth(month);
  };

  /* 일 선택 */
  const dayChange = (e) => {
    e.preventDefault();
    setSavedDay(e.target.value);
  };

  // console.log("data check=>", savedDay);

  /*
   * 저장 버튼 */
  const saveButton = (formNum) => (e) => {
    e.preventDefault();
    if (!userInfo) {
      if (
        window.confirm(
          "도미노 모멘트(피자를 먹고 싶은 그 날)를 등록하려면 로그인이 필요합니다. 로그인하시겠습니까?"
        )
      )
        navigate("/login");
    } else {
      if (!savedMonth) {
        alert("월을 선택해주세요.");
      } else if (!savedDay) {
        alert("일을 선택해주세요");
      } else {
        let momentDescText = "";
        if (formNum === "form1") {
          momentDescText = momentDesc.desc1;
        } else if (formNum === "form2") {
          momentDescText = momentDesc.desc2;
        } else if (formNum === "form3") {
          momentDescText = momentDesc.desc3;
        }

        const url = "http://localhost:8080/service/moment/save";
        axios({
          method: "post",
          url: url,
          data: {
            userId: userInfo.userId,
            momentDescText: momentDescText,
            formNum: formNum,
            savedMonth: savedMonth,
            savedDay: savedDay,
          },
        })
          .then((res) => {
            console.log("res.data ==>", res.data);
            if (!res.data.cnt) alert("저장에 실패했습니다. 다시 시도해주세요.");
            else {
              alert(
                `기념일이 ${savedMonth}월 ${savedDay}일로 저장 되었습니다.`
              );
              setIsSaved({ ...isSaved, [formNum]: true });
            }
          })
          .catch((error) => console.log(error));
      }
    }
  };

  /*
   * db데이터 불러오기 */
  useEffect(() => {
    if (userInfo) {
      const url = "http://localhost:8080/service/moment/dbData";
      axios({
        method: "post",
        url: url,
        data: { userId: userInfo.userId },
      })
        .then((res) => {
          setDbData(res.data);
          // console.log("dbData => ", dbData);
        })
        .catch((error) => console.log(error));
    }
  }, [userInfo]);

  /*
   * 모멘트 수정 */
  // const handleModify = (descNum) => {
  //   setMomentDesc({ ...momentDesc, [descNum]: "" });
  // };

  // console.log("data 1 =>", dbData[1]);
  // console.log("data 2 =>", dbData[2]);

  return (
    <div className="content">
      {/* ----- 페이지 타이틀 ----- */}
      <PageTitle props={props} depth2={depth2} />
      {/* ----- 본문 ----- */}
      <div className="service-moment">
        <h1>피자 먹고 싶은 '순간'을 도미노피자에게 알려주세요.</h1>
        <div className="moment-desc">
          <p>도미노피자를 먹고 싶은 그 순간을 입력해 주시면,</p>
          <p>
            완벽한 그 순간을 위해 도미노피자가 함께 할 수 있도록 피자 배달25%
            할인 쿠폰을 전달해 드립니다.
          </p>
        </div>

        {userInfo && dbData.length > 0 ? (
          <div className="moment-forms">
            <form onSubmit={saveButton("form1")}>
              <label>완벽한 피자가 필요한 첫 번째 순간</label>
              {dbData[0] ? (
                <>
                  <input
                    className="moment-form-db-input"
                    type="text"
                    name="desc1"
                    value={dbData[0] && dbData[0].momentDesc1}
                    disabled
                  />
                  <select name="monthList" onChange={monthChange} disabled>
                    <option value={dbData[0] && dbData[0].savedMonth1}>
                      {dbData[0] && dbData[0].savedMonth1}
                    </option>
                  </select>
                  <select name="dayList" onChange={dayChange} disabled>
                    <option value={dbData[0] && dbData[0].savedDay1}>
                      {dbData[0] && dbData[0].savedDay1}
                    </option>
                  </select>
                </>
              ) : (
                <>
                  <input
                    type="text"
                    placeholder="예) 아이 태어난지 200일"
                    name="desc2"
                    value={momentDesc.desc1}
                    onChange={handleDesc}
                  />
                  <select name="monthList" onChange={monthChange}>
                    <option value="month">월</option>
                    {monthList.map((item) => (
                      <option value={item.month}>{item.month}</option>
                    ))}
                  </select>
                  <select name="dayList" onChange={dayChange}>
                    <option value="day">일</option>
                    {dateList.map((obj) => (
                      <option value={obj.day}>{obj.day}</option>
                    ))}
                  </select>
                </>
              )}
              <div className="btn-group">
                <Link to="http://localhost:8080/mypage/coupon">
                  <button type="button" className="btn-group-red">
                    발급
                  </button>
                </Link>
              </div>
            </form>
            {/* 버튼 폼 2 */}
            <form onSubmit={saveButton("form2")}>
              <label>완벽한 피자가 필요한 두 번째 순간</label>
              {dbData[1] ? (
                <>
                  <input
                    className="moment-form-db-input"
                    type="text"
                    name="desc2"
                    value={dbData[1] && dbData[1].momentDesc2}
                    disabled
                  />
                  <select name="monthList" onChange={monthChange} disabled>
                    <option value={dbData[1] && dbData[1].savedMonth2}>
                      {dbData[1] && dbData[1].savedMonth2}
                    </option>
                  </select>
                  <select name="dayList" onChange={dayChange} disabled>
                    <option value={dbData[1] && dbData[1].savedDay2}>
                      {dbData[1] && dbData[1].savedDay2}
                    </option>
                  </select>
                </>
              ) : (
                <>
                  <input
                    type="text"
                    placeholder="예) 아이 태어난지 200일"
                    name="desc2"
                    value={momentDesc.desc2}
                    onChange={handleDesc}
                  />
                  <select name="monthList" onChange={monthChange}>
                    <option value="month">월</option>
                    {monthList.map((item) => (
                      <option value={item.month}>{item.month}</option>
                    ))}
                  </select>
                  <select name="dayList" onChange={dayChange}>
                    <option value="day">일</option>
                    {dateList.map((obj) => (
                      <option value={obj.day}>{obj.day}</option>
                    ))}
                  </select>
                </>
              )}
              <div className="btn-group">
                {!dbData[1] ? (
                  <button type="submit">저장</button>
                ) : (
                  <>
                    <Link to="http://localhost:8080/mypage/coupon">
                      <button type="button" className="btn-group-red">
                        발급
                      </button>
                    </Link>
                  </>
                )}
              </div>
            </form>
            {/* 버튼 폼 3 */}
            <form onSubmit={saveButton("form3")}>
              <label>완벽한 피자가 필요한 세 번째 순간</label>
              {dbData[2] && dbData[2].momentDesc3 ? (
                <>
                  <input
                    className="moment-form-db-input"
                    type="text"
                    name="desc3"
                    value={dbData[2] && dbData[2].momentDesc3}
                    disabled
                  />
                  <select name="monthList" onChange={monthChange} disabled>
                    <option value={dbData[2] && dbData[2].savedMonth3}>
                      {dbData[2] && dbData[2].savedMonth3}
                    </option>
                  </select>
                  <select name="dayList" onChange={dayChange} disabled>
                    <option value={dbData[2] && dbData[2].savedDay3}>
                      {dbData[2] && dbData[2].savedDay3}
                    </option>
                  </select>
                </>
              ) : (
                <>
                  <input
                    type="text"
                    placeholder="예) 수능 끝나는 날!"
                    name="desc3"
                    value={momentDesc.desc3}
                    onChange={handleDesc}
                  />
                  <select name="monthList" onChange={monthChange}>
                    <option value="month">월</option>
                    {monthList.map((item) => (
                      <option value={item.month}>{item.month}</option>
                    ))}
                  </select>
                  <select name="dayList" onChange={dayChange}>
                    <option value="day">일</option>
                    {dateList.map((obj) => (
                      <option value={obj.day}>{obj.day}</option>
                    ))}
                  </select>
                </>
              )}
              <div className="btn-group">
                {!dbData[2] ? (
                  <button type="submit">저장</button>
                ) : (
                  <>
                    <Link to="http://localhost:8080/mypage/coupon">
                      <button type="button" className="btn-group-red">
                        발급
                      </button>
                    </Link>
                  </>
                )}
              </div>
            </form>
          </div>
        ) : (
          <div className="moment-forms">
            <form onSubmit={saveButton("form1")}>
              <label>완벽한 피자가 필요한 첫 번째 순간</label>
              <input
                type="text"
                placeholder="예) 결혼기념일이에요"
                name="desc1"
                value={momentDesc.desc1}
                onChange={handleDesc}
              />
              <select name="monthList" onChange={monthChange}>
                <option value="month">월</option>
                {monthList.map((item) => (
                  <option value={item.month}>{item.month}</option>
                ))}
              </select>
              <select name="dayList" onChange={dayChange}>
                <option value="day">일</option>
                {dateList.map((obj) => (
                  <option value={obj.day}>{obj.day}</option>
                ))}
              </select>
              <div className="btn-group">
                {!isSaved.form1 ? (
                  <button type="submit">저장</button>
                ) : (
                  <>
                    <button type="button">수정</button>
                    <button type="button" className="btn-group-red">
                      발급
                    </button>
                  </>
                )}
              </div>
            </form>
            {/* 버튼 폼 2 */}
            <form onSubmit={saveButton("form2")}>
              <label>완벽한 피자가 필요한 두 번째 순간</label>
              <input
                type="text"
                placeholder="예) 아이 태어난지 200일"
                name="desc2"
                value={momentDesc.desc2}
                onChange={handleDesc}
              />
              <select name="monthList" onChange={monthChange}>
                <option value="month">월</option>
                {monthList.map((item) => (
                  <option value={item.month}>{item.month}</option>
                ))}
              </select>
              <select name="dayList" onChange={dayChange}>
                <option value="day">일</option>
                {dateList.map((obj) => (
                  <option value={obj.day}>{obj.day}</option>
                ))}
              </select>
              <div className="btn-group">
                {!isSaved.form2 ? (
                  <button type="submit">저장</button>
                ) : (
                  <>
                    <button type="button">수정</button>
                    <button type="button" className="btn-group-red">
                      발급
                    </button>
                  </>
                )}
              </div>
            </form>
            {/* 버튼 폼 3 */}
            <form onSubmit={saveButton("form3")}>
              <label>완벽한 피자가 필요한 세 번째 순간</label>
              <input
                type="text"
                placeholder="예) 수능 끝나는 날!"
                name="desc3"
                value={momentDesc.desc3}
                onChange={handleDesc}
              />
              <select name="monthList" onChange={monthChange}>
                <option value="month">월</option>
                {monthList.map((item) => (
                  <option value={item.month}>{item.month}</option>
                ))}
              </select>
              <select name="dayList" onChange={dayChange}>
                <option value="day">일</option>
                {dateList.map((obj) => (
                  <option value={obj.day}>{obj.day}</option>
                ))}
              </select>
              <div className="btn-group">
                {!isSaved.form3 ? (
                  <button type="submit">저장</button>
                ) : (
                  <>
                    <button type="button">수정</button>
                    <button type="button" className="btn-group-red">
                      발급
                    </button>
                  </>
                )}
              </div>
            </form>
          </div>
        )}

        <div className="div-line"></div>
        <div className="moment-bottom">
          <p>꼭 확인하세요!</p>
          <div>
            <strong>1. 기념일 등록/변경</strong>
            <ul>
              <li>
                기념일 등록 : 기념일을 입력하는 날의 2일 이후부터 가능하며,
                1년동안 최대 3개까지 등록할 수 있습니다.(당일과 익일로 저장시,
                내년 날짜로 자동 저장됩니다.)
              </li>
              <li>
                기념일 변경 : “도미노 모멘트” 메뉴에서 변경 가능하며, 당해년도
                쿠폰 발급 후에는 수정 불가합니다.
              </li>
            </ul>
            <strong>2. 쿠폰 발급 및 확인</strong>
            <ul>
              <li>
                기념일 쿠폰(피자 25%할인 쿠폰)은 3개의 기념일에 대하여 각각 매년
                1회 발급 가능합니다.
              </li>
              <li>
                “도미노 모멘트” 메뉴에서 쿠폰을 발급하실 수 있으며, 발급된
                쿠폰은 [나의 정보 &gt; 쿠폰] 에서 확인하실 수 있습니다.
              </li>
            </ul>
            <strong>3.쿠폰 발급 기간 및 유효기간</strong>
            <ul>
              <li>
                기념일 기준 하루 전부터 1주일 이내에 발급 및 사용하실 수
                있습니다. (예: 3월 15일이 기념일인 경우, 3월 14일부터 21일까지
                총 8일간 쿠폰 발급 및 사용이 가능합니다.)
              </li>
            </ul>
            <strong>4.쿠폰 사용 조건</strong>
            <ul>
              <li>
                피자(M, L) 금액에 한하여 25% 할인이 가능합니다. (단, 함께
                주문하는 사이드디시, 음료, 추가토핑 금액은 할인 불가/스페셜세트
                제외)
              </li>
              <li>제휴 및 여타 할인과 중복 할인이 불가합니다.</li>
            </ul>
            <strong>5.도미노 모멘트 기념일 안내</strong>
            <ul>
              <li>
                고객님께서 등록하신 기념일 하루 전에 카카오 알림톡으로
                알려드립니다.
              </li>
            </ul>
            <p>
              ※ 본 이벤트는 도미노피자 사정에 따라 사전 공지 없이 변경되거나
              조기 종료될 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
