import React from 'react'

function Contact() {
    return (
        <div> 
            <div className='row'> 
                <div className="d-flex justify-content-between">  
            <div className="card-header text-black  border-right-0" style={{width:"450px",marginLeft: "10px" ,backgroundColor: "00AA9E"}}>
          
             <div className="card-body border-dark">
              this is phone number
               </div>
              
             </div>
             
             <div className="card-header text-black  border-right-0" style={{width:"450px",backgroundColor: "00AA9E"}}>
             <div className="card-body">
                 This is Email Id
               </div>
             </div>
             <div className="card-header text-black  border-right-0" style={{width:"450px",backgroundColor: "00AA9E"}}>
             <div className="card-body">
                 This is Address
               </div>
             </div>
             </div>
            </div>
           
           <div className='container'>
               <div className='row'>
                  <form id="contact_form">

                  </form>
               </div>
           </div>
        </div>
    )
}

export default Contact
