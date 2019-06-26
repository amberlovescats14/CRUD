import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import NewStuff from './NewStuff'
import Create from './Create'
import './css/music.css'
import Matt from './Matt'



const Music = (props) => {
  console.log(props.music)
  return (
    // <BrowserRouter>
    <div id="div">
    <div className="container">
    <div style={{height: '40px'}}></div>

      {props.music.map((item, i)=> <NewStuff key={i} item={item} />)}
    <Matt/>
    </div>
    </div>
  )

}


export default Music

