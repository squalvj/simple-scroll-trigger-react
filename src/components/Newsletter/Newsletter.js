import React from 'react'
import './Newsletter.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import SlideUp from 'components/Animation/SlideUp'

const Newsletter = props => {
   const {
      visible,
      handleClick
   } = props
   return (
      <div className="position-newsletter">
         <SlideUp visible={visible}>
            <div className="wrapper-newsletter">
               <button className="close-newsletter" onClick={handleClick}>
                  <FontAwesomeIcon icon={faTimesCircle} />
               </button>
               <div className="flex f-column">
                     <h2>
                        Get latest updates in web technologies
                     </h2>
                     <p>
                        I write articles related to web technologies, such as design trends, development tools, UI/US case studies and reviews, and more. Sign up to my newsletter to get them all
                     </p>
                     <form className="flex">
                        <input type="email" placeholder="Email address"/>
                        <button className="btn btn-orange" type="submit">Count me in</button>
                     </form>
               </div>
            </div>
         </SlideUp>
      </div>
   )
}

export default Newsletter