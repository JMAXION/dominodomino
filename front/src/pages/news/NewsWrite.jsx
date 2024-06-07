import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewsWrite() {
  const [newsFormData, setNewsFormData] = useState({
    btitle: "",
    bcontent: "",
  });
  const navigate = useNavigate();

  const handleWrite = (e) => {
    const { name, value } = e.target;
    setNewsFormData({ ...newsFormData, [name]: value });
  };

  /* 등록완료 버튼 */
  const url = "http://localhost:8080/news/write";
  const handleSubmit = () => {
    axios({
      method: "post",
      url: url,
      data: newsFormData,
    })
      .then((res) => {
        console.log("res =>> ", res.data);
        if (res.data.cnt === 1) {
          alert("게시글 등록 완료");
          navigate("/news");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="newsContent-titleBox">
        <h3>게시물 제목</h3>
        <input
          type="text"
          name="btitle"
          value={newsFormData.btitle}
          onChange={handleWrite}
        />
      </div>
      <div className="newsContent-contents">게시물 내용</div>
      <textarea
        name="bcontent"
        value={newsFormData.bcontent}
        onChange={handleWrite}
      ></textarea>
      <div>
        <button type="button" onClick={handleSubmit}>
          작성완료
        </button>
      </div>
    </div>
  );
}
