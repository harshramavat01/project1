import React, {useState} from 'react';

const Counter = () => {
    const [count,setCount] = useState(0);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count<10? count + 1 : count)}>INCREASE</button>
            <button onClick={() => setCount(count === 0? count : count -1)}>DECREASE</button>

        </div>
    );
};

export default Counter;