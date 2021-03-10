import React, { Fragment } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'


export const GifGrid = ({category}) => {
    
   
    const { data, loading } = useFetchGifs( category );
    

    // useEffect ( ()=> {
    //     getGif( category ).then( setImages );
    // }, [ category]);
    
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
