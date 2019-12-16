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
      stars: 0
      }
    }
    fetchPosts = () => {
    fetch(`${baseUrl}/music`)
    .then(data=>data.json())
    .then(jData=> {
      this.setState({music:jData})
    }).catch(err=>console.log(err))
  }
 componentDidMount () {
    this.fetchPosts()
  }

  addToFavorites = (song) => {
    this.setState ({
      favorites: [song, ...this.state.favorites]
    })
  }
   setRating = () => {
      this.setState ({
        stars: this.state.stars += 1
      })
  }
    render(){
      console.log(this.state.favorites);
      console.log(this.state.stars);
      return(
        <>
          <Header />
          <Main music={this.state.music} addToFavorites={this.addToFavorites} favorites={this.state.favorites} setRating={this.setRating}
          stars={this.state.stars} />
        </>
      )
    }
  }
export default App;
