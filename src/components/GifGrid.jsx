import React, { Fragment } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'
import PropTypes from 'prop-types'



export const GifGrid = ({category}) => {
    
   
    const { data, loading } = useFetchGifs( category );
    
    return (
        <Fragment>
        <h3> { category } </h3>
        {loading && <p> Cargando datos...</p>}
        <div className='card-grid'>
                {
                    data.map( img =>{
                        return(
                        <GifGridItem 
                        key={ img.id }
                        { ...img } />
                        )
                    })
                }
        </div>
        </Fragment>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}