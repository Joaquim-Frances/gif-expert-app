import React from 'react'

export const GifGridItem = ( {id, title, url} ) => {

    return (
        <div key={id} className='card animate__animated animate__fadeIn'>
            <img src={url} alt={title} />
           
        </div>
    )
}
