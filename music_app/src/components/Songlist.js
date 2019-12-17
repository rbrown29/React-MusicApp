import React, { Component } from 'react';
import Songs from './Songs.js'

class Songlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
          songName:'',
          artistName:'',
          albumName: '',
          coverArt: ''
        }
    }

    handleChange = (event) => {
      this.setState({[event.target.id] : event.target.value})
    }

    handleSubmit = (event) => {
      event.preventDefault()
      this.props.handleCreate(this.state)
    }


    render() {
        return (
          <div className='songlist'>
            <h2>All Music</h2>
            <form onSubmit={this.handleSubmit}>
                <input type="text" id="songName" value={this.state.songName} onChange={this.handleChange}/>
                <input type="text" id="artistName" value={this.state.artistName} onChange={this.handleChange}/>
                <input type="text" id="albumName" value={this.state.albumName} onChange={this.handleChange}/>
                <input type="text" id="coverArt" value={this.state.coverArt} onChange={this.handleChange}/>
              <input className="input1" type="submit" value="Add to Music List"/>
            </form>
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Artist</th>
                  <th>Album</th>
                  <th>CoverArt</th>
                </tr>
              </thead>
              <tbody>
                {this.props.music.map((song, index) =>
                  <Songs key={index} songs={song} addToFavorites={this.props.addToFavorites} handleDelete={this.props.handleDelete}/> 
                )}
              </tbody>
            </table>
          </div>
        );
    }
}

export default Songlist;
