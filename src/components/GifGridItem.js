import React from 'react'

export const GifGridItem = ({title, url}) =>{
    
    return (
        <li className='grid-item animate__animated animate__backInLeft'> 
            <img src={url} alt={title}/>
            <p>{title}</p>
        </li>
    )
}