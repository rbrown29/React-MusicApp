import React from 'react';
import Header from './components/Header'
import Main from './components/Main'

// import music from './data.js'

let baseUrl = '';

if (process.env.NODE_ENV === 'development') {
  baseUrl = 'https://cors-anywhere.herokuapp.com/https://mighty-earth-87374.herokuapp.com/api'
} else {
  baseUrl = 'https://mighty-earth-87374.herokuapp.com/api'
}

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      music:[],
      favorites: [],
      id:0,
      // stars: 0,
      }
    }

  fetchPosts = () => {
    fetch(`${baseUrl}/music`)
    .then(data=>data.json())
    .then(jData=> {
      this.setState({music:jData})
    }).catch(err=>console.log(err))
  }

  // fetchFavorites = () => {
  //   fetch(`${baseUrl}/favorites`)
  //   .then(data=>data.json())
  //   .then(jData=> {
  //     console.log(jData)
  //   }).catch(err=>console.log(err))
  // }

  handleCreate = (createdSong) => {
    fetch(
    `${baseUrl}/music`, // Use this URL to call your API
    {
      body: JSON.stringify(createdSong), // set the body = the new post set as a string
      method: 'POST', // use POST method to create the new post
      headers: { // set up headers... ?
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }
  )
  .then( createdSong => {
      return createdSong.json() // take the createdPost from above and turn it into json
    }
  )
  .then( jsonedSong => { // take the original array + the new post (jsonedPost)
      this.setState({
        music:jsonedSong // and change state.posts to it
      })
    }).catch( error => console.log(error))
  }

  componentDidMount () {
    this.fetchPosts()
  }

  addToFavorites = (song) => {
    for (var i = 0; i < this.state.favorites.length; i++) {
      if (song.id === this.state.favorites[i].id) {
        alert('Cannot add duplicates!')
        return
      }
    }
    song['rating'] = 0
    this.setState ({
      favorites: [song, ...this.state.favorites],
      id:song.id
    })
  }

    render(){
      // console.log(this.state.favorites);
      // console.log(this.state.stars);
      return(
        <>
          <Header />
          <Main music={this.state.music} addToFavorites={this.addToFavorites} favorites={this.state.favorites} setRating={this.setRating}
          stars={this.state.stars} fetchPosts={this.fetchPosts} handleCreate={this.handleCreate} toggleFavs={this.toggleFavs}/>
        </>
      )
    }
  }
export default App;
