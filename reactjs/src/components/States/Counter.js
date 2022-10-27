import React, { useState } from 'react'

export default function Counter() {
    let [number, setNumber]=useState(0)
  return (
    <div>

        <h2>{number}</h2>
        <button onClick={()=>{setNumber(number+1)}}>Increase</button>
        <button onClick={()=>{setNumber(number-1)}}>Decrease</button>
    </div>
  )
}
