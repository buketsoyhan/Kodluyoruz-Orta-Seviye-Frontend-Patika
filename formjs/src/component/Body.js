import React, { useState, useMemo, useCallback } from 'react'
import Header from './Header'

function Body() {
    const [number, setNumber] = useState(0);
    const data = useMemo(() => {
        return [{ name: "Buket", number }]
    }, [number])
    const increment = useCallback(()=>{
        setNumber((prev)=>prev+1)
    }, [])

    return (
        <div>
            <Header increment={increment}/>
            <hr />
            <h1>{number}</h1>
        </div>
    )
}

export default Body