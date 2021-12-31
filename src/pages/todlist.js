import { useState } from "react";
import { useEffect } from "react";
import TODO from "../components/todo";



function ToDoList() {
//   const [formErrors, setFormErrors] = useState({
//     emailErr: null,
//     passwordErr: null,
//   });
//   const [userFom, setUserForm] = useState({
//     emai: "",
//     password: "",
//   });

//   const formSubmit = (e) => {
//     e.preventDefault();
//     if(!(formErrors.emailErr&&formErrors.passwordErr))
//     {
//       alert("Form Is Submitted")
//     }
//   };
//   function sendMailToParent(text = "", err = "") {
//     console.log("Form email  " + "err:  " + err + "--- text :  " + text);
//     setUserForm({
//       ...userFom,
//       email: text,
//     });

//     setFormErrors({
//       ...formErrors,
//       emailErr: err,
//     });
//   }
const[todo ,setTodo] =useState("")
const[todos ,setTodos] =useState([])

useEffect(()=>{
    console.log("new todo in terminal  "+todo)
},[todo])
useEffect(()=>{
    console.log("new todos in list  ")
    console.log(todos)
    console.log(todos.length)
},[todos])


const formSubmit = (e) => {
        e.preventDefault();
        setTodos(
          [...todos,todo])
        
}
function deleteTodo(index){
  console.log("this is deleted node "+ index)
  console.log(todos)
setTodos(()=>{
  
  // return todos.splice(index,1)
 return todos.slice(0, index).concat(todos.slice(index + 1))
 
})
}
  return (
    <div className="col-12 col-md-12 p-3 mt-5 border border-1 border-success">
      <h1 className="mt-1 mb-1 text-success text-end ms-3"> To Do List!</h1>
      <form
        onSubmit={(e) => {
          //  console.log(sendMailToParent());
          formSubmit(e);
        }}
        className="col-md-8 mx-auto"
       >
       
       <input
        type="text"
        className={`form-control col-12 col-md-8 border-1 `}
        placeholder="Enter New TODO"
        name="todo"
        value={todo}
        onChange={(e) => {
            setTodo(e.target.value)
        }}
        id="nameInputTodo"
        aria-describedby="nameHelp"
      />
        <button type="text" className="btn btn-success mx-auto text-end my-4 ">
         ADD
        </button>
         <ul className="list-group">
            {todos.map((newTodo,index)=>{
              return  <TODO index={index} value={newTodo} 
              deleteTodo={deleteTodo}
              
              />
            })} 
         </ul>
      </form>
    </div>
  );
}

export default ToDoList;
