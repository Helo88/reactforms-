import { useState } from "react";

function TODO(props) {
  const [ done, setDone] = useState(false);
 

  return(
  <>
  <li key={props.index} className={`list-group-item position-realtive
   ${done?"text-decoration-line-through":"text-decoration-none"}
  `}>
  {props.value}
  <i className="d-inline-block position-absolute me-2 end-0 bi bi-check-circle-fill"
  onClick={()=>{
    setDone(!done)
  }}
  ></i>

  <i className=" d-inline-block position-absolute me-5 end-0 bi bi-slash-circle-fill"
  onClick={()=>{
    props.deleteTodo(props.index)
  }} 
    ></i>
  
  </li>
  </>
  );
}
export default TODO;
