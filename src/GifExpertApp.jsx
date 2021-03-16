import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = ({ defaultCategories = [] }) => {

   
    const [categories, setCategories] = useState( defaultCategories );


    return (
        <div className="animate__animated animate__fadeInRightBig">
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>
            <ol>
                { 
                    categories.map( category => {
                        return(
                            <GifGrid 
                                key = { category }
                                category={ category }
                        />)
                    })
                }
            </ol>
        </div>

    )
};

export default GifExpertApp;