import React, { useState } from 'react';

function Counter(props){
    const[count, setCount] = useState(props.initialCount);

    const increment = () => {
        setCount(count + 1);
    };

    const reset = () => {
        setCount(props.initialCount);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Counter;