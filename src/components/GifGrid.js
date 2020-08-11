import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) =>{



    const {data:images, loading} = useFetchGifs(category);
    console.log(images)

    return(
        <>
            <h4> { category }</h4>
        <div className='grid'>
            
            { loading && <p>Cargando...</p> }
            {
                images.map( img => (
                            <GifGridItem 
                            key = {img.id}
                            {...img}
                            />
                )) 
                    
            }
        </div>
        </>
    )
}