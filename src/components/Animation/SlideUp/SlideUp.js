import React from 'react'
import { CSSTransition } from "react-transition-group";
import './SlideUp.scss'
const SlideUp = props => {
   console.log(props)
   return (
     <CSSTransition unmountOnExit in={props.visible} classNames="slide-up" timeout={400}>
      {() => (
         <div className="slide-up-wrapper">
            {props.children}
         </div>
      )}
     </CSSTransition>
   );
 };

export default SlideUp