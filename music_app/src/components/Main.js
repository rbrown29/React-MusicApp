import React, { Component } from 'react';
import Side from './Side'
import Songlist from './Songlist'


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showFavs: false
        }
    }

    toggleFavs = () => {
      this.setState({
        showFavs: !this.state.showFavs
      })
      console.log(this.state.showFavs);
    }
    render() {
      // console.log(this.props.music);
        return (
            <div className='main'>
              <button onClick={this.toggleFavs}>Show Favs</button>
              {(this.state.showFavs) ? <Side favorites={this.props.favorites} setRating={this.props.setRating} stars={this.props.stars} fetchPosts={this.props.fetchPosts} /> : null}

              <Songlist music={this.props.music} addToFavorites={this.props.addToFavorites} handleCreate={this.props.handleCreate}/>
            </div>
        );
    }
}

export default Main;
