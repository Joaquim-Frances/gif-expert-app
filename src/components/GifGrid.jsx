import React, { useState, useEffect, Fragment } from 'react'
import { getGif } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    
    const [images, setImages] = useState([]);

    useEffect ( ()=> {
        getGif( category ).then( setImages );
    }, [ category]);
    
    return (
        <Fragment>
        <h3> { category } </h3>
        <div className='card-grid'>
                {
                    images.map( img =>{
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
