
import React from "react";
import img  from '../Assets/Captura de pantalla 2024-01-31 150527.png'
import './Avatar.css'
 const Avatar = ({name}) => {
  return (
    <>
    <img src={img} alt={name} className="avatar" ></img>
    
    </>
  )
}

export {Avatar}
