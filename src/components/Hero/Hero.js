import React from 'react'
import './Hero.scss'

const Hero = props => {
   return (
      <div className="wrapper-hero">
         <div className="container f-column flex j-center a-center">
            {props.children}   
         </div>
      </div>
   )
}

export default Hero