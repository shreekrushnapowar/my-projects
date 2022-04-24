
import React from 'react'
import Header from "./Mycomponents/Header";
import {Footer} from "./Mycomponents/Footer";
import Todos from "./Mycomponents/todos";
import AddTodo from "./Mycomponents/AddTodo";
import {useState} from 'react';
function App() {
  const onDelete=(todo)=>{
   console.log('i am on delete',todo);
   setTodos(todos.filter((e)=>{
        return e!==todo;

   }))
  }
  const  addTodo=(title,desc)=>
  {
        console.log('hello');
        let sno=todos[todos.length-1].sno+1;
        const mytodo={
          sno:sno,
          name:title,
          exam:desc,

        }
        setTodos([...todos,mytodo]);
        console.log(mytodo);
        console.log(todos.length);
  }
 const [todos, setTodos] = useState([
    {
      sno:1,
      name:"ARMY",
      exam:"CDSE"
    },
    {
      sno:2,
      name:"AIRFORCE",
      exam:"AFCAT"
    },
    {
      sno:3,
      name:"NAVY",
      exam:"INET"
    }
  ]);
  return (
    <>
         <Header title="this is my first app" searchbar={true}/>
         <AddTodo addTodo={addTodo}/>
          <Todos todos={todos} onDelete={onDelete}/>   
         <Footer/>
    </>
    
  );
}

export default App;
