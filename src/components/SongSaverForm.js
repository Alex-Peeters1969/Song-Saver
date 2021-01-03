  
import React from "react"
import shortid from "shortid"


class SongSaverForm extends React.Component {
  state = {text: "", }
    
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      song: this.state.song,
      artist: this.state.artist,
      genre: this.state.genre,
      rating: this.state.rating,
    })
    this.setState({
      song: "",
      artist: "",
      genre: "",
      rating: "",
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="input"
          name="song"
          value={this.state.song}
          onChange={this.handleChange}
          placeholder="Song"
          maxLength="20"
        />

        <input
          className="input"
          name="artist"
          value={this.state.artist}
          onChange={this.handleChange}
          placeholder="Artist"
          maxLength="20"
        />

        <select
          className="input"
          type="genre" 
          name="genre"
          value={this.state.genre}
          onChange={this.handleChange}>
            <option value=""></option>
            <option value="Rock">Rock</option>
            <option value="jazz">jazz</option>
            <option value="Pop">Pop</option>
        </select>
      
        <select
          className="input"
          name="rating"
          type="number"
          min="1" max="5"
          value={this.state.rating}
          onChange={this.handleChange}>
            <option value=""></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>            
     
        <button className="input" onClick={this.handleSubmit}>Add Song</button>
                 
      </form>

    )
  }
}

export default SongSaverForm