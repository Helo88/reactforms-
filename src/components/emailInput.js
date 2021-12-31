import { useState } from "react";

function EmailInput (props){
const [email,setEmail]=useState("")
const [emailErr,setEmailErr]=useState(null)
 
 
function handleChange(e){
  
    setEmail(e.target.value);
    
}
function viewError(e){
  e.target.value.length === 0
  ? setEmailErr("This Field is required")
  :/^[a-zA-Z]+(([0-9]*)|([_.-]*[a-zA-Z0-9]*))*@{1}[a-zA-Z]+([.]*[a-zA-Z]*)*[._-](com|edu|net)$/gm.test(e.target.value) 
  ? setEmailErr(null)
  : setEmailErr("wrong format") 
  console.log("emailErr  "+emailErr +"----text "+e.target.value)
}
console.log("email outside  "+emailErr +"----")
    return (
        <>
        <input
            type="email"
            
            className={`form-control col-12 col-md-5 my-2 border-1
            ${emailErr ? "border-danger" : "border-success"}
            `}
            placeholder="Enter Your Email"
            name="username"
            value={email}
            onChange={(e) => {handleChange(e);
              viewError(e)
               props.sendErrorMailToParent(email,emailErr)
              }}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          
          />
        
        {/* {console.log(props)} */}
        {/* {props.sendErrorMailToParent(email)} */}
        
        <div>
          <small className="text-danger">{emailErr}</small>
        </div>
        </>
        
    )
}
export default EmailInput;