import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import axios from 'axios'
// import {Link} from 'react-router-dom'
const Cards = props => (
  <Card className="container">
  <Card.Title><h1>{props.item.artist}</h1></Card.Title>
  <Card.Body>
  Song: {props.item.song} <br/>
  Genre: {props.item.genre} <br/>
  Year: {props.item.year}

  </Card.Body>
  </Card>
)

export default class Music extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    axios.get('/music')
      .then(res=>{
       
        this.setState({ data: [...res.data ] });
      })
  }
  sendItems = () => {
   return this.state.data.map(eachItem => {
     return <Cards item={eachItem} key={eachItem.id}/>
   })
  }
  render() {
    return (
      <div className="bg-dark"
      style={{width: '100vw', height: '100vh'}}>
        <h1>music</h1>
        {this.sendItems()}
        {/* <Cards /> */}
      </div>
    )
  }
}











// import React from 'react'
// import { Link } from 'react-router-dom'
// import { Card, Button } from 'react-bootstrap'
// import NewStuff from './NewStuff'
// // import Create from './Create'
// import './css/music.css'
// import Matt from './Matt'

// const Cards = (props) => {

//   return (
//     <div>
//     <Card className="text-center" style={{width: '80%', margin:'auto'}}>
//       <Card.Title><h1>{props.item.artist}</h1></Card.Title>
//       <Card.Body>
//       <ul id="ul" >
//       <li>Song Name: {props.item.song}</li>
//       <li>Genre: {props.item.genre}</li>
//       <li>Year: {props.item.year}</li>
//     </ul>
//       <h1><Link to={props.item.link}>{props.item.link}</Link></h1>
//       </Card.Body>
//     <Button variant="warning" >Delete</Button>
    
//     </Card>
   
//     </div>
//   )
// }

// //MAIN COMPONENT
// const Music = (props) => {
//   console.log(props.music)
//   return (
//     // <BrowserRouter>
//     <div id="div">
//     <div className="container">
//     <div style={{height: '40px'}}></div>

//       {props.music.map((item, i)=> <Cards key={i} item={item} />)}
//     <Matt/>
//     </div>
//     </div>
//   )

// }


// export default Music

