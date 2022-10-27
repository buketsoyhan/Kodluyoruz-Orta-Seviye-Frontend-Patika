import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const [data, setData] = useState(0);
    useEffect(()=>{
        console.log("State is changed")
    })
    useEffect(()=>{
        console.log("Component mounted");
    },[])
    return (
        <div>
            <div>{data}</div>
            <button onClick={() => { setData(data + 1) }}>Click Me!</button>
        </div>
    )
}
