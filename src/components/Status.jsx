import React from 'react';

const Status = ({character}) => {

    const status = character.status

        if (status === "Dead"){
            return (
                <>
                    <h3 className='characterStatus'>
                        <b> <div className='dead status'></div></b>
                        {character.status}
                        </h3>
                </>
            )
            
        } else if (status === "Alive"){
            return (
                <>
                    <h3 className='characterStatus'>
                    <b> <div className='alive status'></div></b>
                    {character.status}
                    </h3>
                </>
            )
        }else if(status === "unknown"){
            return (
                <>
                    <h3 className='characterStatus'>
                        <b> <div className='unknown status'></div></b>
                        {character.status}
                        </h3>
                </>
            )
        }

};
export default Status; 


// https://www.youtube.com/watch?v=IYCa1F-OWmk&t=880s
// 