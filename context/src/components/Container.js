import React, { useContext } from 'react'
import Button from './Button'
import Header from './Header'
import ThemeContext from '../context/ThemeContext'
import Profile from './Profile';


function Container() {
  const data = useContext(ThemeContext);
  return (
    <div className={`app ${data.theme === "dark" ? data.theme : ""}`} >
      <Button />
      <hr />
      <Header />
      <hr />
      <Profile />
    </div>
  )
}

export default Container