
import { SortableContainer } from 'react-sortable-hoc'
import PokeTile from './PokeTile'


const PokeList = SortableContainer(({ pokemon }) => {
    return (
        <div className='poke-area'>
            {pokemon.map((singlePoke, i) => 
              <PokeTile
                index={i} 
                key={singlePoke.id} 
                id={singlePoke.id} 
                image={singlePoke.imageUrl} 
                name={singlePoke.name} 
              />
            )}
        </div>
    );
});
        // {pokemon.map(pokemon => <PokeTile key={pokemon.id} id={pokemon.id} image={pokemon.imageUrl} name={pokemon.name} />)}

export default PokeList;