import React,{useContext,useState} from 'react'
import noteContext from '../context/notes/noteContext';
function AddNote(props) {
    const context=useContext(noteContext);
    const{addNote}=context;
    const [note, setNote] = useState({title:"",description:"",tag:""})
    
    const handleClick=(e)=>
    {  e.preventDefault();
       addNote(note.title,note.description,note.tag);
        setNote({title:"",description:"",tag:""})
        props.showAlert('Added successfully','success')
    }
    const onChange=(e)=>{
      //... spread opertater je properties already ahet te rahude ntr je yetat te update or overwrite kar. target name je ahe tech value pan kar
      setNote({...note,[e.target.name]:e.target.value})
    }
    return (
        <div>
            <div className="container"> 
               <h2>Add a Note</h2> 
                <form>
                <div className="mb-3">
                   <label htmlFor="title" className="form-label">Title</label>
                   <input type="title" className="form-control" id="title" name="title" value={note.title} aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
          
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} minLength={5} required/>
                </div>
                <div className="mb-3">
                  <label htmlFor="Tag" className="form-label">Tag</label>
                  <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange}/>
                </div>
                    <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddNote
