import React, { Component } from 'react';
import Side from './Side'
import Songlist from './Songlist'


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showFavs: true
        }
    }

    toggleFavs = () => {
      this.setState({
        showFavs: !this.state.showFavs
      })
      // console.log(this.state.showFavs);
    }
    render() {
      // console.log(this.props.music);
        return (
            <div className='main'>
              <button className='toggle' onClick={this.toggleFavs}>{(this.state.showFavs)? 'Hide Favs':'Show Favs'}</button>
              <Side favorites={this.props.favorites} setRating={this.props.setRating} stars={this.props.stars} fetchPosts={this.props.fetchPosts} showFavs={this.state.showFavs}/>
              <Songlist music={this.props.music} addToFavorites={this.props.addToFavorites} handleCreate={this.props.handleCreate}
              handleDelete={this.props.handleDelete}/>

            </div>
        );
    }
}

export default Main;
