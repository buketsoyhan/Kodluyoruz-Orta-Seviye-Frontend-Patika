import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

function Button() {
    const data = useContext(ThemeContext);
    console.log(data);
    return (
        <div>Button {data.theme}
        <br/>
        <br/>
        <button onClick={()=>data.setTheme(data.theme==="light" ? "dark" : "light")}>
            Change Theme</button>
        </div>
    )
}

export default Button