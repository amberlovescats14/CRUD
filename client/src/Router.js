import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
// const Route = require('react-router').Route
// const Switch = require('react-router').Switch
import HomeContainer from './containers/HomeContainer'
import MusicContainer from './containers/MusicContainer'
import Rhyder from './components/details/Rhyder'
import Bowen from './components/details/Bowen'
import Green from './components/details/Green'
import LaRue from './components/details/LaRue'
import Rogers from './components/details/Rogers'
import Create from './components/Create'



export default class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact strict path="/" component={HomeContainer}/>
        <Route exact strict path="/Music" component={MusicContainer}/>
        <Route exact strict path="/Brandon-Rhyder" component={Rhyder}/>
        <Route exact strict path="/Wade-Bowen" component={Bowen}/>
        <Route exact strict path="/Pat-Green" component={Green}/>
        <Route exact strict path="/Stoney-LaRue" component={LaRue}/>
        <Route exact strict path="/Randy-Rogers" component={Rogers}/>
        <Route exact strict path="/Create" component={Create}/>


      </Switch>
    )
  }
}
