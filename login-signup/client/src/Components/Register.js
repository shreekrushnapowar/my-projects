import React from 'react'

function Register() {
    const myStyle = {
        color: "black",
        backgroundColor: "lightblue",
        padding: "10px",
        width:"450px",
        fontFamily: "Arial-black",
         alignContent: "center",
       // alignItems:"center",
      };
    
    return (

        // backgroundColor: "lightblue",width:"450px",aligncontent: "center;"
<div className="d-flex p-2 col-example" >   
<div className="card my-3">
  <div className="card-body " style={myStyle}>
  <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1"   aria-describedby="emailHelp"/>
            
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
              </div>
            <div className="text-center">
               <button type="submit" className="btn btn-primary">Submit</button>
             </div>

            </form>

  </div>
 </div>
</div>

    )
}

export default Register
