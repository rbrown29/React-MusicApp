import React, { Component } from 'react';

class Side extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='side'>
              <h2>Your Favorites</h2>
              <ul>
              {this.props.favorites.map((favSong, index) =>
                <li key={index}>
                  <img src={favSong.coverArt}/> {favSong.songName} - {favSong.artistName} - {favSong.albumName}  <span className='buttons'><button>Rate</button><button>Remove</button></span>
                </li>
              )}
              </ul>
            </div>
        );
    }
}

export default Side;
