import React from 'react'

const ButtonCommon = props => {
   return (
      <button className="btn btn-common" onClick={props.handleClick} type="button">
         {props.children}
      </button>
   )
}

export default ButtonCommon