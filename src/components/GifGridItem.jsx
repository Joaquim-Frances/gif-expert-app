import React from 'react'
import PropTypes from 'prop-types'

export const GifGridItem = ( {id, title, url} ) => {

    return (
        <div key={id} className="card animate__animated animate__fadeIn">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

GifGridItem.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    url: PropTypes.string,
}