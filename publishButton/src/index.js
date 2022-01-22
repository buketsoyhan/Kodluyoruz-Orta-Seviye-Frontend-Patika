import React from 'react'
import styles from './styles.module.css'

export const Button = ( props ) => {

  let temp=styles.default;

  if(props.type ==='primary'){
    temp=styles.primary
  }
  if(props.type ==='dashed'){
    temp=styles.dashed
  }
  if(props.type ==='link'){
    temp=styles.link
  }
  if(props.type ==='text'){
    temp=styles.text
  }

  return (
 <button className={temp} {...props}> {props.text}</button>
  
  )
  }
