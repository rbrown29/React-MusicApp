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
              <td className='coverart'><img className='covers' onClick={()=>{this.props.addToFavorites(this.props.songs)}} src={this.props.songs.coverArt}/><p className='add' onClick={()=>{this.props.addToFavorites(this.props.songs)}}>Add</p>
              <br /><button className="button1" onClick={()=>{this.props.handleDelete(this.props.songs.id)}}>Remove Song</button></td>
            </tr>
        );
    }
}

export default Songs;
