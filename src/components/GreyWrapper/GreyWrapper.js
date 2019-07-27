import React from 'react'
import './GreyWrapper.scss'

const GreyWrapper = props => {
   return (
      <div className="wrapper-grey">
         <div className="container">
            {props.children}
         </div>
      </div>
   )
}

export default GreyWrapper