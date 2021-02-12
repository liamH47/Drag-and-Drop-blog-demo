import './App.css';
import React, { Component } from 'react'
import PokeList from './PokeList'
import arrayMove from 'array-move'
import pokeObj from './pokeObj'

class App extends Component {

  state = {
    pokemon: pokeObj
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({pokemon}) => ({
      pokemon: arrayMove(pokemon, oldIndex, newIndex),
    }));
  }

  render(){
    return (
        <div className='wrapper'>
          <h1> Drag and Drop Pokemon!</h1>
          <div >
            <PokeList onSortEnd={this.onSortEnd} pokemon={this.state.pokemon} axis='xy'/>
          </div>
        </div>
    );
  }
}

export default App;
