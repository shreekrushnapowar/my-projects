import React from "react";
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Custemor_Details from "./Components/Custemor_Details";
import Navbar from "./Components/Navbar";
import Recharge from "./Components/Recharge";
import Recharge_details from "./Components/Recharge_details";
import Register from "./Components/Register";


function App() {
  return (
     <div>
    <Router>
       <Navbar/>
       <div className="container">
        <Switch>
         <Route exact path="/Register">
             <Register/>
          </Route>
          <Route exact path="/Recharge">
              <Recharge/>
          </Route>
          <Route exact path="/Custemor_Details">
             <Custemor_Details/>
          </Route>
          <Route exact path="/Recharge_details">
           <Recharge_details/>
          </Route>

        </Switch> 
        </div>
        </Router>
 
     </div>
  );
}

export default App;
