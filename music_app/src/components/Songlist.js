import React, { Component } from 'react';
import Songs from './Songs.js'

class Songlist extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className='songlist'>
            <h2>All Music</h2>
            <table>
              <thead>
                <tr>
                  <th>Song</th>
                  <th>Artist</th>
                  <th>Album</th>
                  <th>CoverArt</th>
                </tr>
              </thead>
              <tbody>
                {this.props.music.map((song, index) =>
                  <Songs key={index} songs={song} />
                )}
              </tbody>
            </table>
          </div>
        );
    }
}

export default Songlist;
