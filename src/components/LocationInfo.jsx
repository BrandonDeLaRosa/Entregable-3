import React from 'react';

const LocationInfo = ({ location }) => {
    return (
        <div className='location-info'>
            <h2 className='locationCards'><b>Name: </b><br />{location?.name}</h2>
            <h2 className='locationCards'><b>Type: </b><br />{location?.type}</h2>
            <h2 className='locationCards'><b>Dimension: </b><br />{location?.dimension}</h2>
            <h2 className='locationCards'><b>Residents: </b><br />{location?.residents?.length}</h2>
        </div>
    );
};

export default LocationInfo;