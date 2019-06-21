import React from 'react'
// import {Card, ListGroup, ListGroupItem} from 'reactstrap'


const Music = (props) => {
  console.log(props.music)
  return (
    <div className="container">
      <h1>Music</h1>
      {props.music.map((item, i)=> {
        return <div style={ulStyle}>
          <h1>{item.artist}</h1>
          <ul>
            <li>{item.song}</li>
            <li>{item.genre}</li>
            <li>{item.year}</li>
          </ul>
          </div>

        
        
      })}
    </div>
  )
}

export default Music

const ulStyle = {
  border: '2px solid red'
}