import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

export default class Create extends Component {
  constructor(props){
    super(props)
    this.state={
      artist: "",
      song: "",
      genre: "",
      year: ""
    }
  }
  handleSubmit = () => {
    console.log(`SUBMIT`)
  }
  render() {
    return (
      <div className="container">
      <div className="formWrapper"
      style={{border: '4px solid red', borderRadius: '8px', padding:'10px'}}>
        <Form>
          <Form.Group controlId="formGroupArtist">
          <Form.Label>Artist:</Form.Label>
          <Form.Control type="text" onChange={(e)=> this.setState({ artist: e.target.value })}/>
          </Form.Group>
          <Form.Group controlId="formGroupSong">
          <Form.Label>Song:</Form.Label>
          <Form.Control type="text" onChange={(e)=> this.setState({ song:e.target.value })}/>
          </Form.Group>
          <Form.Group controlId="formGroupGenre">
          <Form.Label>Genre</Form.Label>
          <Form.Control as="select" onChange={(e)=> this.setState({ genre: e.target.value })}>
          <option>Texas-Country</option>
          <option>Bluegrass-Country</option>
          <option>Classic-Country</option>
          <option>Todays-Country</option>
          </Form.Control>
          </Form.Group>
          <Form.Group controlId="formGroupYear">
          <Form.Label>Year</Form.Label>
          <Form.Control type="text" onChange={(e)=> this.setState({ year:e.target.value })}/>
          </Form.Group>
          <Button variant="primary" type="submit" onSubmit={this.handleSubmit}>Add to Favorites</Button>
        </Form>
        </div>
      </div>
    )
  }
}
