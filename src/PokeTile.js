import React from 'react'
import { SortableElement } from 'react-sortable-hoc'

const PokeTile = SortableElement(props => {
    const { image, name } = props
    return(
        <div className='single-poke'>
            <img src={image} alt={name} />
        </div>
    )
})
export default PokeTile;