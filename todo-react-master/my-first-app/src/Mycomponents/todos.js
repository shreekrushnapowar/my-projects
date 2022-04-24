import React from 'react'
import Todo from './todo'
export default function todos(props) {
    return (
        <div className="container">
            <h3>To do list</h3>
            {//to return each arrya element
            props.todos.length===0? "No todos to display":
            props.todos.map((todo)=>{
            return  <Todo todo={todo} onDelete={props.onDelete}/>   
            })}
            
           
       </div>
    )
}
