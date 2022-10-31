import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

function Header() {
    const data = useContext(ThemeContext);

  return (
    <div>Header {data.theme}</div>
  )
}

export default Header