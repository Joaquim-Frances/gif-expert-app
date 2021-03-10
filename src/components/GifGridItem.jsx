import React from 'react'

export const GifGridItem = ( {id, title, url} ) => {

    return (
        <div key={id} className='card'>
            <img src={url} alt={title} />
            <p> {title} </p>
        </div>
    )
}
