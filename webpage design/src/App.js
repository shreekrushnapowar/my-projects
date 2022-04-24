// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import React from 'react';
import { Redirect } from 'react-router-dom';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import About from './componets/About';
import Contact from './componets/Contact';
import Home from './componets/Home';
import Services from './componets/Services';
import './index.css'
import Navbar from './componets/Navbar';
// import { Footer } from './componets/Footer';
//npm i bootstrap@5.0.0-alpha1
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
const App = () => {

  return  <div >
   <Router>
       <Navbar/>
         <Switch>
           <Route exact path="/home">
                <Home/>
           </Route>
           <Route exact path="/contact">
             <Contact/>
           </Route>
           <Route exact path="/services">
            <Services/>
           </Route>
           <Route exact path="/about">
               <About/>
           </Route>
           
       
         </Switch>
         <Redirect path="/"/>
         
   </Router>
   {/* <Footer/> */}
  </div>
};

export default App;
