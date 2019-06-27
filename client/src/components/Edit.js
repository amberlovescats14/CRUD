import React, { Component } from 'react'
import axios from 'axios'

export default class Edit extends Component {
  constructor(props){
    super(props)
    this.state = {
      artist: "",
      song: "",
      genre: "",
      year: 0
    }
  }
  componentDidMount() {
    axios.get('/music/'+this.props.match.params.id)
      .then(res => {
        this.setState({ 
         artist : res.data.artist,
         song: res.data.song,
         genre: res.data.genre,
         year: res.data.year
          });
      })
  }
  handleArtist = (e) => {
    this.setState({ artist: e.target.value  });
  }
  
  render() {
    return (
      <div>
        <h1>Edit {this.state.artist}...</h1>
        <div className="container bg-dark text-light">
        <form>
          <label for="artist">Artist: </label>
          <input type="text" name="artist" value={this.state.artist}
          onChange={this.handleArtist}/> <br/>
          <label for="song">Song: </label>
          <input type="text" name="song" value={this.state.song}/>
          
        </form>
        </div>
      </div>
    )
  }
}
