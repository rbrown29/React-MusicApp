import React, { Component } from 'react';

class Songs extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr className='songrows'>
              <td>{this.props.songs.songName}</td>
              <td>{this.props.songs.artistName}</td>
              <td>{this.props.songs.albumName}</td>
              <td><img className='covers' onClick={()=>{this.props.addToFavorites(this.props.songs)}} src={this.props.songs.coverArt}/><p className='cover'>Add</p></td>
               <button onClick={()=>{this.props.handleDelete(this.props.songs)}}>Delete from database</button>
            </tr>
        );
    }
}

export default Songs;
