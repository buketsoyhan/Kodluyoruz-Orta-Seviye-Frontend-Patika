import React, { useState } from 'react'

function Counter() {
    const [value, setValue] = useState(0);

    const increment = () => {
        setValue(value + 1)
    }
    const decrement = () => {
        setValue(value - 1)
    }
    return (
        <div>
            {value}
            <br/>
            <hr />
            <br/>
            <button onClick={increment}>Inrement</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Counter