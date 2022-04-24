import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <NavBar NavBar/>
        <Switch>
             <Route exact path="/"><News News key="general"  country="in" category="general"/></Route>
             <Route exact path="/business"><News News key="business" country="in" category="business"/></Route>
             <Route exact path="/entertainment"><News News key="entertainment" country="in" category="entertainment"/></Route>
             <Route exact path="/general"><News News key="general" country="in" category="general"/></Route>
             <Route exact path="/health"><News News key="health" country="in" category="health"/></Route>
             <Route exact path="/science"><News News key="science" country="in" category="science"/></Route>
             <Route exact path="/sports"><News News key="sports" country="in" category="sports"/></Route>
             <Route exact path="/technology"><News News key="technology" country="in" category="technology"/></Route>   
        </Switch>
     
        
         </Router>
      </div>
    )
  }
}

