import React from "react";



 const MyInfo = (props) => {
  return (
    <div>
        <address >
        <h1 >{props.name}</h1>
        <h2>{props.profesion}</h2>

        </address>
    </div>
  )
}

export {MyInfo}
