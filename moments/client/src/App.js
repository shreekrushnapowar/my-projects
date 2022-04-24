import React from 'react'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import About from './components/About';
import Activation from './components/Activation';
import Forgetpass from './components/Forgetpass';
import Login from './components/Login';
import Resetpass from './components/Resetpass';
import Signup from './components/Signup';
import Momentstate from './context/moment/Momentstate';
import "./index.css"
// https://undraw.co/illustrations
const App = () => {
  return (

    <div className='main'>
          <Momentstate>
   <Router>
     <Switch>
     <Route exact path='/login' component={Login}/>
     <Route exact path='/signup' component={Signup}/>
     <Route  path='/activation' component={Activation}/>
     <Route  path='/resetpassword' component={Resetpass}/>
     <Route exact path='/forget' component={Forgetpass}/>
     <Route exact path='/about' component={About}/>
     </Switch>
   </Router>
   </Momentstate>
    </div>
    
  )
}

export default App