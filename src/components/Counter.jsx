import React, { useState } from 'react';

const Counter = function () {
    const [count, setCount] = useState(0);
        const [value,setValue] = useState('text');

    function increment () {
        setCount(count+1)
    }


    function decrement () {
        setCount(count-1)
    }
    return (
        <div>
        <h1>{count}</h1>
        <h1>{value}</h1>
        <input
        className='inputField' 
        type = 'text'
        onChange={event=> setValue(event.target.value)}
        
        
        />
        <button className="push" onClick={increment}>Increment+</button>
        <button className="push" onClick={decrement}>Decrement-</button>
        </div>
    )
}

export default Counter;