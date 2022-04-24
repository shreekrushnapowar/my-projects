import React,{useContext,useEffect,useRef,useState} from 'react'
import { useHistory } from 'react-router-dom';
import noteContext from '../context/notes/noteContext';
import AddNote from './AddNote';
import Noteitem from './Noteitem';
function Notes(props) {

  const context=useContext(noteContext);
  const {notes, getNotes,editNote} = context;
   const ref=useRef(null);
   const refClose=useRef(null);
  const [note, setNote] = useState({id:"",etitle:"",edescription:"",etag:""})
 const history=useHistory(null);
 console.log(localStorage.getItem('token'),'token')
  useEffect(() => {
    if(localStorage.getItem('token'))
    {getNotes();}
    else{
      history.push("/login");
    }
    
    // eslint-disable-next-line
  }, [])
  const updateNote=(currentNote)=>{
    
  ref.current.click();
  
    setNote({id:currentNote._id,etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag});
    props.showAlert('Updated successfully','success')
  }
  const handleClick=(e)=>
  {  
    console.log('updating notes',note);
    editNote(note.id,note.etitle,note.edescription,note.etag)
    refClose.current.click();
     //addNote(note.title,note.description,note.tag="defualt");
  }
  const onChange=(e)=>{
    //... spread opertater je properties already ahet te rahude ntr je yetat te update or overwrite kar. target name je ahe tech value pan kar
    setNote({...note,[e.target.name]:e.target.value})
  }

    return (
      <>
      
      <button ref={ref} type="button" className="d-none btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Launch demo modal
      </button>


<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"  aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className="mb-3">
                   <label htmlFor="title" className="form-label">Title</label>
                   <input type="text" className="form-control" id="etitle" value={note.etitle} name="etitle" aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
          
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">Description</label>
                  <input type="text" className="form-control" id="edescription" value={note.edescription} name="edescription" onChange={onChange} minLength={5} required/>
                </div>
                <div className="mb-3">
                  <label htmlFor="etag" className="form-label">Tag</label>
                  <input type="text" className="form-control" id="etag" value={note.etag} name="etag" onChange={onChange}/>
                </div>
      </div>
      <div className="modal-footer">
        <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button disabled={note.etitle.length<5 || note.edescription.length<5} onClick={handleClick} type="button" className="btn btn-primary">Update changes</button>
      </div>
    </div>
  </div>
</div>
      <AddNote showAlert={props.showAlert}/>
         <div className="row my-3">  
         <h2>Your notes</h2> 
      <div className="container">
      {notes.length===0 && 'No notes to display'}
      </div>

         
         {notes.map((note)=>{
          return <Noteitem key={note._id} note={note} updateNote={updateNote} showAlert={props.showAlert}/>
        })} 
        </div> 
        </>
    )
}

export default Notes
