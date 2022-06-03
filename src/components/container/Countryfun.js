import React,{useState} from 'react';

function Countryfun(props) {

    const [CountryName,setCountryName] = useState('INDIA')
    const ChangeCountry = () => {
        setCountryName('UK')
    }

    return (
        <div>
            <p>{CountryName}</p>
            <button onClick={() => ChangeCountry()}>Change Country</button>
        </div>
    );
}

export default Countryfun;