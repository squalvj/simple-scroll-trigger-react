import React from 'react'
import { CSSTransition } from "react-transition-group";
import './Fade.scss'
const Fade = props => {
   return (
     <CSSTransition in={props.visible} classNames="fade" timeout={300}>
      {() => (
         <div className="fade">
            {props.children}
         </div>
      )}
     </CSSTransition>
   );
 };

export default Fade