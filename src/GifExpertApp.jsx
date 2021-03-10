import React, {useState} from 'react';


const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    const handleAdd = () =>{
        setCategories([...categories, 'Dr.Slump', 'My Hero Academy']);
    }

    return (
        <div>
            <h2>Gif Expert App</h2>
            <hr/>

            <button onClick={ handleAdd }>Agregar</button>
            <input type="text" name="titulo"  id="titulo"/>
            <br/>
            <ol>
                { 
                    categories.map( category => {
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>
        </div>

    )
};

export default GifExpertApp;