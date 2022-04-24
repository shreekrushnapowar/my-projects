import React from 'react'

export default function todo({todo ,onDelete}) {
    return (
        <div>
            <h4> {todo.sno}</h4>
            <p>{todo.name}</p>
            <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>delete</button>
             
        </div>
    )
}
