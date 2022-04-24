import React from 'react'
import {useState} from 'react'


export default function AddTodo({addTodo}) {
    const [title,settitle]=useState("");
    const [desc,setdesc]=useState("");
    const submit=(e)=>{
        e.preventDefault();
         if(!title||!desc)
         alert("title or desc is missing");
         else
         {
              addTodo(title,desc);
         }
        }
    return (
        <div className="container my-3" >
            <h3>Add a Todo</h3>
        <form onSubmit={submit}>
        <div className="mb-3">
             <label htmlFor="title" className="form-label"  >Todo title</label>
             <input type="Title"value={title} onChange={(e)=>(settitle(e.target.value))} className="form-control" id="exampleInputEmail1"/>
            
        </div>
        <div className="mb-3">
              <label htmlFor="desc" className="form-label" >add description</label>
              <input type="text" value={desc} onChange={(e)=>(setdesc(e.target.value))} className="form-control" id="desc"/>
        </div>
             <button type="submit" className="btn btn-success">Submit</button>
        </form>
        </div>
    )
}
