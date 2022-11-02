import React, { useState } from 'react'
import { send } from '../socketApi';
import '../App.css';
function Palette() {
    const [color, setColor] = useState("#000")
    return (
        <div className='palet'>
            <input type="color" value={color}
                onChange={(e) => setColor(e.target.value)}
            />

            <button onClick={() => send(color)} >Click</button>
        </div>
    )
}

export default Palette