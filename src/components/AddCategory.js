import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('')
    
    const handleInput = (e) =>{
        setInputValue(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(inputValue.trim().length > 2){
            setCategories( categories => [inputValue, ...categories]);
            setInputValue('');
        }
    }
    return (
        <form onSubmit={ handleSubmit }>
            <input type='text' onChange={ handleInput } value={ inputValue } className='input'></input>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
