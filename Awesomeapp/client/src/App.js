import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import {Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Signup from './components/Signup';
import Login from './components/Login';
import "./index.css";
function App() {
  return (
    <div>
     <Navbar/>
       <Route exact path="/">
             <Home/>
       </Route>
       <Route exact path="/About">
            <About/>
       </Route>
       <Route exact path="/Contact">
            <Contact/>
       </Route>
       <Route exact path="/Login">
            <Login/>
       </Route>
       <Route exact path="/Signup">
            <Signup/>
       </Route>
        
    </div>
  )
}

export default App
