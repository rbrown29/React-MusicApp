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

    setRating = (song) => {
      song['rating'] += 1
      if (song['rating'] > 5) {
        song['rating'] = 5
      }
      // return this.props.favorites
      this.props.fetchPosts()
   }

   decreaseRating = (song) => {
     song['rating'] -= 1
     if (song['rating'] < 0) {
       song['rating'] = 0
     }
     this.props.fetchPosts()
   }

    render() {
        return (
            <div className={(this.props.showFavs) ? 'show-side' : 'hide-side'}>
              <h2>Your Favorites</h2>
              <ul>
              {this.props.favorites.map((favSong, index) =>
                <li key={index}>
                  <img src={favSong.coverArt}/>
                    {favSong.songName}
                    {/*- {favSong.artistName} - {favSong.albumName} */}
                    <br/>
                    {(favSong.rating === 0)? <p>&#9734;&#9734;&#9734;&#9734;&#9734;</p> : null}
                    {(favSong.rating === 1)? <p>&#9733;&#9734;&#9734;&#9734;&#9734;</p> : null}
                    {(favSong.rating === 2)? <p>&#9733;&#9733;&#9734;&#9734;&#9734;</p> : null}
                    {(favSong.rating === 3)? <p>&#9733;&#9733;&#9733;&#9734;&#9734;</p> : null}
                    {(favSong.rating === 4)? <p>&#9733;&#9733;&#9733;&#9733;&#9734;</p> : null}
                    {(favSong.rating === 5)? <p>&#9733;&#9733;&#9733;&#9733;&#9733;</p> : null}
                  <span className='buttons'>
                  <button onClick={()=>{this.decreaseRating(favSong)}}>&#9734;</button>
                    <button onClick={()=>{this.setRating(favSong)}}>&#9733;</button>
                    <button onClick={()=>{this.removeFavorite(index)}}>Remove</button>
                  </span>
                </li>
              )}
              </ul>
            </div>
        );
    }
}

export default Side;
