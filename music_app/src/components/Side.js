import React, { Component } from 'react';

class Side extends Component {
    constructor(props) {
        super(props);
    }
    removeFavorite = (song) => {
        this.setState (
         this.props.favorites.splice(song, 1)
        )
    }
   
    render() {
        return (
            <div className='side'>
              <h2>Your Favorites</h2>
              <ul>
              {this.props.favorites.map((favSong, index) =>
                <li key={index}>
                  <img src={favSong.coverArt}/> {favSong.songName} - {favSong.artistName} - {favSong.albumName}  <span className='buttons'><button onClick={()=>{}}>Rate</button><button onClick={()=>{this.removeFavorite(favSong)}}>Remove</button></span>
                </li>
              )}
              </ul>
            </div>
        );
    }
}

export default Side;
