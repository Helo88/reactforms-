import { useState } from "react";
import "../style/password.css"
function PasswordInput(props) {
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState(null);
  const [hiddenPass, setHiddenPass] = useState("true");

  function handleChange(e) {
    setPassword(e.target.value);
    e.target.value.length === 0
      ? setPasswordErr("This Field is required")
      : e.target.value.length < 8
      ? setPasswordErr("password can't be less than 8")
      : !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gm.test(e.target.value)
      ? setPasswordErr(
          "password must start by a letter and only letters, numbers and those @$!%*?& are allowed"
        )
      : setPasswordErr(null);
  }

  return (
    <>
    <div className="passwordField my-2  position-relative">
      <input
        type={hiddenPass?"password":"text"}
        className={`form-control col-12 col-md-5 border-1  
            ${passwordErr ? "border-danger" : "border-success"}
            `}
        placeholder={props.placeHolder=="password"?"Enter Your Password":"Confirm Password"}
        name="password"
        value={password}
        onChange={(e) => {
          let selectInput=props.placeHolder==="password"?0:1;
          handleChange(e);
          props.sendErrorPasswordToParent(password, passwordErr,selectInput);
        }}
        id="passwordInputEmail1"
        aria-describedby="passwordHelp"
      />
    
        <i className="bi bi-eye-slash  position-absolute my-3"
            onClick={() => {
                setHiddenPass((value) => !value);
                console.log("hidee  " + hiddenPass);
              }}
        
        ></i>
      

      {/* {console.log(props)} */}
      {/* {props.sendErrorMailToParent(email)} */}
    </div>
    <div>
      <small className="text-danger">{passwordErr}</small>
      </div>
    </>
  );
}
export default PasswordInput;
