import React from 'react'

function PokeTile(props) {
    return(
        <div className='single-poke'>
            <img src={props.image} alt={props.name} />
        </div>
    )
}
export default PokeTile;