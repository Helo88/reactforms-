import { useState } from "react";
import { useEffect } from "react";
import EmailInput from "../components/emailInput";
import NameInput from "../components/nameInput";
import PasswordInput from "../components/passwordInput";

function RegisterForm() {
  const [formErrors, setFormErrors] = useState({
    nameErr:null,
    emailErr: null,
    userNameErr:null,
    passwordErr: null,
    confirmPasswordErr:null

  });
  const [userForm, setUserForm] = useState({
    name:"",
    email: "",
    userName:"",
    password: "",
    confirmPassword:""
  });

  const formSubmit = (e) => {
    console.log("Form submitemail  "+userForm.email);
    e.preventDefault();
    // if  (userForm.password.length==0||userForm.confirmPassword.length==0 ||userForm.name.length==0
    //   ||userForm.userName.length==0 ||userForm.email.length==0
    // )
    // {
    //   console.log("fill required fields")
    // }
  };

  useEffect(()=>{
    console.log("Use Effect emailErr "+formErrors.emailErr +"  passwordErr  "+formErrors.passwordErr+"user "+formErrors.userNameErr)
     console.log("use effect confirm pass  "+formErrors.confirmPasswordErr+" ----- " + formErrors.nameErr)


    if ((formErrors.passwordErr || formErrors.confirmPasswordErr ||formErrors.nameErr
      ||formErrors.userNameErr ||formErrors.emailErr)
    )
      {
    
    console.log("fix errors  "+formErrors.emailErr)

   }
   else if(userForm.password.length==0||userForm.confirmPassword.length==0 ||userForm.name.length==0
    ||userForm.userName.length==0 ||userForm.email.length==0
  )
  {  
    console.log("fill required fields"+userForm.password.length+" -- "+userForm.confirmPassword.length+" -- "
    +userForm.name.length + " -- "+userForm.userName.length +" -- "+userForm.email.length
    )

     
    console.log("fill required fields "+userForm.password+" -- "+userForm.confirmPassword+" -- "
    +userForm.name + " -- "+userForm.userName +" -- "+userForm.email
    )
  }
   else{
     console.log("jdjsjssjjk")
     if (userForm.password !== userForm.confirmPassword){
        console.log("fx passswords")
     }
     else {
       console.log("ready to submit")
     }
    
   }
  },[formErrors,userForm])
  // [formErrors.emailErr,formErrors.passwordErr,formErrors.confirmPasswordErr,formErrors.userNameErr,formErrors.nameErr])

  function sendMailToParent(text, err ) {
    setUserForm({
      ...userForm,
      email: text,
    });

    setFormErrors({
      ...formErrors,
      emailErr: err,
    });
  }
  function sendPasswordToParent(text, err,pass=0) {
   
    if(pass===0){
   
    setUserForm({
      ...userForm,
      password: text,
    });
    setFormErrors({
      ...formErrors,
      passwordErr: err,
    });
  }
  else{
  
    setUserForm({
      ...userForm,
      confirmPassword: text,
    });
    setFormErrors({
      ...formErrors,
      confirmPasswordErr: err,
    });
  }
  }
  function sendNameToParent(text, err,selectName=0) {
    
    if(selectName===0){
     
    setUserForm({
      ...userForm,
      name: text,
    });
    setFormErrors({
      ...formErrors,
      nameErr: err,
    });
  }
  else{
   
    setUserForm({
      ...userForm,
      userName: text,
    });
    setFormErrors({
      ...formErrors,
      userNameErr: err,
    });
  }
  }


  return (
    <div className="col-12 col-md-5 offset-0 offset-md-1 ">
      <h2 className="mt-3 mb-1  text-success"> Register Form</h2>
      <form
        onSubmit={(e) => {
          //  console.log(sendMailToParent());
          formSubmit(e);
        }}
        className=" my-4 border border-round border-4 border-success p-3">
           {/* *************************Name********************************** */}
        <NameInput placeHolder="name" sendErrorNameToParent={sendNameToParent} />
        {/* <div>
          <small className="text-danger">{formErrors.passwordErr}</small>
        </div> */}
        {/* ***************************Email******************************** */}
        <EmailInput sendErrorMailToParent={sendMailToParent} />
        {/* <div>
          <small className="text-danger">{formErrors.emailErr}</small>
        </div> */}
         {/* **************************user Name********************************* */}
        <NameInput placeHolder="userName" sendErrorNameToParent={sendNameToParent}/>
        {/* <div>
          <small className="text-danger">{formErrors.passwordErr}</small>
        </div> */}
         {/* ***************************Password******************************** */}
        <PasswordInput placeHolder="password" sendErrorPasswordToParent={sendPasswordToParent} />
        {/* <div>
          <small className="text-danger">{formErrors.passwordErr}</small>
        </div> */}
        {/* ****************************Confirm Password***************************************** */}
        <PasswordInput placeHolder="confirmPassword"sendErrorPasswordToParent={sendPasswordToParent} />
        {/* <div>
          <small className="text-danger">{formErrors.passwordErr}</small>
        </div> */}
        {/* **************************Submit Password********************************* */}
        <button type="submit" className="btn btn-success text-center my-4 ms-5">
          Submit
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
