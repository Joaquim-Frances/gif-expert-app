import React, { useState } from 'react';
import PropTypes from "prop-types";




export const AddCategory = ( {setCategories} ) => {

    const [inputValue, setInputValue] = useState('');

    const handleImputChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(inputValue.trim().length > 2){ 
            setCategories( categ =>[inputValue, ...categ]);
            setInputValue('');
        }
    }

    return (
        <form className="addCategory" onSubmit={ handleSubmit }>
            <h3>Add Category</h3>
            <input 
                type="text"
                value={ inputValue }
                placeholder="Entrar datos..."
                onChange= { handleImputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}
