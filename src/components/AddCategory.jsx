import React, { useState } from 'react';
import PropTypes from "prop-types";




export const AddCategory = ( {setCategories} ) => {

    const [inputValue, setInputValue] = useState('');

    const handleImputChange = (event) => {
        setInputValue(event.target.value);

        console.log('HandleInputChange Llamado!')
    }

    const handleSubmit = (event) =>{
        event.preventDefault();

        console.log('HandelSubmit!', inputValue );

        if( inputValue.trim().length > 2 ){ 
            setCategories( categ =>[inputValue, ...categ]);
            setInputValue('');
        }
    }

    return (
        <form className="addCategory animate__animated animate__zoomIn" onSubmit={ handleSubmit }>
            <h3>Buscar categoria: </h3>
            <p> { inputValue } </p>
            <input 
                type="text"
                value={ inputValue }
                placeholder="¿Sobre que tema quieres que busque GIFs?"
                onChange= { handleImputChange }
                className="input-category"
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}
