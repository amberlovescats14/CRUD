import React, { Component } from 'react'
import { Form } from 'react-bootstrap'

export default class Create extends Component {
  render() {
    return (
      <div className="container">
      <div className="formWrapper"
      style={{border: '4px solid red'}}></div>
        <Form>
          <Form.Group controlId="formGroupArtist">
          <Form.Label>Artist:</Form.Label>
          <Form.Control type="text"/>
          </Form.Group>
          <Form.Group controlId="formGroupSong">
          <Form.Label>Song:</Form.Label>
          <Form.Control type="text"/>
          </Form.Group>
          <Form.Group controlId="formGroupGenre">
          <Form.Label>Genre</Form.Label>
          <Form.Control as="select">
          <option>Texas-Country</option>
          <option>Bluegrass-Country</option>
          <option>Classic-Country</option>
          <option>Todays-Country</option>
          </Form.Control>
          </Form.Group>
          <Form.Group controlId="formGroupYear">
          <Form.Label>Year</Form.Label>
          <Form.Control type="text"/>
          </Form.Group>
        </Form>
      </div>
    )
  }
}
