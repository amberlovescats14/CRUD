import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import './css/music.css'



const Music = (props) => {
  console.log(props.music)
  const clickHandle = () => {
    let ul = document.getElementById(ul)
    let show = false
    if(show === false ){
      ul.setAttribute("style", "visibility: visible")
    } else {
      ul.setAttribute("style", "visibility: hidden")
    }
  }
  return (
    // <BrowserRouter>
    <div id="div">
    <div className="container">
    <div style={{height: '40px'}}></div>

      {props.music.map((item, i)=> {
       const link = () => {
          switch(i){
            case 0: 
            return  <Link to="/Wade-Bowen">Music_Video</Link>;
            case 1: 
            return <Link to="/Brandon-Rhyder">Music_Video</Link>;
            case 2: 
            return <Link to="/Pat-Green">Music_Video</Link>;
            case 3: 
            return <Link to="/Stoney-LaRue">Music_Video</Link>;
            case 4: 
            return <Link to="/Brandon-Rhyder">Music_Video</Link>
            default: return "DEFAULT"
          }
        }
        return (
          <Card className="text-center" style={{width: '80%', margin:'auto'}}>
            <Card.Title><h1>{item.artist}</h1></Card.Title>
            <Card.Body>
            <ul id="ul" >
            <li>Song Name: {item.song}</li>
            <li>Genre: {item.genre}</li>
            <li>Year: {item.year}</li>
            {/* <li>{item.link}</li> */}
          </ul>
            <h1>{link()}</h1>
            </Card.Body>
          <Button variant="warning" >Delete</Button>
          
          </Card>
         )
      
        
        
      })}
    </div>
    </div>
  )

}


export default Music

