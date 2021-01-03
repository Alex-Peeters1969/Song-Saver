import React from "react"
import SongSaverForm from "./SongSaverForm"
import Links from "../Links"

class SongOverview extends React.Component {
  state = {
    songs: [],
  }

  addSong = (song) => {
    this.setState({
      songs: [song, ...this.state.songs],
    })
  }

  handleDelete(songToBeDeleted) {
      let newSongs = this.state.songs.filter((_song) => {
      return _song !== songToBeDeleted
    })

    this.setState({ songs: newSongs })
  }

  render() {
    return (
      <div>
        <h1>Welcome to your personal SongSaver </h1>
        <nav>
          <Links />
        </nav>


        <SongSaverForm onSubmit={this.addSong} handleDelete={this.handleDelete} />
        {this.state.songs.map((song) => (
          <div className="inputText">
            <table key={song.id}>
              <th>Song: </th>
              <tl>{song.song}</tl>
              <th>Artist: </th>
              <tl>{song.artist}</tl>
              <th> Genre: </th>
              <tl>{song.genre} </tl>
              <th>Rating:</th>
              <tl>{song.rating}</tl>
              <th>
                <button onClick={this.handleDelete.bind(this, song)}>
                  Delete
                </button>
              </th>
            </table>
          </div>
        ))}
      </div>
    )
  }
}

export default SongOverview