import React, { useState } from 'react';

function Cityfun(props) {

    const [CityName,setCityName] = useState('SURAT')
    const ChangeCity = () => {
        setCityName('BARODA')
    }

    return (
        <div>
            <p>{CityName}</p>
            <button onClick={() => ChangeCity()}>Change City</button>
        </div>
    );
}

export default Cityfun;