import React,{useContext} from 'react'
import noteContext from '../context/notes/noteContext';
function Noteitem(props) {
    const {note,updateNote}=props;
    const context=useContext(noteContext);
    const{deleteNote}=context;
    //const{updateNote}=context;
    return (
        <div className="col d-flex justify-content-center">
        <div className="col-md-3">   
               <div className="card my-3">
                 <div className="card-body">
                  <h5 className="card-title">{note.title}</h5>
                  <p>{note.tag}</p>
                  <p className="card-text">{note.description}</p>
                  {/* arrow function becuase we are going to pass arguments */}
                  <i className="far fa-trash-alt mx-2" onClick={()=>{deleteNote(note._id)
                props.showAlert('deleted successfully','success')}}></i>
                  <i className="far fa-edit mx-2 " onClick={()=>{updateNote(note)}} ></i>
                 </div>
                </div>
        </div>
        </div>
    )
}

export default Noteitem
