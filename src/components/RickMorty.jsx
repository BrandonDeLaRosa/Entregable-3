import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Character from './Character';
import LocationInfo from './LocationInfo';
import Search from './Search';

const RickMorty = () => {
    const[location, setLocation] = useState({})
    const [search, setSearch] = useState ("")


    useEffect(() => {
        const randomLocation = Math.floor(Math.random() * 126) +1 //<-- si ponemos 20 solo llegara al 19, con el +1 accedemos del 1 al 20.
        axios.get(`https://rickandmortyapi.com/api/location/${randomLocation}`)
         .then(res => setLocation (res.data))
    },[])

    const userSearch = () => {
        axios.get(`https://rickandmortyapi.com/api/location/${search}`)
        .then(res => setLocation (res.data))

    }

    console.log(location);
    return (
        <div className='pageContent'>
            <Search search={search} userSearch={userSearch} setSearch={setSearch} />
            <LocationInfo location={location}/>
            <div className='character-container'>
                {location.residents?.map(character => (
                 <Character key={character} url={character} />//<-- El arreglo no tiene mas parametros mas que residents, 
                    // entonces se coloca solo el paramtro del map.
                ))
                }
            </div>

        </div>
    );
};

export default RickMorty;