import { useRef, useState } from "react";
import axios from "axios";
import {
  validateCheckStep2,
  passCheck,
  changeEmailDomain,
} from "../apis/validate";

export default function SignupStep2({
  pre,
  next,
  formData,
  handleChange,
  handleAddress,
}) {
  const refs = {
    userIdRef: useRef(null),
    userPassRef: useRef(null),
    userPassCheckRef: useRef(null),
    userNameRef: useRef(null),
    emailIdRef: useRef(null),
    emailDomainRef: useRef(null),
    phoneNumber2Ref: useRef(null),
    zipcodeRef: useRef(null),
    addressRef: useRef(null),
    detailAddressRef: useRef(null),
  };
  const handleSubmit = () => {
    if (validateCheckStep2(refs)) {
      if (passCheck(refs)) {
        /* 서버 전송:formdata ==> 서버(nodeJS/JAVA/C#) =>DB(MySQL) 저장 */
        /* 성공 --->next() */
        /* 실패 --->에러 페이지 */
        const url = "http://127.0.0.1:8080/member/signup";
        axios({
          method: "post",
          url: url,
          data: formData,
        })
          .then((res) => {
            console.log(res.data);
            if (res.data.cnt === 1) {
              alert("회원가입 성공");
              next();
            } else {
              alert("회원가입 실패");
            }
          })
          .catch();
        next();
      }
    }
  };

  return (
    <div className="signup">
      <h1>회원가입</h1>
      <ul className="signup1">
        <li>
          <p>
            이름<span>*</span>
          </p>
          <input type="text" />
        </li>
        <li>
          <p>
            아이디<span>*</span>
          </p>
          <input type="text" />
        </li>
        <li>
          <p>
            비밀번호<span>*</span>
          </p>
          <input type="text" placeholder="영문, 숫자, 특수문자 조합 8-16자" />
        </li>
        <li>
          <p>휴대전화 번호</p>
          <p className="signup-phone">
            <select name="phoneNumber" id="">
              <option value="010">010</option>
            </select>
            <input type="text" />
            <input type="text" />
          </p>
        </li>
      </ul>
      <ul>
        <p>
          <input type="checkbox" />
          <span>[필수] 만 14세 이상이며 필수항목에 모두 동의합니다.</span>
        </p>
        <p>
          <input type="checkbox" />
          <span>이용약관 동의</span>
        </p>
        <p>
          <input type="checkbox" />
          <span>개인정보 수집 및 이용 동의</span>
        </p>
      </ul>
      <ul>
        <input type="checkbox" />
        <span>[선택] 광고성 정보 수신에 모두 동의합니다.</span>
        <p>
          <input type="checkbox" /> <span>앱 푸시</span>
        </p>
        <p>
          <input type="checkbox" /> <span>문자 메세지</span>
        </p>
        <p>
          <input type="checkbox" /> <span>이메일</span>
        </p>
        <button type="button" onClick={pre}>
          뒤로
        </button>
        <button type="button" className="signup-button" onClick={handleSubmit}>
          가입하기
        </button>
      </ul>
    </div>
  );
}
