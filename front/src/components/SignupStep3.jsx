import { Link, useNavigate } from "react-router-dom";

export default function SignupStep3() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="signup">
      <h2>CONGRATULATION!</h2>
      <img src="https://www.joseilbo.com/gisa_img_origin/16872229291687222929_joseedu_origin.jpg" />
      <p>회원가입에 성공하셨습니다.</p>

      <button type="button" onClick={handleLogin}>
        로그인
      </button>
    </div>
  );
}
