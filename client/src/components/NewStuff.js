import React, { useState, useEffect } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'


export default function NewStuff(props) {

  return (
    <div>
    <Card className="text-center" style={{width: '80%', margin:'auto'}}>
      <Card.Title><h1>{props.item.artist}</h1></Card.Title>
      <Card.Body>
      <ul id="ul" >
      <li>Song Name: {props.item.song}</li>
      <li>Genre: {props.item.genre}</li>
      <li>Year: {props.item.year}</li>
    </ul>
      <h1><Link to={props.item.link}>{props.item.link}</Link></h1>
      </Card.Body>
    <Button variant="warning" >Delete</Button>
    
    </Card>
   
    </div>
  )
}

// let list = []
// export default function NewStuff() {
//   // const [List, setList] = useState()
//   useEffect(()=>{
//        axios.get('/music')
//     .then(res=> {
//       console.log(res.data)
//       list = [...res.data]

//     })
//   })

//   return (
//     <div>
//       <h1>NEW STUFF</h1>
//       {
//         console.log(`LIST: `, list)
//       }

//     </div>
//   )
// }
