import React from 'react'
import { BrowserRouter,Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import Router from '../Router'
import Johnson from '../components/details/Johnson'
import Rhett from '../components/details/Rhett'
import Grande from '../components/details/Grande'
import Starlito from '../components/details/Startlito'
import Gates from '../components/details/Gates'

const ulStyle = {
  border: '2px solid red'
}

const Music = (props) => {
  console.log(props.music)
  return (
    // <BrowserRouter>
    <div className="container">
      <h1>Music</h1>
      {props.music.map((item, i)=> {
       const link = () => {
          switch(i){
            case 0: return  <Link to="/details/CodyJohnson">Music</Link>;
            default: return "DEFAULT"
          }
        }
        return (
          
        <div style={ulStyle}>
          <h1>{item.artist}</h1>
          <ul id="ul">
            <li>{item.song}</li>
            <li>{item.genre}</li>
            <li>{item.year}</li>
            {/* <li>{item.link}</li> */}
            {/* {link()} */}
          </ul>
          </div>
         )
      
        
        
      })}
    </div>
    
  )
}

export default Music

