import React, {useEffect, useState} from 'react';

function Timefun(props) {
    const [time,setTime] = useState(new Date());

    const tick =() => {
        setTime(new Date());
    }

    useEffect(() => {
        
        const timeI = setInterval(() => tick(), 1000);

        return() => {
            clearInterval(timeI);
        }
    },[time]);

    return (
        <div>
            <p>{time.toLocaleTimeString()}</p>
        </div>
    );
}

export default Timefun;