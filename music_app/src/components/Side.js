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
    setRating = (index) => {
      this.setState ( {
        this.props.setRating(),
        this.props.favorites.push(index, this.props.stars)
      })
     }
   
    render() {
        return (
            <div className='side'>
              <h2>Your Favorites</h2>
              <ul>
              {this.props.favorites.map((favSong, index) =>
                <li key={index}>
                  <img src={favSong.coverArt}/> {favSong.songName} - {favSong.artistName} - {favSong.albumName} - <br /> {this.props.stars} - STARS <span className='buttons'><button onClick={()=>{this.setRating()}}>Rate</button><button onClick={()=>{this.removeFavorite(index)}}>Remove</button></span>
                </li>
              )}
              </ul>
            </div>
        );
    }
}

export default Side;
