import './App.css';
import React, { Component } from 'react'
import PokeList from './PokeList'

const pokeObj = [
  {
    id: 1,
    name: 'Bulbasaur',
    imageUrl: './img/bulbasaur.png'
  },
  {
    id: 2,
    name: 'Charmander',
    imageUrl: './img/charmander.png'
  },
  {
    id: 3,
    name: 'Squirtle',
    imageUrl: './img/squirtle.png'
  },
  {
    id: 4,
    name: 'Chikorita',
    imageUrl: './img/chikorita.png'
  },
  {
    id: 5,
    name: 'Cyndaquil',
    imageUrl: './img/cyndaquil.png'
  },
  {
    id: 6,
    name: 'Totodile',
    imageUrl: './img/totodile.png'
  },
  {
    id: 7,
    name: 'Treecko',
    imageUrl: './img/treecko.png'
  },
  {
    id: 8,
    name: 'Torchic',
    imageUrl: './img/torchic.png'
  },
  {
    id: 9,
    name: 'Mudkip',
    imageUrl: './img/mudkip.png'
  },
]

// const imgArray = [
//   , , , , , , , , ]

class App extends Component {

  state = {
    pokemon: pokeObj
  }

  componentDidMount() {
    console.log(this.state)
  }


  render(){
    return (
        <div className='wrapper'>
          <h1> Drag and Drop Pokemon!</h1>
          <div >
            <PokeList pokemon={pokeObj} />
          </div>
        </div>
    );
  }
}

export default App;
