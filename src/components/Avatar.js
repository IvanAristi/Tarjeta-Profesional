
import React from "react";
import img  from '../Assets/carretera.png'

 const Avatar = ({name}) => {
  return (
    <>
    <img src={img} alt={name}></img>
    
    </>
  )
}

export {Avatar}
