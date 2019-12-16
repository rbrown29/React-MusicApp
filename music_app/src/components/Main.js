import React, { Component } from 'react';
import Side from './Side'
import Songlist from './Songlist'


class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
      console.log(this.props.music);
        return (
            <div className='main'>
              <Side favorites={this.props.favorites} setRating={this.props.setRating} stars={this.props.stars}/>
              <Songlist music={this.props.music} addToFavorites={this.props.addToFavorites}/>
            </div>
        );
    }
}

export default Main;
