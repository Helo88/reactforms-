import { useState } from "react";

function NameInput(props) {
  const [ name, setName] = useState("");
  const [ nameErr, setNameErr] = useState(null);

  function handleChange(e,selector) {
    //  console.log("selector is  "+selector)
    setName(e.target.value);
    e.target.value.length === 0
      ? setNameErr("This Field is required")
      : e.target.value.length < 4
      ? setNameErr("This Field can't be less than 4 characters")
      : setNameErr(null);

      if(selector===1){
         /\s/g.test(e.target.value)
        ? setNameErr("User Name can't contain white spaces")
        : setNameErr(null);
  
      }
  }

  return (
    <div className="nameField my-2  position-relative">
      <input
        type="text"
        className={`form-control col-12 col-md-5 border-1  
            ${ nameErr ? "border-danger" : "border-success"}
            `}
        placeholder={props.placeHolder==="userName"?"Enter Your User Name":"Enter Your Name"}
        name="name"
        value={name}
        onChange={(e) => {
          let selectInput=props.placeHolder==="userName"?1:0;
          handleChange(e,selectInput);
          props.sendErrorNameToParent( name, nameErr,selectInput);
        }}
        id="nameInputEmail1"
        aria-describedby="nameHelp"
      />
        <div>
          <small className="text-danger">{nameErr}</small>
        </div>
    </div>
  );
}
export default NameInput;
