import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Status from './Status';


const Character = ({ url }) => {

    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios.get(url)
            .then(res => setCharacter(res.data))
    })

    console.log(character);
    return (
        <div>
            <li className='character-item'>
                {/* {url} */}
                <div className='imgContent'>
                    <img className='characterImg' src={character.image} alt="characterImg" />
                    <Status character={character}/>
                </div>
                <h1 className='characterName'><b></b>{character.name}</h1> <hr className='nameLine' />
                <div className='aditionalInfo'>
                    <h3 className='characterInfo'><b className='infoTitle'>Origin:</b><br />{character.origin?.name}</h3>
                    <h3 className='characterInfo'><b className='infoTitle'>Breed: </b> <br />{character.species}</h3>
                    <h3 className='characterInfo'><b className='infoTitle'>No. of appeareces:</b><br /> {character.episode?.length}</h3>
                </div>
            </li>  
        </div>
    );
};

export default Character;