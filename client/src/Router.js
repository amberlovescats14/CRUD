import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
// const Route = require('react-router').Route
// const Switch = require('react-router').Switch
import Home from './containers/HomeContainer'
import Johnson from './components/details/Johnson'
import Rhett from './components/details/Rhett'
import Grande from './components/details/Grande'
import Starlito from './components/details/Startlito'
import Gates from './components/details/Gates'




export default class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route  path="/Cody-Johnson" component={Johnson}/>
        <Route  path="/Thomas-Rhett" component={Rhett}/>
        <Route  path="/Ariana-Grande" component={Grande}/>
        <Route  path="/Starlito" component={Starlito}/>
        <Route  path="/Kevin-Gates" component={Gates}/>


      </Switch>
    )
  }
}
