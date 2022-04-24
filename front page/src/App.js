import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './components/Home';
import "./app.css";
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Router>
    <div>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/About' component={About}/>
        <Route exact path='/Services' component={Services}/>
        <Route exact path='/Contact' component={Contact}/>
        <Route exact path='/Login' component={Login}/>
        <Route exact path='/register' component={Register}/> 
        <Route exact path='/dashboard' component={Dashboard}/> 
        
       </Switch>
       <Footer/>    
    </div>
    </Router>
  )
}

export default App