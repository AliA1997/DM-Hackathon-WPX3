import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()
    this.state = {
      pokeList: [],
      currentMovie: {},
      currentPokeItem: null,
    }
  }
  componentDidMount() {
    axios.get('https://pokeapi.co/api/v1/pokedex/').then(res => {
      this.setState({pokeList: res.data.objects[0].pokemon});
  });
    axios.get('https://www.youtube.com/iframe_api').then(res => {
      this.setState({currentMovie: res.data})
    });
  }
  render() {
    console.log(this.state.pokeList);
    return (
      <div className="app">
        <div className='player'><iframe title='pokemon theme song' src='http://www.youtube.com/embed/JuYeHPFR3f0?autoplay=1&enablejsapi=1'></iframe></div>
        <h1>Pokemon</h1>
        {this.state.pokeList.map(p => {
          
          return (
          <div>
            <h6>Name: {p.name}</h6>
            <a href={`https://pokeapi.co/${p.resource_uri}`} style={{textDecoration: 'none'}}>Got to resource url...</a>
          </div>
          );
        })}        
      </div>
    );
  }
}

export default App;
