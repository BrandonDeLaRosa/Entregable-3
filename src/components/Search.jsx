import React from 'react';

const Search = ({search, setSearch, userSearch}) => {
    return (
        <div className='input'>
             <input className='inputText' type="text" value={search} onChange={e => setSearch (e.target.value)} placeholder="           Set a number" />
            <button className='button' onClick={userSearch}>Dimension</button>
        </div>
    );
};

export default Search;