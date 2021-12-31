import { useState } from "react";
import { useEffect } from "react";

import EmailInput from "../components/emailInput";
import PasswordInput from "../components/passwordInput";

function LoginForm() {
  const [formErrors, setFormErrors] = useState({
    emailErr: null,
    passwordErr: null,
  });
  const [userFom, setUserForm] = useState({
    email: "",
    password: "",
  });

  const formSubmit = (e) => {
    e.preventDefault();
    if(!(formErrors.emailErr&&formErrors.passwordErr))
    {
      alert("Form Is Submitted")
    }
  };
  function sendMailToParent(text = "", err = "") {
    setUserForm({
      ...userFom,
      email: text,
    });

    setFormErrors({
      ...formErrors,
      emailErr: err,
    });
  }
  function sendPasswordToParent(text, err) {
    setUserForm({
      ...userFom,
      password: text,
    });
    setFormErrors({
      ...formErrors,
      passwordErr: err,
    });
  }
  useEffect(()=>{
    console.log("Use Eddct login emailErr "+formErrors.emailErr +"  passwordErr  "+formErrors.passwordErr)
  },[formErrors.emailErr,formErrors.passwordErr])

  return (
    <div className="col-12 col-md-5 p-3">
      <h2 className="mt-1 mb-1  text-success"> Login Form</h2>
      <form
        onSubmit={(e) => {
          //  console.log(sendMailToParent());
          formSubmit(e);
        }}
        className=" my-4 border border-round border-4 border-success p-3">
        <EmailInput sendErrorMailToParent={sendMailToParent} />
        {/* <div>
          <small className="text-danger">{formErrors.emailErr}</small>
        </div> */}
        <PasswordInput placeHolder="password" sendErrorPasswordToParent={sendPasswordToParent} />
        {/* <div>
          <small className="text-danger">{formErrors.passwordErr}</small>
        </div> */}
        <button type="submit" className="btn btn-success text-center my-4 ms-5">
         Log In
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
