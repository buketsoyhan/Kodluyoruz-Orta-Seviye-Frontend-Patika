import React, { useState } from 'react'

export default function InputExample() {
    const [name,setName]=useState("")

    const handleChange=(e)=>{
        setName(e.target.value)
    }
  return (
    <div>
        Please enter a name <br></br>
        <input value={name} onChange={handleChange}/>

        <div>{name}</div>
    </div>
  )
}
