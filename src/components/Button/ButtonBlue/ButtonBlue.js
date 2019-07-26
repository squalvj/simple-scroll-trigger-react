import React from 'react'

const ButtonBlue = props => {
   return (
      <button className="btn btn-blue" onClick={props.handleClick} type="button">
         {props.children}
      </button>
   )
}

export default ButtonBlue