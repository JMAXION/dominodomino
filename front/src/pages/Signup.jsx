import React, { useState } from "react";
import SignupStep1 from "../components/SignupStep1";
import SignupStep2 from "../components/SignupStep2";
import SignupStep3 from "../components/SignupStep3";
import PageTitle from "../components/PageTitle2";

export default function Signup() {
  const [props, setProps] = useState({
    title: "회원가입",
    nav1: "회원가입",
    link1: "/signup",
  });
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: false,
    personal: false,
    userId: "",
    userPass: "",
    userPassCheck: "",
    userName: "",
    emailId: "",
    emailDomain: "",
    phoneNumber1: "010",
    phoneNumber2: "",
    zipcode: "",
    address: "",
    detailAddress: "",
  });

  /* step1에서 checkbox 이벤트가 발생하면 부모에서 처리 */
  const handleCheck = (type, isChecked) => {
    if (type === "all") {
      /* service, personal을 ischecked값으로 치환 */
      setFormData({ ...formData, service: isChecked, personal: isChecked });
    } else {
      setFormData({ ...formData, [type]: !formData[type] });
    }
  };

  /* step2에서 발생하는 폼의 이벤트가 발생하면 부모에서 처리 */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddress = (e) => {
    setFormData({ ...formData, zipcode: e.zipcode, address: e.address });
  };

  const nextStep = () => {
    setStep(step + 1);
  };
  const preStep = () => {
    setStep(step - 1);
  };
  return (
    <div className="content">
      <p className="signup-title">
        <PageTitle props={props} />
      </p>
      {step === 1 && (
        <SignupStep1
          next={nextStep}
          formData={formData}
          handleCheck={handleCheck}
          props={props}
        />
      )}
      {step === 2 && (
        <SignupStep2
          pre={preStep}
          next={nextStep}
          formData={formData}
          handleChange={handleChange}
          handleAddress={handleAddress}
          props={props}
        />
      )}
      {step === 3 && <SignupStep3 />}
    </div>
  );
}
