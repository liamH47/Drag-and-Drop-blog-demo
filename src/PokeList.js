import React, { Component } from 'react'
import { SortableContainer } from 'react-sortable-hoc'
import PokeTile from './PokeTile'


class PokeList extends Component {
    componentDidMount() {
        console.log('in pokelist', this.props.pokemon)
    }

    renderPokemon() {
        return this.props.pokemon.map(pokemon => <PokeTile key={pokemon.id} id={pokemon.id} image={pokemon.imageUrl} name={pokemon.name} />)
    }
    
    render() {
        return (
            <div className="poke-area">
                {this.renderPokemon()}
            </div>
        );
    }
}

export default PokeList;