import React, { Component } from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Nav from './components/Nav'
import MusicContainer from './containers/MusicContainer'
import Router from './Router'

class App extends Component {
  // constructor() {
  //   super();
  // }
  // componentDidMount() {
  // }
  render() {
    return (
      <BrowserRouter>
         <div>
               {/* <Link to='/'>Home</Link> */}

        <Nav/>
        <MusicContainer/>
        <Router/>
        </div>
      </BrowserRouter>
    );
  }
}
export default (App);


