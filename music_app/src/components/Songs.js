import React, { Component } from 'react';

class Songs extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
              <td>{this.props.songs.songName}</td>
              <td>{this.props.songs.artistName}</td>
              <td>{this.props.songs.albumName}</td>
              <td><img className='covers' src={this.props.songs.coverArt}/></td>
            </tr>
        );
    }
}

export default Songs;
